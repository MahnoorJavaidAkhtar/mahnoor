"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[6973],{

/***/ 1049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_2_gazebo_week_8_gazebo_sensors_md_5c0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-2-gazebo-week-8-gazebo-sensors-md-5c0.json
const site_docs_module_2_gazebo_week_8_gazebo_sensors_md_5c0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-2-gazebo/week8-gazebo-sensors","title":"Week 8 — Sensors in Gazebo","description":"Robots perceive the world using sensors.","source":"@site/docs/module-2-gazebo/week8-gazebo-sensors.md","sourceDirName":"module-2-gazebo","slug":"/module-2-gazebo/week8-gazebo-sensors","permalink":"/docs/module-2-gazebo/week8-gazebo-sensors","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 7 — Robot Modeling & URDF","permalink":"/docs/module-2-gazebo/week7-robot-modeling-urdf"},"next":{"title":"Week 9 — Gazebo Controllers & Motion Simulation 💫🤖","permalink":"/docs/module-2-gazebo/week9-gazebo-controllers"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-2-gazebo/week8-gazebo-sensors.md


const frontMatter = {};
const contentTitle = 'Week 8 — Sensors in Gazebo';

const assets = {

};



const toc = [{
  "value": "1. Introduction to Simulated Sensors",
  "id": "1-introduction-to-simulated-sensors",
  "level": 2
}, {
  "value": "2. Why Sensors Are Critical in Robotics",
  "id": "2-why-sensors-are-critical-in-robotics",
  "level": 2
}, {
  "value": "3. Types of Common Robotic Sensors",
  "id": "3-types-of-common-robotic-sensors",
  "level": 2
}, {
  "value": "4. Gazebo Sensor Plugins",
  "id": "4-gazebo-sensor-plugins",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "week-8--sensors-in-gazebo",
        children: "Week 8 — Sensors in Gazebo"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Robots perceive the world using sensors.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Gazebo replicates these sensors using physics-based simulation so that algorithms, controllers, and AI models can be tested safely and realistically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This extended chapter dives deep into:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Camera sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Depth cameras"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiDAR (2D & 3D)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contact sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Noise models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensor fusion concepts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gazebo plugins"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ROS 2 integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are 25+ sections here to help your sidebar expand beautifully."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-introduction-to-simulated-sensors",
      children: "1. Introduction to Simulated Sensors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simulated sensors behave like real sensors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They publish data to ROS topics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They obey physics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They include noise and distortion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "They can be mounted anywhere on a robot"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-why-sensors-are-critical-in-robotics",
      children: "2. Why Sensors Are Critical in Robotics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A robot without sensors is “blind”."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sensors enable:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "localization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "object detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SLAM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "manipulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-types-of-common-robotic-sensors",
      children: "3. Types of Common Robotic Sensors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We will cover:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RGB Camera"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Depth Camera"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiDAR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contact/Force sensors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-gazebo-sensor-plugins",
      children: "4. Gazebo Sensor Plugins"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sensor simulation in Gazebo works using special ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<gazebo>"
      }), " plugin blocks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example structure:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)("gazebo", {
        reference: "sensor_link",
        children: [" ", (0,jsx_runtime.jsx)("sensor", {
          type: "camera",
          name: "cam_sensor",
          children: " ... "
        }), " "]
      }), " ```\r\n5. Camera Sensors\r\nCameras simulate:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RGB imaging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FOV"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "frame rate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common ROS topics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["bash\r\nCopy code\r\n/camera/image_raw", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "/camera/camera_info\r\n6. Camera Sensor Example\r\nxml\r\nCopy code"]
    }), "\n", (0,jsx_runtime.jsx)("gazebo", {
      reference: "camera_link",
      children: (0,jsx_runtime.jsxs)("sensor", {
        type: "camera",
        name: "camera_sensor",
        children: [(0,jsx_runtime.jsx)("update_rate", {
          children: "30"
        }), (0,jsx_runtime.jsxs)("camera", {
          children: [(0,jsx_runtime.jsx)("horizontal_fov", {
            children: "1.5"
          }), (0,jsx_runtime.jsx)("image", {
            width: "640",
            height: "480",
            format: "R8G8B8"
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Depth Cameras (RGB-D)\r\nDepth cameras produce:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "color image"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "depth map"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "point cloud"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "obstacle detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "object recognition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SLAM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Depth Camera Topics\r\nCommon topics:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["bash\r\nCopy code\r\n/camera/depth/image_raw", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "/camera/depth/camera_info", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "/camera/depth/points\r\n9. LiDAR Sensors\r\nLiDAR emits laser rays to measure distances."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Types:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2D LiDAR (Hokuyo, RP-LiDAR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3D LiDAR (Velodyne, Ouster)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2D LiDAR Example\r\nxml\r\nCopy code"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("gazebo", {
      reference: "lidar_link",
      children: (0,jsx_runtime.jsxs)("sensor", {
        type: "ray",
        name: "lidar_sensor",
        children: [(0,jsx_runtime.jsx)("update_rate", {
          children: "20"
        }), (0,jsx_runtime.jsxs)("ray", {
          children: [(0,jsx_runtime.jsx)("scan", {
            children: (0,jsx_runtime.jsxs)("horizontal", {
              children: [(0,jsx_runtime.jsx)("samples", {
                children: "720"
              }), (0,jsx_runtime.jsx)("min_angle", {
                children: "-1.57"
              }), (0,jsx_runtime.jsx)("max_angle", {
                children: "1.57"
              })]
            })
          }), (0,jsx_runtime.jsxs)("range", {
            children: [(0,jsx_runtime.jsx)("min", {
              children: "0.1"
            }), (0,jsx_runtime.jsx)("max", {
              children: "12.0"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LiDAR Topics\r\nbash\r\nCopy code\r\n/scan       # 2D", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "/points     # 3D"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Point Cloud Data\r\nPoint clouds represent 3D environments as sets of points."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3D SLAM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Human detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Obstacle avoidance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU Sensors (Inertial Measurement Unit)\r\nIMU simulates:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "angular velocity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "linear acceleration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "orientation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "humanoid balance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drone stability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "motion control"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU Example Plugin\r\nxml\r\nCopy code"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("gazebo", {
      reference: "imu_link",
      children: (0,jsx_runtime.jsx)("sensor", {
        type: "imu",
        name: "imu_sensor",
        children: (0,jsx_runtime.jsx)("update_rate", {
          children: "100"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IMU ROS Topics\r\nbash\r\nCopy code\r\n/imu/data", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "/imu/raw"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPS Sensors\r\nSimulate real-world positioning:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "latitude"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "longitude"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "altitude"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "outdoor robots"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "drones"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "autonomous vehicles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "17",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPS Example\r\nxml\r\nCopy code"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("gazebo", {
      reference: "gps_link",
      children: (0,jsx_runtime.jsx)("sensor", {
        type: "gps",
        name: "gps_sensor",
        children: (0,jsx_runtime.jsx)("update_rate", {
          children: "5"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "18",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contact Sensors\r\nDetect:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "collisions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "forces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "foot-ground contact (humanoids)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "gripper object detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "19",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contact Sensor Example\r\nxml\r\nCopy code"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("gazebo", {
      reference: "foot_link",
      children: (0,jsx_runtime.jsx)("sensor", {
        type: "contact",
        name: "foot_contact",
        children: (0,jsx_runtime.jsx)("update_rate", {
          children: "40"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "20",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Noise Simulation\r\nReal sensors have noise.\r\nGazebo simulates:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gaussian noise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bias"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drift"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Random walk"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Why noise?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So algorithms learn to handle real-world imperfections."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "21",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example Noise Model\r\nmakefile\r\nCopy code\r\nmean: 0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "stddev: 0.01", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "bias: 0.001"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensor Placement on Robots\r\nSensors must be placed on correct links:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example humanoid:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["nginx\r\nCopy code\r\nhead_link → camera", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "torso_link → IMU", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "foot_links → contact sensor", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "23. Multi-Sensor Robots\r\nModern robots combine sensors:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "camera + LiDAR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IMU + GPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "depth camera + wheel encoders"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is called sensor fusion."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "24",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ROS 2 Sensor Message Types\r\nExamples:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sensor_msgs/Image"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sensor_msgs/LaserScan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sensor_msgs/PointCloud2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sensor_msgs/Imu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sensor_msgs/NavSatFix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "25",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gazebo → ROS2 Bridge\r\nGazebo publishes to ROS topics through a special bridge."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["bash\r\nCopy code\r\n/camera → sensor_msgs/Image", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "/scan   → sensor_msgs/LaserScan", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "/imu    → sensor_msgs/Imu", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "26. Sensor Update Rates\r\nExamples:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Camera → 30 FPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LiDAR → 10–20 Hz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IMU → 100–200 Hz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPS → 1–10 Hz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each sensor has its own timing needs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "27",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensor Performance Issues\r\nProblems you may face:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "noise too high"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resolution too low"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IMU drift"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LiDAR ghost points"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "camera motion blur"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "28",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensors for Humanoid Robotics\r\nHumanoids depend heavily on:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IMU (for balance)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "foot contact sensors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stereo cameras"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "depth sensors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without IMU, humanoids cannot stand or walk."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "29",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensors for Autonomous Vehicles\r\nThey use:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LiDAR"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IMU"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HD cameras"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RADAR (not in default Gazebo)"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);