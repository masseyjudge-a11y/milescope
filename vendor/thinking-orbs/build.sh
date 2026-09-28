#!/usr/bin/env sh
# Rebuilds orbs.js from orbs.src.js and the pinned thinking-orbs engine.
set -e
cd "$(dirname "$0")"
tmp=$(mktemp -d)
cp orbs.src.js "$tmp/"
(cd "$tmp" && npm init -y >/dev/null && npm i --silent thinking-orbs@0.3.2 esbuild@0.24 &&
  npx esbuild orbs.src.js --bundle --minify --format=iife --target=es2018 \
    --banner:js="/*! thinking-orbs 0.3.2 engine (MIT © Jakub Antalik, libraries.dev/orbs) + Milescope wrapper */" \
    --outfile=orbs.js)
cp "$tmp/orbs.js" orbs.js
rm -rf "$tmp"
