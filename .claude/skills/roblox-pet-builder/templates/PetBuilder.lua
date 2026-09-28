-- Roblox Pet Builder: paste into Studio's Command Bar or run it via Studio MCP.
-- Only edit the PET table (and VARIANT). The helper functions keep every pet consistent.

local VARIANT = "Normal" -- "Normal" | "Golden" | "Rainbow" | "Huge" (rules in style.md)

local PET = {
	Name = "ExamplePet",
	-- Each part: name, shape ("Ball"|"Block"|"Cylinder"|"Wedge"), size {x,y,z},
	-- offset {x,y,z} from Root (bottom-center), color {r,g,b}, optional material/rotation {x,y,z} degrees.
	Parts = {
		{ Name = "Body", Shape = "Ball",  Size = {2, 1.8, 2},   Offset = {0, 0.9, 0},  Color = {255, 255, 255} },
		{ Name = "Head", Shape = "Ball",  Size = {2.2, 2, 2.2}, Offset = {0, 2.3, -0.3}, Color = {255, 255, 255} },
		{ Name = "EyeL", Shape = "Ball",  Size = {0.4, 0.6, 0.2}, Offset = {-0.45, 2.4, -1.35}, Color = {20, 20, 20} },
		{ Name = "EyeR", Shape = "Ball",  Size = {0.4, 0.6, 0.2}, Offset = {0.45, 2.4, -1.35},  Color = {20, 20, 20} },
	},
}

local VARIANT_RULES = {
	Normal  = { scale = 1 },
	Golden  = { scale = 1, color = Color3.fromRGB(255, 200, 50), material = Enum.Material.Foil },
	Rainbow = { scale = 1, rainbow = true },
	Huge    = { scale = 3 },
}

local rule = VARIANT_RULES[VARIANT]
local model = Instance.new("Model")
model.Name = PET.Name .. (VARIANT ~= "Normal" and ("_" .. VARIANT) or "")

local root = Instance.new("Part")
root.Name = "Root"
root.Size = Vector3.new(1, 1, 1) * rule.scale
root.Transparency = 1
root.CanCollide, root.Massless, root.Anchored = false, true, true
root.CFrame = CFrame.new(0, 0, 0)
root.Parent = model
model.PrimaryPart = root

local function v3(t) return Vector3.new(t[1], t[2], t[3]) * rule.scale end

for i, spec in ipairs(PET.Parts) do
	local p = Instance.new("Part")
	p.Name = spec.Name
	p.Size = v3(spec.Size)
	p.Shape = spec.Shape == "Ball" and Enum.PartType.Ball
		or spec.Shape == "Cylinder" and Enum.PartType.Cylinder
		or spec.Shape == "Wedge" and Enum.PartType.Wedge
		or Enum.PartType.Block
	if spec.Shape == "Ball" then -- allow non-uniform balls
		local m = Instance.new("SpecialMesh"); m.MeshType = Enum.MeshType.Sphere; m.Parent = p
		p.Shape = Enum.PartType.Block
	end
	local rot = spec.Rotation or {0, 0, 0}
	p.CFrame = root.CFrame * CFrame.new(v3(spec.Offset))
		* CFrame.Angles(math.rad(rot[1]), math.rad(rot[2]), math.rad(rot[3]))
	p.Material = rule.material or spec.Material or Enum.Material.SmoothPlastic
	p.Color = rule.color or Color3.fromRGB(spec.Color[1], spec.Color[2], spec.Color[3])
	if rule.rainbow then p.Color = Color3.fromHSV((i / #PET.Parts) % 1, 0.7, 1) end
	p.TopSurface, p.BottomSurface = Enum.SurfaceType.Smooth, Enum.SurfaceType.Smooth
	p.CanCollide, p.Massless, p.Anchored = false, true, false
	local w = Instance.new("WeldConstraint"); w.Part0 = root; w.Part1 = p; w.Parent = p
	p.Parent = model
end

root.Anchored = false
model:PivotTo(CFrame.new(0, 5, 0))
model.Parent = workspace
print("Built " .. model.Name)
