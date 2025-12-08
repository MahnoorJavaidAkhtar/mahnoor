"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[4698],{

/***/ 5350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_3_nvidia_isaac_week_11_isaac_pipeline_usd_md_fa4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-3-nvidia-isaac-week-11-isaac-pipeline-usd-md-fa4.json
const site_docs_module_3_nvidia_isaac_week_11_isaac_pipeline_usd_md_fa4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-3-nvidia-isaac/week11-isaac-pipeline-usd","title":"Week 11 — Isaac Robotics Pipeline: USD, Scenes & Assets 🌌🤖📦","description":"This week explores how Isaac Sim manages robots, environments, scenes, articulations, materials, and world-building using USD (Universal Scene Description).","source":"@site/docs/module-3-nvidia-isaac/week11-isaac-pipeline-usd.md","sourceDirName":"module-3-nvidia-isaac","slug":"/module-3-nvidia-isaac/week11-isaac-pipeline-usd","permalink":"/docs/module-3-nvidia-isaac/week11-isaac-pipeline-usd","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 10 — NVIDIA Isaac Sim & Omniverse 🌌🤖✨","permalink":"/docs/module-3-nvidia-isaac/week10-intro-isaac-sim"},"next":{"title":"Week 12 — Perception, Sensors & Synthetic Data in Isaac Sim 👁️🤖🎥✨","permalink":"/docs/module-3-nvidia-isaac/week12-isaac-perception-sensors"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-3-nvidia-isaac/week11-isaac-pipeline-usd.md


const frontMatter = {};
const contentTitle = 'Week 11 — Isaac Robotics Pipeline: USD, Scenes & Assets 🌌🤖📦';

const assets = {

};



const toc = [{
  "value": "1. What Is USD? 📦✨",
  "id": "1-what-is-usd-",
  "level": 2
}, {
  "value": "2. Why Isaac Sim Uses USD 🤖💜",
  "id": "2-why-isaac-sim-uses-usd-",
  "level": 2
}, {
  "value": "3. USD Stages &amp; Layers 🗂️",
  "id": "3-usd-stages--layers-️",
  "level": 2
}, {
  "value": "4. Stage Hierarchy 🌳",
  "id": "4-stage-hierarchy-",
  "level": 2
}, {
  "value": "5. Prims — The Building Blocks 🧱✨",
  "id": "5-prims--the-building-blocks-",
  "level": 2
}, {
  "value": "6. Prim Types in Isaac Sim 🧩",
  "id": "6-prim-types-in-isaac-sim-",
  "level": 2
}, {
  "value": "7. Transform Hierarchy 🔗",
  "id": "7-transform-hierarchy-",
  "level": 2
}, {
  "value": "8. Articulations in USD 🦾",
  "id": "8-articulations-in-usd-",
  "level": 2
}, {
  "value": "9. USD vs URDF 🤝",
  "id": "9-usd-vs-urdf-",
  "level": 2
}, {
  "value": "10. Importing URDF into Isaac Sim 🤖⬆️",
  "id": "10-importing-urdf-into-isaac-sim-️",
  "level": 2
}, {
  "value": "11. USD Robot Structure Example 🤖🌐",
  "id": "11-usd-robot-structure-example-",
  "level": 2
}, {
  "value": "12. Spawning Robots Programmatically 🧪🐍",
  "id": "12-spawning-robots-programmatically-",
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
        id: "week-11--isaac-robotics-pipeline-usd-scenes--assets-",
        children: "Week 11 — Isaac Robotics Pipeline: USD, Scenes & Assets 🌌🤖📦"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This week explores how Isaac Sim manages ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "robots, environments, scenes, articulations, materials, and world-building"
      }), " using USD (Universal Scene Description).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "USD is the beating heart of Omniverse — everything in Isaac Sim is a USD entity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this week, you will understand:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🌐 USD structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🏗 Scene composition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📦 Asset pipelines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🎛 Physics layers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔌 Robot import workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🎨 Materials & shaders"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧠 Metadata & annotations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧩 Live scene editing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-is-usd-",
      children: "1. What Is USD? 📦✨"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["USD = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Scene Description"
      }), ", created by Pixar."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It defines:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "materials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "animations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hierarchies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "physics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lighting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["USD acts like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "supercharged 3D JSON for robotics"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-why-isaac-sim-uses-usd-",
      children: "2. Why Isaac Sim Uses USD 🤖💜"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Because USD provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚡ real-time updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧬 non-destructive editing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🪜 hierarchical scenes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🎨 photoreal materials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔥 multi-user collaboration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧠 AI metadata support"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-usd-stages--layers-️",
      children: "3. USD Stages & Layers 🗂️"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stage"
      }), " = entire scene.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "layer"
      }), " = file inside the stage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Layers can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "override"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "inherit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "extend"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-stage-hierarchy-",
      children: "4. Stage Hierarchy 🌳"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A typical Isaac stage looks like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "/World\r\n/Environment\r\n/Lighting\r\n/Robots\r\n/MyRobot\r\n/base_link\r\n/arm_link\r\n/camera_link"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Everything is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prim"
      }), " (primary object)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-prims--the-building-blocks-",
      children: "5. Prims — The Building Blocks 🧱✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prims can be:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "robots"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "meshes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cameras"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lights"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "physics bodies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example prim names:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "/World/Robot/base_link\r\n/World/Robot/arm_link"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-prim-types-in-isaac-sim-",
      children: "6. Prim Types in Isaac Sim 🧩"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Xform"
        }), " (transform)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Mesh"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Scope"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Camera"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "DistantLight"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RigidBodyAPI"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ArticulationRootAPI"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-transform-hierarchy-",
      children: "7. Transform Hierarchy 🔗"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prims follow parent-child transforms."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot\r\n├── Base\r\n├── Arm\r\n└── Camera"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-articulations-in-usd-",
      children: "8. Articulations in USD 🦾"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Articulations represent robots with joints."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "They define:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "center of mass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "actuators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "constraints"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-usd-vs-urdf-",
      children: "9. USD vs URDF 🤝"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "URDF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "USD"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "robots only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✖"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "full scenes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✖"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "materials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "advanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "physics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "basic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PhysX GPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sensors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "built-in"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "USD is more powerful."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-importing-urdf-into-isaac-sim-️",
      children: "10. Importing URDF into Isaac Sim 🤖⬆️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim has a URDF importer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It converts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "links → prims"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joints → articulation joints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "visuals → meshes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "collisions → physics shapes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-usd-robot-structure-example-",
      children: "11. USD Robot Structure Example 🤖🌐"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "/World/MyRobot\r\n/base_link\r\n/shoulder\r\n/elbow\r\n/wrist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each link is a prim with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "collision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "articulation metadata"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-spawning-robots-programmatically-",
      children: "12. Spawning Robots Programmatically 🧪🐍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example Python script:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from omni.isaac.core import World\r\nworld = World()\r\nrobot = world.scene.add(...)\r\n13. Scene Composition 🎬\r\nScenes can include:\r\n\r\nwarehouses\r\n\r\noffice rooms\r\n\r\noutdoor environments\r\n\r\nconveyor belts\r\n\r\ntools & props\r\n\r\n14. Environment Assets 🌆\r\nIncluded assets:\r\n\r\nindustrial shelves\r\n\r\npallets\r\n\r\ntables\r\n\r\nboxes\r\n\r\nchairs\r\n\r\nrobotics labs\r\n\r\n15. Kit-Based Assets 🧰\r\nKit assets provide:\r\n\r\nlights\r\n\r\nmaterials\r\n\r\nHDRI skies\r\n\r\nground planes\r\n\r\nrobot parts\r\n\r\n16. Materials in USD 🎨✨\r\nUSD supports:\r\n\r\nmetal\r\n\r\nplastic\r\n\r\nglass\r\n\r\nemissive neon\r\n\r\nPBR textures\r\n\r\nMDL shaders\r\n\r\n17. Lighting in Isaac Sim 💡🌙\r\nLighting types:\r\n\r\ndome lights\r\n\r\ndistant lights\r\n\r\nspherical lights\r\n\r\narea lights\r\n\r\nYou can adjust:\r\n\r\nintensity\r\n\r\ncolor\r\n\r\ntemperature\r\n\r\nshadows\r\n\r\n18. Physics Setup 🔥⚙️\r\nPhysics prims include:\r\n\r\nrigid bodies\r\n\r\ncolliders\r\n\r\narticulations\r\n\r\njoints\r\n\r\ngravity\r\n\r\n19. Collision Meshes 🧱\r\nSimple shapes:\r\n\r\nbox\r\n\r\nsphere\r\n\r\ncapsule\r\n\r\nconvex hull\r\n\r\nComplex meshes cause poor performance.\r\n\r\n20. Sensors in USD 📡\r\nSensors are prims too, such as:\r\n\r\ncamera\r\n\r\nIMU\r\n\r\nLiDAR\r\n\r\ndepth sensors\r\n\r\n21. Parametrizing Sensors 🎛\r\nYou can adjust:\r\n\r\nupdate rate\r\n\r\nFOV\r\n\r\nnoise\r\n\r\nresolution\r\n\r\n22. Robot Placement 🧭\r\nRobots can spawn at:\r\n\r\nrandom poses\r\n\r\nfixed coordinates\r\n\r\nscripted trajectories\r\n\r\n23. Asset Referencing 🧩\r\nInstead of copying assets:\r\n\r\nUSD REFERENCES them.\r\n\r\nThis reduces:\r\n\r\nmemory usage\r\n\r\nfile size\r\n\r\nload time\r\n\r\n24. Non-Destructive Editing 🎨\r\nYou can override properties without modifying the base asset.\r\n\r\nExample:\r\n\r\nchange robot color\r\n\r\nupdate mass\r\n\r\nadjust joint limits\r\n\r\n25. Semantic Labels 🏷️\r\nUsed for:\r\n\r\nsegmentation\r\n\r\nobject detection\r\n\r\ndataset generation\r\n\r\n26. USD Metadata 📘\r\nMetadata stores:\r\n\r\nannotations\r\n\r\nphysics settings\r\n\r\ntags\r\n\r\ndescriptions\r\n\r\n27. Scene Graph Debugging 🔍\r\nYou can inspect:\r\n\r\narticulation roots\r\n\r\njoint connections\r\n\r\nmass distribution\r\n\r\ncollision shapes\r\n\r\n28. Animation & Motion Clips 🎞️\r\nUSD allows:\r\n\r\nkeyframe animation\r\n\r\nmotion capture\r\n\r\nprocedural animations\r\n\r\n29. Loading Worlds from Python 🐍🌍\r\npython\r\nCopy code\r\nworld.load_stage('/path/to/warehouse.usd')\n"
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