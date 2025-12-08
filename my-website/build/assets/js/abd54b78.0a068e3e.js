"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[8540],{

/***/ 3932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_4_humanoids_week_17_humanoid_vision_learning_md_abd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-4-humanoids-week-17-humanoid-vision-learning-md-abd.json
const site_docs_module_4_humanoids_week_17_humanoid_vision_learning_md_abd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-4-humanoids/week17-humanoid-vision-learning","title":"Week 17 — Vision, Perception & Learning for Humanoids 👁️🤖🧠✨","description":"Humanoids must see, understand, and learn from the world just like humans do.","source":"@site/docs/module-4-humanoids/week17-humanoid-vision-learning.md","sourceDirName":"module-4-humanoids","slug":"/module-4-humanoids/week17-humanoid-vision-learning","permalink":"/docs/module-4-humanoids/week17-humanoid-vision-learning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 16 — Humanoid Manipulation & Whole-Body Control 🤖🦾✨","permalink":"/docs/module-4-humanoids/week16-humanoid-manipulation"},"next":{"title":"Week 18 — Foundations of Physical AI (Embodied Cognition) 🤖🧠✨","permalink":"/docs/Module 5-Physical AI/week18-physical-ai-foundations"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-4-humanoids/week17-humanoid-vision-learning.md


const frontMatter = {};
const contentTitle = 'Week 17 — Vision, Perception & Learning for Humanoids 👁️🤖🧠✨';

const assets = {

};



const toc = [{
  "value": "1. What Is Perception in Humanoid Robotics? 👁️✨",
  "id": "1-what-is-perception-in-humanoid-robotics-️",
  "level": 2
}, {
  "value": "2. Why Vision Is Essential for Humanoids 👀🤖",
  "id": "2-why-vision-is-essential-for-humanoids-",
  "level": 2
}, {
  "value": "3. Types of Vision Sensors 📸🔦",
  "id": "3-types-of-vision-sensors-",
  "level": 2
}, {
  "value": "4. Depth Perception 🟦📏",
  "id": "4-depth-perception-",
  "level": 2
}, {
  "value": "5. LiDAR Perception 🔭🌐",
  "id": "5-lidar-perception-",
  "level": 2
}, {
  "value": "6. Sensor Fusion 🧠🔗",
  "id": "6-sensor-fusion-",
  "level": 2
}, {
  "value": "7. Understanding SLAM 🗺️🤖",
  "id": "7-understanding-slam-️",
  "level": 2
}, {
  "value": "8. Visual-Inertial Odometry (VIO) 🧭👁️",
  "id": "8-visual-inertial-odometry-vio-️",
  "level": 2
}, {
  "value": "9. Human Detection 🧍‍♀️👀",
  "id": "9-human-detection-️",
  "level": 2
}, {
  "value": "10. Gesture Recognition ✋🤝",
  "id": "10-gesture-recognition-",
  "level": 2
}, {
  "value": "11. Object Detection 📦👁️",
  "id": "11-object-detection-️",
  "level": 2
}, {
  "value": "12. 6D Pose Estimation 🎯📦",
  "id": "12-6d-pose-estimation-",
  "level": 2
}, {
  "value": "13. Scene Understanding 🧭🌆",
  "id": "13-scene-understanding-",
  "level": 2
}, {
  "value": "14. Semantic Segmentation 🎨💡",
  "id": "14-semantic-segmentation-",
  "level": 2
}, {
  "value": "15. Instance Segmentation 👥🔍",
  "id": "15-instance-segmentation-",
  "level": 2
}, {
  "value": "16. Eye-Hand Coordination 👁️✋✨",
  "id": "16-eye-hand-coordination-️",
  "level": 2
}, {
  "value": "17. Vision-Based Manipulation 🦾📸",
  "id": "17-vision-based-manipulation-",
  "level": 2
}, {
  "value": "18. Contact &amp; Force Perception 👣💥",
  "id": "18-contact--force-perception-",
  "level": 2
}, {
  "value": "19. Learning-Based Control 🧠⚡",
  "id": "19-learning-based-control-",
  "level": 2
}, {
  "value": "20. Imitation Learning (IL) 🤖➡️🧍‍♂️",
  "id": "20-imitation-learning-il-️️",
  "level": 2
}, {
  "value": "21. Behavior Cloning 📋🤖",
  "id": "21-behavior-cloning-",
  "level": 2
}, {
  "value": "22. Reinforcement Learning (RL) 🦾🏆",
  "id": "22-reinforcement-learning-rl-",
  "level": 2
}, {
  "value": "23. RL for Manipulation 🦾📦",
  "id": "23-rl-for-manipulation-",
  "level": 2
}, {
  "value": "24. Self-Supervised Learning (SSL) 🤖📚",
  "id": "24-self-supervised-learning-ssl-",
  "level": 2
}, {
  "value": "25. Multi-Modal Learning 📡👁️✋🧠",
  "id": "25-multi-modal-learning-️",
  "level": 2
}, {
  "value": "26. Predictive Models 🔮🤖",
  "id": "26-predictive-models-",
  "level": 2
}, {
  "value": "27. Memory Systems 💾🤖",
  "id": "27-memory-systems-",
  "level": 2
}, {
  "value": "28. HRI Perception (Human-Robot Interaction) 🤝✨",
  "id": "28-hri-perception-human-robot-interaction-",
  "level": 2
}, {
  "value": "29. Failure Cases in Vision 🚨👁️",
  "id": "29-failure-cases-in-vision-️",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "week-17--vision-perception--learning-for-humanoids-️",
        children: "Week 17 — Vision, Perception & Learning for Humanoids 👁️🤖🧠✨"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Humanoids must ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "see"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "understand"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "learn"
      }), " from the world just like humans do.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Without perception and intelligence, a humanoid robot cannot:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "recognize objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "interact safely with humans"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "understand scenes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasp items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walk in unknown areas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "follow commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "adapt to new tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This week explains how humanoid robots use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vision + sensors + learning algorithms"
      }), " to become intelligent, aware, and capable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-is-perception-in-humanoid-robotics-️",
      children: "1. What Is Perception in Humanoid Robotics? 👁️✨"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Perception = converting raw sensor data into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "meaning"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids must interpret:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "images"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "depth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "point clouds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "motion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "forces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "contact"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This enables reasoning, planning, and action."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-why-vision-is-essential-for-humanoids-",
      children: "2. Why Vision Is Essential for Humanoids 👀🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vision allows humanoids to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "detect obstacles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "read human cues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "recognize objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "track motion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "plan manipulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "understand room layout"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Humanoid robots become ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "smart"
      }), " through vision."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-types-of-vision-sensors-",
      children: "3. Types of Vision Sensors 📸🔦"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids use multiple sensors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RGB Camera"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stereo Camera"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Depth Camera"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiDAR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fisheye cameras for wide-angle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Semantic cameras"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each sensor provides different information."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-depth-perception-",
      children: "4. Depth Perception 🟦📏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Depth sensors give:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D geometry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "distance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shape"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "surface structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "foot placement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "climbing stairs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-lidar-perception-",
      children: "5. LiDAR Perception 🔭🌐"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LiDAR produces ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3D point clouds"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obstacle detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "environment scanning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "navigation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Highly robust in low light."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-sensor-fusion-",
      children: "6. Sensor Fusion 🧠🔗"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fusion = combining multiple sensors."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Camera + Depth\r\nCamera + IMU\r\nLiDAR + Camera\r\nIMU + Foot contact sensors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fusion increases accuracy & robustness."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-understanding-slam-️",
      children: "7. Understanding SLAM 🗺️🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SLAM = Simultaneous Localization & Mapping."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoid SLAM helps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "build maps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "locate itself"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "navigate unknown areas"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Visual SLAM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiDAR SLAM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Visual-Inertial SLAM"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-visual-inertial-odometry-vio-️",
      children: "8. Visual-Inertial Odometry (VIO) 🧭👁️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VIO combines:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IMU + Camera"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To estimate:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "velocity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "orientation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "position"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Used in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "walking"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "running"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "balancing"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-human-detection-️",
      children: "9. Human Detection 🧍‍♀️👀"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids detect people for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "safety"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "interaction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "handing objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cooperative tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Techniques:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YOLO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pose estimation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skeleton tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-gesture-recognition-",
      children: "10. Gesture Recognition ✋🤝"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids must understand:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "waving"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pointing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stop signals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "beckoning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This makes them interactive and safe."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-object-detection-️",
      children: "11. Object Detection 📦👁️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots detect:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "boxes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "handles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "furniture"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Methods:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YOLO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DETR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MaskRCNN"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-6d-pose-estimation-",
      children: "12. 6D Pose Estimation 🎯📦"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For grasping and manipulation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3D position + orientation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Allows humanoids to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "align hands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rotate objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasp accurately"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-scene-understanding-",
      children: "13. Scene Understanding 🧭🌆"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids must interpret:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "room structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obstacles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walkable areas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "interaction points (doors, handles, drawers)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-semantic-segmentation-",
      children: "14. Semantic Segmentation 🎨💡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pixel-wise classification:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "floor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "robot"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wall"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "door"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Helps in navigation & manipulation."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-instance-segmentation-",
      children: "15. Instance Segmentation 👥🔍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each object gets a unique ID."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Useful for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "manipulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sorting objects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-eye-hand-coordination-️",
      children: "16. Eye-Hand Coordination 👁️✋✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot adjusts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arm path"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasp position"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "trajectory"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "using real-time camera feedback."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-vision-based-manipulation-",
      children: "17. Vision-Based Manipulation 🦾📸"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect object"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Estimate orientation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan grasp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Move arm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Close fingers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lift object"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for pick-and-place tasks."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-contact--force-perception-",
      children: "18. Contact & Force Perception 👣💥"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids feel forces through:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tactile sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joint torque sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "foot pressure sensors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "safe grasping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balancing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "manipulating fragile items"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-learning-based-control-",
      children: "19. Learning-Based Control 🧠⚡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids learn:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasping skills"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balancing strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "visual policies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "human-like motions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "deep learning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reinforcement learning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "imitation learning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "20-imitation-learning-il-️️",
      children: "20. Imitation Learning (IL) 🤖➡️🧍‍♂️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot learns from human demonstrations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pouring water"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "folding clothes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "picking objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "opening doors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-behavior-cloning-",
      children: "21. Behavior Cloning 📋🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot copies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "human actions → robot policy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for fast skill transfer."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-reinforcement-learning-rl-",
      children: "22. Reinforcement Learning (RL) 🦾🏆"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RL teaches robots to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walk"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "run"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avoid obstacles"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RL improves through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trial & reward"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-rl-for-manipulation-",
      children: "23. RL for Manipulation 🦾📦"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot learns:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "picking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pushing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rotating"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stacking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tool use"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These tasks are complex but learnable with RL."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-self-supervised-learning-ssl-",
      children: "24. Self-Supervised Learning (SSL) 🤖📚"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SSL helps robots learn from sensor data without labels."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "predicting next frame"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "learning depth from stereo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "feature contrastive learning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-multi-modal-learning-️",
      children: "25. Multi-Modal Learning 📡👁️✋🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoid learns using multiple inputs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sound (optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "force"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joint states"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This creates richer understanding."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-predictive-models-",
      children: "26. Predictive Models 🔮🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots predict:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "human motion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "object trajectory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance loss"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "collision events"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for safe interaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-memory-systems-",
      children: "27. Memory Systems 💾🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots need memory to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "recall objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "remember room layout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "track human locations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-hri-perception-human-robot-interaction-",
      children: "28. HRI Perception (Human-Robot Interaction) 🤝✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "gaze tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "personal space understanding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "action anticipation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "emotion recognition (optional)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-failure-cases-in-vision-️",
      children: "29. Failure Cases in Vision 🚨👁️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vision may fail due to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "low light"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "motion blur"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "occlusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reflective surfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fast movement"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot must detect failures and adapt"
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