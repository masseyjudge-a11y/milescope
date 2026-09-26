/* GET /api/bonuses -> { updated, bonuses: [...], review: [...] }

   Keeps Milescope's transfer-bonus list current without anyone editing code.

   Pipeline (code owns the workflow; Jev only makes narrow judgments):
     1. Fetch points-blog RSS feeds, keep recent posts whose title/summary
        mention a transfer + a bonus + a percentage.            (code)
     2. Find every candidate percentage and date in each post.  (regex)
     3. One TypeSafe request per post asks, in parallel:        (Jev)
          is_bonus  noul    is this a live bank→airline transfer bonus?
          from      choice  which card currency?
          to_*      noul    one per airline program: is it a destination?
          pct       choice  which of the found percentages is the bonus?
          ends      choice  which of the found dates is the end date?
        pct/ends only ever select among regex-found spans, so the model
        can't invent a number; code copies and normalizes the pick.
     4. Policy: thresholds + a check that the currency really transfers to
        that program (TRANSFERS below). Confident + valid -> "bonuses";
        anything else -> "review", never applied to prices.   (code)

   Env: TYPESAFE_API_KEY (server-side only). Without it the endpoint returns
   {error:"no_key"} and the site keeps its built-in bonus list.
   Cached at the edge for 6 hours, so the model runs a few times a day. */

const TS_URL = "https://api.typesafe.ai/v1/systemone";
const MODEL = "jev-latest";
const FEEDS = [
  { name: "Frequent Miler", url: "https://frequentmiler.com/feed/" },
  { name: "Doctor of Credit", url: "https://doctorofcredit.com/feed/" },
  { name: "One Mile at a Time", url: "https://onemileatatime.com/feed/" },
  { name: "The Points Guy", url: "https://thepointsguy.com/feed/" }
];
const MAX_POSTS = 12;          // model calls per refresh
const MAX_AGE_DAYS = 21;       // older posts are ignored

/* Mirrors TRANSFERS in index.html: which card currency can move into which
   program. Used to reject extractions that describe an impossible transfer. */
const TRANSFERS = {
  aa: ["citi_typ"], atmos: ["bilt"], ba: ["amex_mr","chase_ur","capone","bilt","wells_fargo"],
  iberia: ["amex_mr","chase_ur","bilt","wells_fargo"], aerlingus: ["amex_mr","chase_ur","bilt","wells_fargo"],
  qatar: ["amex_mr","citi_typ","capone","bilt"], cathay: ["amex_mr","citi_typ","capone","bilt"], finnair: ["capone"],
  jal: ["citi_typ","capone","bilt"], qantas: ["amex_mr","citi_typ","capone"],
  flyingblue: ["chase_ur","amex_mr","citi_typ","capone","bilt","wells_fargo"], delta: ["amex_mr"],
  virgin: ["amex_mr","chase_ur","citi_typ","bilt"], ana: ["amex_mr"], aeroplan: ["amex_mr","chase_ur","capone","bilt"],
  united: ["chase_ur","bilt"], lifemiles: ["amex_mr","citi_typ","capone","bilt","wells_fargo"], eva: ["citi_typ","capone"],
  krisflyer: ["amex_mr","chase_ur","citi_typ","capone"], turkish: ["citi_typ","capone","bilt"], tap: ["capone","bilt"],
  emirates: ["amex_mr","chase_ur","citi_typ","capone","bilt"], etihad: ["amex_mr","citi_typ","capone","bilt"],
  aeromexico: ["amex_mr","capone"], jetblue: ["amex_mr","chase_ur","citi_typ","capone"]
};
const CURRENCIES = {
  chase_ur: "Chase Ultimate Rewards points", amex_mr: "American Express Membership Rewards points",
  citi_typ: "Citi ThankYou points", capone: "Capital One miles", bilt: "Bilt Rewards points",
  wells_fargo: "Wells Fargo Rewards points"
};
const PROGRAMS = {
  aa: "American Airlines AAdvantage", atmos: "Alaska Airlines Atmos Rewards (formerly Mileage Plan)",
  ba: "British Airways Executive Club Avios", iberia: "Iberia Plus / Iberia Club Avios", aerlingus: "Aer Lingus AerClub Avios",
  qatar: "Qatar Airways Privilege Club Avios", cathay: "Cathay Pacific Asia Miles", finnair: "Finnair Plus",
  jal: "Japan Airlines JAL Mileage Bank", qantas: "Qantas Frequent Flyer", flyingblue: "Air France-KLM Flying Blue",
  delta: "Delta SkyMiles", virgin: "Virgin Atlantic Flying Club", ana: "ANA Mileage Club", aeroplan: "Air Canada Aeroplan",
  united: "United MileagePlus", lifemiles: "Avianca LifeMiles", eva: "EVA Air Infinity MileageLands",
  krisflyer: "Singapore Airlines KrisFlyer", turkish: "Turkish Airlines Miles&Smiles", tap: "TAP Air Portugal Miles&Go",
  emirates: "Emirates Skywards", etihad: "Etihad Guest", aeromexico: "Aeroméxico Rewards (Club Premier)", jetblue: "JetBlue TrueBlue"
};
const NONE = "none";

/* thresholds: conservative, because a wrong bonus changes prices users act on */
const T = { isBonus: 0.8, from: 0.7, to: 0.75, pct: 0.6, ends: 0.5 };

const json = (body, status = 200, extra = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", ...extra } });

/* ---------------- RSS (code) ---------------- */
const decode = (s) => s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
  .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;|&apos;/g, "'").replace(/&nbsp;/g, " ");
const strip = (s) => decode(s).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const tag = (xml, name) => { const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i")); return m ? m[1] : ""; };

async function fetchFeed(feed) {
  try {
    const r = await fetch(feed.url, { headers: { "user-agent": "Milescope/1.0 (+https://milescope.vercel.app)" }, signal: AbortSignal.timeout(8000) });
    if (!r.ok) return [];
    const xml = await r.text();
    return (xml.match(/<item[\s\S]*?<\/item>/gi) || []).map((it) => ({
      source: feed.name,
      title: strip(tag(it, "title")),
      link: strip(tag(it, "link")),
      published: new Date(strip(tag(it, "pubDate"))).toISOString(),
      text: strip(tag(it, "content:encoded") || tag(it, "description")).slice(0, 1800)
    }));
  } catch { return []; }
}

/* cheap pre-filter so the model only sees plausible posts */
const LOOKS_LIKE_BONUS = (p) => {
  const t = `${p.title} ${p.text.slice(0, 600)}`;
  return /transfer/i.test(t) && /bonus/i.test(t) && /\d{1,3}\s?%/.test(t);
};

/* ---------------- candidate finders (regex, tuned to over-find) ---------------- */
function findPercents(text) {
  const out = [];
  for (const m of text.matchAll(/\b(\d{1,3})\s?%/g)) {
    const v = `${+m[1]}%`;
    if (+m[1] >= 5 && +m[1] <= 200 && !out.includes(v)) out.push(v);
  }
  return out.slice(0, 20);
}
const MONTHS = "(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\\.?";
function findDates(text) {
  const re = new RegExp(`\\b${MONTHS}\\s+\\d{1,2}(?:st|nd|rd|th)?(?:,?\\s+\\d{4})?|\\b\\d{1,2}/\\d{1,2}(?:/\\d{2,4})?\\b`, "gi");
  const out = [];
  for (const m of text.matchAll(re)) { const v = m[0].trim(); if (!out.includes(v)) out.push(v); }
  return out.slice(0, 25);
}
/* normalize a picked date span to YYYY-MM-DD, inferring the year from the post date */
function normalizeDate(span, publishedIso) {
  const pub = new Date(publishedIso);
  let y, mo, d;
  const num = span.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?$/);
  if (num) { mo = +num[1] - 1; d = +num[2]; y = num[3] ? (+num[3] < 100 ? 2000 + +num[3] : +num[3]) : null; }
  else {
    const parsed = new Date(span.replace(/(\d)(st|nd|rd|th)/, "$1").replace(".", "") + (/\d{4}/.test(span) ? "" : ` ${pub.getUTCFullYear()}`));
    if (isNaN(parsed)) return null;
    y = /\d{4}/.test(span) ? parsed.getFullYear() : null; mo = parsed.getMonth(); d = parsed.getDate();
  }
  if (y == null) { y = pub.getUTCFullYear(); if (new Date(Date.UTC(y, mo, d)) < pub - 7 * 86400000) y += 1; }
  const out = new Date(Date.UTC(y, mo, d));
  return isNaN(out) ? null : out.toISOString().slice(0, 10);
}

/* ---------------- the TypeSafe request (Jev) ---------------- */
function buildQuestions(post, percents, dates) {
  const q = {
    is_bonus: {
      type: "noul",
      instructions: "Does this post announce a transfer bonus that is currently running or starting soon: extra airline miles when converting points from a bank or credit card rewards program into an airline loyalty program?",
      criteria: {
        true: "It announces or describes a specific, current or upcoming limited-time bonus on transferring card points to an airline program.",
        false: "It is about something else: a card sign-up offer, a hotel-only bonus, a purchase-miles sale, an expired bonus, a general guide, or a rumor."
      }
    },
    from: {
      type: "choice",
      instructions: "Whose points is the transfer bonus for, i.e. which card rewards currency is being transferred out?",
      criteria: { ...CURRENCIES, [NONE]: "None of these, or no single transferable card currency is named." }
    },
    pct: {
      type: "choice",
      instructions: "Which of these percentages is the size of the transfer bonus itself (the extra miles you receive)?",
      criteria: { ...Object.fromEntries(percents.map((p) => [p, null])), [NONE]: "None of these is the transfer bonus amount." }
    }
  };
  if (dates.length) {
    q.ends = {
      type: "choice",
      instructions: "Which of these dates is the last day the transfer bonus is available (its end or expiration date)?",
      criteria: { ...Object.fromEntries(dates.map((d) => [d, null])), [NONE]: "The end date is not given among these." }
    };
  }
  for (const [id, name] of Object.entries(PROGRAMS)) {
    q[`to_${id}`] = {
      type: "noul",
      instructions: `Is ${name} one of the airline programs that receives the bonus when points are transferred into it, according to this post?`
    };
  }
  return q;
}

async function askJev(key, post, questions) {
  const body = JSON.stringify({ model: MODEL, state: { source: post.source, title: post.title, published: post.published, text: post.text }, questions });
  for (let attempt = 0; attempt < 3; attempt++) {
    const r = await fetch(TS_URL, {
      method: "POST",
      headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
      body, signal: AbortSignal.timeout(20000)
    });
    if (r.status === 429 || r.status === 529) { await new Promise((s) => setTimeout(s, 600 * 2 ** attempt)); continue; }
    if (!r.ok) throw Object.assign(new Error(`typesafe_${r.status}`), { status: r.status });
    return r.json();
  }
  throw new Error("typesafe_busy");
}

/* ---------------- policy (code) ---------------- */
function decide(post, a, dates) {
  const is = a.is_bonus?.noul ?? 0;
  const from = a.from?.choice, fromConf = a.from?.confidence ?? 0;
  const pctPick = a.pct?.choice, pctConf = a.pct?.confidence ?? 0;
  const to = Object.keys(PROGRAMS).filter((id) => (a[`to_${id}`]?.noul ?? 0) >= T.to);
  const valid = to.filter((id) => from && TRANSFERS[id]?.includes(from));
  const endSpan = a.ends && a.ends.choice !== NONE && (a.ends.confidence ?? 0) >= T.ends ? a.ends.choice : null;
  const ends = endSpan ? normalizeDate(endSpan, post.published) : null;
  const pct = pctPick && pctPick !== NONE ? parseInt(pctPick, 10) : null;

  const record = {
    from, to: valid, pct, ends,
    endsInferred: !ends,
    source: post.source, title: post.title, link: post.link, published: post.published,
    signals: { is_bonus: +is.toFixed(2), from: +fromConf.toFixed(2), pct: +pctConf.toFixed(2),
      to: Object.fromEntries(to.map((id) => [id, +(a[`to_${id}`].noul).toFixed(2)])) }
  };
  const reasons = [];
  if (is < T.isBonus) reasons.push("not clearly a live transfer bonus");
  if (!from || from === NONE || fromConf < T.from) reasons.push("card currency unclear");
  if (!pct || pctConf < T.pct) reasons.push("bonus size unclear");
  if (!valid.length) reasons.push(to.length ? "destination isn't a known partner of that currency" : "no destination program");
  return reasons.length ? { ok: false, record: { ...record, reasons } } : { ok: true, record };
}

export async function GET() {
  const key = process.env.TYPESAFE_API_KEY || "";
  if (!key) return json({ error: "no_key" }, 501, { "cache-control": "no-store" });

  const cutoff = Date.now() - MAX_AGE_DAYS * 86400000;
  const posts = (await Promise.all(FEEDS.map(fetchFeed))).flat()
    .filter((p) => p.title && Date.parse(p.published) > cutoff && LOOKS_LIKE_BONUS(p))
    .sort((a, b) => Date.parse(b.published) - Date.parse(a.published));
  const seen = new Set(), candidates = [];
  for (const p of posts) { const k = p.title.toLowerCase(); if (!seen.has(k)) { seen.add(k); candidates.push(p); } }

  const bonuses = [], review = [];
  let usage = 0, failures = 0;
  await Promise.all(candidates.slice(0, MAX_POSTS).map(async (post) => {
    const blob = `${post.title}. ${post.text}`;
    const percents = findPercents(blob);
    if (!percents.length) return;
    const dates = findDates(blob);
    try {
      const res = await askJev(key, post, buildQuestions(post, percents, dates));
      usage += res.usage?.input_tokens || 0;
      const d = decide(post, res.answers || {}, dates);
      (d.ok ? bonuses : review).push(d.record);
    } catch (e) {
      failures++;
      if (e.status === 401) throw e;
    }
  })).catch((e) => { if (e.status === 401) failures = -1; });
  if (failures === -1) return json({ error: "bad_key" }, 401, { "cache-control": "no-store" });

  /* expire: explicit end date, else 21 days after the post (shown as "ends ~") */
  const now = Date.now();
  const live = bonuses.map((b) => ({
    ...b, ends: b.ends || new Date(Date.parse(b.published) + MAX_AGE_DAYS * 86400000).toISOString().slice(0, 10)
  })).filter((b) => Date.parse(b.ends + "T23:59:59Z") >= now);

  return json(
    { updated: new Date().toISOString(), model: MODEL, checked: Math.min(candidates.length, MAX_POSTS), failures, inputTokens: usage, bonuses: live, review },
    200,
    { "cache-control": "public, s-maxage=21600, stale-while-revalidate=86400" }
  );
}
