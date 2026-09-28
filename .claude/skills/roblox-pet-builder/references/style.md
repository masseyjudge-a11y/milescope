# House Pet Style (source of truth)

Worked out from the user's reference pets in `references/examples/`: Koi (Mythic), Winged Lamb
(Mythic), Oni Tiger (Eternal), Jellyfish (Secret, six colour mutations), Camel (Rare), and a
three-headed dog with a flame mane. When a rule here and your own taste disagree, the rule wins.
When the user corrects a pet, write the correction here as a concrete rule.

## 1. Overall look: brick-built animals
- Pets look like **brick-built toy animals**: faceted, low-poly shapes whose surfaces are covered in
  **raised square studs** (not round LEGO studs). The studs come from the `PetStuds` MaterialVariant
  (`assets/stud_normal.png`); never model studs as separate parts.
- **Realistic animal anatomy, not chibi.** Heads are normal size for the animal, legs have real length,
  and bodies have real silhouettes (koi hump, camel humps, lamb barrel chest). They should be cute
  because of the eyes and colours, not because of distorted proportions.
- **Faceted, never smooth.** Build bodies from octagonal Loft slices (chamfered boxes), wedges and
  blocks. Visible steps between slices are part of the style (the Camel is openly stepped/voxel).
  No `Ball` parts except tiny details; no smooth spheres or cylinders for bodies.
- **Spiky accents.** Fins, wings, manes, tails, crests and feathers are sprays of long pointed
  blades (Fan builder), often with a contrasting tip colour. This is the signature silhouette detail.

## 2. Scale (the player is about 5 studs tall)
| Rarity | Height (ground to top) | Notes |
|---|---|---|
| Common / Rare | 8–14 studs | Camel is the tall exception (~20, long legs) |
| Epic / Legendary | 12–18 studs | |
| Mythic | 16–24 studs | Koi ≈ 24 tall incl. dorsal fin, 39 long; Lamb ≈ 14 tall |
| Secret / Eternal | 16–26 studs | plus halo / aura effects |
| Huge variant | ×2 of the normal size | `Huge` variant scales everything |
- Pets that fly or swim **hover**: lowest point 2–4 studs above the ground (Koi barbels end at y≈2.8).
- Walking pets stand on the ground: feet at y = 0.
- Stud pitch is 1 stud in the world, so bigger pets show more studs (as in the references).

## 3. Colour
- **One light base colour covers 55–75 % of the pet**, then 1–2 saturated accents, then a gold/yellow trim.
  Flat colours only: no gradients and no textures other than studs.
- Patterns are **big flat blotches or bold swirls/stripes** in an accent colour (koi patches,
  tiger swirls, jellyfish diamonds). They are **asymmetric** left vs right where the real animal is (koi),
  symmetric where it is decorative (tiger swirls, jellyfish diamonds).
- Measured reference colours (use these first, add new ones to the table when a pet needs them):

| Role | RGB | Seen on |
|---|---|---|
| Cream base | 234, 222, 166 | Koi body and fins |
| Tan base | 205, 180, 135 | Camel |
| White base | 240, 240, 244 | Lamb, Oni Tiger, Jellyfish |
| Orange accent | 240, 115, 42 | Koi patches, fin spikes |
| Navy accent | 24, 48, 84 | Koi patches, pectoral fins, tail streaks |
| Crimson accent | 180, 30, 70 | Oni Tiger swirls, horns |
| Hot pink accent | 255, 110, 190 | Oni Tiger claws/mane, Eternal aura |
| Lilac pink (soft parts) | 215, 170, 205 | Lamb inner ears and nose |
| Bright gold trim | 245, 205, 50 | Koi fin tips, gill line |
| Muted gold trim | 215, 185, 120 | Lamb hooves, collar, wing roots |
| Charcoal | 45, 45, 50 | Three-headed dog body |
| Light grey | 175, 175, 180 | Dog chest and necks |

## 4. Faces
- **Eyes** (Eye builder): glossy cartoon eye, dark rim, dark maroon-brown iris (78, 44, 50), black pupil,
  white highlight dot toward the upper front. Radius ≈ 12–14 % of head height. Set on the side of the head
  for fish and prey animals, facing forward for predators.
- Fierce/rare pets may have **glowing eyes** (`Glow = true`, red or pink iris).
- Mouths are small and simple: a dark slab or a slightly open jaw with teeth for predators (tiger, dog).
- Soft parts (inner ears, nose) use the lilac pink.
- Fish get a gold + accent **gill arc** behind the eye; whiskered fish get hanging barbels.

## 5. Parts and building rules
- Material: Plastic + `PetStuds` MaterialVariant on everything except eyes (SmoothPlastic) and
  glowing parts (Neon).
- Pivot at bottom-centre (y = 0 = ground), facing -Z. PrimaryPart `Root`, all parts welded to it,
  `CanCollide/CanTouch = false`, `Massless = true`. PetKit does this for you.
- Part budget: aim for 150–300 parts, hard limit 450.
- Build order in the spec: body lofts → head and face → legs → fins/wings/mane → patches → extras.

## 6. Rarity look
| Rarity | Extra look |
|---|---|
| Rare | Plain animal, no trim |
| Mythic | Gold trim details (tips, collar, hooves, wing roots, small crest/gem on the forehead) and fancier fins or wings |
| Secret | Glowing neon accents + floating **halo** ring above the pet (`Secret` variant), bright light beam in the game |
| Eternal | Strong coloured **aura** particles and light (`Eternal` variant), glowing eyes, extra spikes/horns |

## 7. Variants
- **Colour mutations** (Jellyfish): base stays white/cream; the `Accent` role and `Glow` role take the
  mutation colour. Built-in: Green, Yellow, Orange, Pink, Purple, Cyan. Put mutation-coloured parts on
  the `Accent` role and glowing strips on the `Glow` role so mutations recolour cleanly.
- **Golden**: every role except eyes remapped onto a gold ramp by brightness, slight reflectance, sparkles.
- **Huge**: ×2 scale.
- Variants stack: `{ "Huge", "Golden" }`, `{ "Cyan", "Secret" }`.

## 8. Never
- Never chibi proportions (giant head, tiny body) or smooth, rounded, blobby shapes.
- Never more than 3 colours plus trim on one pet.
- Never gradients, realistic textures, or decals other than the stud material.
- Never thin, spindly fins: blades are broad (width 2–3.5 studs on a Mythic) and overlap into a solid fan.
- Never floating gaps between parts; overlap slightly instead.
- Never put the pet's pivot at its centre (it must be at the feet / below the hover point).
