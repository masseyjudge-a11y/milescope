// Milescope's React island for the assistant panel: Border Beam and Voice
// Glow from libraries.dev (MIT © Jakub Antalik), which are React components.
// Bundled with Preact standing in for React (a few KB instead of ~150), and
// loaded only when someone opens Miles.
// Rebuild agentfx.js with ./build.sh after changing this file.
//
//   const fx = AgentFX.mount(beamHost, voiceHost, { beam: {...props}, voice: {...props} });
//   fx.set({ thinking: true, stream: micStream, listening: true });

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BorderBeam } from "border-beam";
import { VoiceBeam } from "voice-glow";

const fill = { position: "absolute", inset: 0, pointerEvents: "none" };

function Beam({ fx, radius, opts }) {
  return (
    <BorderBeam size="md" colorVariant="ocean" theme="dark" active={!!fx.thinking} duration={2.4}
      style={fill} {...opts}>
      <div style={{ width: "100%", height: "100%", borderRadius: radius }} />
    </BorderBeam>
  );
}

function Voice({ fx, radius, opts }) {
  return (
    <VoiceBeam colorVariant="ocean" theme="dark" stream={fx.stream || null}
      active={!!(fx.listening || fx.transcribing)} processing={!!fx.transcribing} style={fill} {...opts}>
      <div style={{ width: "100%", height: "100%", borderRadius: radius }} />
    </VoiceBeam>
  );
}

function mount(beamHost, voiceHost, opts) {
  opts = opts || {};
  let setters = [];
  let current = {};
  function Island({ Comp, radius, extra }) {
    const [fx, setFx] = useState(current);
    setters.push(setFx);
    return <Comp fx={fx} radius={radius} opts={extra} />;
  }
  const radius = (el) => parseFloat(getComputedStyle(el).borderRadius) || 0;
  createRoot(beamHost).render(<Island Comp={Beam} radius={radius(beamHost.parentElement)} extra={opts.beam} />);
  createRoot(voiceHost).render(<Island Comp={Voice} radius={radius(voiceHost.parentElement)} extra={opts.voice} />);
  return {
    set(patch) {
      current = { ...current, ...patch };
      setters.forEach((s) => s(current));
    }
  };
}

window.AgentFX = { mount };
