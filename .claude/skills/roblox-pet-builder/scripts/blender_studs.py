"""Blender helper for the house pet style: studs + baking + export.

Run inside Blender (any Blender MCP's Python/exec tool, or Blender's Text Editor).
Exec this file first, then call the functions.

Tested 2026-09-28 in Blender 5.2 (Higgsfield 3D Jutsu cloud Blender): make_stud_tile,
apply_stud_material, bake_stud_normal, make_studded_copy and bake_studs all ran and the
renders matched the reference studs. export_fbx has not been run yet.

Default (grid studs, matches the references: neat rows of square studs on every facet):
    body = bpy.data.objects["Koi_Body"]   # faceted body, one material per palette role
    unwrap_for_studs(body)                # facet-aligned UVs at uniform scale
    apply_stud_material(body)             # tiled stud normal map in every material (live preview)
    bake_stud_normal(body, size=2048)     # -> <name>_normal.png on the body's own UVs (for Roblox)
    export_fbx([body, *glow_parts], "Koi")

Alternative (real 3D studs, scattered, not in rows): make_studded_copy + bake_studs.
"""
import math
import os

import numpy as np

import bpy

STUD_PITCH = 1.0     # studs are 1 stud apart in Roblox units (1 Blender unit = 1 stud)
STUD_SIZE = 0.38     # stud width, as in the references (square, sparse)
STUD_HEIGHT = 0.14   # how far a stud sticks out
BEVEL = 0.04


def _out_dir():
    d = bpy.path.abspath("//") or os.path.expanduser("~")
    os.makedirs(d, exist_ok=True)
    return d


def make_stud_tile(name="StudTile", n=256, stud=STUD_SIZE, bevel=0.07, strength=2.2):
    """One stud cell as an OpenGL tangent normal map, generated in Blender (no files needed)."""
    c = (np.arange(n) + 0.5) / n - 0.5
    X, Y = np.meshgrid(c, c)
    d = np.maximum(abs(X), abs(Y))
    h = np.clip((stud / 2 - d) / bevel, 0, 1)
    h = h * h * (3 - 2 * h)
    gy, gx = np.gradient(h, 1.0 / n)  # Blender image rows run bottom-up, so rows = +V
    s = strength * bevel
    nx, ny, nz = -gx * s, -gy * s, np.ones_like(h)
    ln = np.sqrt(nx * nx + ny * ny + nz * nz)
    rgba = np.stack([nx / ln * 0.5 + 0.5, ny / ln * 0.5 + 0.5, nz / ln * 0.5 + 0.5, np.ones_like(h)], -1)
    img = bpy.data.images.get(name) or bpy.data.images.new(name, n, n, alpha=False)
    img.colorspace_settings.name = "Non-Color"
    img.pixels.foreach_set(rgba.astype(np.float32).ravel())
    return img


def unwrap_for_studs(obj, angle=5):
    """Facet-aligned UV islands at one shared scale, so stud rows follow each facet."""
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    bpy.ops.uv.smart_project(angle_limit=math.radians(angle), island_margin=0.01)
    bpy.ops.uv.average_islands_scale()
    bpy.ops.object.mode_set(mode="OBJECT")


def uv_studs_per_unit(obj):
    """How many world units one UV unit spans (so the tile repeats once per stud)."""
    me = obj.data
    uv = me.uv_layers.active.data
    a3 = sum(p.area for p in me.polygons)
    a2 = 0.0
    for p in me.polygons:
        pts = [uv[i].uv for i in p.loop_indices]
        a2 += abs(sum(pts[i].x * pts[i - 1].y - pts[i - 1].x * pts[i].y for i in range(len(pts)))) / 2
    return math.sqrt(a3 / a2)


def apply_stud_material(obj, pitch=STUD_PITCH):
    """Wire the stud tile into the Normal input of every material on obj (1 stud per `pitch` units)."""
    tile = make_stud_tile()
    k = uv_studs_per_unit(obj) / pitch
    for slot in obj.material_slots:
        mat = slot.material
        mat.use_nodes = True
        nt = mat.node_tree
        N = nt.nodes
        bsdf = next(n for n in N if n.type == "BSDF_PRINCIPLED")
        tc = N.new("ShaderNodeTexCoord")
        mp = N.new("ShaderNodeMapping")
        mp.name = "StudMapping"
        mp.inputs["Scale"].default_value = (k, k, 1)
        tex = N.new("ShaderNodeTexImage")
        tex.name = "StudTile"
        tex.image = tile
        nm = N.new("ShaderNodeNormalMap")
        nt.links.new(tc.outputs["UV"], mp.inputs["Vector"])
        nt.links.new(mp.outputs["Vector"], tex.inputs["Vector"])
        nt.links.new(tex.outputs["Color"], nm.inputs["Color"])
        nt.links.new(nm.outputs["Normal"], bsdf.inputs["Normal"])
    return k


def bake_stud_normal(obj, size=2048):
    """Bake the tiled studs into one normal map on obj's own UVs: what Roblox's
    SurfaceAppearance.NormalMap needs. Saves <name>_normal.png."""
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.cycles.samples = 1
    bake = scene.render.bake
    bake.use_selected_to_active = False
    bake.margin = 4
    bake.normal_space = "TANGENT"
    bake.normal_g = "POS_Y"
    img = _bake_image(obj.name + "_normal", size)
    img.colorspace_settings.name = "Non-Color"
    for slot in obj.material_slots:
        _target_node_in(slot.material, img)
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.bake(type="NORMAL")
    img.save()
    return img.filepath_raw


def _target_node_in(mat, img):
    N = mat.node_tree.nodes
    node = N.get("BakeTarget") or N.new("ShaderNodeTexImage")
    node.name = "BakeTarget"
    node.image = img
    N.active = node


def make_studded_copy(obj, pitch=STUD_PITCH, size=STUD_SIZE, height=STUD_HEIGHT):
    """Duplicate `obj` and cover it in real square studs with Geometry Nodes.

    Studs are scattered with Poisson-disk spacing = pitch, aligned to the surface normal,
    then realized so the result can be baked. Returns the new high-poly object.
    """
    hi = obj.copy()
    hi.data = obj.data.copy()
    hi.name = obj.name + "_Studded"
    bpy.context.collection.objects.link(hi)

    ng = bpy.data.node_groups.new(hi.name + "_Studs", "GeometryNodeTree")
    ng.interface.new_socket("Geometry", in_out="INPUT", socket_type="NodeSocketGeometry")
    ng.interface.new_socket("Geometry", in_out="OUTPUT", socket_type="NodeSocketGeometry")
    n = ng.nodes
    L = ng.links
    gin = n.new("NodeGroupInput")
    gout = n.new("NodeGroupOutput")

    dist = n.new("GeometryNodeDistributePointsOnFaces")
    dist.distribute_method = "POISSON"
    dist.inputs["Distance Min"].default_value = pitch
    dist.inputs["Density Max"].default_value = 4.0 / (pitch * pitch)

    stud = n.new("GeometryNodeMeshCube")
    stud.inputs["Size"].default_value = (size, size, height * 2)  # half sinks into the surface

    align = n.new("FunctionNodeAlignEulerToVector")
    align.axis = "Z"

    inst = n.new("GeometryNodeInstanceOnPoints")
    real = n.new("GeometryNodeRealizeInstances")
    join = n.new("GeometryNodeJoinGeometry")

    L.new(gin.outputs[0], dist.inputs["Mesh"])
    L.new(dist.outputs["Points"], inst.inputs["Points"])
    L.new(stud.outputs["Mesh"], inst.inputs["Instance"])
    L.new(dist.outputs["Normal"], align.inputs["Vector"])
    L.new(align.outputs["Rotation"], inst.inputs["Rotation"])
    L.new(inst.outputs["Instances"], real.inputs["Geometry"])
    L.new(gin.outputs[0], join.inputs["Geometry"])
    L.new(real.outputs["Geometry"], join.inputs["Geometry"])
    L.new(join.outputs["Geometry"], gout.inputs[0])

    mod = hi.modifiers.new("Studs", "NODES")
    mod.node_group = ng
    bev = hi.modifiers.new("StudBevel", "BEVEL")
    bev.width = BEVEL
    bev.limit_method = "ANGLE"
    return hi


def _bake_image(name, size):
    img = bpy.data.images.get(name) or bpy.data.images.new(name, size, size, alpha=False)
    img.filepath_raw = os.path.join(_out_dir(), name + ".png")
    img.file_format = "PNG"
    return img


def _target_node(obj, img):
    mat = obj.active_material
    if mat is None:
        mat = bpy.data.materials.new(obj.name + "_Mat")
        mat.use_nodes = True
        obj.data.materials.append(mat)
    mat.use_nodes = True
    node = mat.node_tree.nodes.get("BakeTarget") or mat.node_tree.nodes.new("ShaderNodeTexImage")
    node.name = "BakeTarget"
    node.image = img
    mat.node_tree.nodes.active = node
    return node


def bake_studs(low, high, size=2048, cage=0.25):
    """Bake the studs from `high` onto `low`'s UVs: tangent normal map (OpenGL, what Roblox
    expects) and ambient occlusion. `low` must be UV-unwrapped (Smart UV Project is fine)."""
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.cycles.samples = 64
    bake = scene.render.bake
    bake.use_selected_to_active = True
    bake.cage_extrusion = cage
    bake.margin = 8

    bpy.ops.object.select_all(action="DESELECT")
    high.select_set(True)
    low.select_set(True)
    bpy.context.view_layer.objects.active = low

    for kind, suffix in (("NORMAL", "normal"), ("AO", "ao")):
        img = _bake_image(f"{low.name}_{suffix}", size)
        if kind == "NORMAL":
            img.colorspace_settings.name = "Non-Color"
            bake.normal_space = "TANGENT"
            bake.normal_g = "POS_Y"  # OpenGL style
        _target_node(low, img)
        bpy.ops.object.bake(type=kind)
        img.save()
    high.hide_set(True)
    return os.path.join(_out_dir(), f"{low.name}_normal.png")


def export_fbx(objects, name):
    """Export the given objects (body mesh + separate glow pieces) as one FBX for Roblox.
    Keep glow pieces as separate objects named '*_Glow' so they import as separate MeshParts."""
    bpy.ops.object.select_all(action="DESELECT")
    for o in objects:
        o.hide_set(False)
        o.select_set(True)
    path = os.path.join(_out_dir(), name + ".fbx")
    bpy.ops.export_scene.fbx(filepath=path, use_selection=True, apply_unit_scale=True,
                             apply_scale_options="FBX_SCALE_UNITS", mesh_smooth_type="FACE",
                             use_mesh_modifiers=True, axis_forward="-Z", axis_up="Y")
    return path


def triangle_count(obj):
    deps = bpy.context.evaluated_depsgraph_get()
    mesh = obj.evaluated_get(deps).to_mesh()
    mesh.calc_loop_triangles()
    n = len(mesh.loop_triangles)
    obj.evaluated_get(deps).to_mesh_clear()
    return n
