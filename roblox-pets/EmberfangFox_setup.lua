-- Emberfang Fox setup: run in Studio's Command Bar AFTER importing EmberfangFox.glb.
-- Select the imported fox model in the Explorer first, then paste this and press Enter.
-- It makes the flame tail glow (Neon), welds everything to a Root at the feet,
-- adds an ember aura, and places the fox next to the spawn so you can see it in play.

local Selection = game:GetService("Selection")
local model = Selection:Get()[1]
assert(model and model:IsA("Model"), "Select the imported fox Model in the Explorer first")
model.Name = "EmberfangFox"

local cf, size = model:GetBoundingBox()
local root = Instance.new("Part")
root.Name = "Root"
root.Size = Vector3.new(1, 1, 1)
root.Transparency = 1
root.Anchored = true
root.CanCollide = false
root.CFrame = CFrame.new(cf.Position.X, cf.Position.Y - size.Y / 2, cf.Position.Z)
root.Parent = model
model.PrimaryPart = root

for _, p in ipairs(model:GetDescendants()) do
	if p:IsA("BasePart") and p ~= root then
		p.Anchored = false
		p.CanCollide = false
		p.CanTouch = false
		p.Massless = true
		local n = string.lower(p.Name)
		if string.find(n, "cone") or string.find(n, "glow") then -- the flame tail
			p.Material = Enum.Material.Neon
			p.Color = Color3.fromRGB(255, 150, 40)
		end
		local w = Instance.new("WeldConstraint")
		w.Part0 = root
		w.Part1 = p
		w.Parent = p
	end
end

-- Mythic ember aura
local att = Instance.new("Attachment", root)
att.Position = Vector3.new(0, size.Y * 0.5, 0)
local fx = Instance.new("ParticleEmitter", att)
fx.Color = ColorSequence.new(Color3.fromRGB(255, 140, 40))
fx.LightEmission = 1
fx.Rate = 15
fx.Lifetime = NumberRange.new(1, 2)
fx.Speed = NumberRange.new(1, 3)
fx.SpreadAngle = Vector2.new(180, 180)
fx.Size = NumberSequence.new(0.6, 0)
local light = Instance.new("PointLight", root)
light.Color = Color3.fromRGB(255, 140, 40)
light.Range = 14

-- Place on the map next to the spawn, standing on the ground
local spawn = workspace:FindFirstChildWhichIsA("SpawnLocation", true)
local base = spawn and spawn.Position or Vector3.new(0, 0, 0)
local origin = base + Vector3.new(15, 60, 0)
local hit = workspace:Raycast(origin, Vector3.new(0, -200, 0))
local groundY = hit and hit.Position.Y or base.Y
model:PivotTo(CFrame.new(origin.X, groundY, origin.Z) * CFrame.Angles(0, math.rad(180), 0))
model.Parent = workspace
print("EmberfangFox placed at", model:GetPivot().Position)
