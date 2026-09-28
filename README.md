# Milescope

See where your credit card points can take you. Pick a home airport, enter your
balances, and Milescope shows every route you can book, the cheapest program to
book it through, and exactly which points to transfer.

## What's in here

- `index.html`: the whole app (no build step).
- `api/availability.mjs`: Vercel serverless function that fetches live award
  seats from [seats.aero](https://seats.aero) so the API key stays server-side.
- `api/assistant.mjs`: the assistant's backend (Claude API).
- `vendor/`: Thinking Orbs and Bot Avatars from [libraries.dev](https://libraries.dev), bundled without React.

## Deploy (Vercel)

1. Import this repo in Vercel (Framework preset: **Other**, no build command).
2. Settings → Environment Variables → add `SEATS_AERO_API_KEY` with a seats.aero
   Pro API key. Without it the site still works; the live-seat check just asks
   visitors to add their own key in Settings.
3. Optional: add `ANTHROPIC_API_KEY` (a Claude API key) to switch on Miles, the
   assistant in the bottom corner. Without it the panel says it isn't switched
   on yet. `ASSISTANT_MODEL` overrides the model (default `claude-opus-5`).
4. Every push to `main` redeploys.

## Keeping the data current

These live in `index.html` and need a periodic check:

- `BONUSES`: active transfer bonuses (they expire automatically by end date).
- `TRANSFERS`: which card currency transfers to which airline program, and at what ratio.
- `ROUTES`: nonstop carriers from the hub airports.
- `PRICES`: published-chart saver estimates; programs marked `dyn` price dynamically.

Award prices are estimates. Always confirm on the airline's site before
transferring points; transfers can't be undone.
