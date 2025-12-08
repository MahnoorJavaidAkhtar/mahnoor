"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[6109],{

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

/***/ 9450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_1_ros_2_week_5_ros_2_advanced_patterns_md_db2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-1-ros-2-week-5-ros-2-advanced-patterns-md-db2.json
const site_docs_module_1_ros_2_week_5_ros_2_advanced_patterns_md_db2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-1-ros2/week5-ros2-advanced-patterns","title":"⚙️ Week 5 — ROS 2 Advanced Design Patterns","description":"Welcome to the final week of the ROS 2 module!","source":"@site/docs/module-1-ros2/week5-ros2-advanced-patterns.md","sourceDirName":"module-1-ros2","slug":"/module-1-ros2/week5-ros2-advanced-patterns","permalink":"/docs/module-1-ros2/week5-ros2-advanced-patterns","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 4 — ROS 2 Communication: Topics & Services","permalink":"/docs/module-1-ros2/week4-ros2-topics-services"},"next":{"title":"Week 6 — Simulation Concepts & Physics Engines","permalink":"/docs/module-2-gazebo/week6-simulation-concepts"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-1-ros2/week5-ros2-advanced-patterns.md


const frontMatter = {};
const contentTitle = '⚙️ Week 5 — ROS 2 Advanced Design Patterns';

const assets = {

};



const toc = [{
  "value": "🟣 Lifecycle State Machine",
  "id": "-lifecycle-state-machine",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
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
        id: "️-week-5--ros-2-advanced-design-patterns",
        children: "⚙️ Week 5 — ROS 2 Advanced Design Patterns"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Welcome to the final week of the ROS 2 module!", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "This chapter explores ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "professional-grade ROS 2 techniques"
      }), " used in:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "humanoid robots"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "industrial automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "multi-sensor platforms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "autonomous systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These advanced concepts make ROS 2 scalable, efficient, and reliable in complex robotic environments."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-part-1--lifecycle-nodes",
      children: "🚀 PART 1 — Lifecycle Nodes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lifecycle nodes provide a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "managed state machine"
      }), " for safe startup and shutdown of robotic systems.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "They are essential for sensors, motors, controllers, and humanoid components."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-lifecycle-state-machine",
      children: "🟣 Lifecycle State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sql\r\nCopy code\r\n+-------------------+\r\n|   unconfigured    |\r\n+---------+---------+\r\n|\r\nconfigure() called\r\n|\r\n+---------v---------+\r\n|     inactive      |\r\n+---------+---------+\r\n|\r\nactivate() called\r\n|\r\n+---------v---------+\r\n|      active       |\r\n+---------+---------+\r\n|\r\ndeactivate() called\r\n|\r\n+---------v---------+\r\n|    inactive       |\r\n+-------------------+\r\nyaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-why-lifecycle-nodes-matter",
      children: "🔧 Why Lifecycle Nodes Matter?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For real robots (especially humanoids):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🛑 Prevent motors from activating early"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔄 Reset sensors cleanly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Ensure safe transitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚙ Provide deterministic startup order"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leg controller → activate only after IMU is ready"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vision system → start after all parameters load"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-lifecycle-node-example-python",
      children: "🧪 Lifecycle Node Example (Python)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from rclpy.lifecycle import LifecycleNode\r\nfrom rclpy.lifecycle import State\r\n\r\nclass SensorNode(LifecycleNode):\r\n    def __init__(self):\r\n        super().__init__(\"sensor_lifecycle\")\r\n\r\n    def on_configure(self, state: State):\r\n        self.get_logger().info(\"Configuring sensor...\")\r\n        return TransitionCallbackReturn.SUCCESS\r\n\r\n    def on_activate(self, state: State):\r\n        self.get_logger().info(\"Sensor active!\")\r\n        return TransitionCallbackReturn.SUCCESS\r\n🚀 PART 2 — Executors & Multi-threading\r\nROS 2 executors manage how callbacks run.\r\n\r\n🟣 Executor Types\r\nExecutor\tDescription\r\nSingle-threaded\tSimple, sequential callbacks\r\nMulti-threaded\tParallel callback execution\r\nCustom executor\tFor real-time control loops\r\n\r\n⚠ Why Executors Matter?\r\nHumanoids run many callbacks simultaneously:\r\n\r\nIMU updates\r\n\r\nvision frames\r\n\r\njoint-state feedback\r\n\r\nmotor commands\r\n\r\nbalance controller\r\n\r\nWithout executors, timing collapses.\r\n\r\n🧩 Multi-threaded Executor Example\r\npython\r\nCopy code\r\nexecutor = MultiThreadedExecutor()\r\nexecutor.add_node(vision_node)\r\nexecutor.add_node(control_node)\r\nexecutor.spin()\r\nThis allows perception + control to run smoothly in parallel.\r\n\r\n🚀 PART 3 — Component Nodes (Node Composition)\r\nInstead of running each node as a separate process, ROS 2 allows multiple nodes inside one process for faster communication.\r\n\r\n🟣 Diagram: Component Container\r\nlua\r\nCopy code\r\n+-------------------------+\r\n|   component_container   |\r\n|-------------------------|\r\n|  camera_component       |\r\n|  imu_component          |\r\n|  control_component      |\r\n+-------------------------+\r\nBenefits:\r\n\r\n⚡ Lower latency\r\n\r\n📉 Reduced overhead\r\n\r\n🔌 Better for embedded systems\r\n\r\n🧪 C++ Composition Example\r\ncpp\r\nCopy code\r\n#include \"rclcpp_components/register_node_macro.hpp\"\r\n\r\nclass CameraComponent : public rclcpp::Node {\r\npublic:\r\n    CameraComponent(const rclcpp::NodeOptions & options)\r\n    : Node(\"camera_component\", options) {}\r\n};\r\n\r\nRCLCPP_COMPONENTS_REGISTER_NODE(CameraComponent)\r\n🚀 PART 4 — Parameters & Dynamic Configuration\r\nParameters allow runtime configuration of robot behavior.\r\n\r\nExamples:\r\n\r\ncamera resolution\r\n\r\nmotor speed limits\r\n\r\nPID controller values\r\n\r\n🧪 Declaring Parameters\r\npython\r\nCopy code\r\nself.declare_parameter(\"exposure\", 0.5)\r\nvalue = self.get_parameter(\"exposure\").value\r\n🚀 PART 5 — Actions (Long-Running Tasks)\r\nActions are used for:\r\n\r\nnavigation goals\r\n\r\nmanipulation tasks\r\n\r\nhumanoid walking sequences\r\n\r\nDiagram:\r\n\r\nlua\r\nCopy code\r\nclient ---- send goal ----> action server\r\nclient <--- feedback ------- action server\r\nclient <--- result --------- action server\r\n🛠 Example: Action Client (Python)\r\npython\r\nCopy code\r\nfrom rclpy.action import ActionClient\r\nfrom example_interfaces.action import Fibonacci\r\n\r\nself._client = ActionClient(self, Fibonacci, \"compute_sequence\")\r\n\r\ngoal = Fibonacci.Goal()\r\ngoal.order = 10\r\n\r\nself._client.send_goal_async(goal)\r\n🧠 How These Patterns Affect Real Robots\r\n✔ Humanoids\r\nNeed lifecycle nodes to safely activate motors + sensors.\r\n\r\n✔ Industrial robots\r\nRely on multi-threaded executors for low-latency control.\r\n\r\n✔ Autonomous vehicles\r\nUse actions for navigation goals.\r\n\r\n✔ Manipulation systems\r\nDepend on component containers for speed and efficiency.\n"
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