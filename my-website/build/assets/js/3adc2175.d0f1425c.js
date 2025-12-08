"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[6543],{

/***/ 798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_1_ros_2_week_1_introduction_md_3ad_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-1-ros-2-week-1-introduction-md-3ad.json
const site_docs_module_1_ros_2_week_1_introduction_md_3ad_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-1-ros2/week1-introduction","title":"⚡ Introduction to Physical AI","description":"Physical AI represents the evolution of intelligence from software-only systems to embodied machines capable of sensing, moving, and interacting with the real world.","source":"@site/docs/module-1-ros2/week1-introduction.md","sourceDirName":"module-1-ros2","slug":"/module-1-ros2/week1-introduction","permalink":"/docs/module-1-ros2/week1-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Welcome to the Physical AI & Humanoid Robotics Textbook","permalink":"/docs/intro"},"next":{"title":"Week 2 — The Landscape of Physical AI","permalink":"/docs/module-1-ros2/week2-physical-ai-landscape"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-1-ros2/week1-introduction.md


const frontMatter = {};
const contentTitle = '⚡ Introduction to Physical AI';

const assets = {

};



const toc = [{
  "value": "🚀 What Makes Physical AI Unique?",
  "id": "-what-makes-physical-ai-unique",
  "level": 2
}, {
  "value": "🧠 Intelligence + Body",
  "id": "-intelligence--body",
  "level": 3
}, {
  "value": "👁 Perception in Real Time",
  "id": "-perception-in-real-time",
  "level": 3
}, {
  "value": "🦾 Actuation",
  "id": "-actuation",
  "level": 3
}, {
  "value": "🔥 Physical AI Architecture",
  "id": "-physical-ai-architecture",
  "level": 2
}, {
  "value": "⚙ Simple Example: AI Loop (ROS 2 Style)",
  "id": "-simple-example-ai-loop-ros-2-style",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-introduction-to-physical-ai",
        children: "⚡ Introduction to Physical AI"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Physical AI represents the evolution of intelligence from software-only systems to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "embodied machines"
      }), " capable of sensing, moving, and interacting with the real world.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Unlike virtual AI (ChatGPT, image models, etc.), Physical AI must deal with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "real physics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uncertainty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "continuous sensory streams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "locomotion and balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "actuation and constraints"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This makes Physical AI ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "the closest bridge between biology and artificial intelligence."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-what-makes-physical-ai-unique",
      children: "🚀 What Makes Physical AI Unique?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-intelligence--body",
      children: "🧠 Intelligence + Body"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Robots don’t just “think” — they ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "act"
      }), ", and action depends on physics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-perception-in-real-time",
      children: "👁 Perception in Real Time"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cameras, LiDAR, IMUs constantly stream raw data.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "The robot must interpret this instantly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-actuation",
      children: "🦾 Actuation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Motors, servos, torque controllers turn decisions into movement."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-physical-ai-architecture",
      children: "🔥 Physical AI Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+-------------------------------+\r\n| High-Level Intelligence |\r\n| (Learning, Planning, RL) |\r\n+---------------+---------------+\r\n|\r\n+---------------v---------------+\r\n| Perception Layer |\r\n| (Vision, LiDAR, IMU, Audio) |\r\n+---------------+---------------+\r\n|\r\n+---------------v---------------+\r\n| Control & Action |\r\n| (Trajectories, Torque) |\r\n+---------------+---------------+\r\n|\r\n+---------------v---------------+\r\n| Robot Body Hardware |\r\n+-------------------------------+"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-simple-example-ai-loop-ros-2-style",
      children: "⚙ Simple Example: AI Loop (ROS 2 Style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "while robot_active:\r\n    sensor_data = read_sensors()\r\n    decision = ai_model(sensor_data)\r\n    send_motor_commands(decision)\n"
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