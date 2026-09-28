// Milescope's no-framework wrapper around bot-avatars (https://libraries.dev/bots,
// MIT © Jakub Antalik). The npm package ships a React component; this drives
// its exported rig (BotAvatarSim) and renderer on a plain <canvas>, the way
// the component does. Rebuild bot.js with ./build.sh after changing this.
//
//   const bot = BotAvatars.mount(canvas, { type: "clover", size: 40 });
//   bot.setState("working");   // default | working | sleeping

import {
  BotAvatarSim, drawBotAvatarFrame, botAvatarShapes, botAvatarParts, botAvatarPresets,
  autoInk, shade, BOT_AVATAR_OVERSCAN as OVERSCAN, BOT_AVATAR_RISE as RISE
} from "bot-avatars";

function mount(canvas, opts) {
  opts = opts || {};
  const type = botAvatarShapes[opts.type] ? opts.type : "clover";
  const size = opts.size || 40;
  const preset = botAvatarPresets[type];
  const body = shade(opts.color || preset.color, 0, 0.25);   // the component's default saturation 1.5
  const cfg = {
    path: new Path2D(botAvatarShapes[type]),
    parts: botAvatarParts[type] ? new Path2D(botAvatarParts[type]) : undefined,
    face: opts.face || preset.face, faceX: preset.faceX, faceY: preset.faceY, faceScale: preset.faceScale,
    color: body, ink: autoInk(body), shading: "plastic", theme: "dark",
    shadow: 0.35, highlight: 1.3, depth: 0.65, light: 265, rim: 0.5, spread: 1.55, typeKey: type
  };

  // overscan the box so hops and flips aren't clipped; negative margins keep layout at `size`
  const side = (OVERSCAN - 1) / 2, dim = size * OVERSCAN;
  Object.assign(canvas.style, {
    width: dim + "px", height: dim + "px", flex: "none", display: "block",
    marginLeft: -size * side + "px", marginRight: -size * side + "px",
    marginTop: -size * (side + RISE) + "px", marginBottom: -size * (side - RISE) + "px"
  });
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = canvas.height = Math.round(dim * dpr);
  canvas.setAttribute("role", "img");
  const ctx = canvas.getContext("2d");
  cfg.dpr = dpr;

  const sim = new BotAvatarSim(Math.random(), opts.state || "default");
  const paint = () => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, dim, dim);
    drawBotAvatarFrame(ctx, size, sim.pose, cfg);
  };

  // like the orbs, the bot keeps moving under Reduce Motion (it's small and
  // in the corner); it sleeps while hidden or offscreen
  let raf = 0, last = 0, visible = true;
  const tick = (t) => {
    raf = 0;
    if (!canvas.isConnected) return;
    const dt = last ? Math.min(0.05, (t - last) / 1000) : 1 / 60;
    last = t;
    sim.update(dt);
    paint();
    if (visible && document.visibilityState !== "hidden") raf = requestAnimationFrame(tick);
  };
  const wake = () => { if (!raf && visible && document.visibilityState !== "hidden") { last = 0; raf = requestAnimationFrame(tick); } };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; wake(); }).observe(canvas);
  document.addEventListener("visibilitychange", wake);
  paint();
  wake();

  return {
    setState(s) { sim.setState(s); wake(); },
    poke() { sim.poke(); wake(); }
  };
}

window.BotAvatars = { mount };
