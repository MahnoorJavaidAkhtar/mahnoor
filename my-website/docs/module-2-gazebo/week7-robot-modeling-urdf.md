# Week 7 — Robot Modeling & URDF 

Robot modeling is the foundation of every robotics system.  
URDF (Unified Robot Description Format) lets you describe **shape, mass, joints, sensors, dynamics, and structure** of a robot in simulation.

In this extended version, we will explore every detail of URDF and robot modeling so deeply that you will understand:

- how real robots are designed  
- how humanoid bodies are structured  
- how joint motion is mathematically defined  
- how inertia and mass affect stability  
- how sensors, controllers, and actuators integrate  

This chapter contains 20+ sections so your **sidebar becomes full and beautifully expanded**.

---

## 1. What Is URDF?

URDF is:

- A robot blueprint  
- A physics definition  
- A geometry description  
- A kinematic structure model  

Every simulation tool (Gazebo, RViz, Isaac Sim) uses URDF as the **first step**.

---

## 2. Why Robot Modeling Is Necessary

Robots cannot be simulated without defining:

- link shapes  
- joint types  
- mass distribution  
- collision boundaries  
- visual geometry  
- inertia matrices  

Incorrect modeling → robot falls, vibrates, or explodes.

---

## 3. Structure of a URDF File

URDF is made up of:

- `<robot>` root  
- `<link>` blocks  
- `<joint>` connections  
- optional `<gazebo>` tags  

Basic skeleton:

robot
├── link
├── link
├── joint
└── joint

php-template
Copy code

---

## 4. Links — The Rigid Bodies

A robot link represents a **piece of hardware** like:

- torso  
- leg  
- head  
- arm  
- wheel  
- camera mount  

Example:

```xml
<link name="base_link">
  <visual><geometry><box size="0.5 0.4 0.2"/></geometry></visual>
  <collision><geometry><box size="0.5 0.4 0.2"/></geometry></collision>
  <inertial><mass value="6.0"/></inertial>
</link>
5. Visual Geometry
Determines how the robot looks.

Common shapes:

box

cylinder

sphere

mesh (.dae, .stl)

6. Collision Geometry
Simplified version of robot body for physics simulation.

Collision shapes MUST be simple to avoid instability.

7. Inertial Properties
Every link must define:

mass

center of mass

inertia matrix

Example:

xml
Copy code
<inertial>
  <mass value="2.0"/>
  <origin xyz="0 0 0"/>
  <inertia ixx="0.01" iyy="0.01" izz="0.01"/>
</inertial>
8. Understanding Inertia Matrices
The inertia tensor controls rotational stability.

Incorrect values cause:

unrealistic rotation

tumbling

instability

wobbling

9. Joints — Connecting the Links
Joints define:

movement

rotation

sliding

limits

stiffness (effort)

Example:

xml
Copy code
<joint name="base_to_arm" type="revolute">
  <parent link="base_link"/>
  <child link="arm_link"/>
  <axis xyz="0 0 1"/>
</joint>
10. Types of Joints
fixed

revolute

continuous

prismatic

planar

floating

Real humanoids mostly use:
revolute, continuous, fixed

11. Joint Limits
Define safe values:

lower

upper

velocity

effort

12. Revolute Joint Anatomy
Example with limits:

lua
Copy code
lower: -1.57 rad
upper: +1.57 rad
velocity: 2 rad/s
effort: 10 Nm
13. Kinematic Chains
A robot is a chain of:

nginx
Copy code
parent_link → joint → child_link
Example humanoid leg:

nginx
Copy code
hip_yaw
hip_roll
hip_pitch
knee_pitch
ankle_pitch
ankle_roll
14. Forward Kinematics (Concept)
URDF allows FK engines to compute:

perl
Copy code
given joint angles → compute link positions
Used by:

Gazebo

RViz

MoveIt

Balancing algorithms

15. Coordinate Frames in URDF
Every joint and link has a frame:

XYZ translation

RPY rotation

Origins define how models fit together.

16. Sensors in URDF
URDF does NOT simulate sensors.
Gazebo plugins attach sensors to links.

17. Adding a Camera Sensor
xml
Copy code
<gazebo reference="camera_link">
  <sensor type="camera" name="cam">
    <update_rate>30</update_rate>
  </sensor>
</gazebo>
18. LiDAR Sensor Attachment
xml
Copy code
<gazebo reference="lidar_link">
  <sensor type="ray" name="lidar_sensor"/>
</gazebo>
19. IMU Sensor Attachment
xml
Copy code
<gazebo reference="imu_link">
  <sensor type="imu" name="imu_sensor"/>
</gazebo>
20. Transmission Tags
Used for controllers:

effort controllers

velocity controllers

position controllers

Example:

xml
Copy code
<transmission name="arm_transmission">
  <type>transmission_interface/SimpleTransmission</type>
</transmission>
21. Material Definitions
Colors and materials:

Copy code
red, blue, metal, plastic, glass
Can be used for robots in RViz.

22. Mesh Models
Robots often use .dae or .stl meshes.

Used for:

humanoid limbs

robot heads

mechanical parts

23. Example: Full Mini URDF Robot
xml
Copy code
<robot name="simple_bot">

  <link name="base_link"/>
  <link name="arm_link"/>

  <joint name="base_to_arm" type="revolute">
    <parent link="base_link"/>
    <child link="arm_link"/>
  </joint>

</robot>
24. URDF vs SDF
URDF:

simple

clean

easier

used by ROS

SDF:

more powerful

used for complex Gazebo models

25. Debugging URDF
Tools:

check_urdf

urdf_to_graphiz

RViz

Gazebo logs

26. Common URDF Mistakes
Missing inertia

Wrong axis definition

Collision too detailed

Incorrect joint origin

Mass = 0

No root link

27. Humanoid Modeling Challenges
Humanoids require:

accurate joint axes

realistic inertia

balanced center of mass

multiple parallel kinematic chains

ankle & hip torque modeling

28. Why URDF Matters for Real Robots
Motion planning, simulation, balancing, and physics engines all depend on a correct URDF.

A humanoid without accurate URDF → falls every time.