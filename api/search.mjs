/* GET /api/search?q=somewhere+warm+in+march,+business,+two+of+us,+under+80k
   -> { filters: {...}, vibes: {...}, confidence: {...} }

   Plain-English trip search. Jev turns the sentence into typed arguments;
   the browser does all filtering and ranking with its own data.

   One TypeSafe request, every question asked in parallel over the same state:
     region, cabin, trip, travelers   choice  (closed sets, incl. "not stated")
     budget                           choice  among numbers regex-found in the query
     nonstop                          noul
     vibe_*                           noul    one per trip style (warm, beach, ...)
   Code applies confidence thresholds; low-confidence fields are dropped
   rather than guessed. Env: TYPESAFE_API_KEY. */

const TS_URL = "https://api.typesafe.ai/v1/systemone";
const MODEL = "jev-latest";
const ANY = "not_stated";

const REGIONS = {
  domestic: "The United States or Canada (domestic North America)",
  europe: "Europe", asia: "Asia (East, Southeast or South Asia)", middle_east: "The Middle East",
  latam: "Mexico, the Caribbean, Central or South America", oceania: "Australia, New Zealand or the Pacific",
  africa: "Africa", [ANY]: "No region or destination area is stated or implied"
};
const VIBES = {
  warm: "somewhere warm or sunny", beach: "beaches or the ocean", city: "a big city",
  food: "food, restaurants or cuisine", culture: "history, museums, architecture or culture",
  nature: "nature, hiking, mountains or the outdoors", snow: "snow, skiing or winter scenery",
  nightlife: "nightlife, bars or partying"
};
const WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, couple: 2, pair: 2 };

const json = (body, status = 200, extra = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", ...extra } });

/* candidate budgets: "80k", "80,000", "80000", "120 thousand" */
function findBudgets(q) {
  const out = [];
  for (const m of q.matchAll(/\b\d{1,3}(?:[,.]\d{3})+\b|\b\d{2,6}\s?(?:k|K|thousand)\b|\b\d{4,7}\b/g)) {
    const v = m[0].trim(); if (!out.includes(v)) out.push(v);
  }
  return out.slice(0, 10);
}
function normalizeBudget(span) {
  const s = span.toLowerCase().replace(/\s/g, "");
  const n = parseFloat(s.replace(/,/g, ""));
  if (isNaN(n)) return null;
  const v = /k|thousand/.test(s) ? n * 1000 : n;
  return v >= 3000 && v <= 2000000 ? Math.round(v) : null;
}

function questions(budgets) {
  const q = {
    region: { type: "choice", instructions: "Which part of the world does the traveler want to fly to?", criteria: REGIONS },
    cabin: { type: "choice", instructions: "Which cabin does the traveler want?",
      criteria: { economy: "Economy or coach", business: "Business class, first class, lie-flat or premium seats", [ANY]: "Cabin is not mentioned" } },
    trip: { type: "choice", instructions: "Is the traveler asking for a one-way or a round trip?",
      criteria: { ow: "One-way", rt: "Round trip, return, or there-and-back", [ANY]: "Not stated" } },
    travelers: { type: "choice", instructions: "How many people are traveling in total, including the person asking?",
      criteria: { "1": "Just the traveler, or 'I'/'me' only", "2": "Two people, e.g. 'my partner and I', 'two of us', 'a couple'",
        "3": "Three people", "4": "Four people, e.g. 'family of four'", "5": "Five people", "6": "Six people", [ANY]: "The number of travelers is not stated" } },
    nonstop: { type: "noul", instructions: "Does the traveler require or clearly prefer nonstop (direct) flights?" }
  };
  if (budgets.length) {
    q.budget = { type: "choice", instructions: "Which of these numbers is the traveler's maximum budget in points or miles for the trip?",
      criteria: { ...Object.fromEntries(budgets.map((b) => [b, null])), [ANY]: "None of these is a points or miles budget" } };
  }
  for (const [id, text] of Object.entries(VIBES)) {
    q[`vibe_${id}`] = { type: "noul", instructions: `Does the traveler want ${text}?` };
  }
  return q;
}

export async function GET(request) {
  const key = process.env.TYPESAFE_API_KEY || "";
  const url = new URL(request.url);
  const query = (url.searchParams.get("q") || "").trim().slice(0, 300);
  if (!key) return json({ error: "no_key" }, 501, { "cache-control": "no-store" });
  if (query.length < 3) return json({ error: "bad_request" }, 400);

  const budgets = findBudgets(query);
  let res;
  try {
    res = await fetch(TS_URL, {
      method: "POST",
      headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
      body: JSON.stringify({ model: MODEL, state: { traveler_request: query }, questions: questions(budgets) }),
      signal: AbortSignal.timeout(12000)
    });
  } catch { return json({ error: "upstream_unreachable" }, 502); }
  if (res.status === 401) return json({ error: "bad_key" }, 401);
  if (res.status === 429 || res.status === 529) return json({ error: "busy" }, 503);
  if (!res.ok) return json({ error: `upstream_${res.status}` }, 502);
  const a = (await res.json()).answers || {};

  /* policy: act only on confident, stated answers */
  const pick = (id, min = 0.6) => a[id] && a[id].choice !== ANY && (a[id].confidence ?? 0) >= min ? a[id].choice : null;
  const filters = {
    region: pick("region"),
    cabin: pick("cabin"),
    trip: pick("trip"),
    pax: pick("travelers") ? +pick("travelers") : null,
    nonstop: (a.nonstop?.noul ?? 0) >= 0.7,
    maxPts: pick("budget", 0.55) ? normalizeBudget(pick("budget", 0.55)) : null
  };
  const vibes = {};
  for (const id of Object.keys(VIBES)) {
    const p = a[`vibe_${id}`]?.noul ?? 0;
    if (p >= 0.5) vibes[id] = +p.toFixed(2);
  }
  return json(
    { query, filters, vibes, confidence: Object.fromEntries(["region", "cabin", "trip", "travelers", "budget"].filter((k) => a[k]).map((k) => [k, +(a[k].confidence ?? 0).toFixed(2)])) },
    200,
    { "cache-control": "public, s-maxage=86400" }
  );
}
