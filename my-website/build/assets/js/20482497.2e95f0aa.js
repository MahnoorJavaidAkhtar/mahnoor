"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[3171],{

/***/ 1876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_4_humanoids_week_16_humanoid_manipulation_md_204_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-4-humanoids-week-16-humanoid-manipulation-md-204.json
const site_docs_module_4_humanoids_week_16_humanoid_manipulation_md_204_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-4-humanoids/week16-humanoid-manipulation","title":"Week 16 — Humanoid Manipulation & Whole-Body Control 🤖🦾✨","description":"Humanoids don’t just walk — they interact with the world.","source":"@site/docs/module-4-humanoids/week16-humanoid-manipulation.md","sourceDirName":"module-4-humanoids","slug":"/module-4-humanoids/week16-humanoid-manipulation","permalink":"/docs/module-4-humanoids/week16-humanoid-manipulation","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 15 — Biped Locomotion: Walking, Gait Cycles & Stability 🦿🤖✨","permalink":"/docs/module-4-humanoids/week15-biped-locomotion"},"next":{"title":"Week 17 — Vision, Perception & Learning for Humanoids 👁️🤖🧠✨","permalink":"/docs/module-4-humanoids/week17-humanoid-vision-learning"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-4-humanoids/week16-humanoid-manipulation.md


const frontMatter = {};
const contentTitle = 'Week 16 — Humanoid Manipulation & Whole-Body Control 🤖🦾✨';

const assets = {

};



const toc = [{
  "value": "1. What Is Manipulation? ✋🤖",
  "id": "1-what-is-manipulation-",
  "level": 2
}, {
  "value": "2. Why Manipulation Is Hard 😅",
  "id": "2-why-manipulation-is-hard-",
  "level": 2
}, {
  "value": "3. Whole-Body Control (WBC) Overview 🔗🤖✨",
  "id": "3-whole-body-control-wbc-overview-",
  "level": 2
}, {
  "value": "4. Tasks in Whole-Body Control 🎯",
  "id": "4-tasks-in-whole-body-control-",
  "level": 2
}, {
  "value": "5. Task Priority Levels 🎛️⚡",
  "id": "5-task-priority-levels-️",
  "level": 2
}, {
  "value": "6. Arm Kinematics (FK &amp; IK) 🔩🦾",
  "id": "6-arm-kinematics-fk--ik-",
  "level": 2
}, {
  "value": "FK:",
  "id": "fk",
  "level": 3
}, {
  "value": "IK:",
  "id": "ik",
  "level": 3
}, {
  "value": "7. Redundancy in 7-DOF Arms 🌀",
  "id": "7-redundancy-in-7-dof-arms-",
  "level": 2
}, {
  "value": "8. End-Effector Frames 🖐️✨",
  "id": "8-end-effector-frames-️",
  "level": 2
}, {
  "value": "9. Grasp Planning ✋📦",
  "id": "9-grasp-planning-",
  "level": 2
}, {
  "value": "10. Force-Based Grasping 💥🖐️",
  "id": "10-force-based-grasping-️",
  "level": 2
}, {
  "value": "11. Contact Dynamics for Manipulation 💢✨",
  "id": "11-contact-dynamics-for-manipulation-",
  "level": 2
}, {
  "value": "12. Force Closure 🧲🤝",
  "id": "12-force-closure-",
  "level": 2
}, {
  "value": "13. Dual-Arm Manipulation 🦾🦾📦",
  "id": "13-dual-arm-manipulation-",
  "level": 2
}, {
  "value": "14. Whole-Body IK (WBIK) 🤖🧠",
  "id": "14-whole-body-ik-wbik-",
  "level": 2
}, {
  "value": "15. Momentum-Based Control ⚖️⚡",
  "id": "15-momentum-based-control-️",
  "level": 2
}, {
  "value": "16. Center of Mass (CoM) Control 🎯",
  "id": "16-center-of-mass-com-control-",
  "level": 2
}, {
  "value": "17. Manipulation During Walking 🦿🦾🤖✨",
  "id": "17-manipulation-during-walking-",
  "level": 2
}, {
  "value": "18. Torso Control 🧍‍♂️💫",
  "id": "18-torso-control-️",
  "level": 2
}, {
  "value": "19. Arm Swing Coordination 🚶‍♂️🦾",
  "id": "19-arm-swing-coordination-️",
  "level": 2
}, {
  "value": "20. Handling Heavy Objects 💪🤖",
  "id": "20-handling-heavy-objects-",
  "level": 2
}, {
  "value": "21. Object Lifting Sequences 📦⬆️",
  "id": "21-object-lifting-sequences-️",
  "level": 2
}, {
  "value": "22. Manipulation Under Uncertainty ❓🤖",
  "id": "22-manipulation-under-uncertainty-",
  "level": 2
}, {
  "value": "23. Environmental Interaction 🧱🤖",
  "id": "23-environmental-interaction-",
  "level": 2
}, {
  "value": "24. Compliance Control 🌈🔧",
  "id": "24-compliance-control-",
  "level": 2
}, {
  "value": "25. Impedance Control 🎛️⚡",
  "id": "25-impedance-control-️",
  "level": 2
}, {
  "value": "26. Operational Space Control (OSC) 🧠📐",
  "id": "26-operational-space-control-osc-",
  "level": 2
}, {
  "value": "27. Manipulation with Vision 👁️📦🤖",
  "id": "27-manipulation-with-vision-️",
  "level": 2
}, {
  "value": "28. Haptic Feedback ✋🧲",
  "id": "28-haptic-feedback-",
  "level": 2
}, {
  "value": "29. Learning-Based Manipulation 🧠🦾",
  "id": "29-learning-based-manipulation-",
  "level": 2
}, {
  "value": "30. Failure Modes in Manipulation 🚨📦",
  "id": "30-failure-modes-in-manipulation-",
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
        id: "week-16--humanoid-manipulation--whole-body-control-",
        children: "Week 16 — Humanoid Manipulation & Whole-Body Control 🤖🦾✨"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Humanoids don’t just walk — they ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interact"
      }), " with the world.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "This includes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lifting objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pushing & pulling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "opening doors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "using tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "carrying loads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "precise hand manipulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This week covers EVERYTHING a humanoid needs to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "move its arms + balance + interact"
      }), " at the same time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We explore:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whole-body control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arm kinematics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grasping & manipulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contact forces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Torso stabilization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dual-arm motion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Object handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Human-like movement patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let’s dive in! ⚡🤖✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-is-manipulation-",
      children: "1. What Is Manipulation? ✋🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manipulation means enabling the robot to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lift"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "move"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rotate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "place objects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Humanoids must do this ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "while balancing"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-why-manipulation-is-hard-",
      children: "2. Why Manipulation Is Hard 😅"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Because humanoids must:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "coordinate 20–40 joints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avoid falling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "maintain center of mass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "generate stable forces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "use two arms + torso"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is MUCH harder than arms mounted on fixed bases."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-whole-body-control-wbc-overview-",
      children: "3. Whole-Body Control (WBC) Overview 🔗🤖✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WBC controls:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "legs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "torso"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "head"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simultaneously — using one unified optimization framework."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-tasks-in-whole-body-control-",
      children: "4. Tasks in Whole-Body Control 🎯"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoid WBC solves multiple tasks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "keep balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reach target"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "track motion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "maintain posture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avoid self-collision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "keep CoM in stable zone"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-task-priority-levels-️",
      children: "5. Task Priority Levels 🎛️⚡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WBC uses hierarchy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Balance tasks"
        }), " (highest) ⚖️"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Foot placement"
        }), " 👣"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Center of mass control"
        }), " 🎯"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arm reaching"
        }), " 🦾"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Head orientation"
        }), " 👁️"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Posture tasks"
        }), " 🧍‍♂️"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-arm-kinematics-fk--ik-",
      children: "6. Arm Kinematics (FK & IK) 🔩🦾"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Arms often have ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "7 DOF"
      }), ", giving flexibility like humans."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fk",
      children: "FK:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "joint angles → hand position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "shell\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ik",
      children: "IK:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "hand target → joint angles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-redundancy-in-7-dof-arms-",
      children: "7. Redundancy in 7-DOF Arms 🌀"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "7 DOF > 6 required → redundancy used for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "elbow shape control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "avoiding joint limits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balancing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "posture optimization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-end-effector-frames-️",
      children: "8. End-Effector Frames 🖐️✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The robot needs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hand frame"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasp frame"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "approach frame"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To plan precise grasps."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-grasp-planning-",
      children: "9. Grasp Planning ✋📦"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids grasp objects via:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "power grasps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "precision pinches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "side grasps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "top grasps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-force-based-grasping-️",
      children: "10. Force-Based Grasping 💥🖐️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot adjusts grip using:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "torque sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tactile sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "finger compliance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-contact-dynamics-for-manipulation-",
      children: "11. Contact Dynamics for Manipulation 💢✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contacts include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hand-object"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "object-table"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "foot-ground"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "body support"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WBC must manage contact constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-force-closure-",
      children: "12. Force Closure 🧲🤝"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A grasp is stable if:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "forces + torques can resist disturbances"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in grasp planning algorithms."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-dual-arm-manipulation-",
      children: "13. Dual-Arm Manipulation 🦾🦾📦"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two arms are used for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lifting heavy loads"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stabilizing objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rotating objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "human-like tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-whole-body-ik-wbik-",
      children: "14. Whole-Body IK (WBIK) 🤖🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solves full-body motion:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Torso + arms + legs + head → target pose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Under all constraints."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-momentum-based-control-️",
      children: "15. Momentum-Based Control ⚖️⚡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots maintain balance by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "controlling angular momentum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "controlling linear momentum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "adjusting upper body"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-center-of-mass-com-control-",
      children: "16. Center of Mass (CoM) Control 🎯"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To avoid falling:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoM trajectory must stay inside support polygon"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Arms help shift CoM."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-manipulation-during-walking-",
      children: "17. Manipulation During Walking 🦿🦾🤖✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This requires:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "synchronized WBC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dynamic balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "predictive stepping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CoM adaptation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-torso-control-️",
      children: "18. Torso Control 🧍‍♂️💫"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Torso stabilizes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reach performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "upper-body posture"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bad torso posture → falling."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-arm-swing-coordination-️",
      children: "19. Arm Swing Coordination 🚶‍♂️🦾"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Even walking uses arm movement for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "momentum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "natural gait"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "20-handling-heavy-objects-",
      children: "20. Handling Heavy Objects 💪🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot adjusts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stance width"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "foot pressure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grip force"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "posture"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-object-lifting-sequences-️",
      children: "21. Object Lifting Sequences 📦⬆️"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Align hands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grasp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shift CoM backward"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lift with legs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stabilize torso"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Just like humans!"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-manipulation-under-uncertainty-",
      children: "22. Manipulation Under Uncertainty ❓🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots use:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "visual feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "force control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tactile sensing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To adjust motion in real time."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-environmental-interaction-",
      children: "23. Environmental Interaction 🧱🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tasks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "opening doors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pressing switches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pushing carts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "carrying trays"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Requires precise control."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-compliance-control-",
      children: "24. Compliance Control 🌈🔧"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compliance = soft, safe motion."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "human environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "assembly tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "interacting with fragile objects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-impedance-control-️",
      children: "25. Impedance Control 🎛️⚡"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Robot tries to behave like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spring-damper system"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "force = stiffness * position error"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Good for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pushing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "polishing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sliding tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-operational-space-control-osc-",
      children: "26. Operational Space Control (OSC) 🧠📐"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Controls EE directly in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cartesian space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "not joint space"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This improves:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "precision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "smoothness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "predictability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "27-manipulation-with-vision-️",
      children: "27. Manipulation with Vision 👁️📦🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "detect object"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "estimate 6D pose"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "plan grasp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "track object"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasp + manipulate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "28-haptic-feedback-",
      children: "28. Haptic Feedback ✋🧲"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "delicate handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "detecting slip"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grip adjustment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "29-learning-based-manipulation-",
      children: "29. Learning-Based Manipulation 🧠🦾"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids use:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "imitation learning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RL manipulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "behavior cloning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grasp pose networks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "30-failure-modes-in-manipulation-",
      children: "30. Failure Modes in Manipulation 🚨📦"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common failure points:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "losing balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "incorrect CoM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grip slip"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "self-collision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "overextension"
      }), "\n"]
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