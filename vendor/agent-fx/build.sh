#!/usr/bin/env sh
# Rebuilds agentfx.js (Preact standing in for React + border-beam + voice-glow) from agentfx.src.jsx.
set -e
cd "$(dirname "$0")"
tmp=$(mktemp -d)
cp agentfx.src.jsx "$tmp/"
(cd "$tmp" && npm init -y >/dev/null && npm i --silent preact@10 border-beam@1.4.1 voice-glow@0.2.1 esbuild@0.24 &&
  npx esbuild agentfx.src.jsx --bundle --minify --format=iife --target=es2018 --jsx=automatic --jsx-import-source=preact \
    --alias:react=preact/compat --alias:react-dom=preact/compat --alias:react-dom/client=preact/compat/client --alias:react/jsx-runtime=preact/jsx-runtime \
    --define:process.env.NODE_ENV='"production"' \
    --banner:js="/*! Preact (MIT) + border-beam 1.4.1 + voice-glow 0.2.1 (MIT © Jakub Antalik, libraries.dev) + Milescope wrapper */" \
    --outfile=agentfx.js 2>&1 | tail -1)
cp "$tmp/agentfx.js" agentfx.js
rm -rf "$tmp"
