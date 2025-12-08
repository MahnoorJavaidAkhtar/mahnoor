"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[2567],{

/***/ 3243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_4_humanoids_week_15_biped_locomotion_md_3dd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-4-humanoids-week-15-biped-locomotion-md-3dd.json
const site_docs_module_4_humanoids_week_15_biped_locomotion_md_3dd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-4-humanoids/week15-biped-locomotion","title":"Week 15 — Biped Locomotion: Walking, Gait Cycles & Stability 🦿🤖✨","description":"Walking on two legs is one of the hardest challenges in robotics.","source":"@site/docs/module-4-humanoids/week15-biped-locomotion.md","sourceDirName":"module-4-humanoids","slug":"/module-4-humanoids/week15-biped-locomotion","permalink":"/docs/module-4-humanoids/week15-biped-locomotion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 14 — Humanoid Robotics Foundations 🤖🦿✨","permalink":"/docs/module-4-humanoids/week14-humanoid-foundations"},"next":{"title":"Week 16 — Humanoid Manipulation & Whole-Body Control 🤖🦾✨","permalink":"/docs/module-4-humanoids/week16-humanoid-manipulation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-4-humanoids/week15-biped-locomotion.md


const frontMatter = {};
const contentTitle = 'Week 15 — Biped Locomotion: Walking, Gait Cycles & Stability 🦿🤖✨';

const assets = {

};



const toc = [{
  "value": "1. What Is Biped Locomotion? 🚶‍♂️🤖",
  "id": "1-what-is-biped-locomotion-️",
  "level": 2
}, {
  "value": "2. Why Biped Walking Is Hard 😅",
  "id": "2-why-biped-walking-is-hard-",
  "level": 2
}, {
  "value": "3. Human-Inspired Walking 🤯🧠",
  "id": "3-human-inspired-walking-",
  "level": 2
}, {
  "value": "4. Gait Cycle Overview 🔄🦿",
  "id": "4-gait-cycle-overview-",
  "level": 2
}, {
  "value": "5. Walking Phases 👣",
  "id": "5-walking-phases-",
  "level": 2
}, {
  "value": "1. <strong>Double Support Phase</strong>",
  "id": "1-double-support-phase",
  "level": 3
}, {
  "value": "2. <strong>Single Support Phase</strong>",
  "id": "2-single-support-phase",
  "level": 3
}, {
  "value": "3. <strong>Swing Phase</strong>",
  "id": "3-swing-phase",
  "level": 3
}, {
  "value": "6. Center of Mass (CoM) Dynamics ⚖️",
  "id": "6-center-of-mass-com-dynamics-️",
  "level": 2
}, {
  "value": "7. Zero Moment Point (ZMP) 🌀",
  "id": "7-zero-moment-point-zmp-",
  "level": 2
}, {
  "value": "8. Support Polygon 🔷👣",
  "id": "8-support-polygon-",
  "level": 2
}, {
  "value": "9. Inverted Pendulum Model 🪄",
  "id": "9-inverted-pendulum-model-",
  "level": 2
}, {
  "value": "10. LIPM Dynamics ⚡📈",
  "id": "10-lipm-dynamics-",
  "level": 2
}, {
  "value": "11. Footstep Planning 👣🗺️",
  "id": "11-footstep-planning-️",
  "level": 2
}, {
  "value": "12. Step Timing ⏱️",
  "id": "12-step-timing-️",
  "level": 2
}, {
  "value": "13. Gait Parameters 🎛️",
  "id": "13-gait-parameters-️",
  "level": 2
}, {
  "value": "14. Swing Leg Trajectory 🦿✨",
  "id": "14-swing-leg-trajectory-",
  "level": 2
}, {
  "value": "15. Foot Clearance 🌙👣",
  "id": "15-foot-clearance-",
  "level": 2
}, {
  "value": "16. Torso Control 🧍‍♂️🤖",
  "id": "16-torso-control-️",
  "level": 2
}, {
  "value": "17. Balance During Pushes 💥🤖",
  "id": "17-balance-during-pushes-",
  "level": 2
}, {
  "value": "18. Ankle Strategy 🦶⚖️",
  "id": "18-ankle-strategy-️",
  "level": 2
}, {
  "value": "19. Hip Strategy 🪢",
  "id": "19-hip-strategy-",
  "level": 2
}, {
  "value": "20. Stepping Strategy 🏃‍♂️💥",
  "id": "20-stepping-strategy-️",
  "level": 2
}, {
  "value": "21. Whole-Body Control (WBC) 🔗✨",
  "id": "21-whole-body-control-wbc-",
  "level": 2
}, {
  "value": "22. Compliance in Walking 🌈🦿",
  "id": "22-compliance-in-walking-",
  "level": 2
}, {
  "value": "23. Walking on Uneven Terrain 🌄🤖",
  "id": "23-walking-on-uneven-terrain-",
  "level": 2
}, {
  "value": "24. Slope Walking ⛰️",
  "id": "24-slope-walking-️",
  "level": 2
}, {
  "value": "25. Stair Climbing 🪜⚡",
  "id": "25-stair-climbing-",
  "level": 2
}, {
  "value": "26. Turning &amp; Rotation 🔄",
  "id": "26-turning--rotation-",
  "level": 2
}, {
  "value": "27. Dynamic Gaits 🏃‍♂️⚡",
  "id": "27-dynamic-gaits-️",
  "level": 2
}, {
  "value": "28. Energy Efficiency 🔋🧠",
  "id": "28-energy-efficiency-",
  "level": 2
}, {
  "value": "29. Common Walking Failures 🚨🦿",
  "id": "29-common-walking-failures-",
  "level": 2
}, {
  "value": "30. Recovery Mechanisms 🔁",
  "id": "30-recovery-mechanisms-",
  "level": 2
}, {
  "value": "31. Week Summary 🌟🦿💜",
  "id": "31-week-summary-",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "week-15--biped-locomotion-walking-gait-cycles--stability-",
        children: "Week 15 — Biped Locomotion: Walking, Gait Cycles & Stability 🦿🤖✨"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Walking on two legs is one of the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hardest challenges in robotics"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Unlike wheeled robots, bipeds are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dynamically unstable"
      }), " — one small mistake and the robot falls."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This week covers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "gait cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walking phases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ZMP & CoM trajectory planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "footstep planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "humanoid stabilization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "advanced locomotion algorithms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let’s dive into humanoid walking — the art of controlled falling. 😄🦿✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-is-biped-locomotion-️",
      children: "1. What Is Biped Locomotion? 🚶‍♂️🤖"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Biped locomotion = walking using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two legs"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A biped robot must:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "step"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "recover"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shift weight"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "follow trajectories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "react to disturbances"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-why-biped-walking-is-hard-",
      children: "2. Why Biped Walking Is Hard 😅"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Walking is difficult because:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "the robot is top-heavy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "the support area is tiny"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance must be maintained continuously"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dynamics are nonlinear"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "terrain is unpredictable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-human-inspired-walking-",
      children: "3. Human-Inspired Walking 🤯🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humans walk by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shifting weight"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "swinging one leg"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "catching themselves"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "using momentum"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots try to copy this."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-gait-cycle-overview-",
      children: "4. Gait Cycle Overview 🔄🦿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A gait cycle includes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Heel strike → Support phase → Toe-off → Swing phase → Heel strike"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-walking-phases-",
      children: "5. Walking Phases 👣"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1-double-support-phase",
      children: ["1. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Double Support Phase"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Both feet touch the ground.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Stable — easy to balance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "2-single-support-phase",
      children: ["2. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Single Support Phase"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Only one foot touches the ground.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Unstable — hardest part of walking."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "3-swing-phase",
      children: ["3. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Swing Phase"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Leg moves freely in air."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-center-of-mass-com-dynamics-️",
      children: "6. Center of Mass (CoM) Dynamics ⚖️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoM must move smoothly:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "forward progression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "height control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lateral shift"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sudden shift → falling."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-zero-moment-point-zmp-",
      children: "7. Zero Moment Point (ZMP) 🌀"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ZMP is the point where total ground reaction forces act."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Condition for stability:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ZMP must lie within the support polygon."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If ZMP goes outside → robot falls."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-support-polygon-",
      children: "8. Support Polygon 🔷👣"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Defined by foot contact points."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two feet → large polygon"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "scss\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Walking (single support):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One foot → tiny polygon → unstable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-inverted-pendulum-model-",
      children: "9. Inverted Pendulum Model 🪄"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots approximate human walking using:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Linear Inverted Pendulum Model (LIPM)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It simplifies locomotion control."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-lipm-dynamics-",
      children: "10. LIPM Dynamics ⚡📈"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key idea:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Body behaves like a pendulum pivoting around the foot."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CoM trajectory planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stable stepping"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-footstep-planning-️",
      children: "11. Footstep Planning 👣🗺️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Foot placement planner chooses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "step length"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lateral position"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "step timing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "turning angle"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-step-timing-️",
      children: "12. Step Timing ⏱️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Faster walking:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "shorter stance time"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slower walking:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "longer stance time"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-gait-parameters-️",
      children: "13. Gait Parameters 🎛️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Main parameters:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "step length"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cadence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "step height"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "swing time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "torso angle"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-swing-leg-trajectory-",
      children: "14. Swing Leg Trajectory 🦿✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Swing trajectory must be:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "smooth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "collision-free"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dynamically stable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using splines like:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cubic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "quintic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bezier curves"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-foot-clearance-",
      children: "15. Foot Clearance 🌙👣"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot lifts foot:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "high enough to avoid collision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "low enough to save energy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-torso-control-️",
      children: "16. Torso Control 🧍‍♂️🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A stable torso is critical for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "forward momentum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "natural walking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "maintaining balance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-balance-during-pushes-",
      children: "17. Balance During Pushes 💥🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots must handle:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shoves"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wind"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "slips"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "unexpected impacts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ankle strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hip strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stepping strategy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-ankle-strategy-️",
      children: "18. Ankle Strategy 🦶⚖️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Small disturbances → adjust ankle torques."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-hip-strategy-",
      children: "19. Hip Strategy 🪢"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Larger disturbances → swing torso & hips."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "20-stepping-strategy-️",
      children: "20. Stepping Strategy 🏃‍♂️💥"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If balance is lost → robot MUST take an emergency step."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-whole-body-control-wbc-",
      children: "21. Whole-Body Control (WBC) 🔗✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Coordinates:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "legs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "torso"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "head"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All joints work together to maintain stability."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-compliance-in-walking-",
      children: "22. Compliance in Walking 🌈🦿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Soft joints give:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "natural gait"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shock absorption"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "energy efficiency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-walking-on-uneven-terrain-",
      children: "23. Walking on Uneven Terrain 🌄🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requires:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "foot sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "online trajectory adaptation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "compliance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-slope-walking-️",
      children: "24. Slope Walking ⛰️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot must:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lean forward uphill"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lean backward downhill"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-stair-climbing-",
      children: "25. Stair Climbing 🪜⚡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One of the hardest tasks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "high swing clearance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "precise foot placement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "strong knee torques"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-turning--rotation-",
      children: "26. Turning & Rotation 🔄"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots turn by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pivot stepping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "differential hip motion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "torso rotation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-dynamic-gaits-️",
      children: "27. Dynamic Gaits 🏃‍♂️⚡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced humanoids use:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "running"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hopping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "skipping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jumping"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These require high-performance control."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-energy-efficiency-",
      children: "28. Energy Efficiency 🔋🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Good walking controllers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "recycle momentum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "minimize joint torques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "optimize footstep timing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-common-walking-failures-",
      children: "29. Common Walking Failures 🚨🦿"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Failures include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "foot scuffing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "slipping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "knee overextension"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CoM misalignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "unstable torso"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "30-recovery-mechanisms-",
      children: "30. Recovery Mechanisms 🔁"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots recover by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "adjusting ZMP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bending knees"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "widening stance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "taking extra steps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-week-summary-",
      children: "31. Week Summary 🌟🦿💜"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This week covered:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "gait cycles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "support phases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ZMP & CoM stability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "footstep planning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "inverted pendulum model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "swing trajectories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "complex locomotion tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Next → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WEEK 16: Manipulation & Whole-Body Control"
      }), " 🤖🦾✨"]
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