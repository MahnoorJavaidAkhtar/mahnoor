"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[7730],{

/***/ 1248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_3_nvidia_isaac_week_10_intro_isaac_sim_md_514_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-3-nvidia-isaac-week-10-intro-isaac-sim-md-514.json
const site_docs_module_3_nvidia_isaac_week_10_intro_isaac_sim_md_514_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-3-nvidia-isaac/week10-intro-isaac-sim","title":"Week 10 — NVIDIA Isaac Sim & Omniverse 🌌🤖✨","description":"Welcome to the future of robotics simulation!","source":"@site/docs/module-3-nvidia-isaac/week10-intro-isaac-sim.md","sourceDirName":"module-3-nvidia-isaac","slug":"/module-3-nvidia-isaac/week10-intro-isaac-sim","permalink":"/docs/module-3-nvidia-isaac/week10-intro-isaac-sim","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 9 — Gazebo Controllers & Motion Simulation 💫🤖","permalink":"/docs/module-2-gazebo/week9-gazebo-controllers"},"next":{"title":"Week 11 — Isaac Robotics Pipeline: USD, Scenes & Assets 🌌🤖📦","permalink":"/docs/module-3-nvidia-isaac/week11-isaac-pipeline-usd"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-3-nvidia-isaac/week10-intro-isaac-sim.md


const frontMatter = {};
const contentTitle = 'Week 10 — NVIDIA Isaac Sim & Omniverse 🌌🤖✨';

const assets = {

};



const toc = [{
  "value": "1. What Is NVIDIA Omniverse? 🌐💫",
  "id": "1-what-is-nvidia-omniverse-",
  "level": 2
}, {
  "value": "2. What Makes Isaac Sim So Special? ⭐🤖",
  "id": "2-what-makes-isaac-sim-so-special-",
  "level": 2
}, {
  "value": "3. Isaac Sim vs Gazebo 🆚⚙️",
  "id": "3-isaac-sim-vs-gazebo-️",
  "level": 2
}, {
  "value": "4. Understanding USD (Universal Scene Description) 📦✨",
  "id": "4-understanding-usd-universal-scene-description-",
  "level": 2
}, {
  "value": "5. Isaac Sim Interface Tour 🖥️🧭",
  "id": "5-isaac-sim-interface-tour-️",
  "level": 2
}, {
  "value": "6. Physics Engine: PhysX ⚡🧩",
  "id": "6-physics-engine-physx-",
  "level": 2
}, {
  "value": "7. Articulations in Isaac Sim 🦾🔗",
  "id": "7-articulations-in-isaac-sim-",
  "level": 2
}, {
  "value": "8. ROS 2 Integration 🚀🤝",
  "id": "8-ros-2-integration-",
  "level": 2
}, {
  "value": "9. Sensors in Isaac Sim 📡👁️✨",
  "id": "9-sensors-in-isaac-sim-️",
  "level": 2
}, {
  "value": "10. Synthetic Data Generation 🎥🧠📊",
  "id": "10-synthetic-data-generation-",
  "level": 2
}, {
  "value": "11. Isaac Replicator 📸🤖",
  "id": "11-isaac-replicator-",
  "level": 2
}, {
  "value": "12. Python Scripting in Isaac Sim 🧪🐍",
  "id": "12-python-scripting-in-isaac-sim-",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "week-10--nvidia-isaac-sim--omniverse-",
        children: "Week 10 — NVIDIA Isaac Sim & Omniverse 🌌🤖✨"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Welcome to the future of robotics simulation!", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NVIDIA Isaac Sim"
      }), " is one of the most advanced platforms for building, training, and testing intelligent robots in photorealistic environments.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Powered by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Omniverse"
      }), ", Isaac Sim delivers:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🌟 Ultra-accurate physics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🎥 Photorealistic visuals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧠 AI-ready perception"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🚀 GPU-accelerated simulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🤝 ROS 2 integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🎮 Real-time robot control"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This week sets the foundation for understanding Isaac Sim and Omniverse’s ecosystem."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-is-nvidia-omniverse-",
      children: "1. What Is NVIDIA Omniverse? 🌐💫"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Omniverse is NVIDIA’s ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtual universe"
      }), " — a real-time collaboration and simulation platform."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🗂 USD (Universal Scene Description)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🖥 Real-time raytracing & RTX rendering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔗 Multi-application collaboration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧲 Physics simulation through PhysX"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🤖 Robotics & AI pipelines"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Omniverse = Blender + Unreal Engine + Gazebo + AI tools → combined into one powerful system."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-what-makes-isaac-sim-so-special-",
      children: "2. What Makes Isaac Sim So Special? ⭐🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim is designed specifically for robotics:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "💥 GPU-powered physics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧠 Deep learning synthetic data generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📸 Advanced camera & LiDAR simulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🦾 Manipulator + humanoid + mobile robot support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔌 ROS 2 ready"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🎯 High-fidelity environments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "#1 platform"
      }), " for AI robotics R&D."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-isaac-sim-vs-gazebo-️",
      children: "3. Isaac Sim vs Gazebo 🆚⚙️"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Isaac Sim"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gazebo"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graphics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🎬 Ultra photoreal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟦 Basic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚡ GPU PhysX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU physics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sensors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🔦 RTX sensors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI Pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🧠 Built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File Format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD 📦"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URDF/SDF"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Isaac Sim is built for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "next-generation robotics & AI"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-understanding-usd-universal-scene-description-",
      children: "4. Understanding USD (Universal Scene Description) 📦✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "USD is the backbone of Omniverse."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It allows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hierarchical scenes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fast loading"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "multi-user editing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "layered assets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "realistic lighting & materials"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Everything you see in Isaac — robots, floors, sensors, lighting — is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "USD asset"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-isaac-sim-interface-tour-️",
      children: "5. Isaac Sim Interface Tour 🖥️🧭"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Main components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🪜 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Stage Panel"
        }), " — hierarchical structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔭 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Viewport"
        }), " — 3D world view"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚙️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Physics Panel"
        }), " — contact forces, gravity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎨 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Materials Panel"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🧪 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Script Editor"
        }), " — Python API"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📁 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Asset Browser"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-physics-engine-physx-",
      children: "6. Physics Engine: PhysX ⚡🧩"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PhysX simulates:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rigid bodies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jointed robots"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "collisions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "contact forces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "friction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mass & inertia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Isaac Sim uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GPU acceleration"
      }), ", making robotics physics extremely fast and stable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-articulations-in-isaac-sim-",
      children: "7. Articulations in Isaac Sim 🦾🔗"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Robots in Isaac are represented using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Articulations"
      }), ", which define:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "links 🧱"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joints 🔩"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "constraints 🔒"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mass properties ⚖️"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "actuation 🔋"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Articulations are like URDF, but ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "more powerful and more accurate"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-ros-2-integration-",
      children: "8. ROS 2 Integration 🚀🤝"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim supports:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "/cmd_vel"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "/joint_states"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "camera topics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiDAR scans"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TF broadcasting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "actions & services"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can run ROS 2 nodes controlling robots inside Isaac ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "in real time"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-sensors-in-isaac-sim-️",
      children: "9. Sensors in Isaac Sim 📡👁️✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac provides some of the BEST simulated sensors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🎥 RGB Cameras"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🟦 Depth Cameras"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔭 LiDAR (RTX ray-traced!)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧭 IMU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📡 GPS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🦶 Contact sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🎚 Noise models"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These sensors are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "photorealistic and physics-accurate"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-synthetic-data-generation-",
      children: "10. Synthetic Data Generation 🎥🧠📊"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One of Isaac Sim’s biggest superpowers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🟣 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Synthetic Dataset Generation"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can auto-generate:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "COCO datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "depth maps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "segmentation masks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bounding boxes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "normal maps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "point clouds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "randomized scenes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Perfect for training:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "detection models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "segmentation models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SLAM networks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-isaac-replicator-",
      children: "11. Isaac Replicator 📸🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Replicator enables:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "random lights"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "random camera poses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "random materials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "spawning objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "annotations export"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It is used by major robotics companies to train vision models."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-python-scripting-in-isaac-sim-",
      children: "12. Python Scripting in Isaac Sim 🧪🐍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example minimal script:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from omni.isaac.kit import SimulationApp\r\nsim = SimulationApp()\r\nprint(\"Isaac Sim started!\")\r\nPython API lets you:\r\n\r\nspawn robots\r\n\r\nprogrammatically move joints\r\n\r\ntrigger sensors\r\n\r\nload environments\r\n\r\n13. Photoreal Rendering (RTX) 🎬🌟\r\nIsaac Sim uses:\r\n\r\npath tracing\r\n\r\nray tracing\r\n\r\nHDR environments\r\n\r\nPBR materials\r\n\r\nThis makes perception training extremely realistic.\r\n\r\n14. Asset Libraries 🏗️📦\r\nIsaac includes:\r\n\r\nindustrial scenes\r\n\r\nwarehouses\r\n\r\noffices\r\n\r\nshelves and tables\r\n\r\nmanipulators\r\n\r\nmobile robots\r\n\r\nsynthetic props\r\n\r\n15. Importing Robots Into Isaac Sim 🤖⬆️\r\nSupports importing:\r\n\r\nURDF\r\n\r\nUSD\r\n\r\nmesh files (STL, OBJ, FBX)\r\n\r\nURDF importer auto-generates:\r\n\r\narticulation models\r\n\r\ncollision geometries\r\n\r\nvisual meshes\r\n\r\nmaterials\r\n\r\n16. Camera Systems 🎥🔦\r\nIsaac supports:\r\n\r\nRGB\r\n\r\nStereo\r\n\r\nDepth\r\n\r\nSemantic segmentation\r\n\r\nInstance segmentation\r\n\r\nOptical flow\r\n\r\nMotion blur\r\n\r\n17. LiDAR Simulation 🌐🔦\r\nRTX-powered LiDAR provides:\r\n\r\nexact reflections\r\n\r\nrealistic noise\r\n\r\naccurate ray tracing\r\n\r\ndense point clouds\r\n\r\nBetter than any other simulator.\r\n\r\n18. Debugging Tools 🔍🧰\r\nTools include:\r\n\r\ncollision visualization\r\n\r\njoint frames\r\n\r\nmass/inertia inspection\r\n\r\ncontact forces\r\n\r\narticulation inspector\r\n\r\n19. Isaac + Reinforcement Learning 🧠⚡\r\nRobots can be trained using:\r\n\r\nRL Games\r\n\r\nStable Baselines\r\n\r\nRSL RL\r\n\r\ncustom RL scripts\r\n\r\n20. Isaac Gym (Massively Parallel RL) 🤖⚡🔥\r\nTrain:\r\n\r\nhumanoids walking\r\n\r\narms manipulating\r\n\r\nquadrupeds running\r\n\r\ndrones stabilizing\r\n\r\n1000+ robots simulated on a single GPU.\r\n\r\n21. Motion Planning 🔄🛤️\r\nSupports:\r\n\r\nRMPflow\r\n\r\nIK solvers\r\n\r\ntrajectory optimization\r\n\r\n22. Material System ✨🎨\r\nUses MDL:\r\n\r\nmetals\r\n\r\nplastics\r\n\r\nglossy\r\n\r\nemissive neon\r\n\r\n23. Domain Randomization 🌈📸\r\nUsed for:\r\n\r\nrobust AI\r\n\r\ngeneralization\r\n\r\novercoming sim-to-real gap\r\n\r\nIsaac Sim is famous for this capability.\r\n\r\n24. Data Export Pipelines 🧾📦\r\nExport formats:\r\n\r\nCOCO\r\n\r\nKITTI\r\n\r\nJSON\r\n\r\nsegmentation maps\r\n\r\ndepth maps\r\n\r\n25. Humanoid Simulation 🤖🦿\r\nIsaac Sim is excellent for humanoids:\r\n\r\nmulti-joint articulations\r\n\r\ntorque control\r\n\r\ncontact simulation\r\n\r\nbalancing controllers\n"
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