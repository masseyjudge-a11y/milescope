"""Generate the stud surface maps used by the PetStuds MaterialVariant.

One tile = one stud cell with a raised square stud in the middle (square, not round,
sparse: the stud is ~38% of the cell), matching the brick look of the reference pets.

Outputs (in ../assets):
  stud_normal.png  - OpenGL tangent-space normal map (Roblox expects OpenGL format)
  stud_color.png   - grayscale colour map (tinted by Part.Color) with a soft contact shadow
  stud_preview.png - the maps lit from the upper-left, tiled 6x6, for a quick visual check

Usage: python3 make_stud_maps.py [--size 512] [--stud 0.38] [--bevel 0.07]
"""
import argparse
import os

import numpy as np
from PIL import Image

ap = argparse.ArgumentParser()
ap.add_argument("--size", type=int, default=512)
ap.add_argument("--stud", type=float, default=0.38, help="stud width as a fraction of the cell")
ap.add_argument("--bevel", type=float, default=0.07, help="sloped edge width as a fraction of the cell")
ap.add_argument("--strength", type=float, default=2.2, help="normal-map bump strength")
args = ap.parse_args()

N = args.size
out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets")
os.makedirs(out, exist_ok=True)

# Chebyshev distance from the cell centre gives a square stud.
c = (np.arange(N) + 0.5) / N - 0.5
X, Y = np.meshgrid(c, c)  # Y grows downward (image rows)
d = np.maximum(np.abs(X), np.abs(Y))
half = args.stud / 2
top = half - args.bevel
height = np.clip((half - d) / args.bevel, 0, 1)  # 0 = flat surface, 1 = stud top
height = height * height * (3 - 2 * height)  # smoothstep for a soft bevel

# Normal map (OpenGL: +G points up the image, i.e. toward row 0).
gy_rows, gx = np.gradient(height, 1.0 / N)
g_up = -gy_rows
s = args.strength * args.bevel
nx, ny, nz = -gx * s, -g_up * s, np.ones_like(height)
ln = np.sqrt(nx * nx + ny * ny + nz * nz)
normal = np.stack([nx / ln, ny / ln, nz / ln], -1)
Image.fromarray(((normal * 0.5 + 0.5) * 255).round().astype(np.uint8)).save(os.path.join(out, "stud_normal.png"))

# Colour map: white, with a faint contact shadow around the stud base.
ring = np.clip(1 - np.abs(d - half) / (args.bevel * 0.9), 0, 1) * (d >= half - 0.01)
color = 255 - 38 * ring
Image.fromarray(np.repeat(color[..., None], 3, -1).round().astype(np.uint8)).save(os.path.join(out, "stud_color.png"))

# Preview: Lambert light from the upper-left in front, tiled 6x6, tinted cream.
L = np.array([-0.5, 0.55, 0.67]); L /= np.linalg.norm(L)
lam = np.clip(normal @ L, 0, 1) * 0.75 + 0.3
base = np.array([234, 222, 166]) / 255
img = np.clip(lam[..., None] * (color[..., None] / 255) * base, 0, 1)
img = np.tile(img, (6, 6, 1))
Image.fromarray((img * 255).astype(np.uint8)).resize((600, 600), Image.LANCZOS).save(os.path.join(out, "stud_preview.png"))
print("wrote", os.path.normpath(out))
