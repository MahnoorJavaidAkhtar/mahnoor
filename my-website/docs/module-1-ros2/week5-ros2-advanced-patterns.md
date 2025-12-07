# ⚙️ Week 5 — ROS 2 Advanced Design Patterns

Welcome to the final week of the ROS 2 module!  
This chapter explores **professional-grade ROS 2 techniques** used in:

- humanoid robots  
- industrial automation  
- multi-sensor platforms  
- autonomous systems  

These advanced concepts make ROS 2 scalable, efficient, and reliable in complex robotic environments.

---

# 🚀 PART 1 — Lifecycle Nodes

Lifecycle nodes provide a **managed state machine** for safe startup and shutdown of robotic systems.  
They are essential for sensors, motors, controllers, and humanoid components.

### 🟣 Lifecycle State Machine

sql
Copy code
      +-------------------+
      |   unconfigured    |
      +---------+---------+
                |
       configure() called
                |
      +---------v---------+
      |     inactive      |
      +---------+---------+
                |
        activate() called
                |
      +---------v---------+
      |      active       |
      +---------+---------+
                |
       deactivate() called
                |
      +---------v---------+
      |    inactive       |
      +-------------------+
yaml
Copy code

---

# 🔧 Why Lifecycle Nodes Matter?

For real robots (especially humanoids):

- 🛑 Prevent motors from activating early  
- 🔄 Reset sensors cleanly  
- ✔ Ensure safe transitions  
- ⚙ Provide deterministic startup order  

Examples:  
- Leg controller → activate only after IMU is ready  
- Vision system → start after all parameters load  

---

# 🧪 Lifecycle Node Example (Python)

```python
from rclpy.lifecycle import LifecycleNode
from rclpy.lifecycle import State

class SensorNode(LifecycleNode):
    def __init__(self):
        super().__init__("sensor_lifecycle")

    def on_configure(self, state: State):
        self.get_logger().info("Configuring sensor...")
        return TransitionCallbackReturn.SUCCESS

    def on_activate(self, state: State):
        self.get_logger().info("Sensor active!")
        return TransitionCallbackReturn.SUCCESS
🚀 PART 2 — Executors & Multi-threading
ROS 2 executors manage how callbacks run.

🟣 Executor Types
Executor	Description
Single-threaded	Simple, sequential callbacks
Multi-threaded	Parallel callback execution
Custom executor	For real-time control loops

⚠ Why Executors Matter?
Humanoids run many callbacks simultaneously:

IMU updates

vision frames

joint-state feedback

motor commands

balance controller

Without executors, timing collapses.

🧩 Multi-threaded Executor Example
python
Copy code
executor = MultiThreadedExecutor()
executor.add_node(vision_node)
executor.add_node(control_node)
executor.spin()
This allows perception + control to run smoothly in parallel.

🚀 PART 3 — Component Nodes (Node Composition)
Instead of running each node as a separate process, ROS 2 allows multiple nodes inside one process for faster communication.

🟣 Diagram: Component Container
lua
Copy code
+-------------------------+
|   component_container   |
|-------------------------|
|  camera_component       |
|  imu_component          |
|  control_component      |
+-------------------------+
Benefits:

⚡ Lower latency

📉 Reduced overhead

🔌 Better for embedded systems

🧪 C++ Composition Example
cpp
Copy code
#include "rclcpp_components/register_node_macro.hpp"

class CameraComponent : public rclcpp::Node {
public:
    CameraComponent(const rclcpp::NodeOptions & options)
    : Node("camera_component", options) {}
};

RCLCPP_COMPONENTS_REGISTER_NODE(CameraComponent)
🚀 PART 4 — Parameters & Dynamic Configuration
Parameters allow runtime configuration of robot behavior.

Examples:

camera resolution

motor speed limits

PID controller values

🧪 Declaring Parameters
python
Copy code
self.declare_parameter("exposure", 0.5)
value = self.get_parameter("exposure").value
🚀 PART 5 — Actions (Long-Running Tasks)
Actions are used for:

navigation goals

manipulation tasks

humanoid walking sequences

Diagram:

lua
Copy code
client ---- send goal ----> action server
client <--- feedback ------- action server
client <--- result --------- action server
🛠 Example: Action Client (Python)
python
Copy code
from rclpy.action import ActionClient
from example_interfaces.action import Fibonacci

self._client = ActionClient(self, Fibonacci, "compute_sequence")

goal = Fibonacci.Goal()
goal.order = 10

self._client.send_goal_async(goal)
🧠 How These Patterns Affect Real Robots
✔ Humanoids
Need lifecycle nodes to safely activate motors + sensors.

✔ Industrial robots
Rely on multi-threaded executors for low-latency control.

✔ Autonomous vehicles
Use actions for navigation goals.

✔ Manipulation systems
Depend on component containers for speed and efficiency.