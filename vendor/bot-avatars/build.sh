#!/usr/bin/env sh
# Rebuilds bot.js from bot.src.js and the pinned bot-avatars package.
set -e
cd "$(dirname "$0")"
tmp=$(mktemp -d)
cp bot.src.js "$tmp/"
# the package's React component is never used here; stub React so it bundles away
cat > "$tmp/noreact.cjs" <<'STUB'
const f = () => function () {};
module.exports = { forwardRef: f, memo: (c) => c, createElement: f, useRef: f, useEffect: f, useLayoutEffect: f,
  useState: f, useId: f, useMemo: f, useCallback: f, jsx: f, jsxs: f, Fragment: {} };
STUB
(cd "$tmp" && npm init -y >/dev/null && npm i --silent bot-avatars@0.1.1 esbuild@0.24 &&
  npx esbuild bot.src.js --bundle --minify --format=iife --target=es2018 --alias:react=./noreact.cjs --alias:react/jsx-runtime=./noreact.cjs \
    --banner:js="/*! bot-avatars 0.1.1 (MIT © Jakub Antalik, libraries.dev/bots) + Milescope wrapper */" \
    --outfile=bot.js 2>&1 | tail -2)
cp "$tmp/bot.js" bot.js
rm -rf "$tmp"
