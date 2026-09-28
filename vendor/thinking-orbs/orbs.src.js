// Milescope's no-framework wrapper around the thinking-orbs engine
// (https://libraries.dev/orbs, MIT © Jakub Antalik). The npm package ships a
// React component; the site has no React, so this mirrors that component on a
// plain <canvas>. Rebuild orbs.js with ./build.sh after changing this file.
//
//   <canvas data-orb="searching" data-orb-size="64"></canvas>
//   ThinkingOrbs.scan(root)   // mounts every unmounted [data-orb] under root
//
// Options (data attributes): data-orb (state), data-orb-size (64 | 32 | 20),
// data-orb-color (#hex tint), data-orb-speed (multiplier).

import { MODE_FRAMES, paintFrame, resolvePreset } from "thinking-orbs/engine";

const LABELS = {
  working: "Working…", searching: "Searching…", solving: "Solving…",
  listening: "Listening…", connecting: "Connecting…", weaving: "Weaving…",
  composing: "Composing…", breathing: "Thinking…", shaping: "Shaping…"
};

function parseTint(c) {
  const m = (c || "").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (!m) return undefined;
  const h = m[1].length === 3 ? m[1].replace(/./g, (x) => x + x) : m[1];
  const n = parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

// Orbs keep moving under Reduce Motion, like the partner strip: they're
// small, slow and loop in place, and a frozen loader reads as a stalled
// page. Set data-orb-still on a canvas to pin it to one frame instead.
function animated(canvas) {
  return !canvas.hasAttribute("data-orb-still");
}

function mount(canvas) {
  if (canvas.__orb) return;
  canvas.__orb = true;
  const state = canvas.getAttribute("data-orb") || "working";
  const size = Number(canvas.getAttribute("data-orb-size")) || 64;
  const tint = parseTint(canvas.getAttribute("data-orb-color"));
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.round(size * dpr);
  canvas.height = Math.round(size * dpr);
  canvas.style.width = canvas.style.height = size + "px";
  canvas.setAttribute("role", "img");
  if (!canvas.hasAttribute("aria-label") && !canvas.hasAttribute("aria-hidden")) {
    canvas.setAttribute("aria-label", LABELS[state] || "Loading…");
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const { mode, speed, opts } = resolvePreset(state, size);
  const eff = speed * (Number(canvas.getAttribute("data-orb-speed")) || 1);
  const frame = (t) => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);
    paintFrame(ctx, MODE_FRAMES[mode](size, t, opts), true, tint);
  };

  if (!animated(canvas)) { frame(0.6); return; }

  // One shared clock keeps every orb in phase; each loop sleeps while its
  // canvas is offscreen, hidden, or tabbed away, and ends once it leaves the DOM.
  let raf = 0, running = false, visible = true;
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync(); });
  const tick = () => {
    if (!canvas.isConnected) return teardown();
    frame((performance.now() / 1000) * eff);
    if (running) raf = requestAnimationFrame(tick);
  };
  const stop = () => { running = false; cancelAnimationFrame(raf); };
  const teardown = () => { stop(); io.disconnect(); document.removeEventListener("visibilitychange", sync); };
  function sync() {
    if (!canvas.isConnected) return teardown();
    if (visible && document.visibilityState !== "hidden") {
      if (!running) { running = true; raf = requestAnimationFrame(tick); }
    } else stop();
  }
  frame((performance.now() / 1000) * eff);
  io.observe(canvas);
  document.addEventListener("visibilitychange", sync);
  sync();   // start now; the observer's first report pauses it if offscreen
}

function scan(root) {
  (root || document).querySelectorAll("canvas[data-orb]").forEach(mount);
}

window.ThinkingOrbs = { mount, scan };
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => scan());
else scan();
