#!/usr/bin/env sh
# Rebuilds metal.js from metal.src.js and the pinned Paper Shaders package.
set -e
cd "$(dirname "$0")"
tmp=$(mktemp -d)
cp metal.src.js "$tmp/"
(cd "$tmp" && npm init -y >/dev/null && npm i --silent @paper-design/shaders@0.0.81 esbuild@0.24 &&
  npx esbuild metal.src.js --bundle --minify --format=iife --target=es2018 \
    --banner:js="/*! Paper Shaders 0.0.81 liquidMetal (Apache-2.0, paper.design) + Milescope wrapper after metal-fx (MIT, libraries.dev) */" \
    --outfile=metal.js 2>&1 | tail -1)
cp "$tmp/metal.js" metal.js
cp "$tmp/node_modules/@paper-design/shaders/LICENSE"* . 2>/dev/null || true
rm -rf "$tmp"
