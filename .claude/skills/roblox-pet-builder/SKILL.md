---
name: roblox-pet-builder
description: Build Roblox pet models in the user's exact house style as Luau scripts that construct the pet from Parts in Roblox Studio. Use whenever the user asks to make, design, generate, or tweak a Roblox pet (e.g. "make a dragon pet", "golden version of the cat", "huge variant").
---

# Roblox Pet Builder

Produce pets that match the house style in `references/style.md` exactly. That file is
the source of truth: never trade its rules for your own taste.

## Workflow

1. **Read `references/style.md`** in full every time, plus any reference pets in
   `references/examples/`.
2. **Plan the pet** as a short parts list before writing any code: every body part, its
   shape, size in studs, color (from the palette), and offset from the root. Check it
   against the proportions and "never" lists in the style file.
3. **Write the Luau** by copying `templates/PetBuilder.lua` and filling in only the
   `PET` table. Keep the helper functions as they are so every pet is built the same way.
4. **Variants**: if variants are asked for (or the style file lists defaults), build them
   with the `VARIANTS` rules in the style file, not by hand-recoloring.
5. **Self-check** against the checklist below, then give the user the script along with
   how to run it: paste it into Studio's Command Bar, or run it through Studio MCP if that's connected.

## Self-check (all must pass)
- Every color is in the style palette.
- Proportions (head:body ratio, eye size, leg length) are within the style file's ranges.
- Model has a `PrimaryPart` named `Root`, is anchored=false/welded, CanCollide=false,
  Massless=true on all parts, and total size is within the style's size limits.
- Pivot sits at the bottom-center so the pet follows the player at ground level.
- Nothing from the style file's "Never" list appears.

## Learning the style
When the user shares new reference images or says a pet "looks wrong", update
`references/style.md` with the concrete rule (numbers, colors, shapes), not just
the vague impression, so later pets get it right automatically.
