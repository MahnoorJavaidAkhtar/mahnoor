"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[4876],{

/***/ 7147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_2_gazebo_week_7_robot_modeling_urdf_md_522_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-2-gazebo-week-7-robot-modeling-urdf-md-522.json
const site_docs_module_2_gazebo_week_7_robot_modeling_urdf_md_522_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-2-gazebo/week7-robot-modeling-urdf","title":"Week 7 — Robot Modeling & URDF","description":"Robot modeling is the foundation of every robotics system.","source":"@site/docs/module-2-gazebo/week7-robot-modeling-urdf.md","sourceDirName":"module-2-gazebo","slug":"/module-2-gazebo/week7-robot-modeling-urdf","permalink":"/docs/module-2-gazebo/week7-robot-modeling-urdf","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Week 6 — Simulation Concepts & Physics Engines","permalink":"/docs/module-2-gazebo/week6-simulation-concepts"},"next":{"title":"Week 8 — Sensors in Gazebo","permalink":"/docs/module-2-gazebo/week8-gazebo-sensors"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-2-gazebo/week7-robot-modeling-urdf.md


const frontMatter = {};
const contentTitle = 'Week 7 — Robot Modeling & URDF';

const assets = {

};



const toc = [{
  "value": "1. What Is URDF?",
  "id": "1-what-is-urdf",
  "level": 2
}, {
  "value": "2. Why Robot Modeling Is Necessary",
  "id": "2-why-robot-modeling-is-necessary",
  "level": 2
}, {
  "value": "3. Structure of a URDF File",
  "id": "3-structure-of-a-urdf-file",
  "level": 2
}, {
  "value": "4. Links — The Rigid Bodies",
  "id": "4-links--the-rigid-bodies",
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
        id: "week-7--robot-modeling--urdf",
        children: "Week 7 — Robot Modeling & URDF"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Robot modeling is the foundation of every robotics system.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "URDF (Unified Robot Description Format) lets you describe ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "shape, mass, joints, sensors, dynamics, and structure"
      }), " of a robot in simulation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this extended version, we will explore every detail of URDF and robot modeling so deeply that you will understand:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "how real robots are designed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "how humanoid bodies are structured"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "how joint motion is mathematically defined"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "how inertia and mass affect stability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "how sensors, controllers, and actuators integrate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter contains 20+ sections so your ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sidebar becomes full and beautifully expanded"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-what-is-urdf",
      children: "1. What Is URDF?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URDF is:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A robot blueprint"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A physics definition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A geometry description"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A kinematic structure model"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every simulation tool (Gazebo, RViz, Isaac Sim) uses URDF as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "first step"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-why-robot-modeling-is-necessary",
      children: "2. Why Robot Modeling Is Necessary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Robots cannot be simulated without defining:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "link shapes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joint types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mass distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "collision boundaries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "visual geometry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "inertia matrices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Incorrect modeling → robot falls, vibrates, or explodes."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-structure-of-a-urdf-file",
      children: "3. Structure of a URDF File"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URDF is made up of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<robot>"
        }), " root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<link>"
        }), " blocks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<joint>"
        }), " connections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<gazebo>"
        }), " tags"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Basic skeleton:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "robot\r\n├── link\r\n├── link\r\n├── joint\r\n└── joint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "php-template\r\nCopy code"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-links--the-rigid-bodies",
      children: "4. Links — The Rigid Bodies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A robot link represents a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "piece of hardware"
      }), " like:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "torso"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "leg"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "head"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "arm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "wheel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "camera mount"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<link name=\"base_link\">\r\n  <visual><geometry><box size=\"0.5 0.4 0.2\"/></geometry></visual>\r\n  <collision><geometry><box size=\"0.5 0.4 0.2\"/></geometry></collision>\r\n  <inertial><mass value=\"6.0\"/></inertial>\r\n</link>\r\n5. Visual Geometry\r\nDetermines how the robot looks.\r\n\r\nCommon shapes:\r\n\r\nbox\r\n\r\ncylinder\r\n\r\nsphere\r\n\r\nmesh (.dae, .stl)\r\n\r\n6. Collision Geometry\r\nSimplified version of robot body for physics simulation.\r\n\r\nCollision shapes MUST be simple to avoid instability.\r\n\r\n7. Inertial Properties\r\nEvery link must define:\r\n\r\nmass\r\n\r\ncenter of mass\r\n\r\ninertia matrix\r\n\r\nExample:\r\n\r\nxml\r\nCopy code\r\n<inertial>\r\n  <mass value=\"2.0\"/>\r\n  <origin xyz=\"0 0 0\"/>\r\n  <inertia ixx=\"0.01\" iyy=\"0.01\" izz=\"0.01\"/>\r\n</inertial>\r\n8. Understanding Inertia Matrices\r\nThe inertia tensor controls rotational stability.\r\n\r\nIncorrect values cause:\r\n\r\nunrealistic rotation\r\n\r\ntumbling\r\n\r\ninstability\r\n\r\nwobbling\r\n\r\n9. Joints — Connecting the Links\r\nJoints define:\r\n\r\nmovement\r\n\r\nrotation\r\n\r\nsliding\r\n\r\nlimits\r\n\r\nstiffness (effort)\r\n\r\nExample:\r\n\r\nxml\r\nCopy code\r\n<joint name=\"base_to_arm\" type=\"revolute\">\r\n  <parent link=\"base_link\"/>\r\n  <child link=\"arm_link\"/>\r\n  <axis xyz=\"0 0 1\"/>\r\n</joint>\r\n10. Types of Joints\r\nfixed\r\n\r\nrevolute\r\n\r\ncontinuous\r\n\r\nprismatic\r\n\r\nplanar\r\n\r\nfloating\r\n\r\nReal humanoids mostly use:\r\nrevolute, continuous, fixed\r\n\r\n11. Joint Limits\r\nDefine safe values:\r\n\r\nlower\r\n\r\nupper\r\n\r\nvelocity\r\n\r\neffort\r\n\r\n12. Revolute Joint Anatomy\r\nExample with limits:\r\n\r\nlua\r\nCopy code\r\nlower: -1.57 rad\r\nupper: +1.57 rad\r\nvelocity: 2 rad/s\r\neffort: 10 Nm\r\n13. Kinematic Chains\r\nA robot is a chain of:\r\n\r\nnginx\r\nCopy code\r\nparent_link → joint → child_link\r\nExample humanoid leg:\r\n\r\nnginx\r\nCopy code\r\nhip_yaw\r\nhip_roll\r\nhip_pitch\r\nknee_pitch\r\nankle_pitch\r\nankle_roll\r\n14. Forward Kinematics (Concept)\r\nURDF allows FK engines to compute:\r\n\r\nperl\r\nCopy code\r\ngiven joint angles → compute link positions\r\nUsed by:\r\n\r\nGazebo\r\n\r\nRViz\r\n\r\nMoveIt\r\n\r\nBalancing algorithms\r\n\r\n15. Coordinate Frames in URDF\r\nEvery joint and link has a frame:\r\n\r\nXYZ translation\r\n\r\nRPY rotation\r\n\r\nOrigins define how models fit together.\r\n\r\n16. Sensors in URDF\r\nURDF does NOT simulate sensors.\r\nGazebo plugins attach sensors to links.\r\n\r\n17. Adding a Camera Sensor\r\nxml\r\nCopy code\r\n<gazebo reference=\"camera_link\">\r\n  <sensor type=\"camera\" name=\"cam\">\r\n    <update_rate>30</update_rate>\r\n  </sensor>\r\n</gazebo>\r\n18. LiDAR Sensor Attachment\r\nxml\r\nCopy code\r\n<gazebo reference=\"lidar_link\">\r\n  <sensor type=\"ray\" name=\"lidar_sensor\"/>\r\n</gazebo>\r\n19. IMU Sensor Attachment\r\nxml\r\nCopy code\r\n<gazebo reference=\"imu_link\">\r\n  <sensor type=\"imu\" name=\"imu_sensor\"/>\r\n</gazebo>\r\n20. Transmission Tags\r\nUsed for controllers:\r\n\r\neffort controllers\r\n\r\nvelocity controllers\r\n\r\nposition controllers\r\n\r\nExample:\r\n\r\nxml\r\nCopy code\r\n<transmission name=\"arm_transmission\">\r\n  <type>transmission_interface/SimpleTransmission</type>\r\n</transmission>\r\n21. Material Definitions\r\nColors and materials:\r\n\r\nCopy code\r\nred, blue, metal, plastic, glass\r\nCan be used for robots in RViz.\r\n\r\n22. Mesh Models\r\nRobots often use .dae or .stl meshes.\r\n\r\nUsed for:\r\n\r\nhumanoid limbs\r\n\r\nrobot heads\r\n\r\nmechanical parts\r\n\r\n23. Example: Full Mini URDF Robot\r\nxml\r\nCopy code\r\n<robot name=\"simple_bot\">\r\n\r\n  <link name=\"base_link\"/>\r\n  <link name=\"arm_link\"/>\r\n\r\n  <joint name=\"base_to_arm\" type=\"revolute\">\r\n    <parent link=\"base_link\"/>\r\n    <child link=\"arm_link\"/>\r\n  </joint>\r\n\r\n</robot>\r\n24. URDF vs SDF\r\nURDF:\r\n\r\nsimple\r\n\r\nclean\r\n\r\neasier\r\n\r\nused by ROS\r\n\r\nSDF:\r\n\r\nmore powerful\r\n\r\nused for complex Gazebo models\r\n\r\n25. Debugging URDF\r\nTools:\r\n\r\ncheck_urdf\r\n\r\nurdf_to_graphiz\r\n\r\nRViz\r\n\r\nGazebo logs\r\n\r\n26. Common URDF Mistakes\r\nMissing inertia\r\n\r\nWrong axis definition\r\n\r\nCollision too detailed\r\n\r\nIncorrect joint origin\r\n\r\nMass = 0\r\n\r\nNo root link\r\n\r\n27. Humanoid Modeling Challenges\r\nHumanoids require:\r\n\r\naccurate joint axes\r\n\r\nrealistic inertia\r\n\r\nbalanced center of mass\r\n\r\nmultiple parallel kinematic chains\r\n\r\nankle & hip torque modeling\r\n\r\n28. Why URDF Matters for Real Robots\r\nMotion planning, simulation, balancing, and physics engines all depend on a correct URDF.\r\n\r\nA humanoid without accurate URDF → falls every time.\n"
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