#!/usr/bin/env bash
# The site's font stack starts with -apple-system, which Chrome on macOS draws with the system font (SFNS.ttf),
# at an optical size equal to the font size. Pen can't set opsz, so this makes one static-opsz instance per size
# the pages use (weight axis kept variable), named "SF Pro <opsz>" in the .pen. Apple's license forbids
# redistributing them: generated locally into design/fonts/ (gitignored), never committed. Needs uv (uvx).
set -euo pipefail
here=$(cd "$(dirname "$0")" && pwd)
src=/System/Library/Fonts/SFNS.ttf
[ -f "$src" ] || { echo "missing $src (macOS only)" >&2; exit 1; }
for opsz in "$@"; do
  out="$here/SF-Pro-opsz$opsz.ttf"
  [ -f "$out" ] && continue
  uvx --quiet --from fonttools fonttools varLib.instancer "$src" "opsz=$opsz" wdth=100 GRAD=400 -o "$out" >/dev/null 2>&1
  echo "made $out"
done
