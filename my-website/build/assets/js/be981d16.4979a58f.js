"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[9761],{

/***/ 3657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_1_ros_2_week_3_ros_2_architecture_nodes_md_be9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-1-ros-2-week-3-ros-2-architecture-nodes-md-be9.json
const site_docs_module_1_ros_2_week_3_ros_2_architecture_nodes_md_be9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-1-ros2/week3-ros2-architecture-nodes","title":"Week 3 — ROS 2 Architecture & Nodes","description":"ROS 2 (Robot Operating System 2) is the software foundation behind modern intelligent robots, from mobile platforms to advanced humanoids.","source":"@site/docs/module-1-ros2/week3-ros2-architecture-nodes.md","sourceDirName":"module-1-ros2","slug":"/module-1-ros2/week3-ros2-architecture-nodes","permalink":"/docs/module-1-ros2/week3-ros2-architecture-nodes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 2 — The Landscape of Physical AI","permalink":"/docs/module-1-ros2/week2-physical-ai-landscape"},"next":{"title":"Week 4 — ROS 2 Communication: Topics & Services","permalink":"/docs/module-1-ros2/week4-ros2-topics-services"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-1-ros2/week3-ros2-architecture-nodes.md


const frontMatter = {};
const contentTitle = 'Week 3 — ROS 2 Architecture & Nodes';

const assets = {

};



const toc = [{
  "value": "Common Libraries",
  "id": "common-libraries",
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
        id: "week-3--ros-2-architecture--nodes",
        children: "Week 3 — ROS 2 Architecture & Nodes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ROS 2 (Robot Operating System 2) is the software foundation behind modern intelligent robots, from mobile platforms to advanced humanoids.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "It acts as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nervous system"
      }), " that connects sensors, perception modules, control loops, and decision-making AI."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This week, you’ll explore how ROS 2 is structured, how nodes operate, and how communication happens inside a distributed robotic system."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-the-ros-2-architecture-overview",
      children: "⚡ The ROS 2 Architecture Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ROS 2 is built in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "layers"
      }), ", each responsible for a specific responsibility:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+-------------------------------------------------------+\r\n| Application Layer |\r\n| (Your robot nodes & packages) |\r\n+-------------------------------------------------------+\r\n| ROS Client Libraries (rclcpp / rclpy / rcl) |\r\n+-------------------------------------------------------+\r\n| ROS Middleware (rmw abstraction layer) |\r\n+-------------------------------------------------------+\r\n| DDS — Data Distribution Service |\r\n| (Fast RTPS, Cyclone DDS, Connext, GurumDDS, etc.) |\r\n+-------------------------------------------------------+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let’s break down how these layers work."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-1-application-layer",
      children: "🟣 1. Application Layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is where YOU write robot logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "camera_node"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "lidar_filter_node"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "humanoid_balance_controller"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "navigation_planner"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nodes define:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Publishers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subscribers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Services"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timers & callbacks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-2-ros-client-libraries",
      children: "🟣 2. ROS Client Libraries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These convert ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "your Python or C++ code"
      }), " into ROS 2 functionality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-libraries",
      children: "Common Libraries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Library"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rclpy"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rclcpp"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rust"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rclrs"
            }), " (experimental)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example responsibilities:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a node"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Publish and subscribe"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define services & actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manage parameters"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-3-ros-middleware-rmw",
      children: "🟣 3. ROS Middleware (RMW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rmw layer"
      }), " is an abstraction layer that hides DDS complexity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Topic matching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node discovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Middleware switching"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "QoS negotiation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots can switch DDS vendor without changing code — a powerful design choice."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-4-dds--the-heart-of-ros-2",
      children: "🟣 4. DDS — The Heart of ROS 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DDS enables:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚡ Real-time communication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔄 Automatic discovery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🛰 Distributed networking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔐 Reliable or best-effort messaging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📡 Configurable QoS for sensors and control"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It is used in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Autonomous cars"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naval systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Medical devices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is what makes ROS 2 scalable and industry-ready."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-understanding-ros-2-nodes",
      children: "🧩 Understanding ROS 2 Nodes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "node"
      }), " = a modular, independent process in a robot that performs a task."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "+-------------------+\r\n| camera_node |\r\n| publishes image |\r\n+---------+---------+\r\n|\r\nv\r\n+-------------------+\r\n| vision_node |\r\n| detects objects |\r\n+---------+---------+\r\n|\r\nv\r\n+-------------------+\r\n| control_node |\r\n| uses detections |\r\n+-------------------+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "yaml\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nodes form a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "computational graph"
      }), ", connected through ROS communication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-node-responsibilities",
      children: "🔌 Node Responsibilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A node can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "publish messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "subscribe to topics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "offer a service"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "call a service"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "send goals through actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "broadcast parameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "run timed callbacks (e.g., control loops)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each node is independent but ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loosely connected"
      }), " through topics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-example-minimal-ros-2-python-node",
      children: "🧪 Example: Minimal ROS 2 Python Node"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import rclpy\r\nfrom rclpy.node import Node\r\n\r\nclass MinimalNode(Node):\r\n    def __init__(self):\r\n        super().__init__('minimal_node')\r\n        self.timer = self.create_timer(1.0, self.callback)\r\n\r\n    def callback(self):\r\n        self.get_logger().info(\"Node is alive!\")\r\n\r\ndef main():\r\n    rclpy.init()\r\n    node = MinimalNode()\r\n    rclpy.spin(node)\r\n    node.destroy_node()\r\n    rclpy.shutdown()\r\nThis node logs a heartbeat message every second.\r\n\r\n🧬 ROS 2 Computational Graph (Diagram)\r\nbash\r\nCopy code\r\n                    +-----------------------+\r\n                    |    lidar_node         |\r\n                    | publishes /scan       |\r\n                    +-----------+-----------+\r\n                                |\r\n                                v\r\n+-----------------------+   +---+----------------------+\r\n| mapping_node          |   | localization_node        |\r\n| subs /scan → produces |   | subs /scan → estimates   |\r\n|     /map              |   |     /pose                |\r\n+-----------+-----------+   +-----------+--------------+\r\n            |                           |\r\n            v                           v\r\n           +------------------------------+\r\n           |      navigation_node         |\r\n           |  uses /map + /pose → /cmd_vel |\r\n           +------------------------------+\r\nThis is how robots perceive, localize, and move using ROS 2.\r\n\r\n⚙ Node Lifecycle (Advanced)\r\nSome robots (especially humanoids) use lifecycle nodes for safe startup:\r\n\r\nscss\r\nCopy code\r\nunconfigured → configuring → inactive → activating → active\r\nUseful for:\r\n\r\nsensors\r\n\r\nmotor control\r\n\r\nnavigation systems\n"
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