# Milescope

See where your credit card points can take you. Pick a home airport, enter your
balances, and Milescope shows every route you can book, the cheapest program to
book it through, and exactly which points to transfer.

## What's in here

- `index.html`: the whole app (no build step).
- `api/availability.mjs`: Vercel serverless function that fetches live award
  seats from [seats.aero](https://seats.aero) so the API key stays server-side.
- `api/assistant.mjs`: the assistant's backend (Groq free tier, or Claude).
- `vendor/`: Thinking Orbs and Bot Avatars from [libraries.dev](https://libraries.dev), bundled without React.

## Deploy (Vercel)

1. Import this repo in Vercel (Framework preset: **Other**, no build command).
2. Settings → Environment Variables → add `SEATS_AERO_API_KEY` with a seats.aero
   Pro API key. Without it the site still works; the live-seat check just asks
   visitors to add their own key in Settings.
3. Optional: switch on Miles, the assistant in the bottom corner, by adding
   `GROQ_API_KEY` (free at console.groq.com; about 100 questions a day on the
   free tier, model `openai/gpt-oss-120b`, override with `GROQ_MODEL`). Or add
   `ANTHROPIC_API_KEY` to use Claude instead (paid per question; used only when
   there's no Groq key). Without either, the panel says it isn't switched on yet.
4. Optional: accounts (save wallet, cards, trips and home airport across
   devices) with Supabase. Create a project at supabase.com, run
   `supabase/schema.sql` in its SQL Editor, then add `SUPABASE_URL` and
   `SUPABASE_ANON_KEY` (Project Settings → API) in Vercel. In Supabase →
   Authentication → URL Configuration, set the Site URL to the live site so
   confirmation and password-reset links come back here. Without these the
   Sign in button stays hidden and everything is saved on the device only.
5. Every push to `main` redeploys.

## Keeping the data current

These live in `index.html` and need a periodic check:

- `BONUSES`: active transfer bonuses (they expire automatically by end date).
- `TRANSFERS`: which card currency transfers to which airline program, and at what ratio.
- `ROUTES`: nonstop carriers from the hub airports.
- `PRICES`: published-chart saver estimates; programs marked `dyn` price dynamically.

Award prices are estimates. Always confirm on the airline's site before
transferring points; transfers can't be undone.
