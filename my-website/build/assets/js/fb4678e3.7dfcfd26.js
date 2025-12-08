"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[2464],{

/***/ 950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_2_gazebo_week_9_gazebo_controllers_md_fb4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-2-gazebo-week-9-gazebo-controllers-md-fb4.json
const site_docs_module_2_gazebo_week_9_gazebo_controllers_md_fb4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-2-gazebo/week9-gazebo-controllers","title":"Week 9 — Gazebo Controllers & Motion Simulation 💫🤖","description":"Robots aren’t truly “alive” until they MOVE.","source":"@site/docs/module-2-gazebo/week9-gazebo-controllers.md","sourceDirName":"module-2-gazebo","slug":"/module-2-gazebo/week9-gazebo-controllers","permalink":"/docs/module-2-gazebo/week9-gazebo-controllers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 8 — Sensors in Gazebo","permalink":"/docs/module-2-gazebo/week8-gazebo-sensors"},"next":{"title":"Week 10 — NVIDIA Isaac Sim & Omniverse 🌌🤖✨","permalink":"/docs/module-3-nvidia-isaac/week10-intro-isaac-sim"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-2-gazebo/week9-gazebo-controllers.md


const frontMatter = {};
const contentTitle = 'Week 9 — Gazebo Controllers & Motion Simulation 💫🤖';

const assets = {

};



const toc = [{
  "value": "1. What Is Motion Simulation? 🤔",
  "id": "1-what-is-motion-simulation-",
  "level": 2
}, {
  "value": "2. Why Controllers Matter? 🎯",
  "id": "2-why-controllers-matter-",
  "level": 2
}, {
  "value": "3. Overview of ROS 2 Control ⚙️🤖",
  "id": "3-overview-of-ros-2-control-️",
  "level": 2
}, {
  "value": "4. Controllers vs Plugins 🔌",
  "id": "4-controllers-vs-plugins-",
  "level": 2
}, {
  "value": "5. Joint Control Modes 🦾",
  "id": "5-joint-control-modes-",
  "level": 2
}, {
  "value": "6. Position Controllers 🎯",
  "id": "6-position-controllers-",
  "level": 2
}, {
  "value": "7. Velocity Controllers 🏎",
  "id": "7-velocity-controllers-",
  "level": 2
}, {
  "value": "8. Effort/Torque Controllers 💥",
  "id": "8-efforttorque-controllers-",
  "level": 2
}, {
  "value": "9. PID Controllers 🎛",
  "id": "9-pid-controllers-",
  "level": 2
}, {
  "value": "10. Gazebo Ros2 Control Plugin 🧩",
  "id": "10-gazebo-ros2-control-plugin-",
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
        id: "week-9--gazebo-controllers--motion-simulation-",
        children: "Week 9 — Gazebo Controllers & Motion Simulation 💫🤖"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Robots aren’t truly “alive” until they MOVE.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "In simulation, this motion is controlled through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gazebo controllers"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ROS 2 control"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "joint-level physics"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter explores everything from torque controllers to PID tuning, from wheel motion to humanoid walking — ALL inside Gazebo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Get ready — this is long, detailed, and packed with emojis! ✨🔥"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-is-motion-simulation-",
      children: "1. What Is Motion Simulation? 🤔"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Motion simulation is the process of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "applying forces 💪"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "controlling joints 🔧"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "executing trajectories 🛤"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "moving robot bodies in physics world 🌍"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-why-controllers-matter-",
      children: "2. Why Controllers Matter? 🎯"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Because without controllers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joints stay frozen 🧊"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wheels don’t move 🛞"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arms cannot lift objects ✋"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "humanoids cannot walk 🚶‍♂️"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Controllers = the robot’s ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "muscles + reflexes"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-overview-of-ros-2-control-️",
      children: "3. Overview of ROS 2 Control ⚙️🤖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ROS 2 control provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hardware abstraction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "controller manager"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joint interfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "command topics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "drones"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "humanoids"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mobile robots"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-controllers-vs-plugins-",
      children: "4. Controllers vs Plugins 🔌"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gazebo Plugin"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ROS 2 Controller"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "physics + actuators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high-level control commands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "low-level torque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "topics/services/goals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "internal to Gazebo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "external ROS nodes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-joint-control-modes-",
      children: "5. Joint Control Modes 🦾"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots can be controlled using:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Position control"
        }), " 🎯"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Velocity control"
        }), " 🏎"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Effort/Torque control"
        }), " 💥"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PID control"
        }), " 🎛"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid modes"
        }), " ⚡"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-position-controllers-",
      children: "6. Position Controllers 🎯"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robot tries to reach a target angle."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example command:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "/joint1/command"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "makefile\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sends:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.57 rad"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-velocity-controllers-",
      children: "7. Velocity Controllers 🏎"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Joint rotates at certain speed:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "/joint1/command = 0.5 rad/s"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wheels"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "conveyor belts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rotating sensors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-efforttorque-controllers-",
      children: "8. Effort/Torque Controllers 💥"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Robot applies ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "raw power"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "τ = torque"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Humanoids use torque control for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "balance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "walking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lifting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-pid-controllers-",
      children: "9. PID Controllers 🎛"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PID = Proportional + Integral + Derivative."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used when smooth control is needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example PID values:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P = 20\r\nI = 0.1\r\nD = 5"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-gazebo-ros2-control-plugin-",
      children: "10. Gazebo Ros2 Control Plugin 🧩"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Attached to robot URDF:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<gazebo>\r\n  <plugin name=\"ros2_control\" filename=\"libgazebo_ros2_control.so\"/>\r\n</gazebo>\r\n11. Transmission Tags ⚙️\r\nUsed to define joint → controller mapping.\r\n\r\nxml\r\nCopy code\r\n<transmission name=\"arm_trans\">\r\n  <type>SimpleTransmission</type>\r\n</transmission>\r\n12. Controller Manager 🤖💼\r\nRuns at runtime and manages:\r\n\r\nloading controllers\r\n\r\nswitching controllers\r\n\r\nactivating them\r\n\r\n13. Launching Controllers 🚀\r\nExample command:\r\n\r\nnginx\r\nCopy code\r\nros2 control load_controller joint_state_broadcaster\r\nros2 control load_controller arm_controller\r\n14. Joint State Broadcaster 📡\r\nPublishes:\r\n\r\njoint angles\r\n\r\nvelocities\r\n\r\ntorques\r\n\r\nTopic:\r\n\r\nbash\r\nCopy code\r\n/joint_states\r\n15. Trajectory Controllers 🛤\r\nUsed for:\r\n\r\narm paths\r\n\r\nleg motion\r\n\r\nmanipulation tasks\r\n\r\n16. Example Trajectory Command 🤲\r\nbash\r\nCopy code\r\n/arm_controller/follow_joint_trajectory\r\n17. Motion Simulation Pipeline 🔄\r\nbash\r\nCopy code\r\nUser command → controller → joint → physics engine → robot motion\r\n18. Wheel Motion Simulation 🛞\r\nMobile robots require:\r\n\r\ndifferential drive\r\n\r\nskid steering\r\n\r\nackermann steering\r\n\r\nGazebo has plugins for all!\r\n\r\n19. Differential Drive Plugin 🛴\r\nUsed for 2-wheel robots:\r\n\r\nxml\r\nCopy code\r\n<plugin name=\"diff_drive\" filename=\"libgazebo_ros_diff_drive.so\"/>\r\n20. Walking Robots 🦿\r\nHumanoids require:\r\n\r\n6+ joints per leg\r\n\r\ntorque controllers\r\n\r\nbalance algorithms\r\n\r\nprecise contact simulation\r\n\r\n21. Contact Dynamics 👣\r\nFeet produce:\r\n\r\ncontact forces\r\n\r\nfriction\r\n\r\nslip\r\n\r\npressure\r\n\r\nUsed for stability.\r\n\r\n22. Controllers for Humanoids 🤖🔥\r\nExamples:\r\n\r\nhip torque control\r\n\r\nankle stabilizers\r\n\r\nknee damping\r\n\r\nzero-moment-point balancing\r\n\r\n23. Arm Manipulation Controllers ✋🦾\r\nInclude:\r\n\r\neffort controllers\r\n\r\njoint trajectory controllers\r\n\r\nimpedance control\r\n\r\n24. Sensor Feedback in Motion 🔁\r\nMotion uses sensors like:\r\n\r\nIMU → stability\r\n\r\njoint encoders → accuracy\r\n\r\nforce sensors → grip\r\n\r\n25. Real-Time Simulation ⏱\r\nGazebo tries to maintain:\r\n\r\nini\r\nCopy code\r\nsimulation_time = real_time\r\nBut complex robots may slow things down.\r\n\r\n26. PID Tuning Tips 🎛💡\r\nBad PID → shaking robot\r\nGood PID → smooth motion\r\n\r\nTips:\r\n\r\nRaise P until oscillation\r\n\r\nAdd D to stabilize\r\n\r\nAdd I for drift correction\r\n\r\n27. Common Motion Problems 🚨\r\nrobot shaking\r\n\r\njoints locking\r\n\r\ncontroller not loading\r\n\r\nfalling humanoids\r\n\r\nunrealistic torque\r\n\r\n28. Debugging Motion Simulation 🔧\r\nUse:\r\n\r\n/joint_states\r\n\r\nGazebo GUI\r\n\r\nROS 2 logs\r\n\r\nRViz visualization\r\n\r\n29. Example Minimal Motion URDF ⚙️\r\nxml\r\nCopy code\r\n<joint name=\"joint1\" type=\"revolute\">\r\n  <limit lower=\"-1\" upper=\"1\" effort=\"5\" velocity=\"1\"/>\r\n</joint>\r\n30. Full Motion Example Pipeline 🧭\r\nmarkdown\r\nCopy code\r\n1. User sends target position  \r\n2. Controller converts to motor output  \r\n3. Physics engine applies torque  \r\n4. Robot joint moves  \r\n5. Sensors publish new state \n"
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