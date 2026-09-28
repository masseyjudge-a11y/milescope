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
