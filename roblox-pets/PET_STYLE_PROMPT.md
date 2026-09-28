# Roblox Pet Style Framework (paste this whole file into any AI chat)

You are designing Roblox pets in a specific house style. Follow the STYLE rules exactly, but create
ORIGINAL designs (new animals, creatures and themes), not copies of the reference pets. Output a
Luau pet spec that uses the PetKit library at the bottom of this file.

## How to answer a pet request
1. Pitch the concept in 3–5 lines: name, rarity, animal, theme, palette (1 base + 1–2 accents + gold trim), signature feature.
2. Plan: target height by rarity, body rings, legs/head, every fin/wing/mane group with colour + tip colour.
3. Output ONE Luau code block: the full PetKit library (copied verbatim from the end of this file),
   then `local VARIANT = {...}`, `local PET = {...}`, `PetKit.build(PET, VARIANT)`.
   The user pastes it into Roblox Studio's Command Bar (View > Command Bar) and presses Enter.
4. Check against the Never list before answering.



Worked out from the user's reference pets in `references/examples/`: Koi (Mythic), Winged Lamb
(Mythic), Oni Tiger (Eternal), Jellyfish (Secret, six colour mutations), Camel (Rare), and a
three-headed dog with a flame mane. When a rule here and your own taste disagree, the rule wins.
When the user corrects a pet, write the correction here as a concrete rule.

## 0. Style, not copies
The references show **how** pets are made, not **what** to make. New pets are original designs:
new animals, mythical creatures, hybrids and themes, built with the same DNA so they look like they
come from the same game.

| Keep (style DNA, sections 1–8) | Vary freely (creative space) |
|---|---|
| Square studs on every surface | The animal or creature: real, mythical, hybrid, elemental |
| Faceted, stepped construction | Theme: fire, frost, storm, celestial, sakura, candy, crystal, spooky... |
| Believable anatomy and proportions | The palette, within 1 base + 1–2 accents + trim |
| Size by rarity | Pattern motifs: blotches, stripes, swirls, spots, bands, runes |
| Spiky blade accents with contrasting tips | Which feature is the hero: antlers, tail, wings, mane, horns, fins |
| Glossy cartoon eyes | Pose and attitude (proud, fierce, sleepy, playful) |
| Rarity language (gold trim, halo, aura) | Accessories: collars, gems, armour plates, crystals, flowers |

Reference pets are calibration only. Don't reproduce a reference's animal + palette + pattern.

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
- Measured reference colours. Treat them as the brightness/saturation benchmark: new themes bring
  new colours, but keep bases light and soft, accents bold and saturated, and trim a warm gold.
  Add colours that a finished pet used to the table:

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

## 9. Taste notes (from the user's feedback)
- Creative variety over copies: invent new animals and themes in this style rather than
  replicating the reference pets. (user, first round)


Use this to invent pets that feel new but belong in the same game. Mix freely: any animal × any
theme. Every design needs one **signature feature**: the thing a player recognises from across the
map (the Koi's tail fan, the Lamb's wings, the Tiger's horns and aura, the dog's flame mane).

## Theme palettes
Each is base / accent(s) / trim, plus the blade treatment that sells it. Keep to 1 base + 1–2 accents + trim.

| Theme | Base | Accents | Trim | Signature ideas |
|---|---|---|---|---|
| Frost / crystal | white 240,240,244 | ice blue 110,200,240; deep blue 40,80,160 | gold 245,205,50 | crystal antlers or spikes (Fan with white tips), icicle mane |
| Ember / fire | charcoal 45,45,50 | ember orange 255,120,30; red 210,40,30 | gold | flame mane or tail: Fan, `Glow` accent, yellow tips |
| Storm | slate 90,95,120 | electric yellow 255,225,60; violet 140,80,220 | silver 220,220,230 | zigzag crest, bolt-shaped horn blades |
| Celestial | navy 30,40,90 | star gold 255,215,90; lilac 190,160,255 | gold | star-tipped wings, constellation spots, halo (Secret) |
| Sakura / spring | white | blossom pink 255,160,200; leaf green 110,190,90 | gold | petal-fan tail, flower crown, pink-tipped ears |
| Jungle / tropical | leaf green 90,170,70 | toucan orange 250,140,40; teal 30,170,160 | gold | giant crest or beak, leaf-blade frill |
| Desert | tan 205,180,135 | terracotta 200,100,60; turquoise 60,190,190 | gold | frilled neck, sun-disc crest |
| Oni / yokai | white | crimson 180,30,70; hot pink 255,110,190 | gold | horns, swirl markings, many-tail fan, aura (Eternal) |
| Ocean / reef | pearl 235,235,225 | coral 255,120,110; aqua 60,200,210 | gold | flowing fin fans, pearl gems |
| Candy | cream 250,235,215 | bubblegum 255,140,190; mint 140,230,190 | gold | sprinkle spots, swirl horn, lollipop tail |
| Spooky | bone 225,220,200 | pumpkin 240,120,30; ghost purple 130,80,170 | dark gold 190,150,40 | bone spikes, lantern tail, glowing eyes |
| Royal / knight | white or black | royal blue 40,70,170; crimson | gold | armour plates (thin Loft slabs), crown crest, cape-like fin fan |

## Rarity dial
- **Rare**: a plain, recognisable animal. One accent colour, no trim, small signature feature.
- **Epic / Legendary**: add a theme and a clear signature feature.
- **Mythic**: themed, gold trim details (hooves, tips, collar, gem), a big signature feature, maybe wings.
- **Secret**: something surprising (a hybrid, an unusual creature), glowing accent strips, halo.
- **Eternal**: fiercest version: horns/extra spikes, glowing eyes, aura, dramatic silhouette.

## Body types with PetKit
All coordinates face -Z; see petkit-api.md.

- **Quadruped** (deer, fox, wolf, cat, horse): body Loft chest → rump (5–6 rings), neck Loft angled up
  and forward, head Loft back of skull → nose, four leg Lofts running top → bottom (Chamfer 0.3, 2–3 rings:
  thigh, knee/hock, ankle) plus hoof or paw Blocks. Back legs bend backward at the hock. Legs are
  ~50–60 % of shoulder height for deer/horses, ~40 % for cats/dogs.
- **Bird / flyer**: body Loft, head Loft, tail as a radial Fan, wings as two layered Fans (broad base
  colour + shorter accent layer) with `Mirror = true`, spread up and back. Hover 3–4 studs.
- **Fish / sea creature**: see Koi.lua. Rows of blades for dorsal fins, radial fans for tails,
  pectoral fans hanging down. Hover 2–4 studs.
- **Dragon / reptile**: long body Loft that continues into a tapering tail Loft, spine Fan row along
  the back, horn Fans on the head, wing Fans. Low-slung legs.
- **Floater** (jellyfish, spirit, ghost): dome Loft running top → bottom with wide rings, dangling
  tentacle Lofts with 3–4 rings each that wiggle sideways, glow strips on the `Glow` role.
- **Multi-headed / hybrid**: build one head and neck, then copy them with offsets and small rotations.

## Signature feature recipes
- **Antlers**: thin Loft beam curving up/out/back + a Fan row of tines along it; Mirror.
- **Mane / ruff**: Fan row of thick blades (Thickness 1.5–2.5) around the neck, pointing back/down.
- **Flame**: radial Fan pointing up, `Glow = true`, Tip in a lighter colour; layer 2 fans offset in angle.
- **Crystal cluster**: 3–5 thick blades (Thickness ≈ Width) from one point, Spread 40–60°.
- **Horns**: 2–3 ring Loft that tapers to W = H ≈ 0.2, curving; or a single thick Fan blade.
- **Wings**: radial Fan, Count 6–9, Taper −0.2, broad blades, plus a shorter accent/trim fan on top.
- **Swirl / stripe markings**: thin Loft strips (Chamfer 0) laid on the body surface, or Loft `Paint`.


A pet file defines `VARIANT` and `PET`, then calls `PetKit.build(PET, VARIANT)`.

```lua
local VARIANT = { "Normal" }          -- or { "Golden" }, { "Cyan", "Secret" }, { "Huge", "Eternal" }
local PET = {
	Name = "Koi",
	Scale = 1,                          -- optional overall scale
	Palette = { Base = {234,222,166}, Accent = {240,115,42}, Trim = {245,205,50} },
	HaloAt = { Pos = {0, 21, -4}, Radius = 3 },   -- where the Secret halo floats
	Variants = { },                     -- optional pet-specific variants, same format as PetKit.VARIANTS
	Build = { ...items... },
}
PetKit.build(PET, VARIANT)
```

## Coordinates
- Studs. **+X = pet's right, +Y = up, -Z = the way the pet faces.** y = 0 is the ground.
- Build left/right-symmetric things once on the right side (+X) with `Mirror = true`.

## Colours
Every `Color`/`Tip` is a **palette role name** (string) or an `{r,g,b}` table. Use role names:
variants recolour by role (mutations change `Accent` and `Glow`; Golden remaps everything except
eyes). Built-in roles that need no palette entry: `EyeRim`, `Iris`, `Pupil`, `Shine`, `Glow`.

## Common options (any item)
`Mirror = true` (also build the -X copy), `Glow = true` (Neon), `NoStuds = true` (SmoothPlastic),
`Transparency`.

## Items

### Loft: faceted tube (bodies, heads, necks, legs, tails, whiskers, stripes)
```lua
{ Type = "Loft", Name = "Body", Color = "Base", Steps = 2, Chamfer = 0.3, Up = {0,1,0},
  Rings = {
	{ Pos = {0, 9, -12}, W = 6, H = 7 },
	{ Pos = {0, 10, -4}, W = 7, H = 9, Paint = { Top = "Accent", Left = "Navy" }, Steps = 1, Color = "Base" },
	{ Pos = {0, 10, 8},  W = 2, H = 2 },
  } }
```
- Each pair of rings is split into `Steps` slices; each slice is an octagonal prism (a box
  with its 4 long edges chamfered by `Chamfer` × the smaller of W/H). Width and height step
  between slices, which gives the brick-stepped look.
- `Paint` on a ring colours faces of the slices *after* that ring. Keys: `Top`, `Bottom`,
  `Left`, `Right`, `TopLeft`, `TopRight`, `BottomLeft`, `BottomRight`. Right = the pet's right
  (+X). For near-vertical lofts (legs, necks), `Top` is the face toward the pet's front.
- `Chamfer = 0` gives plain boxes: thin strips, whiskers, stepped voxel limbs.
- Run lofts front → back or top → bottom. A slice is centred between its rings, so to put a
  detail on the surface, use the slice width: surface x = (W_a + W_b) / 4 for Steps = 1.

### Fan: spray of pointed blades (fins, tails, wings, manes, crests, spikes, feathers, claws)
```lua
-- radial: all blades from one point
{ Type = "Fan", Name = "Tail", Origin = {0,10,11}, Dir = {0,0,1}, Normal = {1,0,0},
  Spread = 120, Count = 9, Length = 10, Taper = -0.3, Width = 3.2, Thickness = 0.35,
  Color = "Base", Tip = "Trim", TipFrac = 0.33 }
-- row: blade roots along a line (dorsal fins, manes, spines, a wing's feather edge)
{ Type = "Fan", Name = "Dorsal", Origin = {0,13,-6}, OriginEnd = {0,12,6},
  Dir = {0,1,0.45}, DirEnd = {0,0.7,1}, Normal = {1,0,0},
  Count = 8, Length = 8.5, LengthEnd = 6, Width = 2.8, Color = "Base" }
```
- Each blade is a right-triangle wedge: base at the root, point at the tip. `Width` is the base width,
  `Thickness` its depth. `Normal` is the axis the fan plane faces (fins on the centre line use {1,0,0}).
- `Taper` shortens outer blades (negative lengthens them). `Lengths = {…}` sets each blade.
  `Start` leaves a gap before the blade begins. `Flip = true` swaps which long edge is straight.
- `Tip` paints the last `TipFrac` of each blade (gold tips, pink claws, flame tips).
- Layer a narrow, slightly thicker fan in an accent colour over a broad one for streaks and spikes.

### Eye
```lua
{ Type = "Eye", Pos = {3.42, 10.3, -11.75}, Normal = {1, 0, -0.15}, Radius = 0.95, Mirror = true,
  Iris = "Iris", Glow = false }
```
Place `Pos` on the head surface; `Normal` points out of the head. Rim, iris, pupil and highlight
are built for you.

### Part: one primitive
```lua
{ Type = "Part", Name = "Horn", Shape = "Wedge", Size = {1, 2, 3}, Pos = {1.5, 14, -10},
  Rot = {-30, 0, 15}, Color = "Accent", Mirror = true }
```
Shapes: `Block`, `Wedge` (slope faces -Z and up, tall edge at +Z), `CornerWedge` (don't mirror it),
`Cylinder` (axis along X), `Ball`. `Rot` is degrees, applied like `CFrame.Angles`.

### Halo
`{ Type = "Halo", Pos = {0,20,0}, Radius = 3, Color = "Glow", Segments = 20, Thickness = 0.4 }`.
Usually leave this to the `Secret` variant via `PET.HaloAt`.

## Built-in variants (`PetKit.VARIANTS`)
`Normal`, `Huge` (×2), `Golden`, mutations `Green` `Yellow` `Orange` `Pink` `Purple` `Cyan`
(recolour `Accent` + `Glow`), `Secret` (halo), `Eternal` (pink aura particles and light).
Add pet-specific ones in `PET.Variants`, e.g. `Blood = { Palette = { Accent = {150,0,20} } }`.

## Worked example: Koi (calibration study of a reference pet)
```lua
-- Koi (Mythic): cream koi with orange and navy patches, spiky gold-tipped fins.
-- Reference: references/examples/koi_side.webp, koi_front.png, koi_top.webp
local VARIANT = { "Normal" }

local PET = {
	Name = "Koi",
	Palette = {
		Base = { 234, 222, 166 },
		Accent = { 240, 115, 42 },
		Navy = { 24, 48, 84 },
		Trim = { 245, 205, 50 },
		Mouth = { 95, 50, 45 },
	},
	HaloAt = { Pos = { 0, 21, -4 }, Radius = 3 },
	Build = {
		-- Body, snout to tail root. One slice per ring; Paint on a ring colours the slice behind it,
		-- so blotches are placed face by face and stay asymmetric like real koi.
		{ Type = "Loft", Name = "Body", Color = "Base", Steps = 1, Rings = {
			{ Pos = { 0, 8.5, -16.3 }, W = 2.6, H = 3.0 },
			{ Pos = { 0, 8.7, -15.6 }, W = 3.8, H = 4.4 },
			{ Pos = { 0, 8.9, -14.2 }, W = 5.4, H = 6.4, Paint = { Top = "Accent" } },
			{ Pos = { 0, 9.2, -13 }, W = 6.6, H = 7.6, Paint = { Top = "Accent", TopRight = "Accent" } },
			{ Pos = { 0, 9.4, -10.5 }, W = 7.0, H = 8.2, Paint = { Top = "Navy", TopLeft = "Navy" } },
			{ Pos = { 0, 9.6, -8.5 }, W = 7.4, H = 9.8, Paint = { Top = "Navy", TopLeft = "Navy", Left = "Navy", TopRight = "Accent" } },
			{ Pos = { 0, 9.7, -6.5 }, W = 7.6, H = 10.2, Paint = { Top = "Accent", TopLeft = "Accent", TopRight = "Accent" } },
			{ Pos = { 0, 9.8, -4.5 }, W = 7.6, H = 10.2, Paint = { Top = "Accent", TopLeft = "Accent", Left = "Accent", Right = "Accent" } },
			{ Pos = { 0, 9.9, -2.5 }, W = 7.3, H = 9.8, Paint = { Top = "Accent", Right = "Navy", BottomRight = "Navy" } },
			{ Pos = { 0, 9.9, -0.5 }, W = 6.9, H = 9.0, Paint = { TopRight = "Navy", Right = "Navy" } },
			{ Pos = { 0, 10, 1.5 }, W = 6.3, H = 8.0, Paint = { TopLeft = "Accent", Left = "Accent" } },
			{ Pos = { 0, 10, 3.5 }, W = 5.5, H = 6.3, Paint = { Top = "Accent", TopLeft = "Accent" } },
			{ Pos = { 0, 10.1, 5.5 }, W = 4.6, H = 5.2, Paint = { Top = "Accent" } },
			{ Pos = { 0, 10.1, 7.5 }, W = 3.6, H = 4.1 },
			{ Pos = { 0, 10.2, 9.3 }, W = 2.7, H = 3.1 },
			{ Pos = { 0, 10.2, 10.8 }, W = 2.0, H = 2.5 },
			{ Pos = { 0, 10.2, 12 }, W = 1.7, H = 2.2 },
		} },

		-- Face
		{ Type = "Eye", Pos = { 3.42, 10.3, -11.75 }, Normal = { 1, 0, -0.15 }, Radius = 0.95, Mirror = true },
		{ Type = "Part", Name = "Mouth", Size = { 1.4, 0.25, 0.2 }, Pos = { 0, 7.7, -16.35 }, Color = "Mouth", NoStuds = true },
		-- Gill cover: gold then orange arc behind the eye.
		{ Type = "Loft", Name = "Gill", Color = "Trim", Chamfer = 0, Mirror = true, Rings = {
			{ Pos = { 3.62, 11.4, -10.1 }, W = 0.3, H = 0.5 },
			{ Pos = { 3.62, 9.6, -9.4 }, W = 0.3, H = 0.5 },
			{ Pos = { 3.62, 7.8, -10.1 }, W = 0.3, H = 0.5 },
		} },
		{ Type = "Loft", Name = "Gill", Color = "Accent", Chamfer = 0, Mirror = true, Rings = {
			{ Pos = { 3.62, 11.4, -9.5 }, W = 0.3, H = 0.4 },
			{ Pos = { 3.62, 9.6, -8.8 }, W = 0.3, H = 0.4 },
			{ Pos = { 3.62, 7.8, -9.5 }, W = 0.3, H = 0.4 },
		} },
		-- Barbels: orange outer pair, cream inner pair, hanging from the mouth.
		{ Type = "Loft", Name = "Barbel", Color = "Accent", Chamfer = 0, Mirror = true, Rings = {
			{ Pos = { 1.3, 7.2, -14.9 }, W = 0.35, H = 0.35 },
			{ Pos = { 1.7, 4.6, -14.2 }, W = 0.3, H = 0.3 },
			{ Pos = { 1.6, 2.8, -13.2 }, W = 0.25, H = 0.25 },
		} },
		{ Type = "Loft", Name = "Barbel", Color = "Base", Chamfer = 0, Mirror = true, Rings = {
			{ Pos = { 0.6, 7.2, -15.4 }, W = 0.3, H = 0.3 },
			{ Pos = { 0.8, 5.0, -15.7 }, W = 0.28, H = 0.28 },
			{ Pos = { 0.9, 3.8, -15.1 }, W = 0.22, H = 0.22 },
		} },

		-- Dorsal fin: a row of tall cream blades along the back, orange spikes between them.
		{ Type = "Fan", Name = "Dorsal", Origin = { 0, 13.2, -6.5 }, OriginEnd = { 0, 11.8, 6 }, Dir = { 0, 1, 0.45 }, DirEnd = { 0, 0.7, 1 },
			Normal = { 1, 0, 0 }, Count = 8, Length = 8.5, LengthEnd = 6, Width = 2.8, Thickness = 0.35, Color = "Base" },
		{ Type = "Fan", Name = "DorsalSpike", Origin = { 0, 13.2, -5.7 }, OriginEnd = { 0, 11.9, 6.8 }, Dir = { 0, 1, 0.55 }, DirEnd = { 0, 0.6, 1 },
			Normal = { 1, 0, 0 }, Count = 7, Length = 9.5, LengthEnd = 6.8, Width = 0.9, Thickness = 0.45, Color = "Accent" },

		-- Tail: wide spiky fan, gold tips, navy and orange streaks.
		{ Type = "Fan", Name = "Tail", Origin = { 0, 10.2, 11.2 }, Dir = { 0, 0, 1 }, Normal = { 1, 0, 0 },
			Spread = 120, Count = 9, Length = 10, Taper = -0.3, Width = 3.2, Thickness = 0.35, Color = "Base", Tip = "Trim", TipFrac = 0.33 },
		{ Type = "Fan", Name = "TailStreak", Origin = { 0, 10.2, 11.2 }, Dir = { 0, 0, 1 }, Normal = { 1, 0, 0 },
			Spread = 84, Count = 5, Length = 8.5, Width = 0.8, Thickness = 0.45, Color = "Navy" },
		{ Type = "Fan", Name = "TailStreak", Origin = { 0, 10.2, 11.2 }, Dir = { 0, 0, 1 }, Normal = { 1, 0, 0 },
			Spread = 64, Count = 4, Length = 9, Width = 0.7, Thickness = 0.5, Color = "Accent" },

		-- Pectoral fins: broad navy fans with gold tips and an orange inner layer, hanging back and down.
		{ Type = "Fan", Name = "Pectoral", Origin = { 3.0, 6.6, -8.5 }, Dir = { 0.15, -1, 0.75 }, Normal = { 0.8, 0.15, -0.55 },
			Spread = 50, Count = 6, Length = 7.5, Width = 3.0, Thickness = 0.35, Color = "Navy", Tip = "Trim", TipFrac = 0.3, Mirror = true },
		{ Type = "Fan", Name = "PectoralInner", Origin = { 3.0, 6.6, -8.5 }, Dir = { 0.15, -1, 0.75 }, Normal = { 0.8, 0.15, -0.55 },
			Spread = 36, Count = 4, Length = 5.5, Width = 2.4, Thickness = 0.45, Color = "Accent", Mirror = true },

		-- Anal fin under the rear body.
		{ Type = "Fan", Name = "Anal", Origin = { 0, 7.5, 4 }, Dir = { 0, -1, 0.9 }, Normal = { 1, 0, 0 },
			Spread = 50, Count = 5, Length = 6, Width = 2, Thickness = 0.35, Color = "Base", Tip = "Accent", TipFrac = 0.25 },
	},
}

PetKit.build(PET, VARIANT)
```

## PetKit library (copy verbatim at the top of every pet script)
```lua
-- PetKit: builds brick-style pets from a PET spec so every pet shares the same look.
-- Pet space: +X = pet's right, +Y = up, -Z = the way the pet faces. Y = 0 is the ground.
-- Plain Luau (no type annotations, no compound assignment) so it also runs in the preview tool.

local PetKit = {}

-- Upload assets/stud_normal.png and assets/stud_color.png once (Creator Hub or Asset Manager, as
-- Images) and paste the IMAGE ids here. Leave them as 0 and pets build with plain Plastic.
PetKit.STUD_NORMAL_ID = 0
PetKit.STUD_COLOR_ID = 0
PetKit.STUDS_PER_TILE = 1
PetKit.MATERIAL_VARIANT = "PetStuds"
PetKit.MAX_PARTS = 450

local DEFAULT_COLORS = {
	EyeRim = { 30, 20, 24 },
	Iris = { 78, 44, 50 },
	Pupil = { 12, 8, 10 },
	Shine = { 255, 255, 255 },
	Glow = { 255, 250, 200 },
}
-- Roles that keep their colour on Golden pets.
local EYE_ROLES = { EyeRim = true, Iris = true, Pupil = true, Shine = true }

local GOLD_DARK = { 214, 150, 30 }
local GOLD_LIGHT = { 255, 236, 150 }

-- Variants can be combined: PetKit.build(PET, { "Huge", "Golden" }).
PetKit.VARIANTS = {
	Normal = {},
	Huge = { Scale = 2 },
	Golden = { Golden = true, Reflectance = 0.08, Sparkles = { 255, 220, 90 } },
	-- Mutation recolours: the Accent and Glow roles take the new colour (see style.md).
	Green = { Palette = { Accent = { 40, 200, 110 }, Glow = { 60, 255, 170 } } },
	Yellow = { Palette = { Accent = { 200, 220, 40 }, Glow = { 240, 255, 90 } } },
	Orange = { Palette = { Accent = { 235, 120, 30 }, Glow = { 255, 170, 60 } } },
	Pink = { Palette = { Accent = { 220, 40, 170 }, Glow = { 255, 110, 220 } } },
	Purple = { Palette = { Accent = { 120, 40, 220 }, Glow = { 190, 120, 255 } } },
	Cyan = { Palette = { Accent = { 30, 170, 230 }, Glow = { 90, 230, 255 } } },
	-- Rarity effects.
	Secret = { Halo = true },
	Eternal = { Aura = { 255, 110, 190 } },
}

local SHAPES = {
	Block = Enum.PartType.Block,
	Wedge = Enum.PartType.Wedge,
	CornerWedge = Enum.PartType.CornerWedge,
	Cylinder = Enum.PartType.Cylinder,
	Ball = Enum.PartType.Ball,
}

local WORLD_X = Vector3.new(1, 0, 0)
local WORLD_UP = Vector3.new(0, 1, 0)
local WORLD_FRONT = Vector3.new(0, 0, -1)

local function vec(t, s)
	s = s or 1
	return Vector3.new(t[1] * s, t[2] * s, t[3] * s)
end

local function mirrorT(t)
	return { -t[1], t[2], t[3] }
end

local function lerp(a, b, t)
	return a + (b - a) * t
end

local function toColor(c)
	if typeof(c) == "Color3" then
		return c
	end
	return Color3.fromRGB(c[1], c[2], c[3])
end

local function luminance(c)
	return 0.299 * c.R + 0.587 * c.G + 0.114 * c.B
end

local function ensureMaterialVariant()
	if PetKit.STUD_NORMAL_ID == 0 then
		return nil
	end
	local ms = game:GetService("MaterialService")
	local mv = ms:FindFirstChild(PetKit.MATERIAL_VARIANT)
	if not mv then
		mv = Instance.new("MaterialVariant")
		mv.Name = PetKit.MATERIAL_VARIANT
		mv.BaseMaterial = Enum.Material.Plastic
		mv.NormalMap = "rbxassetid://" .. PetKit.STUD_NORMAL_ID
		if PetKit.STUD_COLOR_ID ~= 0 then
			mv.ColorMap = "rbxassetid://" .. PetKit.STUD_COLOR_ID
		end
		mv.StudsPerTile = PetKit.STUDS_PER_TILE
		mv.MaterialPattern = Enum.MaterialPattern.Regular
		mv.Parent = ms
	end
	return mv.Name
end

-- Resolve a colour reference (palette role name or {r,g,b}) through the active variant.
local function resolveColor(ctx, ref)
	local role = nil
	local c
	if type(ref) == "string" then
		role = ref
		local raw = ctx.palette[ref] or DEFAULT_COLORS[ref]
		assert(raw, "PetKit: unknown colour role '" .. ref .. "' (add it to PET.Palette)")
		c = toColor(raw)
	else
		c = toColor(ref)
	end
	if ctx.golden and not (role and EYE_ROLES[role]) then
		c = toColor(GOLD_DARK):Lerp(toColor(GOLD_LIGHT), luminance(c))
	end
	return c
end

local function makePart(ctx, name, shape, size, cf, colorRef, opts)
	opts = opts or {}
	local p = Instance.new("Part")
	p.Name = name
	p.Shape = SHAPES[shape] or error("PetKit: unknown shape " .. tostring(shape))
	p.Size = size
	p.CFrame = cf
	p.Color = resolveColor(ctx, colorRef)
	if opts.Glow then
		p.Material = Enum.Material.Neon
	elseif opts.NoStuds or not ctx.materialVariant then
		p.Material = opts.NoStuds and Enum.Material.SmoothPlastic or Enum.Material.Plastic
	else
		p.Material = Enum.Material.Plastic
		p.MaterialVariant = ctx.materialVariant
	end
	if opts.Transparency then
		p.Transparency = opts.Transparency
	end
	p.Reflectance = ctx.reflectance
	p.TopSurface = Enum.SurfaceType.Smooth
	p.BottomSurface = Enum.SurfaceType.Smooth
	p.Anchored = false
	p.CanCollide = false
	p.CanTouch = false
	p.Massless = true
	local weld = Instance.new("WeldConstraint")
	weld.Part0 = ctx.root
	weld.Part1 = p
	weld.Parent = p
	p.Parent = ctx.model
	ctx.count = ctx.count + 1
	return p
end

-- Frame whose Z runs along `fwd`, Y is as close to world up as possible (or the pet's front for
-- vertical runs) and X points to the pet's right.
local function frameAlong(pos, fwd, upHint)
	local up = upHint or WORLD_UP
	if math.abs(up:Dot(fwd)) > 0.95 then
		up = WORLD_FRONT
	end
	local y = (up - fwd * up:Dot(fwd)).Unit
	local x = y:Cross(fwd)
	local z = fwd
	if x:Dot(WORLD_X) < -0.01 then
		x = -x
		z = -z
	end
	return CFrame.fromMatrix(pos, x, y, z)
end

------------------------------------------------------------------ builders

-- Part: { Type="Part", Name, Shape, Size={x,y,z}, Pos={x,y,z}, Rot={rx,ry,rz} (deg), Color, Glow, NoStuds }
local function buildPart(ctx, s, mirrored)
	local pos = mirrored and mirrorT(s.Pos) or s.Pos
	local r = s.Rot or { 0, 0, 0 }
	local ry, rz = r[2], r[3]
	if mirrored then
		ry, rz = -ry, -rz
	end
	local cf = CFrame.new(vec(pos, ctx.scale)) * CFrame.Angles(math.rad(r[1]), math.rad(ry), math.rad(rz))
	makePart(ctx, s.Name, s.Shape or "Block", vec(s.Size, ctx.scale), cf, s.Color, s)
end

local PAINT_MIRROR = {
	Left = "Right", Right = "Left",
	TopLeft = "TopRight", TopRight = "TopLeft",
	BottomLeft = "BottomRight", BottomRight = "BottomLeft",
	Top = "Top", Bottom = "Bottom",
}

-- One octagonal slice. The four chamfer wedges give the faceted look; paint lets each face
-- take its own colour (koi patches, tiger stripes, pink bellies...).
local function octSlice(ctx, name, cf, w, h, L, cham, base, paint, opts)
	local c = cham * math.min(w, h)
	local function col(key)
		return paint[key] or base
	end
	if c < 0.06 then
		makePart(ctx, name, "Block", Vector3.new(w, h, L), cf, col("Top"), opts)
		return
	end
	local keys = { "Top", "Bottom", "Left", "Right", "TopLeft", "TopRight", "BottomLeft", "BottomRight" }
	local uniform = true
	for _, k in ipairs(keys) do
		if paint[k] and paint[k] ~= base then
			uniform = false
		end
	end
	if uniform then
		makePart(ctx, name, "Block", Vector3.new(w, h - 2 * c, L), cf, base, opts)
		makePart(ctx, name, "Block", Vector3.new(w - 2 * c, h, L), cf, base, opts)
	else
		makePart(ctx, name, "Block", Vector3.new(w - 2 * c, h - 2 * c, L), cf, base, opts)
		makePart(ctx, name .. "Top", "Block", Vector3.new(w - 2 * c, c, L), cf * CFrame.new(0, h / 2 - c / 2, 0), col("Top"), opts)
		makePart(ctx, name .. "Bottom", "Block", Vector3.new(w - 2 * c, c, L), cf * CFrame.new(0, -h / 2 + c / 2, 0), col("Bottom"), opts)
		makePart(ctx, name .. "Right", "Block", Vector3.new(c, h - 2 * c, L), cf * CFrame.new(w / 2 - c / 2, 0, 0), col("Right"), opts)
		makePart(ctx, name .. "Left", "Block", Vector3.new(c, h - 2 * c, L), cf * CFrame.new(-w / 2 + c / 2, 0, 0), col("Left"), opts)
	end
	-- Corner wedges: right angle toward the slice centre, slope facing out.
	local corners = {
		{ "TopRight", 1, 1, 0 },
		{ "TopLeft", -1, 1, 90 },
		{ "BottomLeft", -1, -1, 180 },
		{ "BottomRight", 1, -1, 270 },
	}
	local wedgeBase = CFrame.fromMatrix(Vector3.new(0, 0, 0), Vector3.new(0, 0, 1), Vector3.new(0, 1, 0))
	for _, k in ipairs(corners) do
		local offset = CFrame.new(k[2] * (w / 2 - c / 2), k[3] * (h / 2 - c / 2), 0)
		local wcf = cf * offset * CFrame.Angles(0, 0, math.rad(k[4])) * wedgeBase
		makePart(ctx, name .. k[1], "Wedge", Vector3.new(L, c, c), wcf, col(k[1]), opts)
	end
end

-- Loft: a faceted tube through rings. Bodies, necks, legs, tails, whiskers.
-- { Type="Loft", Name, Color, Steps=2, Chamfer=0.3, Up={x,y,z},
--   Rings = { { Pos={x,y,z}, W=, H=, Color=?, Paint={Top=,Left=,...}?, Steps=? }, ... } }
local function buildLoft(ctx, s, mirrored)
	local rings = s.Rings
	local s0 = ctx.scale
	local cham = s.Chamfer or 0.3
	local up = s.Up and vec(s.Up) or nil
	local pts = {}
	for i, r in ipairs(rings) do
		pts[i] = vec(mirrored and mirrorT(r.Pos) or r.Pos, s0)
	end
	local dirs = {}
	for i = 1, #rings - 1 do
		dirs[i] = (pts[i + 1] - pts[i]).Unit
	end
	for i = 1, #rings - 1 do
		local a, b = rings[i], rings[i + 1]
		local d = pts[i + 1] - pts[i]
		local steps = a.Steps or s.Steps or 1
		local L = d.Magnitude / steps
		local base = a.Color or s.Color
		local paint = {}
		for k, v in pairs(a.Paint or {}) do
			paint[mirrored and PAINT_MIRROR[k] or k] = v
		end
		local bendIn = i > 1 and dirs[i - 1]:Dot(dirs[i]) < 0.9995
		local bendOut = i < #rings - 1 and dirs[i]:Dot(dirs[i + 1]) < 0.9995
		for k = 0, steps - 1 do
			local tm = (k + 0.5) / steps
			local w = lerp(a.W, b.W, tm) * s0
			local h = lerp(a.H, b.H, tm) * s0
			local center = pts[i] + d * tm
			local len = L
			local ext = math.min(w, h) * 0.18
			if k == 0 and bendIn then
				len = len + ext
				center = center - dirs[i] * (ext / 2)
			end
			if k == steps - 1 and bendOut then
				len = len + ext
				center = center + dirs[i] * (ext / 2)
			end
			local cf = frameAlong(center, dirs[i], up)
			octSlice(ctx, s.Name, cf, w, h, len, cham, base, paint, s)
		end
	end
end

-- Fan: a spray of pointed blades. Fins, wings, manes, spikes, tails, crests.
-- Radial (tails, wings): blades spread over `Spread` degrees from one Origin.
-- Row (dorsal fins, manes, spines): give OriginEnd and the blade roots run along a line, with
-- direction and length blending from Dir/Length to DirEnd/LengthEnd.
-- { Type="Fan", Name, Origin, OriginEnd?, Dir (middle/first blade), DirEnd?, Normal (fan plane normal),
--   Spread (deg), Count, Start=0 (gap before the blade begins), Length, LengthEnd?, Taper (0..1: outer
--   blades shorter, negative: longer), Lengths={...}?, Width, Thickness, Color, Tip=role?, TipFrac=0.3,
--   Flip=false (which long edge is straight), Glow }
local function buildFan(ctx, s, mirrored)
	local s0 = ctx.scale
	local function mt(t)
		return t and (mirrored and mirrorT(t) or t) or nil
	end
	local n = vec(s.Normal).Unit
	if mirrored then
		n = Vector3.new(n.X, -n.Y, -n.Z)
	end
	local function inPlane(d)
		d = vec(d)
		return (d - n * d:Dot(n)).Unit -- keep blades in the fan plane
	end
	local origin = vec(mt(s.Origin), s0)
	local originEnd = s.OriginEnd and vec(mt(s.OriginEnd), s0) or origin
	local dir = inPlane(mt(s.Dir))
	local dirEnd = s.DirEnd and inPlane(mt(s.DirEnd)) or dir
	local count = s.Count or 1
	local spread = s.Spread or 0
	local width = (s.Width or 1) * s0
	local thick = (s.Thickness or 0.3) * s0
	local tipFrac = s.TipFrac or 0.3
	for j = 1, count do
		local u = count == 1 and 0.5 or (j - 1) / (count - 1)
		local t = u * 2 - 1
		local a = math.rad(t * spread / 2)
		local bd = CFrame.fromAxisAngle(n, a):VectorToWorldSpace(dir:Lerp(dirEnd, u).Unit)
		local len = s.Lengths and s.Lengths[j] or lerp(s.Length or 3, s.LengthEnd or s.Length or 3, u) * (1 - (s.Taper or 0) * math.abs(t))
		len = len * s0
		local root = origin:Lerp(originEnd, u) + bd * ((s.Start or 0) * s0)
		local center = root + bd * (len / 2)
		local x = n
		local z = -bd
		local y = z:Cross(x)
		if s.Flip then
			x, y = -x, -y
		end
		local cf = CFrame.fromMatrix(center, x, y, z)
		-- Alternate blade thickness slightly so overlapping blades never share a face (z-fighting).
		local th = thick * (1 + 0.05 * ((j - 1) % 2))
		makePart(ctx, s.Name, "Wedge", Vector3.new(th, width, len), cf, s.Color, s)
		if s.Tip then
			local tcf = cf * CFrame.new(0, -width / 2 + width * tipFrac / 2, -len / 2 + len * tipFrac / 2)
			local e = math.max(0.03, 0.02 * width) -- grow the tip a hair so it never shares a face with its blade
			makePart(ctx, s.Name .. "Tip", "Wedge", Vector3.new(th * 1.12, width * tipFrac + 2 * e, len * tipFrac + 2 * e), tcf, s.Tip, s)
		end
	end
end

-- Eye: glossy cartoon eye. { Type="Eye", Pos, Normal (outward), Radius, Iris=role?, Glow, Mirror }
local function buildEye(ctx, s, mirrored)
	local s0 = ctx.scale
	local pos = vec(mirrored and mirrorT(s.Pos) or s.Pos, s0)
	local n = vec(mirrored and mirrorT(s.Normal) or s.Normal).Unit
	local R = s.Radius * s0
	local t = math.max(0.06, R * 0.14)
	local up = WORLD_UP
	if math.abs(up:Dot(n)) > 0.95 then
		up = WORLD_FRONT
	end
	local y = (up - n * up:Dot(n)).Unit
	local cf = CFrame.fromMatrix(pos, n, y)
	local front = WORLD_FRONT - n * WORLD_FRONT:Dot(n)
	if front.Magnitude > 0.05 then
		front = front.Unit
	else
		front = Vector3.new(0, 0, 0)
	end
	local eo = { NoStuds = true }
	local io = { NoStuds = true, Glow = s.Glow }
	makePart(ctx, "EyeRim", "Cylinder", Vector3.new(t, 2 * R, 2 * R), cf, s.Rim or "EyeRim", eo)
	makePart(ctx, "Iris", "Cylinder", Vector3.new(t, 1.7 * R, 1.7 * R), cf + n * (t * 0.35), s.Iris or "Iris", io)
	makePart(ctx, "Pupil", "Cylinder", Vector3.new(t, 0.9 * R, 0.9 * R), cf + n * (t * 0.7), s.Pupil or "Pupil", eo)
	local shinePos = y * (0.42 * R) + front * (0.28 * R) + n * t
	makePart(ctx, "Shine", "Cylinder", Vector3.new(t, 0.42 * R, 0.42 * R), cf + shinePos, "Shine", { NoStuds = true, Glow = true })
end

-- Halo: glowing ring. { Type="Halo", Pos, Radius, Color, Segments=20, Thickness=0.4 }
local function buildHalo(ctx, s)
	local s0 = ctx.scale
	local pos = vec(s.Pos, s0)
	local R = s.Radius * s0
	local seg = s.Segments or 20
	local th = (s.Thickness or 0.4) * s0
	local L = 2 * math.pi * R / seg * 1.08
	for i = 1, seg do
		local a = (i - 0.5) / seg * 2 * math.pi
		local cf = CFrame.new(pos + Vector3.new(math.cos(a) * R, 0, math.sin(a) * R)) * CFrame.Angles(0, -a, 0)
		makePart(ctx, "Halo", "Block", Vector3.new(th, th, L), cf, s.Color or "Glow", { Glow = true })
	end
end

local BUILDERS = { Part = buildPart, Loft = buildLoft, Fan = buildFan, Eye = buildEye, Halo = buildHalo }

local function addParticles(ctx, color, rate, size)
	local att = Instance.new("Attachment")
	att.Name = "FX"
	att.Parent = ctx.root
	local pe = Instance.new("ParticleEmitter")
	pe.Color = ColorSequence.new(toColor(color))
	pe.LightEmission = 1
	pe.Rate = rate
	pe.Lifetime = NumberRange.new(0.8, 1.6)
	pe.Speed = NumberRange.new(1, 3)
	pe.SpreadAngle = Vector2.new(180, 180)
	pe.Size = NumberSequence.new(size * ctx.scale, 0)
	pe.Transparency = NumberSequence.new(0.2, 1)
	pe.Parent = att
	local light = Instance.new("PointLight")
	light.Color = toColor(color)
	light.Range = 12 * ctx.scale
	light.Brightness = 1.5
	light.Parent = ctx.root
end

------------------------------------------------------------------ public API

function PetKit.build(PET, variants, parent)
	if type(variants) == "string" then
		variants = { variants }
	end
	variants = variants or { "Normal" }
	local cfg = { scale = PET.Scale or 1, palette = {}, golden = false, reflectance = 0 }
	for k, v in pairs(PET.Palette or {}) do
		cfg.palette[k] = v
	end
	local label = {}
	for _, name in ipairs(variants) do
		local v = PetKit.VARIANTS[name] or (PET.Variants and PET.Variants[name])
		assert(v, "PetKit: unknown variant '" .. tostring(name) .. "'")
		if name ~= "Normal" then
			table.insert(label, name)
		end
		cfg.scale = cfg.scale * (v.Scale or 1)
		for k, c in pairs(v.Palette or {}) do
			cfg.palette[k] = c
		end
		cfg.golden = cfg.golden or v.Golden == true
		cfg.reflectance = math.max(cfg.reflectance, v.Reflectance or 0)
		cfg.halo = cfg.halo or v.Halo
		cfg.aura = v.Aura or cfg.aura
		cfg.sparkles = v.Sparkles or cfg.sparkles
	end

	local model = Instance.new("Model")
	model.Name = PET.Name .. (#label > 0 and ("_" .. table.concat(label, "_")) or "")
	local root = Instance.new("Part")
	root.Name = "Root"
	root.Size = Vector3.new(1, 1, 1)
	root.CFrame = CFrame.new(0, 0, 0)
	root.Transparency = 1
	root.Anchored = true
	root.CanCollide = false
	root.CanTouch = false
	root.Massless = true
	root.Parent = model
	model.PrimaryPart = root

	local ctx = {
		model = model,
		root = root,
		scale = cfg.scale,
		palette = cfg.palette,
		golden = cfg.golden,
		reflectance = cfg.reflectance,
		materialVariant = ensureMaterialVariant(),
		count = 0,
	}
	for _, item in ipairs(PET.Build) do
		local fn = BUILDERS[item.Type or "Part"] or error("PetKit: unknown Type " .. tostring(item.Type))
		fn(ctx, item, false)
		if item.Mirror then
			fn(ctx, item, true)
		end
	end
	if cfg.halo then
		local halo = PET.HaloAt
		if not halo then -- default: float above the tallest point
			local bcf, bsize = model:GetBoundingBox()
			local top = (bcf.Position.Y + bsize.Y / 2) / ctx.scale
			halo = { Pos = { 0, top + 2.5, bcf.Position.Z / ctx.scale }, Radius = math.max(2, bsize.X / ctx.scale * 0.2) }
		end
		buildHalo(ctx, { Pos = halo.Pos, Radius = halo.Radius, Color = "Glow" })
	end
	if cfg.aura then
		addParticles(ctx, cfg.aura, 40, 1.4)
	end
	if cfg.sparkles then
		addParticles(ctx, cfg.sparkles, 12, 0.6)
	end

	model.WorldPivot = CFrame.new(0, 0, 0) -- bottom centre: pets sit on the ground
	model.Parent = parent or workspace
	local _, size = model:GetBoundingBox()
	print(string.format("PetKit: built %s with %d parts, %.1f x %.1f x %.1f studs", model.Name, ctx.count, size.X, size.Y, size.Z))
	if ctx.count > PetKit.MAX_PARTS then
		warn("PetKit: " .. ctx.count .. " parts is heavy for a following pet; merge or drop small details")
	end
	if PetKit.STUD_NORMAL_ID == 0 then
		warn("PetKit: STUD_NORMAL_ID not set, so the pet has no studs. Upload assets/stud_normal.png and paste its id")
	end
	return model
end

return PetKit
```
