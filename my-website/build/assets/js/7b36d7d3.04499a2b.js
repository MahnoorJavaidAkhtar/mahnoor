"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[2255],{

/***/ 8192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_2_gazebo_week_6_simulation_concepts_md_7b3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-2-gazebo-week-6-simulation-concepts-md-7b3.json
const site_docs_module_2_gazebo_week_6_simulation_concepts_md_7b3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-2-gazebo/week6-simulation-concepts","title":"Week 6 — Simulation Concepts & Physics Engines","description":"Simulation is a core pillar of robotics development, allowing us to build, test, and refine robots long before they exist physically.","source":"@site/docs/module-2-gazebo/week6-simulation-concepts.md","sourceDirName":"module-2-gazebo","slug":"/module-2-gazebo/week6-simulation-concepts","permalink":"/docs/module-2-gazebo/week6-simulation-concepts","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"⚙️ Week 5 — ROS 2 Advanced Design Patterns","permalink":"/docs/module-1-ros2/week5-ros2-advanced-patterns"},"next":{"title":"Week 7 — Robot Modeling & URDF","permalink":"/docs/module-2-gazebo/week7-robot-modeling-urdf"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-2-gazebo/week6-simulation-concepts.md


const frontMatter = {};
const contentTitle = 'Week 6 — Simulation Concepts & Physics Engines';

const assets = {

};



const toc = [{
  "value": "✔ Physics simulation",
  "id": "-physics-simulation",
  "level": 3
}, {
  "value": "✔ Sensor simulation",
  "id": "-sensor-simulation",
  "level": 3
}, {
  "value": "✔ Robot modeling",
  "id": "-robot-modeling",
  "level": 3
}, {
  "value": "✔ Plugins",
  "id": "-plugins",
  "level": 3
}, {
  "value": "✔ Integration with ROS 2",
  "id": "-integration-with-ros-2",
  "level": 3
}, {
  "value": "Example: Joint Dynamics",
  "id": "example-joint-dynamics",
  "level": 3
}, {
  "value": "1️⃣ World",
  "id": "1️⃣-world",
  "level": 2
}, {
  "value": "2️⃣ Models",
  "id": "2️⃣-models",
  "level": 2
}, {
  "value": "3️⃣ Links &amp; Joints",
  "id": "3️⃣-links--joints",
  "level": 2
}, {
  "value": "4️⃣ Sensors",
  "id": "4️⃣-sensors",
  "level": 2
}, {
  "value": "5️⃣ Controllers",
  "id": "5️⃣-controllers",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "week-6--simulation-concepts--physics-engines",
        children: "Week 6 — Simulation Concepts & Physics Engines"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Simulation is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "core pillar of robotics development"
      }), ", allowing us to build, test, and refine robots long before they exist physically.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "For humanoids, autonomous vehicles, manipulators, and drones, simulation accelerates progress while reducing risk and cost."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This week introduces the foundations of robotics simulation using Gazebo — a powerful, physics-based robotics simulator."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-why-do-robots-need-simulation",
      children: "⚡ Why Do Robots Need Simulation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Robots operate in dynamic, unpredictable environments.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Simulation allows us to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧪 Test algorithms safely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🚧 Avoid hardware damage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚙ Rapidly prototype locomotion & control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "👀 Visualize robot behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔄 Debug without physical hardware"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧠 Train AI models in large virtual datasets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Simulation is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "virtual playground"
      }), " where robots learn before entering the real world."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-simulation-pyramid-in-robotics",
      children: "🟣 Simulation Pyramid in Robotics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+------------------------------------------------+\r\n| High-Level Simulation (AI Training, RL, HRI) |\r\n+------------------------------------------------+\r\n| Behavior Simulation (Navigation, Planning) |\r\n+------------------------------------------------+\r\n| Dynamics Simulation (Locomotion, Manipulation) |\r\n+------------------------------------------------+\r\n| Physics Simulation (Forces, Contacts, Joints) |\r\n+------------------------------------------------+\r\n| Geometry & Models (URDF/SDF, Meshes) |\r\n+------------------------------------------------+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gazebo focuses on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "physics + dynamics + sensors"
      }), ", making it ideal for realistic robot development."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-what-gazebo-provides",
      children: "🔥 What Gazebo Provides"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-physics-simulation",
      children: "✔ Physics simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gravity, collisions, friction, inertia, joint dynamics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-sensor-simulation",
      children: "✔ Sensor simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Camera, LiDAR, IMU, depth sensors, GPS."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-robot-modeling",
      children: "✔ Robot modeling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URDF and SDF robots rendered in real-time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-plugins",
      children: "✔ Plugins"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom controllers, actuators, and sensor logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-integration-with-ros-2",
      children: "✔ Integration with ROS 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Topics, services, and TF broadcasting directly into simulation."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-concept-how-a-simulator-thinks",
      children: "🧠 Concept: How a Simulator \"Thinks\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Simulation runs in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "discrete time steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read robot state"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply forces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compute physics step"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update sensors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Send data to ROS 2 topics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Render environment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This loop runs at 30–1000 Hz depending on hardware."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-physics-engines-in-robotics-simulation",
      children: "🌌 Physics Engines in Robotics Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gazebo can use multiple physics engines:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Engine"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strengths"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ODE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stable, widely used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mobile robots, standard tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bullet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "advanced collisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "manipulators, contact-rich tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DART"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high precision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "humanoids & locomotion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Simbody"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "very stable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "biomechanical simulation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Humanoid robots often use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DART"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bullet"
      }), " for realistic balance and joint control."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-how-physics-engines-work",
      children: "⚙ How Physics Engines Work"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Physics engines simulate:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rigid body motion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joint constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "collision detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "forces & torques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "inertia & momentum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "friction models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "restitution (bounciness)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-joint-dynamics",
      children: "Example: Joint Dynamics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "τ = Iα + friction + gravity_compensation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Where:", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "τ = torque", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "I = inertia", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "α = angular acceleration"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-core-simulation-concepts",
      children: "🛰 Core Simulation Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1️⃣-world",
      children: "1️⃣ World"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contains ground, lights, environment, objects, and robots."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2️⃣-models",
      children: "2️⃣ Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots + obstacles, defined in URDF/SDF."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-links--joints",
      children: "3️⃣ Links & Joints"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Structural robot elements connected with constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-sensors",
      children: "4️⃣ Sensors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mounted on links; publish simulated data."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-controllers",
      children: "5️⃣ Controllers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Move joints based on ROS 2 commands."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-gazebo-simulation-loop-diagram",
      children: "📘 Gazebo Simulation Loop (Diagram)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+---------------------+\r\n| Gazebo World |\r\n+----------+----------+\r\n|\r\nv\r\n+---------------------+\r\n| Physics Engine |\r\n| (ODE/Bullet/DART) |\r\n+----------+----------+\r\n|\r\nv\r\n+---------------------+\r\n| Sensor Simulation |\r\n| (Camera, LiDAR) |\r\n+----------+----------+\r\n|\r\nv\r\n+---------------------+\r\n| ROS 2 Integration |\r\n| /cmd_vel, /scan |\r\n+---------------------+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-example-launching-gazebo-with-a-robot",
      children: "🧪 Example: Launching Gazebo with a Robot"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<launch>\r\n  <include file=\"$(find gazebo_ros)/launch/empty_world.launch\"/>\r\n  <node pkg=\"gazebo_ros\" type=\"spawn_model\" name=\"spawn_robot\"\r\n        args=\"-file $(find my_robot)/urdf/my_robot.urdf -model my_robot\"/>\r\n</launch>\r\nThis spawns your URDF robot into the simulation world.\r\n\r\n💡 Why Simulation Matters for Humanoid Robots\r\nHumanoids require:\r\n\r\nbalance testing\r\n\r\ndynamic walking\r\n\r\ncontact modeling\r\n\r\nmulti-sensor fusion\r\n\r\nThese tasks are dangerous in real hardware:\r\n\r\n❌ falling\r\n❌ overheating motors\r\n❌ inaccurate torque models\r\n\r\nSimulation allows safe debugging and rapid iteration.\r\n\n"
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