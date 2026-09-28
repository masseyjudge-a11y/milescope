/* GET /api/config -> { supabaseUrl, supabaseAnonKey } or {}

   Hands the browser the Supabase project URL and anon (public) key from
   Vercel env vars, so they live in Vercel settings instead of the code.
   Both are meant to be public: what a signed-in user can read or write is
   enforced by row-level security on the table (see supabase/schema.sql).
   Env: SUPABASE_URL, SUPABASE_ANON_KEY. Without them, accounts stay off. */

function isAdminKey(key) {
  if (/^sb_secret_/i.test(key)) return true;
  const parts = key.split(".");
  if (parts.length === 3) {
    try { return JSON.parse(Buffer.from(parts[1], "base64url").toString()).role === "service_role"; } catch (e) { return false; }
  }
  return false;
}

export async function GET() {
  const url = process.env.SUPABASE_URL || process.env.supabase_url || "";
  const key = process.env.SUPABASE_ANON_KEY || process.env.supabase_anon_key || "";
  // Never hand out an admin key: a secret key (sb_secret_...) or a legacy
  // service_role JWT bypasses row-level security. If one was pasted here by
  // mistake, accounts stay off rather than exposing it.
  if (isAdminKey(key)) return new Response(JSON.stringify({ error: "secret_key_configured" }), {
    status: 500, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });
  const body = url && key ? { supabaseUrl: url, supabaseAnonKey: key } : {};
  return new Response(JSON.stringify(body), {
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "public, max-age=300" }
  });
}
