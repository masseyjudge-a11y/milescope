/* GET /api/config -> { supabaseUrl, supabaseAnonKey } or {}

   Hands the browser the Supabase project URL and anon (public) key from
   Vercel env vars, so they live in Vercel settings instead of the code.
   Both are meant to be public: what a signed-in user can read or write is
   enforced by row-level security on the table (see supabase/schema.sql).
   Env: SUPABASE_URL, SUPABASE_ANON_KEY. Without them, accounts stay off. */

export async function GET() {
  const url = process.env.SUPABASE_URL || process.env.supabase_url || "";
  const key = process.env.SUPABASE_ANON_KEY || process.env.supabase_anon_key || "";
  const body = url && key ? { supabaseUrl: url, supabaseAnonKey: key } : {};
  return new Response(JSON.stringify(body), {
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "public, max-age=300" }
  });
}
