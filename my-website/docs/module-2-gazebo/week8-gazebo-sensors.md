# Week 8 — Sensors in Gazebo

Robots perceive the world using sensors.  
Gazebo replicates these sensors using physics-based simulation so that algorithms, controllers, and AI models can be tested safely and realistically.

This extended chapter dives deep into:

- Camera sensors  
- Depth cameras  
- LiDAR (2D & 3D)  
- IMU  
- GPS  
- Contact sensors  
- Noise models  
- Sensor fusion concepts  
- Gazebo plugins  
- ROS 2 integration  

There are 25+ sections here to help your sidebar expand beautifully.

---

## 1. Introduction to Simulated Sensors

Simulated sensors behave like real sensors:

- They publish data to ROS topics  
- They obey physics  
- They include noise and distortion  
- They can be mounted anywhere on a robot  

---

## 2. Why Sensors Are Critical in Robotics

A robot without sensors is “blind”.

Sensors enable:

- localization  
- mapping  
- navigation  
- object detection  
- balance control  
- SLAM  
- manipulation  

---

## 3. Types of Common Robotic Sensors

We will cover:

- RGB Camera  
- Depth Camera  
- LiDAR  
- IMU  
- GPS  
- Contact/Force sensors  

---

## 4. Gazebo Sensor Plugins

Sensor simulation in Gazebo works using special `<gazebo>` plugin blocks.

Example structure:

<gazebo reference="sensor_link"> <sensor type="camera" name="cam_sensor"> ... </sensor> </gazebo> ```
5. Camera Sensors
Cameras simulate:

RGB imaging

resolution

FOV

frame rate

Common ROS topics:

bash
Copy code
/camera/image_raw  
/camera/camera_info
6. Camera Sensor Example
xml
Copy code
<gazebo reference="camera_link">
  <sensor type="camera" name="camera_sensor">
    <update_rate>30</update_rate>
    <camera>
      <horizontal_fov>1.5</horizontal_fov>
      <image width="640" height="480" format="R8G8B8"/>
    </camera>
  </sensor>
</gazebo>
7. Depth Cameras (RGB-D)
Depth cameras produce:

color image

depth map

point cloud

Used for:

obstacle detection

object recognition

SLAM

8. Depth Camera Topics
Common topics:

bash
Copy code
/camera/depth/image_raw  
/camera/depth/camera_info  
/camera/depth/points
9. LiDAR Sensors
LiDAR emits laser rays to measure distances.

Types:

2D LiDAR (Hokuyo, RP-LiDAR)

3D LiDAR (Velodyne, Ouster)

10. 2D LiDAR Example
xml
Copy code
<gazebo reference="lidar_link">
  <sensor type="ray" name="lidar_sensor">
    <update_rate>20</update_rate>
    <ray>
      <scan>
        <horizontal>
          <samples>720</samples>
          <min_angle>-1.57</min_angle>
          <max_angle>1.57</max_angle>
        </horizontal>
      </scan>
      <range>
        <min>0.1</min>
        <max>12.0</max>
      </range>
    </ray>
  </sensor>
</gazebo>
11. LiDAR Topics
bash
Copy code
/scan       # 2D  
/points     # 3D  
12. Point Cloud Data
Point clouds represent 3D environments as sets of points.

Used in:

3D SLAM

Human detection

Obstacle avoidance

13. IMU Sensors (Inertial Measurement Unit)
IMU simulates:

angular velocity

linear acceleration

orientation

Used in:

humanoid balance

drone stability

motion control

14. IMU Example Plugin
xml
Copy code
<gazebo reference="imu_link">
  <sensor type="imu" name="imu_sensor">
    <update_rate>100</update_rate>
  </sensor>
</gazebo>
15. IMU ROS Topics
bash
Copy code
/imu/data  
/imu/raw  
16. GPS Sensors
Simulate real-world positioning:

latitude

longitude

altitude

Used for:

outdoor robots

drones

autonomous vehicles

17. GPS Example
xml
Copy code
<gazebo reference="gps_link">
  <sensor type="gps" name="gps_sensor">
    <update_rate>5</update_rate>
  </sensor>
</gazebo>
18. Contact Sensors
Detect:

collisions

forces

foot-ground contact (humanoids)

gripper object detection

19. Contact Sensor Example
xml
Copy code
<gazebo reference="foot_link">
  <sensor type="contact" name="foot_contact">
    <update_rate>40</update_rate>
  </sensor>
</gazebo>
20. Noise Simulation
Real sensors have noise.
Gazebo simulates:

Gaussian noise

Bias

Drift

Random walk

Why noise?

So algorithms learn to handle real-world imperfections.

21. Example Noise Model
makefile
Copy code
mean: 0.0  
stddev: 0.01  
bias: 0.001  
22. Sensor Placement on Robots
Sensors must be placed on correct links:

Example humanoid:

nginx
Copy code
head_link → camera  
torso_link → IMU  
foot_links → contact sensor  
23. Multi-Sensor Robots
Modern robots combine sensors:

camera + LiDAR

IMU + GPS

depth camera + wheel encoders

This is called sensor fusion.

24. ROS 2 Sensor Message Types
Examples:

sensor_msgs/Image

sensor_msgs/LaserScan

sensor_msgs/PointCloud2

sensor_msgs/Imu

sensor_msgs/NavSatFix

25. Gazebo → ROS2 Bridge
Gazebo publishes to ROS topics through a special bridge.

Example:

bash
Copy code
/camera → sensor_msgs/Image  
/scan   → sensor_msgs/LaserScan  
/imu    → sensor_msgs/Imu  
26. Sensor Update Rates
Examples:

Camera → 30 FPS

LiDAR → 10–20 Hz

IMU → 100–200 Hz

GPS → 1–10 Hz

Each sensor has its own timing needs.

27. Sensor Performance Issues
Problems you may face:

noise too high

resolution too low

IMU drift

LiDAR ghost points

camera motion blur

28. Sensors for Humanoid Robotics
Humanoids depend heavily on:

IMU (for balance)

foot contact sensors

stereo cameras

depth sensors

Without IMU, humanoids cannot stand or walk.

29. Sensors for Autonomous Vehicles
They use:

LiDAR

GPS

IMU

HD cameras

RADAR (not in default Gazebo)

