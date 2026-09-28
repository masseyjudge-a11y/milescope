"""Blender helper for the house pet style: studs + baking + export.

Run inside Blender (via Blender MCP `execute_blender_code`, or Blender's Text Editor).
Paste/exec this file first, then call the functions. Written for Blender 4.x.
Not yet verified inside Blender: check each step with a viewport screenshot.

Typical use:
    body = bpy.data.objects["Koi_Body"]            # smooth, faceted low-poly body you modelled
    hi = make_studded_copy(body)                     # high-poly copy with real square studs
    bake_studs(low=body, high=hi, size=2048)         # -> <name>_normal.png, <name>_ao.png
    export_fbx([body, *glow_parts], "Koi")           # -> Koi.fbx next to the .blend
"""
import os

import bpy

STUD_PITCH = 1.0     # studs are 1 stud apart in Roblox units (1 Blender unit = 1 stud)
STUD_SIZE = 0.38     # stud width, as in the references (square, sparse)
STUD_HEIGHT = 0.14   # how far a stud sticks out
BEVEL = 0.04


def _out_dir():
    d = bpy.path.abspath("//") or os.path.expanduser("~")
    os.makedirs(d, exist_ok=True)
    return d


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
