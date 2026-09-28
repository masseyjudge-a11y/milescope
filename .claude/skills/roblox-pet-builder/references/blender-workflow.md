# Blender MCP workflow (primary path)

Pets are modelled in Blender through Blender MCP, get **baked stud textures**, and are imported
into Roblox Studio as MeshParts. This gets the smooth, organic body shapes of the reference pets,
which Parts can't. PetKit (Parts) stays as the no-Blender fallback.

## Setup (once, on the user's computer)
- Blender 4.x plus the Blender MCP add-on, with Claude running locally (Claude Desktop or
  Claude Code). Cloud sessions can't reach the user's Blender.
- Scene units: Metric, Unit Scale 1.0, so **1 Blender unit = 1 Roblox stud**. The player is 5 units tall;
  keep a 2 × 5 × 1 box named `PlayerScale` in the scene for scale (never export it).
- Orientation: model the pet facing **-Y** in Blender with Z up. The FBX export in
  `scripts/blender_studs.py` converts this to Roblox's forward -Z, Y up. Feet (or hover point) sit at Z = 0.
- Exec `scripts/blender_studs.py` in Blender once per session to load the helper functions.

## Per pet
1. **Concept and plan** exactly as in SKILL.md (style.md rules, rarity size, palette, signature feature).
2. **Block out the body** in Blender with Python via MCP:
   - Torso, head, neck and limbs from primitives or a Skin-modifier armature, joined, then a
     Subdivision level 1 + **Decimate (Planar, 5–10°)** to get the faceted look of the references.
     Flat shading. The references are smooth *silhouettes* with visible *facets*, not stepped boxes
     (the Camel is the one voxel-style exception).
   - Target 2–8k triangles for the body (Roblox allows 20k per MeshPart; check the current limit).
3. **Spiky parts** (fins, wings, manes, crests, tail fans): flat pointed blades (a triangle
   extruded 0.3–0.6 thick), arrayed/rotated in fans, overlapping. Tip colours come from the texture,
   so UV each blade so the tip region can be painted.
4. **Colour**: assign a material per palette role (Base, Accent, Trim, ...) with flat colours from
   style.md. Big patches and swirls are painted as material regions (select faces → assign material)
   or painted in Texture Paint.
5. **Glow parts** go in **separate objects named `*_Glow`** (glow strips, flame blades, glowing eyes,
   halo). They stay studless and get the Neon material in Roblox, so mutations just recolour them.
6. **Eyes**: separate small objects (rim, iris, pupil, highlight disc), studless.
7. **Studs (required)**:
   - UV-unwrap the body (Smart UV Project, island margin 0.02).
   - `hi = make_studded_copy(body)`: a copy covered in real square studs (0.38 wide, 1-stud pitch,
     sparse, like the references).
   - `bake_studs(low=body, high=hi, size=2048)` bakes `<Body>_normal.png` (OpenGL tangent) and
     `<Body>_ao.png`.
   - Bake the colour too: set bake type DIFFUSE (colour only) onto a `<Body>_color.png`, then multiply
     the AO into it. For recolourable variants, also keep a colour-free version (see Variants).
   - Studs go on every non-glow, non-eye surface, including fins and wings.
8. **Check before export**: take viewport screenshots through MCP (3/4 front, side, front, top) next
   to `PlayerScale`, with the studded high-poly visible, and compare against `references/examples/`.
   Critique silhouette, facets, stud density, colour balance and the signature feature. Iterate.
   Check `triangle_count(body)`.
9. **Export**: `export_fbx([body, *glow_objects, *eye_objects], "<PetName>")` next to the .blend.
   Never export the studded high-poly copy or `PlayerScale`.

## Into Roblox Studio
1. Import the FBX with the 3D Importer (Avatar/3D Import). Check the size against a 5-stud dummy.
2. Body MeshPart: add a **SurfaceAppearance** with ColorMap = `<Body>_color.png`,
   NormalMap = `<Body>_normal.png` (Roblox expects OpenGL normal maps, which the bake produces).
   RoughnessMap is optional (a flat mid-grey for plastic).
3. `*_Glow` MeshParts: Material = Neon, Color = the glow colour. Eyes: SmoothPlastic.
4. Group as a Model with a transparent anchored `Root` part at the feet, weld everything to it,
   CanCollide/CanTouch off, Massless on. Rarity FX (halo, aura, sparkles) are added like in PetKit.
5. Save the Model in ServerStorage/ReplicatedStorage as the pet template.

## Variants
- **Mutations**: recolour the `*_Glow` MeshParts (Neon) and, if the accent is on the body, swap
  to a second baked ColorMap. Blender can bake one ColorMap per variant: change the Accent material
  colour and re-run the colour bake.
- **Golden**: bake a gold ColorMap (all body materials set to the gold ramp from style.md §7), keep
  the same NormalMap, add sparkles.
- **Fully tintable option**: bake the ColorMap as white + AO only, split the body into one MeshPart per
  colour role before export, and set each MeshPart's Color in Roblox. The shared stud NormalMap
  keeps the studs. Any recolour then needs no re-bake.
- **Huge**: scale the Model (`Model:ScaleTo(2)`); studs scale with it, which is fine for a Huge.

## Fallback: the tiled stud texture
If baking isn't possible, set the MeshParts' MaterialVariant to `PetStuds` (the same tiled stud
normal map PetKit uses, from `assets/stud_normal.png`). It works instantly, but the stud grid
doesn't follow the body's curves, so it looks less like the references than a bake.
