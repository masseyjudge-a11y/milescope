# Design ideas: making new pets in the house style

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
