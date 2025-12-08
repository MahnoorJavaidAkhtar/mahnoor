"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[2750],{

/***/ 4773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_3_nvidia_isaac_week_12_isaac_perception_sensors_md_92b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-3-nvidia-isaac-week-12-isaac-perception-sensors-md-92b.json
const site_docs_module_3_nvidia_isaac_week_12_isaac_perception_sensors_md_92b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-3-nvidia-isaac/week12-isaac-perception-sensors","title":"Week 12 — Perception, Sensors & Synthetic Data in Isaac Sim 👁️🤖🎥✨","description":"Perception is the soul of intelligent robotics.","source":"@site/docs/module-3-nvidia-isaac/week12-isaac-perception-sensors.md","sourceDirName":"module-3-nvidia-isaac","slug":"/module-3-nvidia-isaac/week12-isaac-perception-sensors","permalink":"/docs/module-3-nvidia-isaac/week12-isaac-perception-sensors","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 11 — Isaac Robotics Pipeline: USD, Scenes & Assets 🌌🤖📦","permalink":"/docs/module-3-nvidia-isaac/week11-isaac-pipeline-usd"},"next":{"title":"Week 13 — Robotics AI Workflows in Isaac Sim 🤖🧠⚡","permalink":"/docs/module-3-nvidia-isaac/week13-isaac-robotics-ai"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-3-nvidia-isaac/week12-isaac-perception-sensors.md


const frontMatter = {};
const contentTitle = 'Week 12 — Perception, Sensors & Synthetic Data in Isaac Sim 👁️🤖🎥✨';

const assets = {

};



const toc = [{
  "value": "1. What Is Perception? 👁️🧠",
  "id": "1-what-is-perception-️",
  "level": 2
}, {
  "value": "2. Isaac Sim’s Perception Stack 🌟",
  "id": "2-isaac-sims-perception-stack-",
  "level": 2
}, {
  "value": "3. Sensor Types in Isaac Sim 📡",
  "id": "3-sensor-types-in-isaac-sim-",
  "level": 2
}, {
  "value": "4. Camera Sensors 📸✨",
  "id": "4-camera-sensors-",
  "level": 2
}, {
  "value": "5. RGB Camera Example 📷",
  "id": "5-rgb-camera-example-",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "week-12--perception-sensors--synthetic-data-in-isaac-sim-️",
        children: "Week 12 — Perception, Sensors & Synthetic Data in Isaac Sim 👁️🤖🎥✨"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Perception is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "soul of intelligent robotics"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "A robot cannot understand its world without sensors, and Isaac Sim provides some of the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "most advanced, photorealistic, physics-accurate sensors available in ANY simulator"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This week covers:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📸 Cameras"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🟦 Depth Sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔭 LiDAR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧭 IMU & GPS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📡 Semantic sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🎨 Synthetic datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔄 Domain randomization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧠 Perception AI pipelines"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let’s explore the future of robot perception inside Isaac Sim. 🚀✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-is-perception-️",
      children: "1. What Is Perception? 👁️🧠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Perception = the process of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sensing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "interpreting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "understanding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mapping"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "the environment."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots use perception for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "object detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "manipulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SLAM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "interaction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-isaac-sims-perception-stack-",
      children: "2. Isaac Sim’s Perception Stack 🌟"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "photorealistic RGB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "accurate depth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ray-traced LiDAR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "semantic segmentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bounding boxes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "synthetic data annotations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This makes it a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dream tool"
      }), " for robotics AI engineers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-sensor-types-in-isaac-sim-",
      children: "3. Sensor Types in Isaac Sim 📡"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Supported sensors include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RGB Camera"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Depth Camera"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Semantic Camera"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiDAR (RTX-powered)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GPS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Contact sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Force/Torque sensors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-camera-sensors-",
      children: "4. Camera Sensors 📸✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac cameras simulate:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "resolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FOV"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "optical distortion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "shutter speed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "motion blur"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Isaac cameras use ray tracing for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "realistic lighting & shadows"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-rgb-camera-example-",
      children: "5. RGB Camera Example 📷"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "camera = Camera(\r\n    prim_path=\"/World/Robot/Camera\",\r\n    resolution=(1280, 720),\r\n    frequency=30\r\n)\r\n6. Depth Cameras 🟦🌊\r\nDepth cameras generate:\r\n\r\nraw depth maps\r\n\r\npoint clouds\r\n\r\nnormals\r\n\r\nUsed in:\r\n\r\nmanipulation\r\n\r\nSLAM\r\n\r\n3D reconstruction\r\n\r\n7. Depth Output Types 🎭\r\nlinear depth\r\n\r\ndisparity\r\n\r\nmetric depth\r\n\r\nnormalized depth\r\n\r\n8. Semantic Segmentation Cameras 🎨🟪\r\nThese cameras output:\r\n\r\nsemantic labels\r\n\r\ninstance IDs\r\n\r\nbounding boxes\r\n\r\nFor example:\r\n\r\ncss\r\nCopy code\r\nchair → ID 3  \r\nrobot arm → ID 7  \r\ntable → ID 2\r\n9. Instance Segmentation 👥🔍\r\nEach object instance gets its own ID.\r\nThis is used for:\r\n\r\ntracking\r\n\r\ndataset generation\r\n\r\n3D labeling\r\n\r\n10. LiDAR Simulation 🔭🌐\r\nIsaac Sim supports:\r\n\r\n2D LiDAR\r\n\r\n3D LiDAR (Velodyne style)\r\n\r\nRTX ray-traced LiDAR\r\n\r\nLiDAR emits laser beams and returns:\r\n\r\ndistance\r\n\r\nintensity\r\n\r\nreflection behavior\r\n\r\n11. LiDAR Data Example 🟢\r\npython\r\nCopy code\r\nlidar_data = lidar.get_point_cloud()\r\nIncludes:\r\n\r\nXYZ\r\n\r\nintensity\r\n\r\nring index (for multi-layer LiDARs)\r\n\r\n12. IMU Sensors 🧭\r\nIMU returns:\r\n\r\nangular velocity\r\n\r\nlinear acceleration\r\n\r\norientation quaternion\r\n\r\nCritical for:\r\n\r\nhumanoid walking\r\n\r\ndrone flight\r\n\r\nbalance control\r\n\r\n13. GPS Sensors 📡🗺️\r\nUsed for:\r\n\r\ndrones\r\n\r\nautonomous vehicles\r\n\r\noutdoor navigation\r\n\r\nOutputs lat + long + altitude.\r\n\r\n14. Contact & Force Sensors 🦶⚡\r\nUsed in:\r\n\r\nhumanoid feet\r\n\r\ngrippers\r\n\r\nmanipulators\r\n\r\nDetect:\r\n\r\ncollisions\r\n\r\nforces\r\n\r\nfriction\r\n\r\n15. Sensor Noise Models 🎛️🌫️\r\nIsaac Sim allows adding:\r\n\r\ngaussian noise\r\n\r\nshot noise\r\n\r\nrandom drift\r\n\r\njitter\r\n\r\nNoise makes perception more realistic.\r\n\r\n16. Data Pipelines for AI Training 🧠📦\r\nIsaac Sim can generate:\r\n\r\nRGB\r\n\r\ndepth\r\n\r\nsegmentation\r\n\r\nbounding boxes\r\n\r\nnormals\r\n\r\noptical flow\r\n\r\nLiDAR scans\r\n\r\nAll perfectly labeled.\r\n\r\n17. Synthetic Data Generation (SDG) 🎥✨\r\nSDG is one of Isaac Sim's biggest powers.\r\n\r\nIt enables:\r\n\r\ndataset creation\r\n\r\nvariation controls\r\n\r\nrandomization\r\n\r\nlarge-scale learning\r\n\r\n18. Isaac Replicator 📸🤖🎨\r\nReplicator can:\r\n\r\nrandomize textures\r\n\r\nrandomize lighting\r\n\r\nspawn objects\r\n\r\nexport datasets\r\n\r\nUsed by:\r\n\r\nTesla\r\n\r\nBoston Dynamics\r\n\r\nAmazon Robotics\r\n\r\n19. Replicator Example Script 🧪🐍\r\npython\r\nCopy code\r\nimport omni.replicator.core as rep\r\n\r\nwith rep.trigger.on_frame(num_frames=300):\r\n    rep.render()\r\n20. Domain Randomization 🌈⚡\r\nThis improves model generalization.\r\n\r\nRandomizable elements:\r\n\r\nlighting 💡\r\n\r\ncamera pose 🎥\r\n\r\nobject materials 🎨\r\n\r\nclutter placement 📦\r\n\r\n21. Scene Randomizers 🌀\r\nExamples:\r\n\r\ntexture randomizer\r\n\r\nobject scatter\r\n\r\ncolor jitter\r\n\r\nweather simulation\r\n\r\nbackground changes\r\n\r\n22. Perfect Labels for AI 📊✨\r\nIsaac Sim directly produces:\r\n\r\nCOCO annotations\r\n\r\nKITTI labels\r\n\r\nsegmentation masks\r\n\r\nbounding boxes\r\n\r\n2D & 3D labels\r\n\r\n23. Multi-View Camera Systems 👀📡\r\nRobots can have:\r\n\r\nstereo cameras\r\n\r\ntop-down cameras\r\n\r\nmultiple depth sensors\r\n\r\nPerfect for perception models.\r\n\r\n24. Sensor Fusion 🧠🔗\r\nFusion of:\r\n\r\nIMU + camera\r\n\r\nLiDAR + camera\r\n\r\nGPS + IMU\r\n\r\nDepth + segmentation\r\n\r\nUsed in:\r\n\r\nSLAM\r\n\r\nnavigation\r\n\r\nhumanoid control\r\n\r\n25. ROS 2 Perception Topics 🚀\r\nIsaac Sim publishes:\r\n\r\nbash\r\nCopy code\r\n/rgb  \r\n/depth  \r\n/pointcloud  \r\n/imu  \r\n/lidar_points  \r\n/camera_info  \r\nYour ROS 2 nodes read these like real hardware.\r\n\r\n26. Debugging Sensor Data 🔧\r\nTools include:\r\n\r\nRViz\r\n\r\nIsaac viewport\r\n\r\nIsaac debugging windows\r\n\r\n27. Performance Considerations ⚡\r\nSensors may slow simulation.\r\n\r\nTips:\r\n\r\nreduce resolution\r\n\r\nreduce LiDAR samples\r\n\r\nlower update rate\r\n\r\ndisable shadows\r\n\r\n28. Perception for Humanoids 🤖🦿\r\nHumanoids rely heavily on:\r\n\r\ndepth cameras\r\n\r\nIMU\r\n\r\nfoot contact sensors\r\n\r\nLiDAR for environment perception\r\n\r\n29. Perception for Mobile Robots 🚗🤖\r\nIncludes:\r\n\r\n2D LiDAR\r\n\r\nwheel odometry\r\n\r\nRGB cameras\r\n\r\ndepth cameras\n"
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