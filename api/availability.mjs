/* GET /api/availability?origin=SEA&dest=HND&cabin=business
   GET /api/availability?ping=1   -> { configured: true|false }

   Proxies seats.aero's Partner API "cached search" so the browser never has
   to call seats.aero itself (it doesn't allow cross-origin requests) and a
   site-wide key never ships to the client.

   Key resolution, per request:
     1. SEATS_AERO_API_KEY env var on the Vercel project (site owner's key), else
     2. an `x-seats-key` header from a visitor who pasted their own key in
        Settings. It's used for this one upstream call and never stored or logged.

   Responses are cached at Vercel's edge for 2 hours per origin/dest/cabin, which
   keeps a single Pro key well inside seats.aero's daily request limit. */

const UPSTREAM = "https://seats.aero/partnerapi/search";
const CABINS = { economy: "Y", premium: "W", business: "J", first: "F" };
const PROGRAM_NAMES = {
  aeroplan: "Aeroplan", united: "United", american: "AAdvantage", alaska: "Atmos (Alaska)",
  delta: "Delta", virginatlantic: "Virgin Atlantic", flyingblue: "Flying Blue", lifemiles: "LifeMiles",
  emirates: "Emirates", qatar: "Qatar Avios", etihad: "Etihad", velocity: "Velocity", qantas: "Qantas",
  eurobonus: "SAS EuroBonus", smiles: "Smiles", jetblue: "JetBlue", turkish: "Turkish", singapore: "KrisFlyer",
  connectmiles: "ConnectMiles", aeromexico: "Aeroméxico", finnair: "Finnair", lufthansa: "Miles & More",
  ethiopian: "ShebaMiles", saudia: "Saudia", azul: "Azul"
};

const json = (body, status = 200, extra = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...extra }
  });

const iata = (v) => (typeof v === "string" && /^[A-Z]{3}$/.test(v.toUpperCase()) ? v.toUpperCase() : null);
const ymd = (d) => d.toISOString().slice(0, 10);

export async function GET(request) {
  const url = new URL(request.url);
  const serverKey = process.env.SEATS_AERO_API_KEY || "";

  if (url.searchParams.has("ping")) {
    return json({ configured: Boolean(serverKey) }, 200, { "cache-control": "no-store" });
  }

  const origin = iata(url.searchParams.get("origin"));
  const dest = iata(url.searchParams.get("dest"));
  const cabinName = (url.searchParams.get("cabin") || "economy").toLowerCase();
  const letter = CABINS[cabinName];
  if (!origin || !dest || !letter) return json({ error: "bad_request" }, 400);

  const visitorKey = request.headers.get("x-seats-key") || "";
  const key = serverKey || visitorKey;
  if (!key) return json({ error: "no_key" }, 501, { "cache-control": "no-store" });

  const now = new Date();
  const start = new Date(now.getTime() + 2 * 86400000);
  const end = new Date(now.getTime() + 60 * 86400000);
  const q = new URLSearchParams({
    origin_airport: origin,
    destination_airport: dest,
    cabin: cabinName,
    start_date: ymd(start),
    end_date: ymd(end),
    take: "500",
    order_by: "lowest_mileage"
  });

  let upstream;
  try {
    upstream = await fetch(`${UPSTREAM}?${q}`, {
      headers: { "Partner-Authorization": key, accept: "application/json" },
      signal: AbortSignal.timeout(12000)
    });
  } catch {
    return json({ error: "upstream_unreachable" }, 502);
  }
  if (upstream.status === 401 || upstream.status === 403) return json({ error: "bad_key" }, 401);
  if (upstream.status === 429) return json({ error: "rate_limited" }, 429);
  if (!upstream.ok) return json({ error: `upstream_${upstream.status}` }, 502);

  const body = await upstream.json().catch(() => ({}));
  const rows = Array.isArray(body.data) ? body.data : [];
  let newest = 0;

  const items = rows
    .filter((r) => r[`${letter}Available`])
    .map((r) => {
      const program = String(r.Source || (r.Route && r.Route.Source) || "").toLowerCase();
      const updated = Date.parse(r.UpdatedAt || r.AvailabilityUpdatedAt || "") || 0;
      if (updated > newest) newest = updated;
      return {
        date: String(r.Date || r.ParsedDate || "").slice(0, 10),
        program,
        programName: PROGRAM_NAMES[program] || program,
        cost: parseInt(r[`${letter}MileageCost`], 10) || null,
        seats: parseInt(r[`${letter}RemainingSeats`], 10) || null,
        direct: Boolean(r[`${letter}Direct`]),
        airlines: String(r[`${letter}Airlines`] || "")
      };
    })
    .filter((it) => it.date)
    .sort((a, b) => (a.cost || 9e9) - (b.cost || 9e9) || a.date.localeCompare(b.date))
    .slice(0, 40);

  return json(
    { origin, dest, cabin: cabinName, updated: newest ? new Date(newest).toISOString() : null, items },
    200,
    // Only share the edge cache for the site-wide key; a visitor's own key stays private.
    { "cache-control": serverKey ? "public, s-maxage=7200, stale-while-revalidate=86400" : "private, no-store" }
  );
}
