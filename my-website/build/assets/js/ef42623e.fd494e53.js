"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[2495],{

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

/***/ 3894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPassword)
/* harmony export */ });
/* harmony import */ var D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2444);
/* harmony import */ var D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(467);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6540);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1656);
/* harmony import */ var _signin_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6912);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(880);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1910);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4848);
function ForgotPassword(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),email=_useState[0],setEmail=_useState[1];var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),message=_useState2[0],setMessage=_useState2[1];var handleReset=/*#__PURE__*/function(){var _ref=(0,D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().m(function _callee(e){var _t;return (0,D_Docusaurus_my_website_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().w(function(_context){while(1)switch(_context.p=_context.n){case 0:e.preventDefault();_context.p=1;_context.n=2;return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__/* .sendPasswordResetEmail */ .J1)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .j2,email);case 2:setMessage("Reset link sent to your email!");_context.n=4;break;case 3:_context.p=3;_t=_context.v;setMessage("Email not found!");case 4:return _context.a(2);}},_callee,null,[[1,3]]);}));return function handleReset(_x){return _ref.apply(this,arguments);};}();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.pageWrapper,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.card,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.title,children:"Reset Password"}),message&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.success,children:message}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.form,onSubmit:handleReset,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.label,children:"Enter your email"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{type:"email",className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.input,onChange:function onChange(e){return setEmail(e.target.value);}}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{type:"submit",className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.signinBtn,children:"Send Reset Link"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p",{className:_signin_module_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.bottomText,children:["Back to ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a",{href:"/signin",children:"Sign In"})]})]})})});}

/***/ }),

/***/ 6912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"pageWrapper":"pageWrapper_wG8R","card":"card_Zpke","title":"title_Zcoq","label":"label_bh46","input":"input_DJvT","signinBtn":"signinBtn_UPMG","googleBtn":"googleBtn_bF6i","bottomText":"bottomText_VCye","error":"error_fm0u","success":"success_TZy9"});

/***/ })

}]);