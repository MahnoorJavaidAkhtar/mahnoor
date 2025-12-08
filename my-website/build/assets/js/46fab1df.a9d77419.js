"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[2127],{

/***/ 3402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_3_nvidia_isaac_week_13_isaac_robotics_ai_md_46f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-3-nvidia-isaac-week-13-isaac-robotics-ai-md-46f.json
const site_docs_module_3_nvidia_isaac_week_13_isaac_robotics_ai_md_46f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-3-nvidia-isaac/week13-isaac-robotics-ai","title":"Week 13 — Robotics AI Workflows in Isaac Sim 🤖🧠⚡","description":"Isaac Sim is not just a simulator —","source":"@site/docs/module-3-nvidia-isaac/week13-isaac-robotics-ai.md","sourceDirName":"module-3-nvidia-isaac","slug":"/module-3-nvidia-isaac/week13-isaac-robotics-ai","permalink":"/docs/module-3-nvidia-isaac/week13-isaac-robotics-ai","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 12 — Perception, Sensors & Synthetic Data in Isaac Sim 👁️🤖🎥✨","permalink":"/docs/module-3-nvidia-isaac/week12-isaac-perception-sensors"},"next":{"title":"Week 14 — Humanoid Robotics Foundations 🤖🦿✨","permalink":"/docs/module-4-humanoids/week14-humanoid-foundations"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-3-nvidia-isaac/week13-isaac-robotics-ai.md


const frontMatter = {};
const contentTitle = 'Week 13 — Robotics AI Workflows in Isaac Sim 🤖🧠⚡';

const assets = {

};



const toc = [{
  "value": "1. What Is Robotics AI? 🤔🧠",
  "id": "1-what-is-robotics-ai-",
  "level": 2
}, {
  "value": "2. Why Isaac Sim Is Perfect for AI 🤖✨",
  "id": "2-why-isaac-sim-is-perfect-for-ai-",
  "level": 2
}, {
  "value": "3. Reinforcement Learning (RL) Basics 🎮🧠",
  "id": "3-reinforcement-learning-rl-basics-",
  "level": 2
}, {
  "value": "4. RL Loop in Isaac Sim 🔄🤖",
  "id": "4-rl-loop-in-isaac-sim-",
  "level": 2
}, {
  "value": "5. RL Libraries Supported 🧰⚡",
  "id": "5-rl-libraries-supported-",
  "level": 2
}, {
  "value": "6. Isaac Gym (Massive Parallel RL) 🚀🔥🤖",
  "id": "6-isaac-gym-massive-parallel-rl-",
  "level": 2
}, {
  "value": "7. RL Environments in Isaac Sim 🌎",
  "id": "7-rl-environments-in-isaac-sim-",
  "level": 2
}, {
  "value": "8. Rewards in Robotics 🏆✨",
  "id": "8-rewards-in-robotics-",
  "level": 2
}, {
  "value": "9. Observations for RL (State Space) 👁️📦",
  "id": "9-observations-for-rl-state-space-️",
  "level": 2
}, {
  "value": "10. Actions in RL (Motor Commands) 🦾⚡",
  "id": "10-actions-in-rl-motor-commands-",
  "level": 2
}, {
  "value": "11. Humanoid RL in Isaac Sim 🦿🔥",
  "id": "11-humanoid-rl-in-isaac-sim-",
  "level": 2
}, {
  "value": "12. Quadruped RL 🐕🤖",
  "id": "12-quadruped-rl-",
  "level": 2
}, {
  "value": "13. Robotic Arm RL 🤲🦾",
  "id": "13-robotic-arm-rl-",
  "level": 2
}, {
  "value": "14. Manipulation Tasks in Isaac Sim ✋📦",
  "id": "14-manipulation-tasks-in-isaac-sim-",
  "level": 2
}, {
  "value": "15. End-Effector Control 🖐️✨",
  "id": "15-end-effector-control-️",
  "level": 2
}, {
  "value": "16. Motion Planning in Isaac Sim 🛤️🤖",
  "id": "16-motion-planning-in-isaac-sim-️",
  "level": 2
}, {
  "value": "17. RMPflow Overview 💠",
  "id": "17-rmpflow-overview-",
  "level": 2
}, {
  "value": "18. Inverse Kinematics (IK) 🦾🧠",
  "id": "18-inverse-kinematics-ik-",
  "level": 2
}, {
  "value": "19. Trajectory Generation 🛤️📈",
  "id": "19-trajectory-generation-️",
  "level": 2
}, {
  "value": "20. Behavior Trees in Isaac Sim 🌳⚙️",
  "id": "20-behavior-trees-in-isaac-sim-️",
  "level": 2
}, {
  "value": "21. Vision-Based AI in Isaac Sim 👀🧠",
  "id": "21-vision-based-ai-in-isaac-sim-",
  "level": 2
}, {
  "value": "22. Synthetic Data for AI Training 🎥📊",
  "id": "22-synthetic-data-for-ai-training-",
  "level": 2
}, {
  "value": "23. Isaac Replicator for AI 🎨📸",
  "id": "23-isaac-replicator-for-ai-",
  "level": 2
}, {
  "value": "24. Multi-Sensor AI Pipelines 📡📷🔦",
  "id": "24-multi-sensor-ai-pipelines-",
  "level": 2
}, {
  "value": "25. Real-Time AI Testing ⚡🧪",
  "id": "25-real-time-ai-testing-",
  "level": 2
}, {
  "value": "26. Simulation-to-Real Transfer (Sim2Real) 🔄🤖",
  "id": "26-simulation-to-real-transfer-sim2real-",
  "level": 2
}, {
  "value": "27. Failure Modes in AI Robotics 🚨🤖",
  "id": "27-failure-modes-in-ai-robotics-",
  "level": 2
}, {
  "value": "28. Debugging AI Models 🧰🔍",
  "id": "28-debugging-ai-models-",
  "level": 2
}, {
  "value": "29. Example RL Script in Isaac Sim 🐍📜",
  "id": "29-example-rl-script-in-isaac-sim-",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "week-13--robotics-ai-workflows-in-isaac-sim-",
        children: "Week 13 — Robotics AI Workflows in Isaac Sim 🤖🧠⚡"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Isaac Sim is not just a simulator —", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "it's a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete robotics AI laboratory"
      }), " where robots can learn, plan, adapt, move, and improve through:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reinforcement Learning (RL)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Motion Planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manipulation AI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Synthetic data pipelines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPU-accelerated training"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interactive simulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This week we explore ALL the advanced AI workflows used by modern robotics companies."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-is-robotics-ai-",
      children: "1. What Is Robotics AI? 🤔🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robotics AI includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "control learning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "behavior generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "action planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "movement optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "perception-based actions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Isaac Sim, robots can ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "learn"
      }), " instead of just being controlled."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-why-isaac-sim-is-perfect-for-ai-",
      children: "2. Why Isaac Sim Is Perfect for AI 🤖✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚡ GPU physics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🎥 photoreal sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📡 accurate LiDAR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧠 RL interfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🏃‍♂️ fast parallel simulations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧩 deep learning hooks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧪 synthetic datasets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This makes it a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "complete AI training ecosystem"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-reinforcement-learning-rl-basics-",
      children: "3. Reinforcement Learning (RL) Basics 🎮🧠"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RL is learning through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "trial and error"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An agent:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "observes state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "takes action"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "receives reward"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "improves policy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Over time, robots learn to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walk"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "navigate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-rl-loop-in-isaac-sim-",
      children: "4. RL Loop in Isaac Sim 🔄🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "State → Action → Reward → Next State → Policy Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Isaac Sim executes this loop ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "thousands of times per second on GPU"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-rl-libraries-supported-",
      children: "5. RL Libraries Supported 🧰⚡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can use:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RL Games"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RSL RL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Isaac Gym APIs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stable Baselines 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom PyTorch models"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-isaac-gym-massive-parallel-rl-",
      children: "6. Isaac Gym (Massive Parallel RL) 🚀🔥🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Gym trains:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "humanoids"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "quadrupeds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "manipulators"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ALL ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "in parallel on GPU"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example achievements:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "humanoid walking in 10 minutes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arm manipulation in 20 minutes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-rl-environments-in-isaac-sim-",
      children: "7. RL Environments in Isaac Sim 🌎"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots can be trained in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "warehouses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "open fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obstacle courses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "labs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "custom-designed RL arenas"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-rewards-in-robotics-",
      children: "8. Rewards in Robotics 🏆✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common reward types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "distance to target"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stability reward"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "speed reward"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "energy efficiency reward"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "collision penalty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "goal completion bonus"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-observations-for-rl-state-space-️",
      children: "9. Observations for RL (State Space) 👁️📦"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots observe:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joint angles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joint velocities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "camera frames"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "depth images"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiDAR scans"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "contact forces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-actions-in-rl-motor-commands-",
      children: "10. Actions in RL (Motor Commands) 🦾⚡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actions may include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joint torques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joint velocities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "end-effector poses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "locomotion commands"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-humanoid-rl-in-isaac-sim-",
      children: "11. Humanoid RL in Isaac Sim 🦿🔥"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids train:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "running"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "standing up"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avoiding obstacles"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim + PhysX produce realistic physics for balance."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-quadruped-rl-",
      children: "12. Quadruped RL 🐕🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Quadrupeds learn:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "gait patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "trotting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "galloping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obstacle avoidance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-robotic-arm-rl-",
      children: "13. Robotic Arm RL 🤲🦾"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robotic manipulators learn:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reaching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lifting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rotating objects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-manipulation-tasks-in-isaac-sim-",
      children: "14. Manipulation Tasks in Isaac Sim ✋📦"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pick & place"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stacking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sweeping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pushing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "door opening"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-end-effector-control-️",
      children: "15. End-Effector Control 🖐️✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots control EE via:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IK"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "torque control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RL policies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-motion-planning-in-isaac-sim-️",
      children: "16. Motion Planning in Isaac Sim 🛤️🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac supports:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RMPflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OMPL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "native planners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "custom IK solvers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Motion planning is crucial for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mobile manipulators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "humanoids"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-rmpflow-overview-",
      children: "17. RMPflow Overview 💠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RMPflow blends:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "control policies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "workspace limits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ideal for smooth manipulation."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-inverse-kinematics-ik-",
      children: "18. Inverse Kinematics (IK) 🦾🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IK solves:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "desired end-effector position → joint angles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac offers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "analytical IK"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "numerical IK"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "deep-learning-driven IK"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-trajectory-generation-️",
      children: "19. Trajectory Generation 🛤️📈"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots generate:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "smooth splines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "minimum jerk paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "time-parameterized trajectories"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "20-behavior-trees-in-isaac-sim-️",
      children: "20. Behavior Trees in Isaac Sim 🌳⚙️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "decision making"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "multi-step tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "action switching"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-vision-based-ai-in-isaac-sim-",
      children: "21. Vision-Based AI in Isaac Sim 👀🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Perception-driven tasks include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "object detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pose estimation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "scene understanding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pick-point prediction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-synthetic-data-for-ai-training-",
      children: "22. Synthetic Data for AI Training 🎥📊"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate labeled datasets for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YOLO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DETR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MaskRCNN"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "6D pose networks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "segmentation models"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-isaac-replicator-for-ai-",
      children: "23. Isaac Replicator for AI 🎨📸"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Randomizes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "textures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "clutter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lighting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "weather"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "materials"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Great for domain adaptation."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-multi-sensor-ai-pipelines-",
      children: "24. Multi-Sensor AI Pipelines 📡📷🔦"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI models use:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "camera + LiDAR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "camera + IMU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "depth + RGB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "multi-view perception"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-real-time-ai-testing-",
      children: "25. Real-Time AI Testing ⚡🧪"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can test:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RL agents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "motion planners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "learned controllers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasping networks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ALL inside Isaac Sim."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-simulation-to-real-transfer-sim2real-",
      children: "26. Simulation-to-Real Transfer (Sim2Real) 🔄🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim supports:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "photoreal scenes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "accurate physics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "domain randomization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This reduces the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reality gap"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-failure-modes-in-ai-robotics-",
      children: "27. Failure Modes in AI Robotics 🚨🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common issues:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "policy overfitting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "unstable torque"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bad reward shaping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "perception noise issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-debugging-ai-models-",
      children: "28. Debugging AI Models 🧰🔍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RL tensor logs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "observation visualizers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reward plots"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "action histograms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-example-rl-script-in-isaac-sim-",
      children: "29. Example RL Script in Isaac Sim 🐍📜"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "obs = env.reset()\r\nfor step in range(1000):\r\n    action = policy(obs)\r\n    obs, reward, done, info = env.step(action)\n"
      })
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