"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[5214],{

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


/***/ }),

/***/ 8559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_1_ros_2_week_2_physical_ai_landscape_md_7ff_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-1-ros-2-week-2-physical-ai-landscape-md-7ff.json
const site_docs_module_1_ros_2_week_2_physical_ai_landscape_md_7ff_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-1-ros2/week2-physical-ai-landscape","title":"Week 2 — The Landscape of Physical AI","description":"Physical AI is expanding rapidly across industries and research, transforming machines into intelligent, adaptive, real-world actors.","source":"@site/docs/module-1-ros2/week2-physical-ai-landscape.md","sourceDirName":"module-1-ros2","slug":"/module-1-ros2/week2-physical-ai-landscape","permalink":"/docs/module-1-ros2/week2-physical-ai-landscape","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"⚡ Introduction to Physical AI","permalink":"/docs/module-1-ros2/week1-introduction"},"next":{"title":"Week 3 — ROS 2 Architecture & Nodes","permalink":"/docs/module-1-ros2/week3-ros2-architecture-nodes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-1-ros2/week2-physical-ai-landscape.md


const frontMatter = {};
const contentTitle = 'Week 2 — The Landscape of Physical AI';

const assets = {

};



const toc = [{
  "value": "<strong>1️⃣ Mechatronic Robotics (Before 2000) — The Mechanical Age</strong>",
  "id": "1️⃣-mechatronic-robotics-before-2000--the-mechanical-age",
  "level": 3
}, {
  "value": "<strong>2️⃣ Autonomous Robotics (2000–2020) — The Sensor Age</strong>",
  "id": "2️⃣-autonomous-robotics-20002020--the-sensor-age",
  "level": 3
}, {
  "value": "<strong>3️⃣ Embodied AI (2020–Present) — The Intelligence Age</strong>",
  "id": "3️⃣-embodied-ai-2020present--the-intelligence-age",
  "level": 3
}, {
  "value": "🤖 <strong>1. Humanoid Robotics</strong>",
  "id": "-1-humanoid-robotics",
  "level": 2
}, {
  "value": "🏭 <strong>2. Industry &amp; Automation</strong>",
  "id": "-2-industry--automation",
  "level": 2
}, {
  "value": "🚗 <strong>3. Autonomous Mobility</strong>",
  "id": "-3-autonomous-mobility",
  "level": 2
}, {
  "value": "🩺 <strong>4. Healthcare Robotics</strong>",
  "id": "-4-healthcare-robotics",
  "level": 2
}, {
  "value": "🔬 <strong>5. Research &amp; Exploration Robotics</strong>",
  "id": "-5-research--exploration-robotics",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "week-2--the-landscape-of-physical-ai",
        children: "Week 2 — The Landscape of Physical AI"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Physical AI is expanding rapidly across industries and research, transforming machines into intelligent, adaptive, real-world actors.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "This week explores the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "domains, evolution, structure, and challenges"
      }), " of the Physical AI ecosystem from a futuristic robotics perspective."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-what-is-the-physical-ai-landscape",
      children: "⚡ What Is the Physical AI Landscape?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Physical AI combines:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Robotics"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Machine learning"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Control systems"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Embodied cognition"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time perception"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["…to create robots that ", (0,jsx_runtime.jsx)(_components.em, {
        children: "understand, move, learn,"
      }), " and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "collaborate"
      }), " within human environments."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This landscape connects ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI → Body → World"
      }), " into one intelligent loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-evolution-of-physical-ai",
      children: "🧭 Evolution of Physical AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1️⃣-mechatronic-robotics-before-2000--the-mechanical-age",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1️⃣ Mechatronic Robotics (Before 2000) — The Mechanical Age"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-programmed motion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No perception"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixed environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Industrial arms, CNCs, welding bots"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2️⃣-autonomous-robotics-20002020--the-sensor-age",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2️⃣ Autonomous Robotics (2000–2020) — The Sensor Age"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SLAM & mapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiDAR-based navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vision systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wheeled robots, drones, AGVs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3️⃣-embodied-ai-2020present--the-intelligence-age",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3️⃣ Embodied AI (2020–Present) — The Intelligence Age"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deep learning perception"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reinforcement learning for locomotion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Humanoids & dexterous manipulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time scene understanding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🟣 This is the era of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "robots that adapt"
      }), ", not just execute commands."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-physical-ai-application-domains",
      children: "🔮 Physical AI Application Domains"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-1-humanoid-robotics",
      children: ["🤖 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Humanoid Robotics"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots with human-like structure and movement."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assisted living"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Service robotics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R&D labs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Human-environment interaction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Core technologies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Biped locomotion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Balance & stabilization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dexterous manipulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-2-industry--automation",
      children: ["🏭 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Industry & Automation"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Factories of the future require:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intelligent inspection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Autonomous logistics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vision-guided pick-and-place"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safety-aware cobots"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Physical AI allows machines to handle:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "variation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uncertainty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dynamic environments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-3-autonomous-mobility",
      children: ["🚗 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Autonomous Mobility"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI-driven decision making for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "self-driving cars"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "delivery robots"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "aerial drones"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time perception"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collision avoidance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-4-healthcare-robotics",
      children: ["🩺 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Healthcare Robotics"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots assisting with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rehabilitation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mobility support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "precise robotic surgery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "patient monitoring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Physical AI ensures safety + adaptability."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "-5-research--exploration-robotics",
      children: ["🔬 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Research & Exploration Robotics"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots operating in extreme conditions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "deep sea"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hazardous environments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Physical AI improves:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "robustness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "autonomy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "environmental adaptation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-concept-embodied-intelligence-vs-traditional-ai",
      children: "🧠 Concept: Embodied Intelligence vs Traditional AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional AI\r\n├─ Lives in software only\r\n├─ Processes data\r\n└─ No interaction with physical world"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embodied / Physical AI\r\n├─ Lives inside a body\r\n├─ Moves, acts, adapts\r\n├─ Reads multi-sensory input\r\n└─ Learns from real-world feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Physical AI ≠ Just AI"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "It is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI WITH physics"
      }), ",", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "AI WITH a body,", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "AI WITH environmental interaction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-physical-ai-system-architecture",
      children: "📡 Physical AI System Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+--------------------------------------------------------------------+\r\n| High-Level Intelligence |\r\n| (Learning systems, planning modules, behavior generation) |\r\n+----------------------------------+---------------------------------+\r\n|\r\n+----------------------------------v---------------------------------+\r\n| Perception Layer |\r\n| (Vision, depth, LiDAR, IMU, proprioception, audio sensors) |\r\n+----------------------------------+---------------------------------+\r\n|\r\n+----------------------------------v---------------------------------+\r\n| Control Layer |\r\n| (Motor commands, torque control, trajectory execution) |\r\n+----------------------------------+---------------------------------+\r\n|\r\n+----------------------------------v---------------------------------+\r\n| Physical Embodiment |\r\n| (Humanoid limbs, actuators, joints, mechanical structure) |\r\n+--------------------------------------------------------------------+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-real-world-example-of-physical-ai-loop-ros-2-style",
      children: "📘 Real-World Example of Physical AI Loop (ROS 2 Style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "while robot_active:\r\n    sensory_input = sensors.read_all()\r\n    world_model   = perception.process(sensory_input)\r\n    action        = decision_model(world_model)\r\n    actuators.execute(action)\n"
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



/***/ })

}]);