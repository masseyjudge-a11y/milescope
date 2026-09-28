---
name: roblox-pet-builder
description: Design and build original Roblox pets in the user's brick-built house style (faceted animals covered in raised square studs, spiky gold-tipped fins/wings/manes, rarity variants) modelled in Blender through Blender MCP with baked stud textures and imported into Roblox Studio (with a Parts-only Luau fallback). New animals, creatures and themes that feel like they belong in the same game, not copies of the reference pets. Use whenever the user asks to make, design, invent, generate, tweak, or recolour a Roblox pet, e.g. "make a dragon pet", "new Mythic pet idea", "golden version of the stag", "huge variant", "make a Secret version".
---

# Roblox Pet Builder

The job is **original pets in a shared style**. The user's reference pets (`references/examples/`)
define how pets are *built and styled*; they are not designs to copy. Every new pet should be a
fresh animal, creature or theme that would sit naturally next to the references in the same game:
same studs, same faceted construction, same colour structure, same spiky accents, same rarity
language, but a new design.

- `references/style.md`: the style DNA (must keep) and the creative freedom (should vary).
- `references/design-ideas.md`: themes, palettes, signature features and how to build each body type.
- `references/petkit-api.md`: the pet spec format.
- `pets/`: finished pets. `Koi.lua` is a calibration study of a reference (used to tune the
  builders).
- `references/blender-workflow.md`: **the primary build path**: Blender MCP modelling, baked
  stud textures, glow parts, export and Roblox import.
- `scripts/blender_studs.py`: Blender helpers (stud generation, stud/AO bake, FBX export).
- `templates/PetKit.lua`: the Parts-only fallback library (no Blender needed).

## Quality gate: 90–95 % similarity or don't deliver
When the user gives a reference image (or asks for a pet like a reference), the result must be
**90–95 % similar** to it. Below that, do not deliver the pet: keep iterating, or stop and tell the
user honestly what is blocking it. Never present a lower-scoring pet as done.

Score every candidate before delivering, side by side with the reference, from the same angles
(front, side, 3/4, and the reference's own views if it has them). Score each category 0–10:

| Category | Weight | What 10 means |
|---|---|---|
| Silhouette and proportions | 30 % | head/body/leg ratios, head shape, posture match |
| Build style | 20 % | same construction (stacked bricks vs smooth facets), stud size and density |
| Colour placement | 20 % | every colour region in the same place and size |
| Features | 20 % | every horn, ear, petal, flower, marking, cuff present, same shape and size |
| Face | 10 % | eye size, colour and glow, muzzle length, expression |

Total = weighted sum × 10 (%). Deliver only at ≥ 90 %. Report the score and the lowest category
honestly with the delivery. Read proportions off the reference by measuring it (head height ÷ body
height, leg length ÷ shoulder height and so on), never by eye alone.

Match the reference's **construction**: if it is visibly built from stacked bricks (blocky
segments, visible brick edges), build it from bricks/voxels (box primitives snapped to a 1-stud
grid), not the smooth skin-modifier body. The skin-modifier body is only for references with smooth,
sculpted shapes.

## Which build path
- **Blender MCP (default)** when a Blender MCP connection is available: smooth, faceted organic
  shapes like the references, real baked studs, one light mesh per pet. Follow
  `references/blender-workflow.md` for steps 3–7 below instead of the PetKit steps.
- **PetKit (fallback)** when there is no Blender connection or the user wants a quick in-Studio
  prototype. Stepped Part-built shapes with the tiled `PetStuds` texture.
- **Studs are required on both paths.** Never deliver a studless pet body.

## Workflow

1. **Read the style.** Read `references/style.md` and `references/design-ideas.md`. Glance at the
   reference images for the look, and at `pets/` for what already exists.
2. **Design the concept first.** Decide, in a few lines: name, rarity, animal (real, mythical or
   hybrid), theme, palette (1 base + 1–2 accents + trim), a **signature feature** that reads from far
   away, and 2–3 supporting details. Rules:
   - If the user named an animal, give it a theme and a signature feature of your choosing.
   - If the request is open ("make a new pet"), pitch 3 one-line concepts and let the user pick,
     unless they said to just go for it.
   - **Don't copy.** No reference pet's animal + palette + pattern combination, and no pet that
     repeats an existing one in `pets/` in silhouette and palette. If the user asks for an animal a
     reference already has (a koi, a tiger), make a clearly different take (new theme, palette,
     fin/horn layout) unless they explicitly ask for a replica.
3. **Plan the build.** Target height and length (style.md §2), body rings, legs, head, and every
   fin/wing/mane/spike group with its colour and tip colour. Check against the **Never** list.
4. **Write the pet** as `pets/<Name>.lua` using the PET spec. Only data goes in the pet file. If a
   design needs a new kind of shape, add a builder to PetKit (and document it in petkit-api.md)
   rather than hand-placing dozens of parts.
5. **Preview and critique.** Run `python3 scripts/preview.py pets/<Name>.lua` (needs
   `pip install lupa pillow numpy`). It runs the real Luau with a Roblox stand-in and renders 4 views
   next to a 5-stud player block. Critique it honestly: does it read as the animal at a glance? Is the
   signature feature big and clear? Does it look like it belongs with the reference pets (studs,
   facets, spikes, colour balance)? Are proportions believable? Fix and re-render; two or three rounds
   is normal. Preview the variants you promise too (`--variant Golden`, `--variant Cyan,Secret`, ...).
6. **Assemble the Studio script:**
   `python3 scripts/assemble.py pets/<Name>.lua -o <repo>/roblox-pets/<Name>.lua`
   (add `--variant ...` for a specific variant). This inlines PetKit, so the user pastes one file.
7. **Deliver.** Send the assembled script plus the preview PNG, with the concept in two or three
   lines. Tell the user how to run it: View → Command Bar in Studio, paste, Enter. The pet appears at
   the origin as one Model; for the game, move it into ServerStorage/ReplicatedStorage as a template.

## Studs: one-time setup

Studs come from a MaterialVariant using `assets/stud_normal.png` (OpenGL normal map) and
`assets/stud_color.png`. Until the user uploads them, pets build with plain Plastic and PetKit
prints a warning. Setup: upload both PNGs as **Images** (Creator Hub → Creations → Development Items,
or Studio's Asset Manager → Bulk Import), copy each asset's numeric **image** id, and put them in
`PetKit.STUD_NORMAL_ID` / `PetKit.STUD_COLOR_ID` at the top of `templates/PetKit.lua`. The first pet
built after that creates `MaterialService.PetStuds`. Regenerate the maps with
`scripts/make_stud_maps.py` (e.g. `--stud 0.34` for smaller studs) if the user wants them different.

## Self-check before delivering
- It's an original design: not a reference pet with the serial numbers filed off.
- Style DNA is all there (style.md §1): studs, facets, realistic anatomy, spiky blade accents,
  glossy eyes, colour structure with base ≈ 55–75 %.
- The signature feature is obvious in the 3/4 preview at thumbnail size.
- Height and hover height are in the style.md §2 range for the rarity; part count ≤ 450.
- Every colour is a palette role; mutation-coloured parts use `Accent`/`Glow` so mutations work.
- Nothing from the **Never** list.

## Learning
When the user reacts to a pet, fix it, then record the lesson in `references/style.md`: style
feedback ("fins too thin") becomes a concrete DNA rule with numbers; taste feedback ("love the
crystal antlers", "too many colours") goes in the taste notes (§9). Save new reference images into
`references/examples/`, and add approved pets to `pets/` so they become examples for the next one.
