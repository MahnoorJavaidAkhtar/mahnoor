"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[8981],{

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

/***/ 9568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_5_physical_ai_week_18_physical_ai_foundations_md_d98_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-5-physical-ai-week-18-physical-ai-foundations-md-d98.json
const site_docs_module_5_physical_ai_week_18_physical_ai_foundations_md_d98_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"Module 5-Physical AI/week18-physical-ai-foundations","title":"Week 18 — Foundations of Physical AI (Embodied Cognition) 🤖🧠✨","description":"Physical AI is the study of intelligence that emerges when a robot’s body interacts with the real physical world.","source":"@site/docs/Module 5-Physical AI/week18-physical-ai-foundations.md","sourceDirName":"Module 5-Physical AI","slug":"/Module 5-Physical AI/week18-physical-ai-foundations","permalink":"/docs/Module 5-Physical AI/week18-physical-ai-foundations","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 17 — Vision, Perception & Learning for Humanoids 👁️🤖🧠✨","permalink":"/docs/module-4-humanoids/week17-humanoid-vision-learning"},"next":{"title":"Week 19 — Perception–Action Loops & Embodied Reasoning 🔁🤖🧠✨","permalink":"/docs/Module 5-Physical AI/week19-perception-action-loops"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/Module 5-Physical AI/week18-physical-ai-foundations.md


const frontMatter = {};
const contentTitle = 'Week 18 — Foundations of Physical AI (Embodied Cognition) 🤖🧠✨';

const assets = {

};



const toc = [{
  "value": "1. What Is Physical AI? 🤔🤖",
  "id": "1-what-is-physical-ai-",
  "level": 2
}, {
  "value": "2. Why Physical AI Is Different from Classical AI 💻➡️🤖",
  "id": "2-why-physical-ai-is-different-from-classical-ai-️",
  "level": 2
}, {
  "value": "3. Embodied Cognition 🧠➡️🦾",
  "id": "3-embodied-cognition-️",
  "level": 2
}, {
  "value": "4. Intelligence Emerges Through Interaction 🔄🤖",
  "id": "4-intelligence-emerges-through-interaction-",
  "level": 2
}, {
  "value": "5. Role of the Environment 🌍🤖",
  "id": "5-role-of-the-environment-",
  "level": 2
}, {
  "value": "6. Morphological Computation 🔧🧠",
  "id": "6-morphological-computation-",
  "level": 2
}, {
  "value": "7. The Body Shapes Possible Intelligence 🦾✨",
  "id": "7-the-body-shapes-possible-intelligence-",
  "level": 2
}, {
  "value": "8. Sensorimotor Intelligence 🎛️✨",
  "id": "8-sensorimotor-intelligence-️",
  "level": 2
}, {
  "value": "9. The Perception–Action Loop 🔁👁️✋",
  "id": "9-the-perceptionaction-loop-️",
  "level": 2
}, {
  "value": "10. Continuous Real-Time Control 🕒⚡",
  "id": "10-continuous-real-time-control-",
  "level": 2
}, {
  "value": "11. Affordances (What the World Allows) 🧱➡️🤖",
  "id": "11-affordances-what-the-world-allows-️",
  "level": 2
}, {
  "value": "12. Learning Through Trial &amp; Error 🧪🤖",
  "id": "12-learning-through-trial--error-",
  "level": 2
}, {
  "value": "13. Types of Embodied Learning 🧠📚",
  "id": "13-types-of-embodied-learning-",
  "level": 2
}, {
  "value": "1. Reactive Learning ⚡",
  "id": "1-reactive-learning-",
  "level": 3
}, {
  "value": "2. Predictive Learning 🔮",
  "id": "2-predictive-learning-",
  "level": 3
}, {
  "value": "3. Cognitive Learning 🧠",
  "id": "3-cognitive-learning-",
  "level": 3
}, {
  "value": "14. Internal Models 🧠📐",
  "id": "14-internal-models-",
  "level": 2
}, {
  "value": "15. Self-Calibration 🔧🤖",
  "id": "15-self-calibration-",
  "level": 2
}, {
  "value": "16. Adaptation to Changing Conditions 🌦️🤖",
  "id": "16-adaptation-to-changing-conditions-️",
  "level": 2
}, {
  "value": "17. Body-Aware Intelligence 🦾🧠",
  "id": "17-body-aware-intelligence-",
  "level": 2
}, {
  "value": "18. Emergent Behaviors 🌱🤖",
  "id": "18-emergent-behaviors-",
  "level": 2
}, {
  "value": "19. Exploration Learning 🌍✨",
  "id": "19-exploration-learning-",
  "level": 2
}, {
  "value": "20. Grounded Representation 🌱🧠",
  "id": "20-grounded-representation-",
  "level": 2
}, {
  "value": "21. Physical Constraints as Learning Teachers ⚙️📚",
  "id": "21-physical-constraints-as-learning-teachers-️",
  "level": 2
}, {
  "value": "22. Self-Supervised Physical AI 🤖📖",
  "id": "22-self-supervised-physical-ai-",
  "level": 2
}, {
  "value": "23. The Role of Touch 👋🤖",
  "id": "23-the-role-of-touch-",
  "level": 2
}, {
  "value": "24. Multimodal Sensing 📸🔭🧭✋",
  "id": "24-multimodal-sensing-",
  "level": 2
}, {
  "value": "25. Energy Efficiency Learning 🔋🧠",
  "id": "25-energy-efficiency-learning-",
  "level": 2
}, {
  "value": "26. Learning with the Body as a Constraint 🦾🔗",
  "id": "26-learning-with-the-body-as-a-constraint-",
  "level": 2
}, {
  "value": "27. Survival Intelligence 🤖⚠️",
  "id": "27-survival-intelligence-️",
  "level": 2
}, {
  "value": "28. Physical Intuition 🌍🧠",
  "id": "28-physical-intuition-",
  "level": 2
}, {
  "value": "29. Sim2Real for Physical AI 🔄🌏",
  "id": "29-sim2real-for-physical-ai-",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "week-18--foundations-of-physical-ai-embodied-cognition-",
        children: "Week 18 — Foundations of Physical AI (Embodied Cognition) 🤖🧠✨"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Physical AI is the study of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "intelligence that emerges when a robot’s body interacts with the real physical world"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Unlike software AI (chatbots, models), Physical AI depends on:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a real (or simulated) body"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "actuators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "physics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "feedback loops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "learning from experience"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This week introduces the core ideas behind ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "embodied intelligence"
      }), ", the foundation of humanoid robotics, locomotion, manipulation, and adaptive behavior."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-is-physical-ai-",
      children: "1. What Is Physical AI? 🤔🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Physical AI ="
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Intelligence created through ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "physical interaction + sensing + control + learning"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A robot becomes intelligent by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "doing"
      }), ", not just thinking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-why-physical-ai-is-different-from-classical-ai-️",
      children: "2. Why Physical AI Is Different from Classical AI 💻➡️🤖"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classical AI = patterns in data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Physical AI = patterns in movement, forces, balance, perception"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A humanoid robot must:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "react fast"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "maintain stability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "deal with uncertainty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "learn through trial and error"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-embodied-cognition-️",
      children: "3. Embodied Cognition 🧠➡️🦾"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embodied cognition says:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The body shapes the mind."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Robots think ", (0,jsx_runtime.jsx)(_components.em, {
        children: "with"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "muscles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "geometry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "torque"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "constraints"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Intelligence arises from the body-brain-environment connection."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-intelligence-emerges-through-interaction-",
      children: "4. Intelligence Emerges Through Interaction 🔄🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots learn by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "touching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "falling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lifting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "adjusting force"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sensing pressure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reacting to physics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Just like babies explore the world."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-role-of-the-environment-",
      children: "5. Role of the Environment 🌍🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The environment TEACHES the robot through:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "friction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "gravity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "slopes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "textures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wind"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obstacles"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A robot becomes smarter the more it experiences."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-morphological-computation-",
      children: "6. Morphological Computation 🔧🧠"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The robot’s ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "body performs computation"
      }), " automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "springs store energy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "compliant joints absorb shock"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "curved feet improve walking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "soft hands conform to objects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The body helps solve control problems."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-the-body-shapes-possible-intelligence-",
      children: "7. The Body Shapes Possible Intelligence 🦾✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots with better morphology:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "can move more naturally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "learn faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "handle diverse tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "require less computation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A well-designed body = smarter robot."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-sensorimotor-intelligence-️",
      children: "8. Sensorimotor Intelligence 🎛️✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sensorimotor intelligence ="
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Learning from the combination of motion + sensing."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots use:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU → balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "force sensors → grip control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cameras → object recognition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "skin sensors → touch feedback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-the-perceptionaction-loop-️",
      children: "9. The Perception–Action Loop 🔁👁️✋"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Intelligence emerges from repeating this:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sense → Think → Act → Sense → Think → Act → ..."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every step updates learning."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-continuous-real-time-control-",
      children: "10. Continuous Real-Time Control 🕒⚡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unlike software AI:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Robots must respond ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOW"
      }), ", not later."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This requires:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fast reflexes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "real-time decision-making"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "continuous adaptation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-affordances-what-the-world-allows-️",
      children: "11. Affordances (What the World Allows) 🧱➡️🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Objects “suggest” actions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "handle → pull"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "knob → twist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cup → grasp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stairs → climb"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots must detect affordances automatically."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-learning-through-trial--error-",
      children: "12. Learning Through Trial & Error 🧪🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Physical AI relies heavily on failure:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "slipping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dropping objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "falling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pushing wrong direction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each failure improves intelligence."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-types-of-embodied-learning-",
      children: "13. Types of Embodied Learning 🧠📚"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-reactive-learning-",
      children: "1. Reactive Learning ⚡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fast reflex control."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-predictive-learning-",
      children: "2. Predictive Learning 🔮"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot predicts outcomes before acting."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-cognitive-learning-",
      children: "3. Cognitive Learning 🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "High-level reasoning and planning."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-internal-models-",
      children: "14. Internal Models 🧠📐"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots learn models of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "their own body"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "object dynamics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "movement cost"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These are used for planning and control."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-self-calibration-",
      children: "15. Self-Calibration 🔧🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots adjust:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "motor strengths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sensor biases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joint limits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "to maintain accuracy."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-adaptation-to-changing-conditions-️",
      children: "16. Adaptation to Changing Conditions 🌦️🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots learn to adapt to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "slippery floors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "heavy objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "soft surfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "unknown terrains"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adaptation = intelligence."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-body-aware-intelligence-",
      children: "17. Body-Aware Intelligence 🦾🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids must know:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "limb positions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reachable space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "how much torque is safe"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance limits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This awareness is called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "proprioception"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-emergent-behaviors-",
      children: "18. Emergent Behaviors 🌱🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Physical AI creates natural behaviors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arm swing while walking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "automatic balance correction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hand shaping while grasping"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These behaviors are NOT hard-coded — they emerge."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-exploration-learning-",
      children: "19. Exploration Learning 🌍✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots learn by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "poking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pushing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walking around"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grabbing random objects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Curiosity = learning."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "20-grounded-representation-",
      children: "20. Grounded Representation 🌱🧠"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Knowledge is tied to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "real physical experience"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot learns \"cup\" by lifting cups — not by downloading images."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-physical-constraints-as-learning-teachers-️",
      children: "21. Physical Constraints as Learning Teachers ⚙️📚"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gravity", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Friction", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Mass", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Inertia", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Balance"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These ", (0,jsx_runtime.jsx)(_components.em, {
        children: "force"
      }), " robots to learn efficiently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-self-supervised-physical-ai-",
      children: "22. Self-Supervised Physical AI 🤖📖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot teaches itself through:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "motion prediction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "video prediction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "force prediction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D reconstruction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "exploring affordances"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-the-role-of-touch-",
      children: "23. The Role of Touch 👋🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Touch (tactile sensing) provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "slip detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grip adjustment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "object softness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stability information"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vision is not enough — touch completes perception."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-multimodal-sensing-",
      children: "24. Multimodal Sensing 📸🔭🧭✋"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids combine:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "camera"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiDAR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "force sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "audio (optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "proprioception"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The richer the sensors → the stronger the intelligence."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-energy-efficiency-learning-",
      children: "25. Energy Efficiency Learning 🔋🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots learn:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lowest torque trajectories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "natural gaits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "efficient manipulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Like humans learning to walk with minimum effort."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-learning-with-the-body-as-a-constraint-",
      children: "26. Learning with the Body as a Constraint 🦾🔗"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot must:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avoid singularities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avoid joint limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "control momentum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "maintain safe torques"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These constraints shape intelligence."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-survival-intelligence-️",
      children: "27. Survival Intelligence 🤖⚠️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids must learn:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "not to fall"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "not to overexert motors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "not to collide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "how to recover"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Survival drives better learning."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-physical-intuition-",
      children: "28. Physical Intuition 🌍🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After enough experience, robots develop “physical intuition” like:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pushing a box from the center"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shifting weight before lifting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avoiding unstable surfaces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-sim2real-for-physical-ai-",
      children: "29. Sim2Real for Physical AI 🔄🌏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots trained in simulation must handle:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "noise"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "imperfections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "real-world variation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robust models are needed for real environments."
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