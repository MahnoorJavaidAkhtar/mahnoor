# Week 11 — Isaac Robotics Pipeline: USD, Scenes & Assets 🌌🤖📦

This week explores how Isaac Sim manages **robots, environments, scenes, articulations, materials, and world-building** using USD (Universal Scene Description).  
USD is the beating heart of Omniverse — everything in Isaac Sim is a USD entity.

By the end of this week, you will understand:

- 🌐 USD structure  
- 🏗 Scene composition  
- 📦 Asset pipelines  
- 🎛 Physics layers  
- 🔌 Robot import workflows  
- 🎨 Materials & shaders  
- 🧠 Metadata & annotations  
- 🧩 Live scene editing  

---

## 1. What Is USD? 📦✨

USD = **Universal Scene Description**, created by Pixar.

It defines:

- objects  
- materials  
- animations  
- hierarchies  
- physics  
- sensors  
- lighting  

USD acts like **supercharged 3D JSON for robotics**.

---

## 2. Why Isaac Sim Uses USD 🤖💜

Because USD provides:

- ⚡ real-time updates  
- 🧬 non-destructive editing  
- 🪜 hierarchical scenes  
- 🎨 photoreal materials  
- 🔥 multi-user collaboration  
- 🧠 AI metadata support  

---

## 3. USD Stages & Layers 🗂️

A **stage** = entire scene.  
A **layer** = file inside the stage.

Layers can:

- override  
- reference  
- inherit  
- extend  

---

## 4. Stage Hierarchy 🌳

A typical Isaac stage looks like:

/World
/Environment
/Lighting
/Robots
/MyRobot
/base_link
/arm_link
/camera_link

yaml
Copy code

Everything is a **prim** (primary object).

---

## 5. Prims — The Building Blocks 🧱✨

Prims can be:

- robots  
- links  
- sensors  
- meshes  
- cameras  
- lights  
- physics bodies  

Example prim names:

/World/Robot/base_link
/World/Robot/arm_link

yaml
Copy code

---

## 6. Prim Types in Isaac Sim 🧩

Common types:

- `Xform` (transform)  
- `Mesh`  
- `Scope`  
- `Camera`  
- `DistantLight`  
- `RigidBodyAPI`  
- `ArticulationRootAPI`  

---

## 7. Transform Hierarchy 🔗

Prims follow parent-child transforms.

Example:

Robot
├── Base
├── Arm
└── Camera

yaml
Copy code

---

## 8. Articulations in USD 🦾

Articulations represent robots with joints.

They define:

- mass  
- center of mass  
- joints  
- actuators  
- constraints  

---

## 9. USD vs URDF 🤝

| Feature | URDF | USD |
|---------|------|-----|
| robots only | ✔ | ✖ |
| full scenes | ✖ | ✔ |
| animation | ✖ | ✔ |
| materials | limited | advanced |
| physics | basic | PhysX GPU |
| sensors | external | built-in |

USD is more powerful.

---

## 10. Importing URDF into Isaac Sim 🤖⬆️

Isaac Sim has a URDF importer.

It converts:

- links → prims  
- joints → articulation joints  
- visuals → meshes  
- collisions → physics shapes  

---

## 11. USD Robot Structure Example 🤖🌐

/World/MyRobot
/base_link
/shoulder
/elbow
/wrist

yaml
Copy code

Each link is a prim with:

- collision  
- mass  
- articulation metadata  

---

## 12. Spawning Robots Programmatically 🧪🐍

Example Python script:

```python
from omni.isaac.core import World
world = World()
robot = world.scene.add(...)
13. Scene Composition 🎬
Scenes can include:

warehouses

office rooms

outdoor environments

conveyor belts

tools & props

14. Environment Assets 🌆
Included assets:

industrial shelves

pallets

tables

boxes

chairs

robotics labs

15. Kit-Based Assets 🧰
Kit assets provide:

lights

materials

HDRI skies

ground planes

robot parts

16. Materials in USD 🎨✨
USD supports:

metal

plastic

glass

emissive neon

PBR textures

MDL shaders

17. Lighting in Isaac Sim 💡🌙
Lighting types:

dome lights

distant lights

spherical lights

area lights

You can adjust:

intensity

color

temperature

shadows

18. Physics Setup 🔥⚙️
Physics prims include:

rigid bodies

colliders

articulations

joints

gravity

19. Collision Meshes 🧱
Simple shapes:

box

sphere

capsule

convex hull

Complex meshes cause poor performance.

20. Sensors in USD 📡
Sensors are prims too, such as:

camera

IMU

LiDAR

depth sensors

21. Parametrizing Sensors 🎛
You can adjust:

update rate

FOV

noise

resolution

22. Robot Placement 🧭
Robots can spawn at:

random poses

fixed coordinates

scripted trajectories

23. Asset Referencing 🧩
Instead of copying assets:

USD REFERENCES them.

This reduces:

memory usage

file size

load time

24. Non-Destructive Editing 🎨
You can override properties without modifying the base asset.

Example:

change robot color

update mass

adjust joint limits

25. Semantic Labels 🏷️
Used for:

segmentation

object detection

dataset generation

26. USD Metadata 📘
Metadata stores:

annotations

physics settings

tags

descriptions

27. Scene Graph Debugging 🔍
You can inspect:

articulation roots

joint connections

mass distribution

collision shapes

28. Animation & Motion Clips 🎞️
USD allows:

keyframe animation

motion capture

procedural animations

29. Loading Worlds from Python 🐍🌍
python
Copy code
world.load_stage('/path/to/warehouse.usd')