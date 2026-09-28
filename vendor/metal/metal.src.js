// Milescope's no-framework take on metal-fx (https://libraries.dev, MIT ©
// Jakub Antalik). metal-fx is React-only; its look comes from Paper Shaders'
// liquidMetal (Apache-2.0), which ships a plain ShaderMount, so this mounts
// that directly with metal-fx's baseline settings and a blue tint instead of
// the silver/chromatic/gold presets. Rebuild metal.js with ./build.sh.
//
//   <span class="metal-ring" data-metal="#0EA5E9B0" data-metal-scale="1.6"></span>
//
// data-metal is the tint (#rrggbbaa; the alpha is how strongly it tints);
// data-metal-scale zooms the pattern (metal-fx uses 1.6 for buttons).

import { ShaderMount, liquidMetalFragmentShader, getShaderColorFromString, emptyPixel } from "@paper-design/shaders";

function supported() {
  try { return !!document.createElement("canvas").getContext("webgl2"); } catch (e) { return false; }
}

function mount(el) {
  if (el.__metal || !supported()) return;
  el.__metal = true;
  const img = new Image();
  img.onload = () => {
    new ShaderMount(el, liquidMetalFragmentShader, {
      // metal-fx's baseline (Paper's full-frame "Backdrop" preset), transparent back
      u_colorBack: getShaderColorFromString("#00000000"),
      u_colorTint: getShaderColorFromString(el.getAttribute("data-metal") || "#38BDF8E6"),
      u_repetition: 1.5, u_softness: 0.05, u_shiftRed: 0.3, u_shiftBlue: 0.3,
      u_distortion: 0.1, u_contour: 0.4, u_angle: 90, u_shape: 0,
      u_isImage: false, u_image: img, u_imageAspectRatio: 1,
      u_scale: Number(el.getAttribute("data-metal-scale")) || 1, u_rotation: 0, u_offsetX: 0, u_offsetY: 0,
      u_originX: 0.5, u_originY: 0.5, u_worldWidth: 0, u_worldHeight: 0, u_fit: 1
    }, { alpha: true, premultipliedAlpha: false }, 1);
    el.classList.add("metal-live");
  };
  img.src = emptyPixel;
}

function scan(root) { (root || document).querySelectorAll("[data-metal]").forEach(mount); }

window.MetalRing = { mount, scan };
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => scan());
else scan();
