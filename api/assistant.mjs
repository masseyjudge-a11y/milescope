/* POST /api/assistant  { messages: [{role, content}], context: {...} }
   -> { reply: "..." }

   The side-panel assistant. Claude answers short questions about points in
   general and about the visitor's own wallet, using the snapshot of the
   app's data the browser sends along (balances, the routes from their home
   airport and what each costs them, transfer partners, live bonuses). Keys
   stay server-side.

   Provider, first key found wins:
     GROQ_API_KEY       Groq's free tier (default model openai/gpt-oss-120b,
                        override with GROQ_MODEL). Free, with daily limits.
     ANTHROPIC_API_KEY  Claude (default claude-opus-5, override with
                        ASSISTANT_MODEL). Paid per question.

   Guard rails, since this spends money per request: capped message length,
   capped history, capped context size, and a small per-IP rate limit (best
   effort: it lives in one function instance's memory). */

import Anthropic from "@anthropic-ai/sdk";

const CLAUDE_MODEL = process.env.ASSISTANT_MODEL || "claude-opus-5";
const GROQ_MODEL = process.env.GROQ_MODEL || "openai/gpt-oss-120b";
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MAX_TURNS = 8;           // messages of history kept (free tiers count every token)
const MAX_CHARS = 600;         // per user message
const MAX_CONTEXT = 9000;      // characters of app data
const RATE = { windowMs: 10 * 60 * 1000, max: 30 };

const SYSTEM = `You are Miles, the assistant inside Milescope, a site that shows people where their credit card points can take them on award flights.

Answer in plain, friendly language, like a knowledgeable friend. Keep it short: usually two to four sentences, or a few short bullet points when listing options. No jargon unless the person uses it first, and explain any term you do use.

You'll get a snapshot of the app's data for this visitor: their home airport, cabin, balances by card, the routes from their airport with what each would cost them, transfer partners, and active transfer bonuses. For questions about their wallet or trips, answer only from that snapshot and say which route, airline program and card you mean. If the snapshot doesn't have what's needed, say so and suggest what they can change in the app (home airport, cabin, balances). Never invent routes, prices, transfer partners or bonuses.

Prices in Milescope are award-chart estimates, and some programs price dynamically. When you give a price, remind them it's an estimate and to confirm seats on the airline's site before transferring, because transfers can't be undone.

You can also answer general questions about credit card points and airline miles. Politely steer anything unrelated back to points and travel.`;

const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < RATE.windowMs);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > RATE.max;
}

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });

function cleanMessages(raw) {
  if (!Array.isArray(raw)) return null;
  const msgs = raw
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .map((m) => ({ role: m.role, content: m.content.trim().slice(0, m.role === "user" ? MAX_CHARS : 4000) }))
    .filter((m) => m.content)
    .slice(-MAX_TURNS);
  while (msgs.length && msgs[0].role !== "user") msgs.shift();   // must open with the visitor
  if (!msgs.length || msgs[msgs.length - 1].role !== "user") return null;
  return msgs;
}

class Busy extends Error {}
class NoKey extends Error {}

async function askGroq(messages) {
  const r = await fetch(GROQ_URL, {
    method: "POST",
    headers: { authorization: "Bearer " + process.env.GROQ_API_KEY, "content-type": "application/json" },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [{ role: "system", content: SYSTEM }, ...messages],
      max_tokens: 1200,
      temperature: 0.3,
      ...(GROQ_MODEL.startsWith("openai/gpt-oss") ? { reasoning_effort: "low" } : {})
    })
  });
  if (r.status === 429) throw new Busy();          // free tier's minute or daily limit
  if (r.status === 401 || r.status === 403) throw new NoKey();
  if (!r.ok) throw new Error("groq " + r.status);
  const data = await r.json();
  const choice = data.choices && data.choices[0];
  return ((choice && choice.message && choice.message.content) || "").trim();
}

async function askClaude(messages) {
  const client = new Anthropic();
  try {
    const response = await client.beta.messages.create({
      model: CLAUDE_MODEL,
      max_tokens: 4000,
      output_config: { effort: "low" },          // short, simple answers
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",                      // a declined request is retried on another model
      system: SYSTEM,
      messages
    });
    if (response.stop_reason === "refusal") {
      return "I can't help with that one, but I'm happy to answer questions about your points and trips.";
    }
    return response.content.filter((b) => b.type === "text").map((b) => b.text).join("").trim();
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) throw new Busy();
    if (err instanceof Anthropic.AuthenticationError) throw new NoKey();
    throw err;
  }
}

export async function POST(request) {
  const provider = process.env.GROQ_API_KEY ? "groq" : process.env.ANTHROPIC_API_KEY ? "claude" : null;
  if (!provider) return json({ error: "no_key" }, 503);

  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "anon";
  if (limited(ip)) return json({ error: "rate_limited" }, 429);

  let body;
  try { body = await request.json(); } catch (e) { return json({ error: "bad_request" }, 400); }
  const messages = cleanMessages(body && body.messages);
  if (!messages) return json({ error: "bad_request" }, 400);

  let context = "";
  try { context = JSON.stringify(body.context || {}).slice(0, MAX_CONTEXT); } catch (e) { context = "{}"; }

  // the snapshot rides on the latest question, so the system prompt stays fixed
  const last = messages[messages.length - 1];
  last.content = `<milescope_snapshot>\n${context}\n</milescope_snapshot>\n\n${last.content}`;

  try {
    const reply = provider === "groq" ? await askGroq(messages) : await askClaude(messages);
    if (!reply) return json({ error: "empty" }, 502);
    return json({ reply });
  } catch (err) {
    if (err instanceof Busy) return json({ error: "busy" }, 429);
    if (err instanceof NoKey) return json({ error: "no_key" }, 503);
    return json({ error: "upstream" }, 502);
  }
}
