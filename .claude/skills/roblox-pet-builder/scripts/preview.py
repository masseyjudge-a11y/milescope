"""Run a pet script outside Roblox and render it, to check the look before it goes into Studio.

Usage: python3 preview.py pets/Koi.lua [--variant Golden] [-o preview.png] [--size 1400]

Renders four views (3/4 front, right side, front, top) with flat lighting and a grey
5-stud-tall block next to the pet for player scale. Studs are not drawn; shape and
colour are what this checks. Needs: pip install lupa pillow numpy
"""
import argparse
import os
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFont

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from assemble import assemble  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))


def run_lua(src):
    from lupa import LuaRuntime

    lua = LuaRuntime(unpack_returned_tuples=True)
    lua.execute(open(os.path.join(HERE, "roblox_stub.lua")).read())
    lua.execute(src)
    parts = lua.globals().__dump_parts()
    out = []
    for p in parts.values():
        d = {k: p[k] for k in ("name", "shape", "material")}
        for k in ("size", "pos", "rx", "ry", "rz", "color"):
            d[k] = np.array([p[k][1], p[k][2], p[k][3]], float)
        out.append(d)
    return out


def box_faces(sx, sy, sz):
    x, y, z = sx / 2, sy / 2, sz / 2
    v = np.array([[-x, -y, -z], [x, -y, -z], [x, y, -z], [-x, y, -z], [-x, -y, z], [x, -y, z], [x, y, z], [-x, y, z]])
    f = [[0, 3, 2, 1], [4, 5, 6, 7], [0, 1, 5, 4], [3, 7, 6, 2], [0, 4, 7, 3], [1, 2, 6, 5]]
    return [v[i] for i in f]


def wedge_faces(sx, sy, sz):
    # Roblox wedge: flat bottom, vertical back (+Z), slope rising from front-bottom to back-top.
    x, y, z = sx / 2, sy / 2, sz / 2
    a, b, c, d = [-x, -y, -z], [x, -y, -z], [x, -y, z], [-x, -y, z]
    e, f = [-x, y, z], [x, y, z]
    faces = [[a, d, c, b], [d, e, f, c], [a, b, f, e], [a, e, d], [b, c, f]]
    return [np.array(q[::-1]) for q in faces]  # counter-clockwise seen from outside


def cyl_faces(sx, sy, sz, n=16):
    r = min(sy, sz) / 2
    ang = np.linspace(0, 2 * np.pi, n, endpoint=False)
    ring = np.stack([np.cos(ang) * r, np.sin(ang) * r], 1)
    left = np.column_stack([np.full(n, -sx / 2), ring])
    right = np.column_stack([np.full(n, sx / 2), ring])
    faces = [left[::-1], right]
    for i in range(n):
        j = (i + 1) % n
        faces.append(np.array([left[i], left[j], right[j], right[i]]))
    return faces


def ball_faces(sx, sy, sz, n=10):
    r = min(sx, sy, sz) / 2
    faces = []
    th = np.linspace(0, np.pi, n // 2 + 1)
    ph = np.linspace(0, 2 * np.pi, n, endpoint=False)

    def pt(t, p):
        return [r * np.sin(t) * np.cos(p), r * np.cos(t), r * np.sin(t) * np.sin(p)]

    for i in range(len(th) - 1):
        for j in range(n):
            k = (j + 1) % n
            faces.append(np.array([pt(th[i], ph[j]), pt(th[i], ph[k]), pt(th[i + 1], ph[k]), pt(th[i + 1], ph[j])]))
    return faces


SHAPE_FACES = {
    "PartType.Block": box_faces,
    "PartType.Wedge": wedge_faces,
    "PartType.CornerWedge": wedge_faces,  # approximation
    "PartType.Cylinder": cyl_faces,
    "PartType.Ball": ball_faces,
}


def world_polys(parts):
    polys = []
    for p in parts:
        R = np.column_stack([p["rx"], p["ry"], p["rz"]])
        glow = p["material"] == "Material.Neon"
        for f in SHAPE_FACES[p["shape"]](*p["size"]):
            w = f @ R.T + p["pos"]
            polys.append((w, p["color"], glow))
    return polys


def view_matrix(yaw, pitch):
    # Camera looks along -Zc; yaw rotates around world Y, pitch tilts down.
    cy, sy = np.cos(np.radians(yaw)), np.sin(np.radians(yaw))
    cp, sp = np.cos(np.radians(pitch)), np.sin(np.radians(pitch))
    Ry = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]])
    Rx = np.array([[1, 0, 0], [0, cp, -sp], [0, sp, cp]])
    return Rx @ Ry


LIGHT = np.array([0.4, 0.75, -0.55])
LIGHT /= np.linalg.norm(LIGHT)


def raster(tris, W, H):
    """Z-buffer rasterise screen-space triangles: list of (3x3 array [x, y, depth], rgb)."""
    zbuf = np.full((H, W), -np.inf)
    img = np.empty((H, W, 3))
    img[:] = np.array([206, 226, 240]) / 255
    for t, col in tris:
        x0, y0 = np.floor(t[:, :2].min(0)).astype(int)
        x1, y1 = np.ceil(t[:, :2].max(0)).astype(int)
        x0, y0, x1, y1 = max(x0, 0), max(y0, 0), min(x1, W - 1), min(y1, H - 1)
        if x0 > x1 or y0 > y1:
            continue
        (ax, ay, az), (bx, by, bz), (cx, cy, cz) = t
        den = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy)
        if abs(den) < 1e-12:
            continue
        X, Y = np.meshgrid(np.arange(x0, x1 + 1) + 0.5, np.arange(y0, y1 + 1) + 0.5)
        w0 = ((by - cy) * (X - cx) + (cx - bx) * (Y - cy)) / den
        w1 = ((cy - ay) * (X - cx) + (ax - cx) * (Y - cy)) / den
        w2 = 1 - w0 - w1
        inside = (w0 >= -1e-6) & (w1 >= -1e-6) & (w2 >= -1e-6)
        z = w0 * az + w1 * bz + w2 * cz
        zb = zbuf[y0:y1 + 1, x0:x1 + 1]
        win = inside & (z > zb)
        zb[win] = z[win]
        img[y0:y1 + 1, x0:x1 + 1][win] = col
    return img


def render(polys, yaw, pitch, W, H, title, bounds):
    M = view_matrix(yaw, pitch)
    ss = 2
    corners = np.array([[x, y, z] for x in bounds[0] for y in bounds[1] for z in bounds[2]]) @ M.T
    lo, hi = corners[:, :2].min(0), corners[:, :2].max(0)
    span = max(hi[0] - lo[0], hi[1] - lo[1]) * 1.08
    mid = (lo + hi) / 2
    scale = min(W, H - 30) * ss / span
    tris = []
    for w, col, glow in polys:
        n = np.cross(w[1] - w[0], w[2] - w[0])
        nn = np.linalg.norm(n)
        if nn < 1e-9:
            continue
        n /= nn
        if (n @ M.T)[2] <= 0:  # back-facing: camera looks down -Z, visible faces point +Z
            continue
        shade = 1.0 if glow else 0.5 + 0.5 * max(0.0, float(n @ LIGHT))
        v = w @ M.T
        sc = np.column_stack([(v[:, 0] - mid[0]) * scale + W * ss / 2, (mid[1] - v[:, 1]) * scale + (H + 30) * ss / 2, v[:, 2]])
        c = np.clip(col * shade, 0, 1)
        for i in range(1, len(sc) - 1):
            tris.append((sc[[0, i, i + 1]], c))
    img = Image.fromarray((raster(tris, W * ss, H * ss) * 255).astype(np.uint8)).resize((W, H), Image.LANCZOS)
    ImageDraw.Draw(img).text((8, 6), title, fill=(20, 20, 30), font=ImageFont.load_default())
    return img


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("pet")
    ap.add_argument("--variant")
    ap.add_argument("-o", "--out")
    ap.add_argument("--size", type=int, default=1400)
    a = ap.parse_args()

    parts = run_lua(assemble(a.pet, a.variant))
    pts = np.concatenate([p["pos"][None] for p in parts])
    lo, hi = pts.min(0), pts.max(0)
    ext = max(p["size"].max() for p in parts) / 2
    lo, hi = lo - ext, hi + ext
    # Player-scale reference: 2 x 5 x 1 grey block beside the pet.
    ref = {"name": "Player", "shape": "PartType.Block", "material": "Material.Plastic", "size": np.array([2.0, 5.0, 1.0]),
           "pos": np.array([hi[0] + 2.5, 2.5, 0.0]), "rx": np.array([1.0, 0, 0]), "ry": np.array([0, 1.0, 0]),
           "rz": np.array([0, 0, 1.0]), "color": np.array([0.55, 0.55, 0.6])}
    polys = world_polys(parts + [ref])
    hi[0] += 4
    lo[1] = min(lo[1], 0)
    bounds = list(zip(lo, hi))
    half = a.size // 2
    # Camera yaw: 180 looks at the pet's face (pet faces -Z), -90 looks at its right side (+X).
    views = [(225, 18, "3/4 front-right"), (-90, 0, "right side"), (180, 0, "front"), (180, 89, "top (front = down)")]
    tiles = [render(polys, yaw, pitch, half, half, t, bounds) for yaw, pitch, t in views]
    sheet = Image.new("RGB", (a.size, a.size))
    for i, t in enumerate(tiles):
        sheet.paste(t, ((i % 2) * half, (i // 2) * half))
    out = a.out or os.path.splitext(a.pet)[0] + ("_" + a.variant.replace(",", "_") if a.variant else "") + "_preview.png"
    sheet.save(out)
    size = hi - lo
    print("parts: %d  bounds (incl. player block): %.1f x %.1f x %.1f  ->  %s" % (len(parts), *size, out))


if __name__ == "__main__":
    main()
