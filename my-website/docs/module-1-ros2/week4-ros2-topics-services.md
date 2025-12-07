#  Week 4 — ROS 2 Communication: Topics & Services

In ROS 2, nodes communicate using **Topics**, **Services**, and **Actions**.  
This week focuses on Topics & Services — the two most essential communication patterns used by real robots.

---

# 🌐 ROS 2 Communication Models

ROS 2 provides three primary communication styles:

| Type | Purpose | Example |
|------|---------|---------|
| **Topics (Pub/Sub)** | continuous streaming data | camera frames, sensor data |
| **Services** | request‐response | reset sensor, compute kinematics |
| **Actions** | long-running tasks | navigation goals |

This week covers the first two.

---

# 🚀 PART 1 — ROS 2 Topics (Publisher / Subscriber)

Topics are used for **real-time data streams**.

Examples:
- `/camera/image_raw`  
- `/imu/data`  
- `/cmd_vel`  
- `/joint_states`  

### ⚡ Topic Flow Diagram

+-------------------+ +--------------------+
| publisher_node | ----> | subscriber_node |
| sends messages | | receives messages |
+-------------------+ +--------------------+

python
Copy code

Topics allow **one-to-many** and **many-to-one** communication.

---

# 📡 Creating a Topic Publisher (Python)

```python
from rclpy.node import Node
from std_msgs.msg import String

class StatusPublisher(Node):
    def __init__(self):
        super().__init__('status_publisher')
        self.pub = self.create_publisher(String, '/robot_status', 10)
        self.timer = self.create_timer(1.0, self.publish_status)

    def publish_status(self):
        msg = String()
        msg.data = "Robot Online"
        self.pub.publish(msg)
        self.get_logger().info("Status Published")
🎧 Creating a Topic Subscriber (Python)
python
Copy code
from rclpy.node import Node
from std_msgs.msg import String

class StatusListener(Node):
    def __init__(self):
        super().__init__('status_listener')
        self.sub = self.create_subscription(
            String, '/robot_status', self.callback, 10)

    def callback(self, msg):
        self.get_logger().info(f"Status: {msg.data}")
🔥 Real Robotics Example
/cmd_vel
Used by humanoids, rovers, manipulators.

Copy code
geometry_msgs/Twist
 ├─ linear (x, y, z)
 └─ angular (roll, pitch, yaw)
Control loop:

python
Copy code
robot.publish_cmd_vel(0.5, 0.0, 0.0)
⚙️ Quality of Service (QoS)
ROS 2 Topics support fine control using QoS:

QoS Profile	Use Case
Sensor Data	IMU, camera (best effort, high frequency)
Reliable	Important data, low loss allowed
Transient Local	Latching messages
Keep last	SLAM, mapping

🚧 Topic Issues Robots Face
Issue	Explanation
Message Drop	High-rate sensors
Delay	Network congestion
Desync	Camera + LiDAR mismatch
QoS mismatch	Incompatible publisher/subscriber

This is why ROS 2 uses DDS for robustness.

🌐 PART 2 — ROS 2 Services (Request–Response)
Services behave like a function call over the network.

🔁 Service Flow
lua
Copy code
client_node ---- request ----> service_server_node
client_node <--- response ---- service_server_node
Used for tasks like:

Resetting motors

Querying configuration

Performing a one-time computation

🛠 Creating a Service Server (Python)
python
Copy code
from example_interfaces.srv import Trigger

class ResetServer(Node):
    def __init__(self):
        super().__init__("reset_server")
        self.srv = self.create_service(Trigger, "reset_robot", self.callback)

    def callback(self, request, response):
        response.success = True
        response.message = "Robot reset complete!"
        return response
🛰 Creating a Service Client (Python)
python
Copy code
class ResetClient(Node):
    def __init__(self):
        super().__init__("reset_client")
        self.cli = self.create_client(Trigger, "reset_robot")

    def send_request(self):
        req = Trigger.Request()
        future = self.cli.call_async(req)
        return future
🧠 Topics vs Services — When to Use What?
Use Case	Use Topics	Use Services
sensor streaming	✔	❌
motor commands	✔	❌
robot heartbeat	✔	❌
reset robot	❌	✔
fetch map	❌	✔
change configs	❌	✔

General rule:

If data flows continuously → Topic.
If you need a response → Service.

🦾 Humanoid Robot Example
Walking Loop (Topics)
bash
Copy code
/imu              → sensor stream  
/joint_states     → servo feedback  
/cmd_vel          → walking commands  
Resetting after a fall (Service)
bash
Copy code
/humanoid/reset_pose