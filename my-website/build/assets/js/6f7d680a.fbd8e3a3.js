"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[8777],{

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

/***/ 6912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"pageWrapper":"pageWrapper_wG8R","card":"card_Zpke","title":"title_Zcoq","label":"label_bh46","input":"input_DJvT","signinBtn":"signinBtn_UPMG","googleBtn":"googleBtn_bF6i","bottomText":"bottomText_VCye","error":"error_fm0u","success":"success_TZy9"});

/***/ }),

/***/ 9930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignInPage)
/* harmony export */ });
/* harmony import */ var D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2444);
/* harmony import */ var D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(467);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6540);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1656);
/* harmony import */ var _signin_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6912);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(880);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1910);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4848);
function SignInPage(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),email=_useState[0],setEmail=_useState[1];var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),password=_useState2[0],setPassword=_useState2[1];var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),error=_useState3[0],setError=_useState3[1];var _useState4=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),isClient=_useState4[0],setIsClient=_useState4[1];// ⭐ FIX: Only run Firebase on client side, not SSR
(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function(){setIsClient(true);},[]);if(!isClient){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:"Loading..."});}var handleSignIn=/*#__PURE__*/function(){var _ref=(0,D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().m(function _callee(e){var _t;return (0,D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().w(function(_context){while(1)switch(_context.p=_context.n){case 0:e.preventDefault();setError("");_context.p=1;_context.n=2;return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__/* .signInWithEmailAndPassword */ .x9)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .j2,email,password);case 2:window.location.href="/";_context.n=4;break;case 3:_context.p=3;_t=_context.v;setError("Wrong email or password");case 4:return _context.a(2);}},_callee,null,[[1,3]]);}));return function handleSignIn(_x){return _ref.apply(this,arguments);};}();var googleLogin=/*#__PURE__*/function(){var _ref2=(0,D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().m(function _callee2(){var _t2;return (0,D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().w(function(_context2){while(1)switch(_context2.p=_context2.n){case 0:_context2.p=0;_context2.n=1;return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__/* .signInWithPopup */ .df)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .j2,_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__/* .googleProvider */ .hJ);case 1:window.location.href="/";_context2.n=3;break;case 2:_context2.p=2;_t2=_context2.v;setError("Google login failed");case 3:return _context2.a(2);}},_callee2,null,[[0,2]]);}));return function googleLogin(){return _ref2.apply(this,arguments);};}();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.pageWrapper,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.card,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.title,children:"Welcome MJ Robotic Academy"}),error&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.error,children:error}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.form,onSubmit:handleSignIn,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.label,children:"Email"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{type:"email",required:true,className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.input,onChange:function onChange(e){return setEmail(e.target.value);}}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.label,children:"Password"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{type:"password",required:true,className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.input,onChange:function onChange(e){return setPassword(e.target.value);}}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{type:"submit",className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.signinBtn,children:"SIGN IN"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{type:"button",className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.googleBtn,onClick:googleLogin,children:"Sign in with Google"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.bottomText,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"/forgot",children:"Forgot Password?"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.bottomText,children:["Don't have an account? ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"/signup",children:"Sign Up"})]})]})})});}

/***/ })

}]);