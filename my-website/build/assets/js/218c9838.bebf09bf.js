"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[5117],{

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

/***/ 8741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_1_ros_2_week_4_ros_2_topics_services_md_218_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-1-ros-2-week-4-ros-2-topics-services-md-218.json
const site_docs_module_1_ros_2_week_4_ros_2_topics_services_md_218_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-1-ros2/week4-ros2-topics-services","title":"Week 4 — ROS 2 Communication: Topics & Services","description":"In ROS 2, nodes communicate using Topics, Services, and Actions.","source":"@site/docs/module-1-ros2/week4-ros2-topics-services.md","sourceDirName":"module-1-ros2","slug":"/module-1-ros2/week4-ros2-topics-services","permalink":"/docs/module-1-ros2/week4-ros2-topics-services","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 3 — ROS 2 Architecture & Nodes","permalink":"/docs/module-1-ros2/week3-ros2-architecture-nodes"},"next":{"title":"⚙️ Week 5 — ROS 2 Advanced Design Patterns","permalink":"/docs/module-1-ros2/week5-ros2-advanced-patterns"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-1-ros2/week4-ros2-topics-services.md


const frontMatter = {};
const contentTitle = 'Week 4 — ROS 2 Communication: Topics & Services';

const assets = {

};



const toc = [{
  "value": "⚡ Topic Flow Diagram",
  "id": "-topic-flow-diagram",
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
        id: "week-4--ros-2-communication-topics--services",
        children: "Week 4 — ROS 2 Communication: Topics & Services"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In ROS 2, nodes communicate using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Topics"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Services"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "This week focuses on Topics & Services — the two most essential communication patterns used by real robots."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-ros-2-communication-models",
      children: "🌐 ROS 2 Communication Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ROS 2 provides three primary communication styles:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Topics (Pub/Sub)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continuous streaming data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "camera frames, sensor data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Services"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "request‐response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "reset sensor, compute kinematics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Actions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long-running tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "navigation goals"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This week covers the first two."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-part-1--ros-2-topics-publisher--subscriber",
      children: "🚀 PART 1 — ROS 2 Topics (Publisher / Subscriber)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Topics are used for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "real-time data streams"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "/camera/image_raw"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "/imu/data"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "/cmd_vel"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "/joint_states"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-topic-flow-diagram",
      children: "⚡ Topic Flow Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+-------------------+ +--------------------+\r\n| publisher_node | ----> | subscriber_node |\r\n| sends messages | | receives messages |\r\n+-------------------+ +--------------------+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "python\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Topics allow ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one-to-many"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "many-to-one"
      }), " communication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-creating-a-topic-publisher-python",
      children: "📡 Creating a Topic Publisher (Python)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from rclpy.node import Node\r\nfrom std_msgs.msg import String\r\n\r\nclass StatusPublisher(Node):\r\n    def __init__(self):\r\n        super().__init__('status_publisher')\r\n        self.pub = self.create_publisher(String, '/robot_status', 10)\r\n        self.timer = self.create_timer(1.0, self.publish_status)\r\n\r\n    def publish_status(self):\r\n        msg = String()\r\n        msg.data = \"Robot Online\"\r\n        self.pub.publish(msg)\r\n        self.get_logger().info(\"Status Published\")\r\n🎧 Creating a Topic Subscriber (Python)\r\npython\r\nCopy code\r\nfrom rclpy.node import Node\r\nfrom std_msgs.msg import String\r\n\r\nclass StatusListener(Node):\r\n    def __init__(self):\r\n        super().__init__('status_listener')\r\n        self.sub = self.create_subscription(\r\n            String, '/robot_status', self.callback, 10)\r\n\r\n    def callback(self, msg):\r\n        self.get_logger().info(f\"Status: {msg.data}\")\r\n🔥 Real Robotics Example\r\n/cmd_vel\r\nUsed by humanoids, rovers, manipulators.\r\n\r\nCopy code\r\ngeometry_msgs/Twist\r\n ├─ linear (x, y, z)\r\n └─ angular (roll, pitch, yaw)\r\nControl loop:\r\n\r\npython\r\nCopy code\r\nrobot.publish_cmd_vel(0.5, 0.0, 0.0)\r\n⚙️ Quality of Service (QoS)\r\nROS 2 Topics support fine control using QoS:\r\n\r\nQoS Profile\tUse Case\r\nSensor Data\tIMU, camera (best effort, high frequency)\r\nReliable\tImportant data, low loss allowed\r\nTransient Local\tLatching messages\r\nKeep last\tSLAM, mapping\r\n\r\n🚧 Topic Issues Robots Face\r\nIssue\tExplanation\r\nMessage Drop\tHigh-rate sensors\r\nDelay\tNetwork congestion\r\nDesync\tCamera + LiDAR mismatch\r\nQoS mismatch\tIncompatible publisher/subscriber\r\n\r\nThis is why ROS 2 uses DDS for robustness.\r\n\r\n🌐 PART 2 — ROS 2 Services (Request–Response)\r\nServices behave like a function call over the network.\r\n\r\n🔁 Service Flow\r\nlua\r\nCopy code\r\nclient_node ---- request ----> service_server_node\r\nclient_node <--- response ---- service_server_node\r\nUsed for tasks like:\r\n\r\nResetting motors\r\n\r\nQuerying configuration\r\n\r\nPerforming a one-time computation\r\n\r\n🛠 Creating a Service Server (Python)\r\npython\r\nCopy code\r\nfrom example_interfaces.srv import Trigger\r\n\r\nclass ResetServer(Node):\r\n    def __init__(self):\r\n        super().__init__(\"reset_server\")\r\n        self.srv = self.create_service(Trigger, \"reset_robot\", self.callback)\r\n\r\n    def callback(self, request, response):\r\n        response.success = True\r\n        response.message = \"Robot reset complete!\"\r\n        return response\r\n🛰 Creating a Service Client (Python)\r\npython\r\nCopy code\r\nclass ResetClient(Node):\r\n    def __init__(self):\r\n        super().__init__(\"reset_client\")\r\n        self.cli = self.create_client(Trigger, \"reset_robot\")\r\n\r\n    def send_request(self):\r\n        req = Trigger.Request()\r\n        future = self.cli.call_async(req)\r\n        return future\r\n🧠 Topics vs Services — When to Use What?\r\nUse Case\tUse Topics\tUse Services\r\nsensor streaming\t✔\t❌\r\nmotor commands\t✔\t❌\r\nrobot heartbeat\t✔\t❌\r\nreset robot\t❌\t✔\r\nfetch map\t❌\t✔\r\nchange configs\t❌\t✔\r\n\r\nGeneral rule:\r\n\r\nIf data flows continuously → Topic.\r\nIf you need a response → Service.\r\n\r\n🦾 Humanoid Robot Example\r\nWalking Loop (Topics)\r\nbash\r\nCopy code\r\n/imu              → sensor stream  \r\n/joint_states     → servo feedback  \r\n/cmd_vel          → walking commands  \r\nResetting after a fall (Service)\r\nbash\r\nCopy code\r\n/humanoid/reset_pose\n"
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