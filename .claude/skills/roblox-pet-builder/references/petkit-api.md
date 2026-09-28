# PetKit spec reference

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
