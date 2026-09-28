---
name: roblox-pet-builder
description: Build Roblox pet models in the user's brick-built house style (faceted animals covered in raised square studs, spiky gold-tipped fins/wings/manes, rarity variants) as Luau scripts that build the pet from Parts in Roblox Studio. Use whenever the user asks to make, design, generate, tweak, or recolour a Roblox pet, e.g. "make a dragon pet", "golden version of the koi", "huge variant", "make a Secret jellyfish".
---

# Roblox Pet Builder

Every pet must look like it belongs next to the user's reference pets. The rules live in
`references/style.md`; the reference images are in `references/examples/`; finished pets
in `pets/` are worked examples. All pets are built with one shared library,
`templates/PetKit.lua`, so they all share the same studs, eyes, fins and variants.

## Workflow

1. **Read the style.** Read `references/style.md` in full. Then look at the reference images
   closest to the requested animal (and ask the user for a reference image if the animal
   is very different from anything there). Read the most similar pet in `pets/`
   (`Koi.lua` shows every builder).
2. **Plan before coding.** Write a short plan: rarity, target height and length (style.md §2),
   palette roles from the measured colour table (§3), body rings, and every fin/wing/mane/spike
   group with its colour and tip colour. Check the plan against the **Never** list (§8).
3. **Write the pet** as `pets/<Name>.lua`, following the `PET` spec format in
   `references/petkit-api.md`. Only data goes in the pet file. If you need a new kind of shape,
   add a builder to PetKit (and document it) instead of hand-placing dozens of parts.
4. **Preview and compare.** Run
   `python3 scripts/preview.py pets/<Name>.lua` (needs `pip install lupa pillow numpy`). This runs
   the real Luau with a Roblox stand-in and renders 4 views next to a 5-stud player block. Look at
   the PNG next to the reference images and fix what differs: silhouette, proportions, fin size,
   colour coverage, patch placement, eye size. Repeat until it matches; two or three rounds is normal.
   Also preview the variants you promise (`--variant Golden`, `--variant Cyan,Secret`, `--variant Huge`).
5. **Assemble the Studio script:**
   `python3 scripts/assemble.py pets/<Name>.lua -o <repo>/roblox-pets/<Name>.lua`
   (add `--variant ...` for a specific variant). This inlines PetKit, so the user pastes one file.
6. **Deliver.** Send the assembled script plus the preview PNG. Tell the user how to run it:
   View → Command Bar in Studio, paste, Enter. The pet appears at the origin, grouped as one Model.
   To use it in game, move it into ServerStorage/ReplicatedStorage as the pet template.

## Studs: one-time setup

Studs come from a MaterialVariant using `assets/stud_normal.png` (OpenGL normal map) and
`assets/stud_color.png`. Until the user uploads them, pets build with plain Plastic and PetKit
prints a warning. Setup: upload both PNGs as **Images** (Creator Hub → Creations → Development Items,
or Studio's Asset Manager → Bulk Import), copy each asset's numeric **image** id, and put them in
`PetKit.STUD_NORMAL_ID` / `PetKit.STUD_COLOR_ID` at the top of `templates/PetKit.lua`. The first pet
built after that creates `MaterialService.PetStuds`. Regenerate the maps with
`scripts/make_stud_maps.py` (e.g. `--stud 0.34` for smaller studs) if the user wants them different.

## Self-check before delivering
- Preview matches the references in silhouette and colour balance (base colour ≈ 55–75 %).
- Height and hover height are in the style.md §2 range for the rarity; part count ≤ 450
  (PetKit warns above that).
- Every colour is a palette role; accent/glow parts use the `Accent`/`Glow` roles so mutations work.
- Eyes use the Eye builder; fins, wings and manes use Fan with broad overlapping blades.
- Nothing from the **Never** list.

## Learning the style
When the user says a pet looks wrong, or shares new references, first fix the pet, then write the
lesson into `references/style.md` as a concrete rule with numbers or colours (for example "lamb legs are
40 % of body height" rather than "legs too short"), and save any new reference image into
`references/examples/`. Add approved pets to `pets/` so they become examples for the next one.
