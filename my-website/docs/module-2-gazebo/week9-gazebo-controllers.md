# Week 9 — Gazebo Controllers & Motion Simulation 💫🤖

Robots aren’t truly “alive” until they MOVE.  
In simulation, this motion is controlled through **Gazebo controllers**, **ROS 2 control**, and **joint-level physics**.

This chapter explores everything from torque controllers to PID tuning, from wheel motion to humanoid walking — ALL inside Gazebo.

Get ready — this is long, detailed, and packed with emojis! ✨🔥

---

## 1. What Is Motion Simulation? 🤔

Motion simulation is the process of:

- applying forces 💪  
- controlling joints 🔧  
- executing trajectories 🛤  
- moving robot bodies in physics world 🌍  

---

## 2. Why Controllers Matter? 🎯

Because without controllers:

- joints stay frozen 🧊  
- wheels don’t move 🛞  
- arms cannot lift objects ✋  
- humanoids cannot walk 🚶‍♂️  

Controllers = the robot’s **muscles + reflexes**.

---

## 3. Overview of ROS 2 Control ⚙️🤖

ROS 2 control provides:

- hardware abstraction  
- controller manager  
- joint interfaces  
- command topics  

Used by:

- arms  
- drones  
- humanoids  
- mobile robots  

---

## 4. Controllers vs Plugins 🔌

| Gazebo Plugin | ROS 2 Controller |
|---------------|------------------|
| physics + actuators | high-level control commands |
| low-level torque | topics/services/goals |
| internal to Gazebo | external ROS nodes |

---

## 5. Joint Control Modes 🦾

Robots can be controlled using:

- **Position control** 🎯  
- **Velocity control** 🏎  
- **Effort/Torque control** 💥  
- **PID control** 🎛  
- **Hybrid modes** ⚡  

---

## 6. Position Controllers 🎯

Robot tries to reach a target angle.

Example command:

/joint1/command

makefile
Copy code

Sends:

1.57 rad

yaml
Copy code

---

## 7. Velocity Controllers 🏎

Joint rotates at certain speed:

/joint1/command = 0.5 rad/s

yaml
Copy code

Used for:

- wheels  
- conveyor belts  
- rotating sensors  

---

## 8. Effort/Torque Controllers 💥

Robot applies **raw power**:

τ = torque

yaml
Copy code

Humanoids use torque control for:

- balance  
- walking  
- lifting  

---

## 9. PID Controllers 🎛

PID = Proportional + Integral + Derivative.

Used when smooth control is needed.

Example PID values:

P = 20
I = 0.1
D = 5

yaml
Copy code

---

## 10. Gazebo Ros2 Control Plugin 🧩

Attached to robot URDF:

```xml
<gazebo>
  <plugin name="ros2_control" filename="libgazebo_ros2_control.so"/>
</gazebo>
11. Transmission Tags ⚙️
Used to define joint → controller mapping.

xml
Copy code
<transmission name="arm_trans">
  <type>SimpleTransmission</type>
</transmission>
12. Controller Manager 🤖💼
Runs at runtime and manages:

loading controllers

switching controllers

activating them

13. Launching Controllers 🚀
Example command:

nginx
Copy code
ros2 control load_controller joint_state_broadcaster
ros2 control load_controller arm_controller
14. Joint State Broadcaster 📡
Publishes:

joint angles

velocities

torques

Topic:

bash
Copy code
/joint_states
15. Trajectory Controllers 🛤
Used for:

arm paths

leg motion

manipulation tasks

16. Example Trajectory Command 🤲
bash
Copy code
/arm_controller/follow_joint_trajectory
17. Motion Simulation Pipeline 🔄
bash
Copy code
User command → controller → joint → physics engine → robot motion
18. Wheel Motion Simulation 🛞
Mobile robots require:

differential drive

skid steering

ackermann steering

Gazebo has plugins for all!

19. Differential Drive Plugin 🛴
Used for 2-wheel robots:

xml
Copy code
<plugin name="diff_drive" filename="libgazebo_ros_diff_drive.so"/>
20. Walking Robots 🦿
Humanoids require:

6+ joints per leg

torque controllers

balance algorithms

precise contact simulation

21. Contact Dynamics 👣
Feet produce:

contact forces

friction

slip

pressure

Used for stability.

22. Controllers for Humanoids 🤖🔥
Examples:

hip torque control

ankle stabilizers

knee damping

zero-moment-point balancing

23. Arm Manipulation Controllers ✋🦾
Include:

effort controllers

joint trajectory controllers

impedance control

24. Sensor Feedback in Motion 🔁
Motion uses sensors like:

IMU → stability

joint encoders → accuracy

force sensors → grip

25. Real-Time Simulation ⏱
Gazebo tries to maintain:

ini
Copy code
simulation_time = real_time
But complex robots may slow things down.

26. PID Tuning Tips 🎛💡
Bad PID → shaking robot
Good PID → smooth motion

Tips:

Raise P until oscillation

Add D to stabilize

Add I for drift correction

27. Common Motion Problems 🚨
robot shaking

joints locking

controller not loading

falling humanoids

unrealistic torque

28. Debugging Motion Simulation 🔧
Use:

/joint_states

Gazebo GUI

ROS 2 logs

RViz visualization

29. Example Minimal Motion URDF ⚙️
xml
Copy code
<joint name="joint1" type="revolute">
  <limit lower="-1" upper="1" effort="5" velocity="1"/>
</joint>
30. Full Motion Example Pipeline 🧭
markdown
Copy code
1. User sends target position  
2. Controller converts to motor output  
3. Physics engine applies torque  
4. Robot joint moves  
5. Sensors publish new state 