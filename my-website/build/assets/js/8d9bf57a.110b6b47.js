"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[8353],{

/***/ 1910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hJ: () => (/* binding */ googleProvider),
/* harmony export */   j2: () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4913);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(880);
// src/firebaseConfig.ts
// Your Firebase config
var firebaseConfig={apiKey:"AIzaSyDmCkyhFxs2MeDv0inkCLFDqOjUnfpi-dY",authDomain:"mahnoor-df039.firebaseapp.com",projectId:"mahnoor-df039",storageBucket:"mahnoor-df039.firebasestorage.app",messagingSenderId:"506450330892",appId:"1:506450330892:web:4149f1317320464460f529",measurementId:"G-2TXJMJ5Q59"};// Prevent double initialization (important for Docusaurus SSR)
var app=!(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .getApps */ .Dk)().length?(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .Wp)(firebaseConfig):(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .getApps */ .Dk)()[0];// Firebase Auth instance
var auth=(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .getAuth */ .xI)(app);// ⭐ ADD GOOGLE PROVIDER HERE ⭐
var googleProvider=new firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .GoogleAuthProvider */ .HF();/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (app)));

/***/ }),

/***/ 3246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignUpPage)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regenerator.js + 1 modules
var regenerator = __webpack_require__(2444);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 72 modules
var Layout = __webpack_require__(1656);
;// ./src/pages/signup.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const signup_module = ({"pageWrapper":"pageWrapper_X6Ay","card":"card_lNRT","title":"title_VQC5","label":"label_C2Ew","input":"input_dRK5","signupBtn":"signupBtn_xbq_","googleBtn":"googleBtn_LaJk","error":"error__Vjw","bottomText":"bottomText_hhjV"});
// EXTERNAL MODULE: ../node_modules/firebase/auth/dist/esm/index.esm.js + 2 modules
var index_esm = __webpack_require__(880);
// EXTERNAL MODULE: ./src/firebaseConfig.ts
var firebaseConfig = __webpack_require__(1910);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/pages/signup.tsx
// import React, { useState } from "react";
// import Layout from "@theme/Layout";
// import styles from "./signup.module.css";
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "../firebaseConfig";
// export default function SignUpPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       window.location.href = "/";
//     } catch (err: any) {
//       if (err.code === "auth/email-already-in-use") {
//         setError("This email is already registered");
//       } else if (err.code === "auth/weak-password") {
//         setError("Password must be at least 6 characters");
//       } else {
//         setError("Signup failed. Please try again.");
//       }
//     }
//   };
//   const googleSignUp = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       window.location.href = "/";
//     } catch (err) {
//       setError("Google signup failed. Try again.");
//     }
//   };
//   return (
//     <Layout>
//       <div className={styles.pageWrapper}>
//         <div className={styles.card}>
//           <h1 className={styles.title}>Create Account</h1>
//           {error && <p className={styles.error}>{error}</p>}
//           <form className={styles.form} onSubmit={handleSignUp}>
//             <label className={styles.label}>Email</label>
//             <input
//               type="email"
//               required
//               className={styles.input}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <label className={styles.label}>Password</label>
//             <input
//               type="password"
//               required
//               className={styles.input}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <label className={styles.label}>Confirm Password</label>
//             <input
//               type="password"
//               required
//               className={styles.input}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <button type="submit" className={styles.signupBtn}>
//               SIGN UP
//             </button>
//             <button
//               type="button"
//               className={styles.googleBtn}
//               onClick={googleSignUp}
//             >
//               Sign up with Google
//             </button>
//           </form>
//           <p className={styles.bottomText}>
//             Already have an account? <a href="/signin">Sign In</a>
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// }
function SignUpPage(){var _useState=(0,react.useState)(""),email=_useState[0],setEmail=_useState[1];var _useState2=(0,react.useState)(""),password=_useState2[0],setPassword=_useState2[1];var _useState3=(0,react.useState)(""),confirmPassword=_useState3[0],setConfirmPassword=_useState3[1];var _useState4=(0,react.useState)(""),error=_useState4[0],setError=_useState4[1];// ⭐ SSR FIX for Firebase
var _useState5=(0,react.useState)(false),isClient=_useState5[0],setIsClient=_useState5[1];(0,react.useEffect)(function(){setIsClient(true);},[]);if(!isClient){return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{children:"Loading..."});}var handleSignUp=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee(e){var _t;return (0,regenerator/* default */.A)().w(function(_context){while(1)switch(_context.p=_context.n){case 0:e.preventDefault();setError("");if(!(password!==confirmPassword)){_context.n=1;break;}setError("Passwords do not match");return _context.a(2);case 1:_context.p=1;_context.n=2;return (0,index_esm/* createUserWithEmailAndPassword */.eJ)(firebaseConfig/* auth */.j2,email,password);case 2:window.location.href="/";_context.n=4;break;case 3:_context.p=3;_t=_context.v;if(_t.code==="auth/email-already-in-use"){setError("This email is already registered");}else if(_t.code==="auth/weak-password"){setError("Password must be at least 6 characters");}else{setError("Signup failed. Please try again.");}case 4:return _context.a(2);}},_callee,null,[[1,3]]);}));return function handleSignUp(_x){return _ref.apply(this,arguments);};}();var googleSignUp=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regenerator/* default */.A)().m(function _callee2(){var _t2;return (0,regenerator/* default */.A)().w(function(_context2){while(1)switch(_context2.p=_context2.n){case 0:_context2.p=0;_context2.n=1;return (0,index_esm/* signInWithPopup */.df)(firebaseConfig/* auth */.j2,firebaseConfig/* googleProvider */.hJ);case 1:window.location.href="/";_context2.n=3;break;case 2:_context2.p=2;_t2=_context2.v;setError("Google signup failed. Try again.");case 3:return _context2.a(2);}},_callee2,null,[[0,2]]);}));return function googleSignUp(){return _ref2.apply(this,arguments);};}();return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:signup_module.pageWrapper,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:signup_module.card,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:signup_module.title,children:"Create Account"}),error&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:signup_module.error,children:error}),/*#__PURE__*/(0,jsx_runtime.jsxs)("form",{className:signup_module.form,onSubmit:handleSignUp,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{className:signup_module.label,children:"Email"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"email",required:true,className:signup_module.input,onChange:function onChange(e){return setEmail(e.target.value);}}),/*#__PURE__*/(0,jsx_runtime.jsx)("label",{className:signup_module.label,children:"Password"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"password",required:true,className:signup_module.input,onChange:function onChange(e){return setPassword(e.target.value);}}),/*#__PURE__*/(0,jsx_runtime.jsx)("label",{className:signup_module.label,children:"Confirm Password"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"password",required:true,className:signup_module.input,onChange:function onChange(e){return setConfirmPassword(e.target.value);}}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"submit",className:signup_module.signupBtn,children:"SIGN UP"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{type:"button",className:signup_module.googleBtn,onClick:googleSignUp,children:"Sign up with Google"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:signup_module.bottomText,children:["Already have an account? ",/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"/signin",children:"Sign In"})]})]})})});}

/***/ })

}]);