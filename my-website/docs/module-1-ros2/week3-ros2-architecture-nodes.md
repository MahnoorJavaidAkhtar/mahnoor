# Week 3 — ROS 2 Architecture & Nodes

ROS 2 (Robot Operating System 2) is the software foundation behind modern intelligent robots, from mobile platforms to advanced humanoids.  
It acts as the **nervous system** that connects sensors, perception modules, control loops, and decision-making AI.

This week, you’ll explore how ROS 2 is structured, how nodes operate, and how communication happens inside a distributed robotic system.

---

# ⚡ The ROS 2 Architecture Overview

ROS 2 is built in **layers**, each responsible for a specific responsibility:

+-------------------------------------------------------+
| Application Layer |
| (Your robot nodes & packages) |
+-------------------------------------------------------+
| ROS Client Libraries (rclcpp / rclpy / rcl) |
+-------------------------------------------------------+
| ROS Middleware (rmw abstraction layer) |
+-------------------------------------------------------+
| DDS — Data Distribution Service |
| (Fast RTPS, Cyclone DDS, Connext, GurumDDS, etc.) |
+-------------------------------------------------------+

yaml
Copy code

Let’s break down how these layers work.

---

# 🟣 1. Application Layer

This is where YOU write robot logic.

Examples:
- `camera_node`
- `lidar_filter_node`
- `humanoid_balance_controller`
- `navigation_planner`

Nodes define:
- Publishers  
- Subscribers  
- Services  
- Actions  
- Timers & callbacks  

---

# 🟣 2. ROS Client Libraries

These convert **your Python or C++ code** into ROS 2 functionality.

### Common Libraries
| Language | Library |
|---------|----------|
| Python | `rclpy` |
| C++ | `rclcpp` |
| Rust | `rclrs` (experimental) |

Example responsibilities:
- Create a node  
- Publish and subscribe  
- Define services & actions  
- Manage parameters  

---

# 🟣 3. ROS Middleware (RMW)

The **rmw layer** is an abstraction layer that hides DDS complexity.

It provides:
- Topic matching  
- Node discovery  
- Middleware switching  
- QoS negotiation  

Robots can switch DDS vendor without changing code — a powerful design choice.

---

# 🟣 4. DDS — The Heart of ROS 2

DDS enables:
- ⚡ Real-time communication  
- 🔄 Automatic discovery  
- 🛰 Distributed networking  
- 🔐 Reliable or best-effort messaging  
- 📡 Configurable QoS for sensors and control  

It is used in:
- Space systems  
- Autonomous cars  
- Naval systems  
- Medical devices  

This is what makes ROS 2 scalable and industry-ready.

---

# 🧩 Understanding ROS 2 Nodes

A **node** = a modular, independent process in a robot that performs a task.

+-------------------+
| camera_node |
| publishes image |
+---------+---------+
|
v
+-------------------+
| vision_node |
| detects objects |
+---------+---------+
|
v
+-------------------+
| control_node |
| uses detections |
+-------------------+

yaml
Copy code

Nodes form a **computational graph**, connected through ROS communication.

---

# 🔌 Node Responsibilities

A node can:
- publish messages  
- subscribe to topics  
- offer a service  
- call a service  
- send goals through actions  
- broadcast parameters  
- run timed callbacks (e.g., control loops)  

Each node is independent but **loosely connected** through topics.

---

# 🧪 Example: Minimal ROS 2 Python Node

```python
import rclpy
from rclpy.node import Node

class MinimalNode(Node):
    def __init__(self):
        super().__init__('minimal_node')
        self.timer = self.create_timer(1.0, self.callback)

    def callback(self):
        self.get_logger().info("Node is alive!")

def main():
    rclpy.init()
    node = MinimalNode()
    rclpy.spin(node)
    node.destroy_node()
    rclpy.shutdown()
This node logs a heartbeat message every second.

🧬 ROS 2 Computational Graph (Diagram)
bash
Copy code
                    +-----------------------+
                    |    lidar_node         |
                    | publishes /scan       |
                    +-----------+-----------+
                                |
                                v
+-----------------------+   +---+----------------------+
| mapping_node          |   | localization_node        |
| subs /scan → produces |   | subs /scan → estimates   |
|     /map              |   |     /pose                |
+-----------+-----------+   +-----------+--------------+
            |                           |
            v                           v
           +------------------------------+
           |      navigation_node         |
           |  uses /map + /pose → /cmd_vel |
           +------------------------------+
This is how robots perceive, localize, and move using ROS 2.

⚙ Node Lifecycle (Advanced)
Some robots (especially humanoids) use lifecycle nodes for safe startup:

scss
Copy code
unconfigured → configuring → inactive → activating → active
Useful for:

sensors

motor control

navigation systems