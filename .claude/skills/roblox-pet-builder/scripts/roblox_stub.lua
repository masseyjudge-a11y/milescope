-- Minimal stand-ins for the Roblox APIs PetKit uses, so pet scripts run under plain Lua
-- (via scripts/preview.py). Geometry math mirrors Roblox; everything else is bookkeeping.

local sqrt, cos, sin = math.sqrt, math.cos, math.sin

---------------------------------------------------------------- Vector3
local V = {}
V.__index = function(v, k)
	if k == "Magnitude" then
		return sqrt(v.X * v.X + v.Y * v.Y + v.Z * v.Z)
	elseif k == "Unit" then
		local m = sqrt(v.X * v.X + v.Y * v.Y + v.Z * v.Z)
		assert(m > 1e-9, "Unit of zero vector")
		return Vector3.new(v.X / m, v.Y / m, v.Z / m)
	end
	return V[k]
end
Vector3 = {}
function Vector3.new(x, y, z)
	return setmetatable({ X = x or 0, Y = y or 0, Z = z or 0, __type = "Vector3" }, V)
end
V.__add = function(a, b) return Vector3.new(a.X + b.X, a.Y + b.Y, a.Z + b.Z) end
V.__sub = function(a, b) return Vector3.new(a.X - b.X, a.Y - b.Y, a.Z - b.Z) end
V.__unm = function(a) return Vector3.new(-a.X, -a.Y, -a.Z) end
V.__mul = function(a, b)
	if type(a) == "number" then a, b = b, a end
	if type(b) == "number" then return Vector3.new(a.X * b, a.Y * b, a.Z * b) end
	return Vector3.new(a.X * b.X, a.Y * b.Y, a.Z * b.Z)
end
V.__div = function(a, b) return Vector3.new(a.X / b, a.Y / b, a.Z / b) end
function V.Dot(a, b) return a.X * b.X + a.Y * b.Y + a.Z * b.Z end
function V.Cross(a, b)
	return Vector3.new(a.Y * b.Z - a.Z * b.Y, a.Z * b.X - a.X * b.Z, a.X * b.Y - a.Y * b.X)
end
function V.Lerp(a, b, t) return a + (b - a) * t end

Vector2 = { new = function(x, y) return { X = x, Y = y, __type = "Vector2" } end }

---------------------------------------------------------------- CFrame
-- Stored as position p plus rotation columns x, y, z (the local axes in world space).
local C = {}
C.__index = function(c, k)
	if k == "Position" then return c.p
	elseif k == "RightVector" then return c.x
	elseif k == "UpVector" then return c.y
	elseif k == "LookVector" then return -c.z
	end
	return C[k]
end
local function mk(p, x, y, z)
	return setmetatable({ p = p, x = x, y = y, z = z, __type = "CFrame" }, C)
end
local function rot(c, v) return c.x * v.X + c.y * v.Y + c.z * v.Z end
CFrame = {}
function CFrame.new(a, b, c)
	local p
	if type(a) == "table" then p = a else p = Vector3.new(a or 0, b or 0, c or 0) end
	return mk(p, Vector3.new(1, 0, 0), Vector3.new(0, 1, 0), Vector3.new(0, 0, 1))
end
function CFrame.fromMatrix(p, x, y, z)
	z = z or x:Cross(y)
	return mk(p, x.Unit, y.Unit, z.Unit)
end
function CFrame.fromAxisAngle(axis, a)
	local u = axis.Unit
	local function r(v) -- Rodrigues
		return v * cos(a) + u:Cross(v) * sin(a) + u * (u:Dot(v) * (1 - cos(a)))
	end
	return mk(Vector3.new(0, 0, 0), r(Vector3.new(1, 0, 0)), r(Vector3.new(0, 1, 0)), r(Vector3.new(0, 0, 1)))
end
function CFrame.Angles(rx, ry, rz) -- Rx * Ry * Rz, like Roblox
	return CFrame.fromAxisAngle(Vector3.new(1, 0, 0), rx)
		* CFrame.fromAxisAngle(Vector3.new(0, 1, 0), ry)
		* CFrame.fromAxisAngle(Vector3.new(0, 0, 1), rz)
end
C.__mul = function(a, b)
	if b.__type == "Vector3" then return a.p + rot(a, b) end
	return mk(a.p + rot(a, b.p), rot(a, b.x), rot(a, b.y), rot(a, b.z))
end
C.__add = function(a, v) return mk(a.p + v, a.x, a.y, a.z) end
C.__sub = function(a, v) return mk(a.p - v, a.x, a.y, a.z) end
function C.VectorToWorldSpace(c, v) return rot(c, v) end
function C.PointToWorldSpace(c, v) return c.p + rot(c, v) end

---------------------------------------------------------------- Color3 & misc
local Col = {}
Col.__index = Col
Color3 = {}
function Color3.new(r, g, b) return setmetatable({ R = r, G = g, B = b, __type = "Color3" }, Col) end
function Color3.fromRGB(r, g, b) return Color3.new(r / 255, g / 255, b / 255) end
function Color3.fromHSV(h, s, v)
	local i = math.floor(h * 6)
	local f = h * 6 - i
	local p, q, t = v * (1 - s), v * (1 - f * s), v * (1 - (1 - f) * s)
	local m = i % 6
	local r, g, b
	if m == 0 then r, g, b = v, t, p elseif m == 1 then r, g, b = q, v, p
	elseif m == 2 then r, g, b = p, v, t elseif m == 3 then r, g, b = p, q, v
	elseif m == 4 then r, g, b = t, p, v else r, g, b = v, p, q end
	return Color3.new(r, g, b)
end
function Col.Lerp(a, b, t) return Color3.new(a.R + (b.R - a.R) * t, a.G + (b.G - a.G) * t, a.B + (b.B - a.B) * t) end

ColorSequence = { new = function(...) return { __type = "ColorSequence", ... } end }
NumberSequence = { new = function(...) return { __type = "NumberSequence", ... } end }
NumberRange = { new = function(...) return { __type = "NumberRange", ... } end }

Enum = setmetatable({}, {
	__index = function(_, group)
		return setmetatable({}, { __index = function(_, item) return group .. "." .. item end })
	end,
})

function typeof(v)
	if type(v) == "table" and v.__type then return v.__type end
	return type(v)
end

warn = function(...) print("WARN:", ...) end

---------------------------------------------------------------- Instances
local I = {}
local function instIndex(inst, k)
	if I[k] then return I[k] end
	return rawget(inst, "__props")[k]
end
local function instNewIndex(inst, k, v)
	local props = rawget(inst, "__props")
	if k == "Parent" then
		local old = props.Parent
		if old then
			local kids = rawget(old, "__children")
			for i = #kids, 1, -1 do if kids[i] == inst then table.remove(kids, i) end end
		end
		if v then table.insert(rawget(v, "__children"), inst) end
	end
	props[k] = v
end
local function newInstance(className)
	local inst = { __children = {}, __props = { ClassName = className, Name = className } }
	return setmetatable(inst, { __index = instIndex, __newindex = instNewIndex })
end
Instance = { new = newInstance }
function I.GetChildren(inst) return { table.unpack(rawget(inst, "__children")) } end
function I.FindFirstChild(inst, name)
	for _, c in ipairs(rawget(inst, "__children")) do if c.Name == name then return c end end
	return nil
end
function I.IsA(inst, cls) return inst.ClassName == cls or (cls == "BasePart" and inst.ClassName == "Part") end
function I.GetDescendants(inst)
	local out = {}
	local function walk(n)
		for _, c in ipairs(rawget(n, "__children")) do table.insert(out, c); walk(c) end
	end
	walk(inst)
	return out
end
function I.GetBoundingBox(model)
	local lo = { math.huge, math.huge, math.huge }
	local hi = { -math.huge, -math.huge, -math.huge }
	for _, p in ipairs(model:GetDescendants()) do
		if p.ClassName == "Part" and p.Transparency ~= 1 then
			local cf, s = p.CFrame, p.Size
			for _, sx in ipairs({ -1, 1 }) do for _, sy in ipairs({ -1, 1 }) do for _, sz in ipairs({ -1, 1 }) do
				local w = cf * Vector3.new(sx * s.X / 2, sy * s.Y / 2, sz * s.Z / 2)
				lo = { math.min(lo[1], w.X), math.min(lo[2], w.Y), math.min(lo[3], w.Z) }
				hi = { math.max(hi[1], w.X), math.max(hi[2], w.Y), math.max(hi[3], w.Z) }
			end end end
		end
	end
	local c = Vector3.new((lo[1] + hi[1]) / 2, (lo[2] + hi[2]) / 2, (lo[3] + hi[3]) / 2)
	return CFrame.new(c), Vector3.new(hi[1] - lo[1], hi[2] - lo[2], hi[3] - lo[3])
end
function I.PivotTo(model, cf) model.WorldPivot = cf end

local services = {}
game = newInstance("DataModel")
function I.GetService(_, name)
	if not services[name] then
		services[name] = newInstance(name)
		services[name].Parent = game
	end
	return services[name]
end
workspace = game:GetService("Workspace")

-- Flatten every visible Part for the renderer.
function __dump_parts()
	local out = {}
	for _, p in ipairs(workspace:GetDescendants()) do
		if p.ClassName == "Part" and p.Transparency ~= 1 then
			local cf, s, c = p.CFrame, p.Size, p.Color
			table.insert(out, {
				name = p.Name, shape = p.Shape or "PartType.Block", material = p.Material or "Material.Plastic",
				size = { s.X, s.Y, s.Z }, pos = { cf.p.X, cf.p.Y, cf.p.Z },
				rx = { cf.x.X, cf.x.Y, cf.x.Z }, ry = { cf.y.X, cf.y.Y, cf.y.Z }, rz = { cf.z.X, cf.z.Y, cf.z.Z },
				color = { c.R, c.G, c.B },
			})
		end
	end
	return out
end
