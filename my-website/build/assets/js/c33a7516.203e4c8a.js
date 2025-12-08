"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[3784],{

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

/***/ 8715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_4_humanoids_week_14_humanoid_foundations_md_c33_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-4-humanoids-week-14-humanoid-foundations-md-c33.json
const site_docs_module_4_humanoids_week_14_humanoid_foundations_md_c33_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-4-humanoids/week14-humanoid-foundations","title":"Week 14 — Humanoid Robotics Foundations 🤖🦿✨","description":"Humanoid robotics is one of the most challenging, fascinating, and futuristic fields in robotics.","source":"@site/docs/module-4-humanoids/week14-humanoid-foundations.md","sourceDirName":"module-4-humanoids","slug":"/module-4-humanoids/week14-humanoid-foundations","permalink":"/docs/module-4-humanoids/week14-humanoid-foundations","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 13 — Robotics AI Workflows in Isaac Sim 🤖🧠⚡","permalink":"/docs/module-3-nvidia-isaac/week13-isaac-robotics-ai"},"next":{"title":"Week 15 — Biped Locomotion: Walking, Gait Cycles & Stability 🦿🤖✨","permalink":"/docs/module-4-humanoids/week15-biped-locomotion"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-4-humanoids/week14-humanoid-foundations.md


const frontMatter = {};
const contentTitle = 'Week 14 — Humanoid Robotics Foundations 🤖🦿✨';

const assets = {

};



const toc = [{
  "value": "1. What Is a Humanoid Robot? 🤖✨",
  "id": "1-what-is-a-humanoid-robot-",
  "level": 2
}, {
  "value": "2. Why Build Humanoid Robots? 🧠✨",
  "id": "2-why-build-humanoid-robots-",
  "level": 2
}, {
  "value": "3. Humanoid Body Structure 🔧🦿",
  "id": "3-humanoid-body-structure-",
  "level": 2
}, {
  "value": "4. Degrees of Freedom (DOF) 🎛️",
  "id": "4-degrees-of-freedom-dof-️",
  "level": 2
}, {
  "value": "5. Humanoid Joint Types 🔩",
  "id": "5-humanoid-joint-types-",
  "level": 2
}, {
  "value": "6. Humanoid Kinematic Chain 🔗🤖",
  "id": "6-humanoid-kinematic-chain-",
  "level": 2
}, {
  "value": "7. Forward Kinematics (FK) ➡️🦿",
  "id": "7-forward-kinematics-fk-️",
  "level": 2
}, {
  "value": "8. Inverse Kinematics (IK) 🔄",
  "id": "8-inverse-kinematics-ik-",
  "level": 2
}, {
  "value": "9. Center of Mass (CoM) ⚖️",
  "id": "9-center-of-mass-com-️",
  "level": 2
}, {
  "value": "10. Zero Moment Point (ZMP) 🌀👣",
  "id": "10-zero-moment-point-zmp-",
  "level": 2
}, {
  "value": "11. Support Polygon 🦶🔷",
  "id": "11-support-polygon-",
  "level": 2
}, {
  "value": "12. Balance Control Loop 🔁🤖",
  "id": "12-balance-control-loop-",
  "level": 2
}, {
  "value": "13. Sensors in Humanoids 👁️🧭📡",
  "id": "13-sensors-in-humanoids-️",
  "level": 2
}, {
  "value": "14. Actuators for Humanoids 🔋🦿",
  "id": "14-actuators-for-humanoids-",
  "level": 2
}, {
  "value": "15. Series Elastic Actuators (SEA) 🌟",
  "id": "15-series-elastic-actuators-sea-",
  "level": 2
}, {
  "value": "16. Foot Contact Modeling 👣💥",
  "id": "16-foot-contact-modeling-",
  "level": 2
}, {
  "value": "17. Whole-Body Control (WBC) 🤖✨",
  "id": "17-whole-body-control-wbc-",
  "level": 2
}, {
  "value": "18. Dynamic Stability ⚡🏃‍♂️",
  "id": "18-dynamic-stability-️",
  "level": 2
}, {
  "value": "19. Humanoid Walking Difficulty 😅🦿",
  "id": "19-humanoid-walking-difficulty-",
  "level": 2
}, {
  "value": "20. Torso Control 🧍‍♂️✨",
  "id": "20-torso-control-️",
  "level": 2
}, {
  "value": "21. Joint Compliance 🎛️⚡",
  "id": "21-joint-compliance-️",
  "level": 2
}, {
  "value": "22. Humanoid Fall Detection 🚨🤖",
  "id": "22-humanoid-fall-detection-",
  "level": 2
}, {
  "value": "23. Recovery After Falling 🔄🦿",
  "id": "23-recovery-after-falling-",
  "level": 2
}, {
  "value": "24. Standing Up Motion Sequence ↗️🤖",
  "id": "24-standing-up-motion-sequence-️",
  "level": 2
}, {
  "value": "25. Energy Efficiency in Humanoids 🔋💡",
  "id": "25-energy-efficiency-in-humanoids-",
  "level": 2
}, {
  "value": "26. Human-Robot Interaction (HRI) 🤝✨",
  "id": "26-human-robot-interaction-hri-",
  "level": 2
}, {
  "value": "27. Safety in Humanoid Robotics 🛡️🤖",
  "id": "27-safety-in-humanoid-robotics-️",
  "level": 2
}, {
  "value": "28. Mapping &amp; Localization for Humanoids 🗺️📡",
  "id": "28-mapping--localization-for-humanoids-️",
  "level": 2
}, {
  "value": "29. Tasks Humanoids Perform 🧹📦🤖",
  "id": "29-tasks-humanoids-perform-",
  "level": 2
}, {
  "value": "30. Week Summary 🌟🦿",
  "id": "30-week-summary-",
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
        id: "week-14--humanoid-robotics-foundations-",
        children: "Week 14 — Humanoid Robotics Foundations 🤖🦿✨"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Humanoid robotics is one of the most challenging, fascinating, and futuristic fields in robotics.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Humanoids are robots designed to resemble human body structure:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a torso"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "two legs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "two arms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a head"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "multi-axis joints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance & locomotion abilities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This week covers the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "structure, physics, balance, actuators, and kinematics"
      }), " of humanoids."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-is-a-humanoid-robot-",
      children: "1. What Is a Humanoid Robot? 🤖✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A humanoid robot is a robot with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "legged locomotion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arms for manipulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a torso for stability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a head for sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "human-like proportions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Atlas (Boston Dynamics)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Digit (Agility Robotics)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Figure 01"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tesla Optimus"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-why-build-humanoid-robots-",
      children: "2. Why Build Humanoid Robots? 🧠✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Because they can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "operate in human environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "use human tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walk on stairs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "navigate uneven terrain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "replace repetitive labor"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids are the future of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "logistics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "elder care"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "manufacturing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "home assistance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-humanoid-body-structure-",
      children: "3. Humanoid Body Structure 🔧🦿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typical structure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Torso\r\n├── Left Arm\r\n├── Right Arm\r\n├── Left Leg\r\n└── Right Leg\r\nHead"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-degrees-of-freedom-dof-️",
      children: "4. Degrees of Freedom (DOF) 🎛️"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Humanoids have ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "20–40 DOF"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example DOF distribution:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "legs → 6 DOF each"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arms → 7 DOF each"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "torso → 1–3 DOF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "head → 2–3 DOF"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-humanoid-joint-types-",
      children: "5. Humanoid Joint Types 🔩"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Joints include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hip pitch, roll, yaw"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "knee pitch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ankle pitch, roll"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shoulder pitch, roll, yaw"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "elbow pitch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wrist joints"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-humanoid-kinematic-chain-",
      children: "6. Humanoid Kinematic Chain 🔗🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pelvis → hip → thigh → knee → shin → ankle → foot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chain defines leg movement."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-forward-kinematics-fk-️",
      children: "7. Forward Kinematics (FK) ➡️🦿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FK calculates:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "joint angles → foot position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for balance and stepping."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-inverse-kinematics-ik-",
      children: "8. Inverse Kinematics (IK) 🔄"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IK calculates:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "desired foot position → required joint angles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Essential for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stepping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "manipulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reaching motions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-center-of-mass-com-️",
      children: "9. Center of Mass (CoM) ⚖️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CoM must remain:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "above support polygon"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "inside stability region"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If CoM goes outside → robot falls."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-zero-moment-point-zmp-",
      children: "10. Zero Moment Point (ZMP) 🌀👣"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ZMP is the most important stability metric."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If ZMP stays inside the foot support area → robot stays stable."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-support-polygon-",
      children: "11. Support Polygon 🦶🔷"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generated by feet contact points."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Left Foot + Right Foot = Large Polygon"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "java\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Single support (one foot):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Small Polygon → harder balance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-balance-control-loop-",
      children: "12. Balance Control Loop 🔁🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IMU → state estimate → controller → torque → stability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-sensors-in-humanoids-️",
      children: "13. Sensors in Humanoids 👁️🧭📡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common sensors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU → balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cameras → vision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiDAR → mapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "torque sensors → manipulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "foot contact sensors → gait stability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-actuators-for-humanoids-",
      children: "14. Actuators for Humanoids 🔋🦿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Actuators must be:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "strong"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "responsive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lightweight"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Types:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "electric motors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "harmonic drives"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "series elastic actuators (SEA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hydraulic actuators"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-series-elastic-actuators-sea-",
      children: "15. Series Elastic Actuators (SEA) 🌟"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Perfect for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "safe human interaction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shock absorption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "smooth walking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-foot-contact-modeling-",
      children: "16. Foot Contact Modeling 👣💥"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Foot-ground interaction must consider:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "friction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "slip"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "penetration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "impact absorption"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-whole-body-control-wbc-",
      children: "17. Whole-Body Control (WBC) 🤖✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WBC coordinates:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "legs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "torso"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "head"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All simultaneously."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-dynamic-stability-️",
      children: "18. Dynamic Stability ⚡🏃‍♂️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dynamic balance uses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "momentum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ZMP tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CoM trajectory planning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-humanoid-walking-difficulty-",
      children: "19. Humanoid Walking Difficulty 😅🦿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoid walking is hard because:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "it’s dynamically unstable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "multibody physics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "precise timing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "high DOF"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "20-torso-control-️",
      children: "20. Torso Control 🧍‍♂️✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The torso stabilizes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "posture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "upper body balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "overall CoM"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-joint-compliance-️",
      children: "21. Joint Compliance 🎛️⚡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compliance allows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "soft movement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shock buffering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "natural motion patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-humanoid-fall-detection-",
      children: "22. Humanoid Fall Detection 🚨🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU thresholds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "angular velocity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CoM tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-recovery-after-falling-",
      children: "23. Recovery After Falling 🔄🦿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots must:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "switch modes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "go into safe posture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reorient"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stand up"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-standing-up-motion-sequence-️",
      children: "24. Standing Up Motion Sequence ↗️🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequence:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "roll to side"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "push torso upward"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "move legs under body"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rise to standing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-energy-efficiency-in-humanoids-",
      children: "25. Energy Efficiency in Humanoids 🔋💡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Walking requires:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "smart joint trajectories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "compliant control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reduction of internal friction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-human-robot-interaction-hri-",
      children: "26. Human-Robot Interaction (HRI) 🤝✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids must:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "move safely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "respond to humans"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "understand gestures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "maintain comfortable distance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-safety-in-humanoid-robotics-️",
      children: "27. Safety in Humanoid Robotics 🛡️🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Safety concerns:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "collision avoidance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "force limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "compliant actuators"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-mapping--localization-for-humanoids-️",
      children: "28. Mapping & Localization for Humanoids 🗺️📡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids use:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "visual SLAM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiDAR mapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU fusion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "foot odometry"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-tasks-humanoids-perform-",
      children: "29. Tasks Humanoids Perform 🧹📦🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "climbing stairs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lifting boxes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "opening doors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "handing objects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "30-week-summary-",
      children: "30. Week Summary 🌟🦿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This week introduced:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "humanoid structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joints and DOF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stability metrics (ZMP, CoM)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sensors & actuators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance & whole-body control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fall detection and recovery"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Next → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Week 15: Biped Locomotion & Walking Gaits"
      }), " 🏃‍♂️🤖✨"]
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