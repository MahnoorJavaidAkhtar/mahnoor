"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[6365],{

/***/ 1573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_5_physical_ai_week_19_perception_action_loops_md_cac_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-5-physical-ai-week-19-perception-action-loops-md-cac.json
const site_docs_module_5_physical_ai_week_19_perception_action_loops_md_cac_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"Module 5-Physical AI/week19-perception-action-loops","title":"Week 19 — Perception–Action Loops & Embodied Reasoning 🔁🤖🧠✨","description":"One of the most powerful ideas in Physical AI is that intelligence emerges from a constant cycle:","source":"@site/docs/Module 5-Physical AI/week19-perception-action-loops.md","sourceDirName":"Module 5-Physical AI","slug":"/Module 5-Physical AI/week19-perception-action-loops","permalink":"/docs/Module 5-Physical AI/week19-perception-action-loops","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 18 — Foundations of Physical AI (Embodied Cognition) 🤖🧠✨","permalink":"/docs/Module 5-Physical AI/week18-physical-ai-foundations"},"next":{"title":"Week 20 — Intelligence in Real Environments: Adaptation, Learning & Behavior 🌍🤖🧠✨","permalink":"/docs/Module 5-Physical AI/week20-real-environment-intelligence"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/Module 5-Physical AI/week19-perception-action-loops.md


const frontMatter = {};
const contentTitle = 'Week 19 — Perception–Action Loops & Embodied Reasoning 🔁🤖🧠✨';

const assets = {

};



const toc = [{
  "value": "1. What Is a Perception–Action Loop? 🔄👁️✋",
  "id": "1-what-is-a-perceptionaction-loop-️",
  "level": 2
}, {
  "value": "2. Why Perception–Action Loops Matter 🤖⚡",
  "id": "2-why-perceptionaction-loops-matter-",
  "level": 2
}, {
  "value": "3. Perception Drives Action 👁️➡️🦾",
  "id": "3-perception-drives-action-️️",
  "level": 2
}, {
  "value": "4. Action Changes Perception 🦾➡️👁️",
  "id": "4-action-changes-perception-️️",
  "level": 2
}, {
  "value": "5. Closed-Loop Control 🔒🤖",
  "id": "5-closed-loop-control-",
  "level": 2
}, {
  "value": "6. Open-Loop vs Closed-Loop ⛓️⚙️",
  "id": "6-open-loop-vs-closed-loop-️️",
  "level": 2
}, {
  "value": "7. Reactive Control ⚡🤖",
  "id": "7-reactive-control-",
  "level": 2
}, {
  "value": "8. Predictive Control 🔮🧠",
  "id": "8-predictive-control-",
  "level": 2
}, {
  "value": "9. Embodied Reasoning 🧠➡️🦿",
  "id": "9-embodied-reasoning-️",
  "level": 2
}, {
  "value": "10. Proprioception (Body Awareness) 🦾👁️‍🗨️",
  "id": "10-proprioception-body-awareness-️️",
  "level": 2
}, {
  "value": "11. Exteroception (World Awareness) 🌍👁️",
  "id": "11-exteroception-world-awareness-️",
  "level": 2
}, {
  "value": "12. Interoception (Internal Monitoring) 💡⚙️",
  "id": "12-interoception-internal-monitoring-️",
  "level": 2
}, {
  "value": "13. The Sense–Think–Act Architecture 🧠🔁✨",
  "id": "13-the-sensethinkact-architecture-",
  "level": 2
}, {
  "value": "14. Continuous Control Loops ⏱️⚡",
  "id": "14-continuous-control-loops-️",
  "level": 2
}, {
  "value": "15. Feedback Types 🔁🎛️",
  "id": "15-feedback-types-️",
  "level": 2
}, {
  "value": "Visual feedback",
  "id": "visual-feedback",
  "level": 3
}, {
  "value": "Tactile feedback",
  "id": "tactile-feedback",
  "level": 3
}, {
  "value": "Force feedback",
  "id": "force-feedback",
  "level": 3
}, {
  "value": "IMU feedback",
  "id": "imu-feedback",
  "level": 3
}, {
  "value": "16. Stability Through Feedback ⚖️🤖",
  "id": "16-stability-through-feedback-️",
  "level": 2
}, {
  "value": "17. Perception–Action Coupling 👁️🦾",
  "id": "17-perceptionaction-coupling-️",
  "level": 2
}, {
  "value": "18. Sensorimotor Loops 🧠🔄🦿",
  "id": "18-sensorimotor-loops-",
  "level": 2
}, {
  "value": "19. Multimodal Loops 🔗📸🧭✋",
  "id": "19-multimodal-loops-",
  "level": 2
}, {
  "value": "20. Adaptive Loops 🔄🌍",
  "id": "20-adaptive-loops-",
  "level": 2
}, {
  "value": "21. Learning Inside Loops 🧠📚",
  "id": "21-learning-inside-loops-",
  "level": 2
}, {
  "value": "22. Behavior Emerges from Loops 🌱🤖",
  "id": "22-behavior-emerges-from-loops-",
  "level": 2
}, {
  "value": "23. Perception as Action-Guided 👁️🎯",
  "id": "23-perception-as-action-guided-️",
  "level": 2
}, {
  "value": "24. Action as Perception-Guided 🦾🎯",
  "id": "24-action-as-perception-guided-",
  "level": 2
}, {
  "value": "25. Reflex Loops ⚡🤖",
  "id": "25-reflex-loops-",
  "level": 2
}, {
  "value": "26. Deliberative Loops 🧠⏳",
  "id": "26-deliberative-loops-",
  "level": 2
}, {
  "value": "27. Long-Horizon Reasoning 🌍🤖",
  "id": "27-long-horizon-reasoning-",
  "level": 2
}, {
  "value": "28. Hierarchy of Loops 🏛️🔁",
  "id": "28-hierarchy-of-loops-️",
  "level": 2
}, {
  "value": "Low-level loops",
  "id": "low-level-loops",
  "level": 3
}, {
  "value": "Mid-level loops",
  "id": "mid-level-loops",
  "level": 3
}, {
  "value": "High-level loops",
  "id": "high-level-loops",
  "level": 3
}, {
  "value": "29. Examples of Perception–Action Intelligence 🤯⚡",
  "id": "29-examples-of-perceptionaction-intelligence-",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
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
        id: "week-19--perceptionaction-loops--embodied-reasoning-",
        children: "Week 19 — Perception–Action Loops & Embodied Reasoning 🔁🤖🧠✨"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One of the most powerful ideas in Physical AI is that intelligence emerges from a constant cycle:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Perceive → Decide → Act → Perceive → Decide → Act → …"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This repeating loop is the foundation of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balancing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "manipulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "learning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "adaptation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "interaction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This week explains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "how robots think through movement"
      }), ", not just computation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-is-a-perceptionaction-loop-️",
      children: "1. What Is a Perception–Action Loop? 🔄👁️✋"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A perception–action loop is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sensing → Interpreting → Acting → New Sensing → ..."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every action changes the next perception."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Robots use this loop ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "thousands of times per second"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-why-perceptionaction-loops-matter-",
      children: "2. Why Perception–Action Loops Matter 🤖⚡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoid behavior is impossible without this loop:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avoiding obstacles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balancing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reacting to humans"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All rely on instantaneous sensing + acting."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-perception-drives-action-️️",
      children: "3. Perception Drives Action 👁️➡️🦾"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot perceives:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "where is the object?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "where is the ground?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "how far is the next step?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then chooses an action."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-action-changes-perception-️️",
      children: "4. Action Changes Perception 🦾➡️👁️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the robot moves:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "angles change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sensor view changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lighting changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dynamics shift"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example:", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Moving head improves object detection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-closed-loop-control-",
      children: "5. Closed-Loop Control 🔒🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Closed-loop control updates behavior based on real-time feedback."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arm control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "locomotion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grip adjustment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "path following"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-open-loop-vs-closed-loop-️️",
      children: "6. Open-Loop vs Closed-Loop ⛓️⚙️"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Open-loop:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Robot acts without feedback. (Bad for humanoids)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Closed-loop:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Robot constantly corrects using sensors. (Critical!)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-reactive-control-",
      children: "7. Reactive Control ⚡🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fast reflexive behaviors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "adjusting ankle to maintain balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tightening grip when slip detected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avoiding sudden obstacles"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-predictive-control-",
      children: "8. Predictive Control 🔮🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot predicts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance loss"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "future foot placement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "how humans will move"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "object motion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in advanced locomotion."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-embodied-reasoning-️",
      children: "9. Embodied Reasoning 🧠➡️🦿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Embodied reasoning means:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Robot uses its body to think."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "leaning forward to reach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stepping sideways to stabilize"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "using momentum to lift an object"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-proprioception-body-awareness-️️",
      children: "10. Proprioception (Body Awareness) 🦾👁️‍🗨️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot senses its own:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joint angles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "torque"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "speed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "posture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is essential for reasoning and control."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-exteroception-world-awareness-️",
      children: "11. Exteroception (World Awareness) 🌍👁️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot senses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "distance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "terrain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obstacles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "human motion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Perception → informs action."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-interoception-internal-monitoring-️",
      children: "12. Interoception (Internal Monitoring) 💡⚙️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot monitors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "battery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "temperature"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "motor load"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for safe action decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-the-sensethinkact-architecture-",
      children: "13. The Sense–Think–Act Architecture 🧠🔁✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots follow:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sense → Think → Act"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "go\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "But in real Physical AI:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sense ↔ Act (continuously)\r\nThink (sometimes)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Action and perception are deeply connected."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-continuous-control-loops-️",
      children: "14. Continuous Control Loops ⏱️⚡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids run loops at:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "200 Hz"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "500 Hz"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1,000 Hz"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every millisecond → update balance / motion."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-feedback-types-️",
      children: "15. Feedback Types 🔁🎛️"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "visual-feedback",
      children: "Visual feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adjust trajectory using camera input."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tactile-feedback",
      children: "Tactile feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adjust grip strength."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "force-feedback",
      children: "Force feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Balance corrections."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "imu-feedback",
      children: "IMU feedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Body orientation."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-stability-through-feedback-️",
      children: "16. Stability Through Feedback ⚖️🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Walking requires:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "constant IMU updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "foot pressure sensing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "micro-adjustments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One missed update → robot falls."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-perceptionaction-coupling-️",
      children: "17. Perception–Action Coupling 👁️🦾"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pregait: robot shifts weight before stepping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pregrasp: robot rotates wrist before gripping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prereach: robot moves torso to extend reach"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Perception tells robot ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HOW"
      }), " to act."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-sensorimotor-loops-",
      children: "18. Sensorimotor Loops 🧠🔄🦿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sensors ↔ motors form a continuous loop:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sensors guide motion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "motion changes sensors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This loop ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "creates intelligent behavior"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-multimodal-loops-",
      children: "19. Multimodal Loops 🔗📸🧭✋"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids combine:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sound (optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "touch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "force sensing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The more inputs → the more intelligent the loop."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "20-adaptive-loops-",
      children: "20. Adaptive Loops 🔄🌍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot adapts to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "heavier object"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "slippery floor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "uneven steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "moving targets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adaptation is part of the loop."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-learning-inside-loops-",
      children: "21. Learning Inside Loops 🧠📚"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots learn:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "better gaits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "better grasp strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "object affordances"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "terrain stability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Loops drive learning."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-behavior-emerges-from-loops-",
      children: "22. Behavior Emerges from Loops 🌱🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complex behavior comes from simple rules repeated fast."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example:", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Balancing = thousands of micro-corrections per second."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-perception-as-action-guided-️",
      children: "23. Perception as Action-Guided 👁️🎯"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot moves to see better."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "leans sideways to see around wall"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lifts camera to see target"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "centers object in FOV"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-action-as-perception-guided-",
      children: "24. Action as Perception-Guided 🦾🎯"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot adjusts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "step length"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arm path"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grip strength"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "based on perception."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-reflex-loops-",
      children: "25. Reflex Loops ⚡🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fast loops:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ankle reflex"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arm collision reflex"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "emergency balance step"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These run faster than the main controller."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-deliberative-loops-",
      children: "26. Deliberative Loops 🧠⏳"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slower loops:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "deciding which object to pick"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "choosing a path"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-long-horizon-reasoning-",
      children: "27. Long-Horizon Reasoning 🌍🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot uses history to refine behavior:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "where it slipped before"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "which grasp worked"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "how far each step should be"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-hierarchy-of-loops-️",
      children: "28. Hierarchy of Loops 🏛️🔁"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "low-level-loops",
      children: "Low-level loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fast reflex, balance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mid-level-loops",
      children: "Mid-level loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gait control, reaching."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-level-loops",
      children: "High-level loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Task planning, reasoning."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-examples-of-perceptionaction-intelligence-",
      children: "29. Examples of Perception–Action Intelligence 🤯⚡"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "robot shifts weight before lifting box"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "robot slows step on slippery floor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "robot rotates wrist based on object shape"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "robot adjusts stance when pushed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These behaviors EMERGE from loops — not from explicit commands."
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