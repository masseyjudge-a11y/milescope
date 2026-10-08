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


## Keeping the data current

These live in `index.html` and need a periodic check:

- `BONUSES`: active transfer bonuses (they expire automatically by end date).
- `TRANSFERS`: which card currency transfers to which airline program, and at what ratio.
- `ROUTES`: nonstop carriers from the hub airports.
- `PRICES`: published-chart saver estimates; programs marked `dyn` price dynamically.

Award prices are estimates. Always confirm on the airline's site before
transferring points; transfers can't be undone.
