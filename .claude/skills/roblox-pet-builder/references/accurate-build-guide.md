---
name: roblox-brick-pet-builder
description: How to build Roblox pets that accurately match a reference image in the brick-built, studded house style. Use when asked to make, recreate or design a Roblox pet from a reference image or in this style.
---

# Building accurate brick-style Roblox pets

This guide is for an AI building 3D pets for Roblox. The goal is a model that looks like the
reference at a glance: same silhouette, same face, same colours, same brick-and-stud finish.
**The bar is 90–95 % similarity. Below that, do not deliver; keep fixing or say what blocks you.**

---

## 1. The style (what every pet shares)

- **Brick-built toy look.** Every surface is covered in small **square raised studs** (not round
  LEGO studs), about 38 % of a stud cell, one stud per cell, in neat rows that follow each face.
  Blocky parts show faint seams between bricks.
- **Cute, rounded proportions.** Big rounded head (about 45 % of shoulder height), short soft
  muzzle, large expressive eyes, compact body, legs about 55 % of shoulder height.
- **Colour structure.** One light base colour (cream/white) covers 55–75 %, then 1–2 saturated
  accents in big clean regions (saddle on the back, crown on the head, cuffs on the legs), then a
  gold or pale trim. Flat colours, no gradients.
- **Signature features.** Petal ruffs, petal-fan tails, leg cuffs, horns, wings or fins: many
  **broad, rounded teardrop-shaped pieces** that overlap into full, fluffy shapes. Never thin spikes.
- **Glow.** Magical parts (horns, flowers, eyes, halos) glow. In Roblox they are separate
  MeshParts with Material = Neon.
- **Scale.** The player is 5 studs tall. Pets are 1.5–5× the player; rarer pets are bigger.

## 2. Workflow

### Step 1: Study the reference before building anything
1. Find every view the reference offers (front, side, back, top, 3/4). Use all of them.
2. **Measure, don't eyeball.** Pick shoulder height as the unit and write down:
   head width / height / length, muzzle length, eye size and position, ear size and angle,
   body length and depth, leg length and thickness, tail size, horn size.
3. **List every feature** with its colour and position: each patch of colour, each petal cluster,
   each flower, each marking (such as a crescent moon on the hip), eye style, nose, mouth.
4. **Identify the construction** of each part. Is it stacked bricks (blocky, stepped edges) or a
   smooth sculpted shape that happens to be studded? Most cute pets are *mixed*: sculpted rounded
   head, brick-stepped body and legs. Match what you see per part.

### Step 2: Build in this order, checking after each
1. **Silhouette first.** Head, body, legs and tail as rough shapes at the measured proportions.
   Render front and side views next to the reference at the same scale and compare outlines.
   Fix proportions before adding any detail.
2. **The face.** It carries most of the similarity. Get head roundness, eye size, eye placement,
   muzzle length and expression right before anything else.
3. **Colour regions.** Paint the big regions exactly where the reference has them.
4. **Signature features.** Ruffs, tail, horns, ears, cuffs: correct size, position and shape.
5. **Small details.** Flowers, markings, lashes, nose, gems.
6. **Studs and glow last.**

### Step 3: Compare and score (every round)
Render the same views as the reference, same camera angle and similar lighting, and put them side by side.
Score each category 0–10, weighted:

| Category | Weight | 10 means |
|---|---|---|
| Silhouette and proportions | 30 % | outlines overlay; head, body, leg ratios match |
| Face | 20 % | eye shape, size, colour, glow, muzzle, expression match |
| Colour placement | 20 % | every colour region in the same place and size |
| Features | 20 % | every horn, ear, petal cluster, flower, marking present and right |
| Build finish | 10 % | studs and brick seams look like the reference |

Total ≥ 90 % → deliver. Below that → fix the lowest category first and re-render. Report the score honestly.

## 3. Techniques that work (Blender)

- **Brick body:** define the body as simple solid shapes (rounded boxes, capsules), sample them on
  a grid (cell ≈ 0.3 studs), and build a mesh from the filled cells' outer faces. Colour per cell.
  This gives the stepped brick look and clean colour regions.
- **Rounded head:** start from a UV sphere and reshape the vertices to the measured head size
  (for example 4.2 wide × 3.6 long × 3.4 tall), then push a short soft muzzle out of the lower
  front. Smooth shading. Do *not* use metaballs (they shrink unpredictably), and do not build a cute
  head from bricks (it comes out as a harsh cube).
- **Petals:** a teardrop profile (rounded base, pointed tip) revolved and flattened to ~30 %
  thickness. Orient every petal so its **broad face points toward the viewer** of that area (front
  ruff petals face forward, side petals face sideways, tail petals face the sides). Overlap them.
- **Crescent horns:** a skin modifier along a 250° arc with tapering radius; turn the arc's plane
  about 45° so the crescent reads from both front and side.
- **Eyes:** place them by ray-casting onto the head surface so they sit exactly on the face.
  Layers: coloured iris (glowing if the reference glows), small bright core, white highlight dot
  upper-left, thin dark lash line above. Avoid thick dark rims: they make eyes look startled.
- **Studs:** a square-stud normal-map tile, box-projected in object coordinates at one stud per
  grid cell, baked into a single normal map on the model's UVs. Bake the colour map too.
- **Glow parts:** keep as separate objects (named *_Glow) so they import as separate MeshParts.
- **Budget:** under 20k triangles per mesh for Roblox. Petals are the main cost; use 8-sided
  petals and merge clusters if needed.

## 4. Into Roblox Studio
1. Export as FBX or GLB (body, glow parts and eyes as separate objects).
2. Import with the 3D Importer; check the size against a 5-stud character.
3. Body: SurfaceAppearance with the baked colour map and normal map.
4. Glow parts: Material = Neon. Eyes: SmoothPlastic or Neon if they glow.
5. Group into a Model with an invisible anchored Root at the feet, weld all parts to it,
   CanCollide/CanTouch off, Massless on. Add aura particles or a light for rare pets.

## 5. Mistakes that failed before (avoid these)
- Reusing another pet's body for a new animal: the proportions will be wrong.
- Long narrow snouts and small heads: the reference style is round and cute.
- Thin spiky petals, or round blobs that merge into one mass: petals must be broad teardrops that read individually.
- Horns built flat in one plane: they vanish or turn into bars from some angles.
- Eyes sunk into the head or bulging from the corners: ray-cast them onto the face surface.
- Bare body areas where the reference has petals or navy coverage.
- Grey, dim renders: compare under bright, even light or colours will look wrong.
- Scoring generously. If the face or silhouette is off, the pet is not close, whatever else matches.

## 6. When code-built modelling isn't enough
Hand-placing shapes in code tends to plateau around 75 % on detailed, stylised concept art,
because it gets the parts right but misses the finish. If you can't reach 90 %:
- try an **image-to-3D** tool on the reference to get the base shape, then add studs, glow and
  the Roblox setup on top; or
- ask a human to finish the model in Blender by hand, using your build as the blockout.
Say which one you recommend instead of delivering a weak model.
