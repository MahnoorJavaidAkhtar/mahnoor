(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[7479],{

/***/ 4240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MDXContent)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8587);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2303);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(5293);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
;// ./node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */function usePrismTheme(){var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.p)(),prism=_useThemeConfig.prism;var _useColorMode=(0,contexts_colorMode/* useColorMode */.G)(),colorMode=_useColorMode.colorMode;var lightModeTheme=prism.theme;var darkModeTheme=prism.darkTheme||lightModeTheme;var prismTheme=colorMode==='dark'?darkModeTheme:lightModeTheme;return prismTheme;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapRegExp.js + 2 modules
var wrapRegExp = __webpack_require__(8634);
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(8426);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js + 5 modules
var reactUtils = __webpack_require__(3807);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var codeBlockTitleRegex=/*#__PURE__*/(0,wrapRegExp/* default */.A)(/title=(["'])(.*?)\1/,{quote:1,title:2});var metastringLinesRangeRegex=/*#__PURE__*/(0,wrapRegExp/* default */.A)(/\{([\d,-]+)\}/,{range:1});// Supported types of highlight comments
var popularCommentPatterns={js:{start:'\\/\\/',end:''},jsBlock:{start:'\\/\\*',end:'\\*\\/'},jsx:{start:'\\{\\s*\\/\\*',end:'\\*\\/\\s*\\}'},bash:{start:'#',end:''},html:{start:'<!--',end:'-->'}};var commentPatterns=Object.assign({},popularCommentPatterns,{// shallow copy is sufficient
// minor comment styles
lua:{start:'--',end:''},wasm:{start:'\\;\\;',end:''},tex:{start:'%',end:''},vb:{start:"['‘’]",end:''},vbnet:{start:"(?:_\\s*)?['‘’]",end:''},// Visual Studio 2019 or later
rem:{start:'[Rr][Ee][Mm]\\b',end:''},f90:{start:'!',end:''},// Free format only
ml:{start:'\\(\\*',end:'\\*\\)'},cobol:{start:'\\*>',end:''}// Free format only
});var popularCommentTypes=Object.keys(popularCommentPatterns);function getCommentPattern(languages,magicCommentDirectives){// To be more reliable, the opening and closing comment must match
var commentPattern=languages.map(function(lang){var _commentPatterns$lang=commentPatterns[lang],start=_commentPatterns$lang.start,end=_commentPatterns$lang.end;return"(?:"+start+"\\s*("+magicCommentDirectives.flatMap(function(d){var _d$block,_d$block2;return[d.line,(_d$block=d.block)==null?void 0:_d$block.start,(_d$block2=d.block)==null?void 0:_d$block2.end].filter(Boolean);}).join('|')+")\\s*"+end+")";}).join('|');// White space is allowed, but otherwise it should be on it's own line
return new RegExp("^\\s*(?:"+commentPattern+")\\s*$");}/**
 * Select comment styles based on language
 */function getAllMagicCommentDirectiveStyles(lang,magicCommentDirectives){switch(lang){case'js':case'javascript':case'ts':case'typescript':return getCommentPattern(['js','jsBlock'],magicCommentDirectives);case'jsx':case'tsx':return getCommentPattern(['js','jsBlock','jsx'],magicCommentDirectives);case'html':return getCommentPattern(['js','jsBlock','html'],magicCommentDirectives);case'python':case'py':case'bash':return getCommentPattern(['bash'],magicCommentDirectives);case'markdown':case'md':// Text uses HTML, front matter uses bash
return getCommentPattern(['html','jsx','bash'],magicCommentDirectives);case'tex':case'latex':case'matlab':return getCommentPattern(['tex'],magicCommentDirectives);case'lua':case'haskell':return getCommentPattern(['lua'],magicCommentDirectives);case'sql':return getCommentPattern(['lua','jsBlock'],magicCommentDirectives);case'wasm':return getCommentPattern(['wasm'],magicCommentDirectives);case'vb':case'vba':case'visual-basic':return getCommentPattern(['vb','rem'],magicCommentDirectives);case'vbnet':return getCommentPattern(['vbnet','rem'],magicCommentDirectives);case'batch':return getCommentPattern(['rem'],magicCommentDirectives);case'basic':// https://github.com/PrismJS/prism/blob/master/components/prism-basic.js#L3
return getCommentPattern(['rem','f90'],magicCommentDirectives);case'fsharp':return getCommentPattern(['js','ml'],magicCommentDirectives);case'ocaml':case'sml':return getCommentPattern(['ml'],magicCommentDirectives);case'fortran':return getCommentPattern(['f90'],magicCommentDirectives);case'cobol':return getCommentPattern(['cobol'],magicCommentDirectives);default:// All popular comment types
return getCommentPattern(popularCommentTypes,magicCommentDirectives);}}function parseCodeBlockTitle(metastring){var _metastring$match$gro,_metastring$match;return(_metastring$match$gro=metastring==null||(_metastring$match=metastring.match(codeBlockTitleRegex))==null?void 0:_metastring$match.groups.title)!=null?_metastring$match$gro:'';}function getMetaLineNumbersStart(metastring){var showLineNumbersMeta=metastring==null?void 0:metastring.split(' ').find(function(str){return str.startsWith('showLineNumbers');});if(showLineNumbersMeta){if(showLineNumbersMeta.startsWith('showLineNumbers=')){var value=showLineNumbersMeta.replace('showLineNumbers=','');return parseInt(value,10);}return 1;}return undefined;}function getLineNumbersStart(_ref){var showLineNumbers=_ref.showLineNumbers,metastring=_ref.metastring;var defaultStart=1;if(typeof showLineNumbers==='boolean'){return showLineNumbers?defaultStart:undefined;}if(typeof showLineNumbers==='number'){return showLineNumbers;}return getMetaLineNumbersStart(metastring);}// TODO Docusaurus v4: remove, only kept for internal retro-compatibility
//  See https://github.com/facebook/docusaurus/pull/11153
function containsLineNumbers(metastring){return Boolean(metastring==null?void 0:metastring.includes('showLineNumbers'));}function parseCodeLinesFromMetastring(code,_ref2){var metastring=_ref2.metastring,magicComments=_ref2.magicComments;// Highlighted lines specified in props: don't parse the content
if(metastring&&metastringLinesRangeRegex.test(metastring)){var linesRange=metastring.match(metastringLinesRangeRegex).groups.range;if(magicComments.length===0){throw new Error("A highlight range has been given in code block's metastring (``` "+metastring+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");}var metastringRangeClassName=magicComments[0].className;var lines=parse_numeric_range_default()(linesRange).filter(function(n){return n>0;}).map(function(n){return[n-1,[metastringRangeClassName]];});return{lineClassNames:Object.fromEntries(lines),code:code};}return null;}function parseCodeLinesFromContent(code,params){var language=params.language,magicComments=params.magicComments;if(language===undefined){return{lineClassNames:{},code:code};}var directiveRegex=getAllMagicCommentDirectiveStyles(language,magicComments);// Go through line by line
var lines=code.split(/\r?\n/);var blocks=Object.fromEntries(magicComments.map(function(d){return[d.className,{start:0,range:''}];}));var lineToClassName=Object.fromEntries(magicComments.filter(function(d){return d.line;}).map(function(_ref3){var className=_ref3.className,line=_ref3.line;return[line,className];}));var blockStartToClassName=Object.fromEntries(magicComments.filter(function(d){return d.block;}).map(function(_ref4){var className=_ref4.className,block=_ref4.block;return[block.start,className];}));var blockEndToClassName=Object.fromEntries(magicComments.filter(function(d){return d.block;}).map(function(_ref5){var className=_ref5.className,block=_ref5.block;return[block.end,className];}));for(var lineNumber=0;lineNumber<lines.length;){var line=lines[lineNumber];var match=line.match(directiveRegex);if(!match){// Lines without directives are unchanged
lineNumber+=1;continue;}var directive=match.slice(1).find(function(item){return item!==undefined;});if(lineToClassName[directive]){blocks[lineToClassName[directive]].range+=lineNumber+",";}else if(blockStartToClassName[directive]){blocks[blockStartToClassName[directive]].start=lineNumber;}else if(blockEndToClassName[directive]){blocks[blockEndToClassName[directive]].range+=blocks[blockEndToClassName[directive]].start+"-"+(lineNumber-1)+",";}lines.splice(lineNumber,1);}var lineClassNames={};Object.entries(blocks).forEach(function(_ref6){var className=_ref6[0],range=_ref6[1].range;parse_numeric_range_default()(range).forEach(function(l){var _lineClassNames$l;(_lineClassNames$l=lineClassNames[l])!=null?_lineClassNames$l:lineClassNames[l]=[];lineClassNames[l].push(className);});});return{code:lines.join('\n'),lineClassNames:lineClassNames};}/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 */function parseLines(code,params){var _parseCodeLinesFromMe;// Historical behavior: we remove last line break
var newCode=code.replace(/\r?\n$/,'');// Historical behavior: we try one strategy after the other
// we don't support mixing metastring ranges + magic comments
return(_parseCodeLinesFromMe=parseCodeLinesFromMetastring(newCode,Object.assign({},params)))!=null?_parseCodeLinesFromMe:parseCodeLinesFromContent(newCode,Object.assign({},params));}/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */function parseClassNameLanguage(className){if(!className){return undefined;}var languageClassName=className.split(' ').find(function(str){return str.startsWith('language-');});return languageClassName==null?void 0:languageClassName.replace(/language-/,'');}// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language){return language==null?void 0:language.toLowerCase();}function getLanguage(params){var _normalizeLanguage,_ref7,_params$language;return(_normalizeLanguage=normalizeLanguage((_ref7=(_params$language=params.language)!=null?_params$language:parseClassNameLanguage(params.className))!=null?_ref7:params.defaultLanguage))!=null?_normalizeLanguage:'text';// There's always a language, required by Prism;
}/**
 * This ensures that we always have the code block language as className
 * For MDX code blocks this is provided automatically by MDX
 * For JSX code blocks, the language gets added by this function
 * This ensures both cases lead to a consistent HTML output
 */function ensureLanguageClassName(_ref8){var className=_ref8.className,language=_ref8.language;return (0,clsx/* default */.A)(className,language&&!(className!=null&&className.includes("language-"+language))&&"language-"+language);}function createCodeBlockMetadata(params){var language=getLanguage({language:params.language,defaultLanguage:params.defaultLanguage,className:params.className});var _parseLines=parseLines(params.code,{metastring:params.metastring,magicComments:params.magicComments,language:language}),lineClassNames=_parseLines.lineClassNames,code=_parseLines.code;var className=ensureLanguageClassName({className:params.className,language:language});var title=parseCodeBlockTitle(params.metastring)||params.title;var lineNumbersStart=getLineNumbersStart({showLineNumbers:params.showLineNumbers,metastring:params.metastring});return{codeInput:params.code,code:code,className:className,language:language,title:title,lineNumbersStart:lineNumbersStart,lineClassNames:lineClassNames};}function getPrismCssVariables(prismTheme){var mapping={color:'--prism-color',backgroundColor:'--prism-background-color'};var properties={};Object.entries(prismTheme.plain).forEach(function(_ref9){var key=_ref9[0],value=_ref9[1];var varName=mapping[key];if(varName&&typeof value==='string'){properties[varName]=value;}});return properties;}var CodeBlockContext=/*#__PURE__*/(0,react.createContext)(null);function CodeBlockContextProvider(_ref0){var metadata=_ref0.metadata,wordWrap=_ref0.wordWrap,children=_ref0.children;// Should we optimize this in 2 contexts?
// Unlike metadata, wordWrap is stateful and likely to trigger re-renders
var value=(0,react.useMemo)(function(){return{metadata:metadata,wordWrap:wordWrap};},[metadata,wordWrap]);return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContext.Provider,{value:value,children:children});}function useCodeBlockContext(){var value=(0,react.useContext)(CodeBlockContext);if(value===null){throw new reactUtils/* ReactContextError */.dV('CodeBlockContextProvider');}return value;}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"codeBlockContainer":"codeBlockContainer_Ckt0"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/index.js
var _excluded=["as"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockContainer(_ref){var As=_ref.as,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);var prismTheme=usePrismTheme();var prismCssVariables=getPrismCssVariables(prismTheme);return/*#__PURE__*/(0,jsx_runtime.jsx)(As// Polymorphic components are hard to type, without `oneOf` generics
,Object.assign({},props,{style:prismCssVariables,className:(0,clsx/* default */.A)(props.className,styles_module.codeBlockContainer,ThemeClassNames/* ThemeClassNames */.G.common.codeBlock)}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Content_styles_module = ({"codeBlock":"codeBlock_bY9V","codeBlockStandalone":"codeBlockStandalone_MEMb","codeBlockLines":"codeBlockLines_e6Vv","codeBlockLinesWithNumbering":"codeBlockLinesWithNumbering_o6Pm"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO Docusaurus v4: move this component at the root?
// This component only handles a rare edge-case: <pre><MyComp/></pre> in MDX
// <pre> tags in markdown map to CodeBlocks. They may contain JSX children.
// When children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX(_ref){var children=_ref.children,className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContainer,{as:"pre",tabIndex:0,className:(0,clsx/* default */.A)(Content_styles_module.codeBlockStandalone,'thin-scrollbar',className),children:/*#__PURE__*/(0,jsx_runtime.jsx)("code",{className:Content_styles_module.codeBlockLines,children:children})});}
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useMutationObserver.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DefaultOptions={attributes:true,characterData:true,childList:true,subtree:true};function useMutationObserver(target,callback,options){if(options===void 0){options=DefaultOptions;}var stableCallback=(0,reactUtils/* useEvent */._q)(callback);// MutationObserver options are not nested much
// so this should be to memo options in 99%
// TODO handle options.attributeFilter array
var stableOptions=(0,reactUtils/* useShallowMemoObject */.Be)(options);(0,react.useEffect)(function(){var observer=new MutationObserver(stableCallback);if(target){observer.observe(target,stableOptions);}return function(){return observer.disconnect();};},[target,stableCallback,stableOptions]);}
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useCodeWordWrap.js
// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef,callback){var _useState=(0,react.useState)(),hiddenTabElement=_useState[0],setHiddenTabElement=_useState[1];var updateHiddenTabElement=(0,react.useCallback)(function(){var _codeBlockRef$current;// No need to observe non-hidden tabs
// + we want to force a re-render when a tab becomes visible
setHiddenTabElement((_codeBlockRef$current=codeBlockRef.current)==null?void 0:_codeBlockRef$current.closest('[role=tabpanel][hidden]'));},[codeBlockRef,setHiddenTabElement]);(0,react.useEffect)(function(){updateHiddenTabElement();},[updateHiddenTabElement]);useMutationObserver(hiddenTabElement,function(mutations){mutations.forEach(function(mutation){if(mutation.type==='attributes'&&mutation.attributeName==='hidden'){callback();updateHiddenTabElement();}});},{attributes:true,characterData:false,childList:false,subtree:false});}function useCodeWordWrap(){var _useState2=(0,react.useState)(false),isEnabled=_useState2[0],setIsEnabled=_useState2[1];var _useState3=(0,react.useState)(false),isCodeScrollable=_useState3[0],setIsCodeScrollable=_useState3[1];var codeBlockRef=(0,react.useRef)(null);var toggle=(0,react.useCallback)(function(){var codeElement=codeBlockRef.current.querySelector('code');if(isEnabled){codeElement.removeAttribute('style');}else{codeElement.style.whiteSpace='pre-wrap';// When code wrap is enabled, we want to avoid a scrollbar in any case
// Ensure that very very long words/strings/tokens still wrap
codeElement.style.overflowWrap='anywhere';}setIsEnabled(function(value){return!value;});},[codeBlockRef,isEnabled]);var updateCodeIsScrollable=(0,react.useCallback)(function(){var _codeBlockRef$current2=codeBlockRef.current,scrollWidth=_codeBlockRef$current2.scrollWidth,clientWidth=_codeBlockRef$current2.clientWidth;var isScrollable=scrollWidth>clientWidth||codeBlockRef.current.querySelector('code').hasAttribute('style');setIsCodeScrollable(isScrollable);},[codeBlockRef]);useTabBecameVisibleCallback(codeBlockRef,updateCodeIsScrollable);(0,react.useEffect)(function(){updateCodeIsScrollable();},[isEnabled,updateCodeIsScrollable]);(0,react.useEffect)(function(){window.addEventListener('resize',updateCodeIsScrollable,{passive:true});return function(){window.removeEventListener('resize',updateCodeIsScrollable);};},[updateCodeIsScrollable]);return{codeBlockRef:codeBlockRef,isEnabled:isEnabled,isCodeScrollable:isCodeScrollable,toggle:toggle};}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Just a pass-through component that users can swizzle and customize
function CodeBlockTitle(_ref){var children=_ref.children;return children;}
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.mjs
var dist = __webpack_require__(1765);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/Token/index.js
var Token_excluded=["line","token"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Pass-through components that users can swizzle and customize
function CodeBlockLineToken(_ref){var line=_ref.line,token=_ref.token,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Token_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("span",Object.assign({},props));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Line_styles_module = ({"codeLine":"codeLine_lJS_","codeLineNumber":"codeLineNumber_Tfdd","codeLineContent":"codeLineContent_feaV"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Replaces '\n' by ''
// Historical code, not sure why we even need this :/
function fixLineBreak(line){var singleLineBreakToken=line.length===1&&line[0].content==='\n'?line[0]:undefined;if(singleLineBreakToken){return[Object.assign({},singleLineBreakToken,{content:''})];}return line;}function CodeBlockLine(_ref){var lineProp=_ref.line,classNames=_ref.classNames,showLineNumbers=_ref.showLineNumbers,getLineProps=_ref.getLineProps,getTokenProps=_ref.getTokenProps;var line=fixLineBreak(lineProp);var lineProps=getLineProps({line:line,className:(0,clsx/* default */.A)(classNames,showLineNumbers&&Line_styles_module.codeLine)});var lineTokens=line.map(function(token,key){var tokenProps=getTokenProps({token:token});return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockLineToken,Object.assign({},tokenProps,{line:line,token:token,children:tokenProps.children}),key);});return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",Object.assign({},lineProps,{children:[showLineNumbers?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Line_styles_module.codeLineNumber}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Line_styles_module.codeLineContent,children:lineTokens})]}):lineTokens,/*#__PURE__*/(0,jsx_runtime.jsx)("br",{})]}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO Docusaurus v4: remove useless forwardRef
var Pre=/*#__PURE__*/react.forwardRef(function(props,ref){return/*#__PURE__*/(0,jsx_runtime.jsx)("pre",Object.assign({ref:ref/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */,tabIndex:0},props,{className:(0,clsx/* default */.A)(props.className,Content_styles_module.codeBlock,'thin-scrollbar')}));});function Code(props){var _useCodeBlockContext=useCodeBlockContext(),metadata=_useCodeBlockContext.metadata;return/*#__PURE__*/(0,jsx_runtime.jsx)("code",Object.assign({},props,{className:(0,clsx/* default */.A)(props.className,Content_styles_module.codeBlockLines,metadata.lineNumbersStart!==undefined&&Content_styles_module.codeBlockLinesWithNumbering),style:Object.assign({},props.style,{counterReset:metadata.lineNumbersStart===undefined?undefined:"line-count "+(metadata.lineNumbersStart-1)})}));}function CodeBlockContent(_ref){var classNameProp=_ref.className;var _useCodeBlockContext2=useCodeBlockContext(),metadata=_useCodeBlockContext2.metadata,wordWrap=_useCodeBlockContext2.wordWrap;var prismTheme=usePrismTheme();var code=metadata.code,language=metadata.language,lineNumbersStart=metadata.lineNumbersStart,lineClassNames=metadata.lineClassNames;return/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Highlight */.f4,{theme:prismTheme,code:code,language:language,children:function children(_ref2){var className=_ref2.className,style=_ref2.style,lines=_ref2.tokens,getLineProps=_ref2.getLineProps,getTokenProps=_ref2.getTokenProps;return/*#__PURE__*/(0,jsx_runtime.jsx)(Pre,{ref:wordWrap.codeBlockRef,className:(0,clsx/* default */.A)(classNameProp,className),style:style,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Code,{children:lines.map(function(line,i){return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockLine,{line:line,getLineProps:getLineProps,getTokenProps:getTokenProps,classNames:lineClassNames[i],showLineNumbers:lineNumbersStart!==undefined},i);})})});}});}
;// ./node_modules/@docusaurus/core/lib/client/exports/BrowserOnly.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
function BrowserOnly(_ref){var children=_ref.children,fallback=_ref.fallback;var isBrowser=(0,useIsBrowser/* default */.A)();if(isBrowser){if(typeof children!=='function'&&"production"==='development')// removed by dead control flow
{}return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children==null?void 0:children()});}return fallback!=null?fallback:null;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/Button/index.js
var Button_excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockButton(_ref){var className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Button_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("button",Object.assign({type:"button"},props,{className:(0,clsx/* default */.A)('clean-btn',className)}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Copy/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconCopy(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Success/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconSuccess(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/CopyButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CopyButton_styles_module = ({"copyButtonCopied":"copyButtonCopied_Vdqa","copyButtonIcons":"copyButtonIcons_IEyt","copyButtonIcon":"copyButtonIcon_TrPX","copyButtonSuccessIcon":"copyButtonSuccessIcon_cVMy"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/CopyButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function title(){return (0,Translate/* translate */.T)({id:'theme.CodeBlock.copy',message:'Copy',description:'The copy button label on code blocks'});}function ariaLabel(isCopied){return isCopied?(0,Translate/* translate */.T)({id:'theme.CodeBlock.copied',message:'Copied',description:'The copied button label on code blocks'}):(0,Translate/* translate */.T)({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'});}function useCopyButton(){var _useCodeBlockContext=useCodeBlockContext(),code=_useCodeBlockContext.metadata.code;var _useState=(0,react.useState)(false),isCopied=_useState[0],setIsCopied=_useState[1];var copyTimeout=(0,react.useRef)(undefined);var copyCode=(0,react.useCallback)(function(){navigator.clipboard.writeText(code).then(function(){setIsCopied(true);copyTimeout.current=window.setTimeout(function(){setIsCopied(false);},1000);});},[code]);(0,react.useEffect)(function(){return function(){return window.clearTimeout(copyTimeout.current);};},[]);return{copyCode:copyCode,isCopied:isCopied};}function CopyButton(_ref){var className=_ref.className;var _useCopyButton=useCopyButton(),copyCode=_useCopyButton.copyCode,isCopied=_useCopyButton.isCopied;return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockButton,{"aria-label":ariaLabel(isCopied),title:title(),className:(0,clsx/* default */.A)(className,CopyButton_styles_module.copyButton,isCopied&&CopyButton_styles_module.copyButtonCopied),onClick:copyCode,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:CopyButton_styles_module.copyButtonIcons,"aria-hidden":"true",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconCopy,{className:CopyButton_styles_module.copyButtonIcon}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconSuccess,{className:CopyButton_styles_module.copyButtonSuccessIcon})]})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/WordWrap/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconWordWrap(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/WordWrapButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const WordWrapButton_styles_module = ({"wordWrapButtonIcon":"wordWrapButtonIcon_b1P5","wordWrapButtonEnabled":"wordWrapButtonEnabled_uzNF"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/WordWrapButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function WordWrapButton(_ref){var className=_ref.className;var _useCodeBlockContext=useCodeBlockContext(),wordWrap=_useCodeBlockContext.wordWrap;var canShowButton=wordWrap.isEnabled||wordWrap.isCodeScrollable;if(!canShowButton){return false;}var title=(0,Translate/* translate */.T)({id:'theme.CodeBlock.wordWrapToggle',message:'Toggle word wrap',description:'The title attribute for toggle word wrapping button of code block lines'});return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockButton,{onClick:function onClick(){return wordWrap.toggle();},className:(0,clsx/* default */.A)(className,wordWrap.isEnabled&&WordWrapButton_styles_module.wordWrapButtonEnabled),"aria-label":title,title:title,children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconWordWrap,{className:WordWrapButton_styles_module.wordWrapButtonIcon,"aria-hidden":"true"})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Buttons_styles_module = ({"buttonGroup":"buttonGroup_M5ko"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Buttons/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Code block buttons are not server-rendered on purpose
// Adding them to the initial HTML is useless and expensive (due to JSX SVG)
// They are hidden by default and require React  to become interactive
function CodeBlockButtons(_ref){var className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)(BrowserOnly,{children:function children(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(className,Buttons_styles_module.buttonGroup),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(WordWrapButton,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(CopyButton,{})]});}});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_styles_module = ({"codeBlockContent":"codeBlockContent_QJqH","codeBlockTitle":"codeBlockTitle_OeMC","codeBlock":"codeBlock_a8dz"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockLayout(_ref){var className=_ref.className;var _useCodeBlockContext=useCodeBlockContext(),metadata=_useCodeBlockContext.metadata;return/*#__PURE__*/(0,jsx_runtime.jsxs)(CodeBlockContainer,{as:"div",className:(0,clsx/* default */.A)(className,metadata.className),children:[metadata.title&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Layout_styles_module.codeBlockTitle,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockTitle,{children:metadata.title})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:Layout_styles_module.codeBlockContent,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContent,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockButtons,{})]})]});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/String.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useCodeBlockMetadata(props){var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.p)(),prism=_useThemeConfig.prism;return createCodeBlockMetadata({code:props.children,className:props.className,metastring:props.metastring,magicComments:prism.magicComments,defaultLanguage:prism.defaultLanguage,language:props.language,title:props.title,showLineNumbers:props.showLineNumbers});}// TODO Docusaurus v4: move this component at the root?
function CodeBlockString(props){var metadata=useCodeBlockMetadata(props);var wordWrap=useCodeWordWrap();return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockContextProvider,{metadata:metadata,wordWrap:wordWrap,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockLayout,{})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js
var CodeBlock_excluded=["children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */function maybeStringifyChildren(children){if(react.Children.toArray(children).some(function(el){return/*#__PURE__*/(0,react.isValidElement)(el);})){return children;}// The children is now guaranteed to be one/more plain strings
return Array.isArray(children)?children.join(''):children;}function CodeBlock(_ref){var rawChildren=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,CodeBlock_excluded);// The Prism theme on SSR is always the default theme but the site theme can
// be in a different mode. React hydration doesn't update DOM styles that come
// from SSR. Hence force a re-render after mounting to apply the current
// relevant styles.
var isBrowser=(0,useIsBrowser/* default */.A)();var children=maybeStringifyChildren(rawChildren);var CodeBlockComp=typeof children==='string'?CodeBlockString:CodeBlockJSX;return/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlockComp,Object.assign({},props,{children:children}),String(isBrowser));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/CodeInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Simple component used to render inline code blocks
// its purpose is to be swizzled and customized
// MDX 1 used to have a inlineCode comp, see https://mdxjs.com/migrating/v2/
function CodeInline(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("code",Object.assign({},props));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Code.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function shouldBeInline(props){return(// empty code blocks have no props.children,
// see https://github.com/facebook/docusaurus/pull/9704
typeof props.children!=='undefined'&&react.Children.toArray(props.children).every(function(el){return typeof el==='string'&&!el.includes('\n');}));}function MDXCode(props){return shouldBeInline(props)?/*#__PURE__*/(0,jsx_runtime.jsx)(CodeInline,Object.assign({},props)):/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock,Object.assign({},props));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/anchorUtils.js + 1 modules
var anchorUtils = __webpack_require__(3535);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/A/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXA(props){// MDX Footnotes have ids such as <a id="user-content-fn-1-953011" ...>
var anchorTargetClassName=(0,anchorUtils/* useAnchorTargetClassName */.v)(props.id);return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,Object.assign({},props,{className:(0,clsx/* default */.A)(anchorTargetClassName,props.className)}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Pre.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPre(props){// With MDX 2, this element is only used for fenced code blocks
// It always receives a MDXComponents/Code as children
return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.children});}
;// ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBrokenLinks.js + 1 modules
var useBrokenLinks = __webpack_require__(3427);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(1422);
;// ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Details_styles_module = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
;// ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
var Details_excluded=["summary","children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */function Details(_ref){var summary=_ref.summary,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,Details_excluded);(0,useBrokenLinks/* default */.A)().collectAnchor(props.id);var isBrowser=(0,useIsBrowser/* default */.A)();var detailsRef=(0,react.useRef)(null);var _useCollapsible=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open}),collapsed=_useCollapsible.collapsed,setCollapsed=_useCollapsible.setCollapsed;// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
var _useState=(0,react.useState)(props.open),open=_useState[0],setOpen=_useState[1];var summaryElement=/*#__PURE__*/react.isValidElement(summary)?summary:/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:summary!=null?summary:'Details'});return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
(0,jsx_runtime.jsxs)("details",Object.assign({},props,{ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,clsx/* default */.A)(Details_styles_module.details,isBrowser&&Details_styles_module.isBrowser,props.className),onMouseDown:function onMouseDown(e){var target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:function onClick(e){e.stopPropagation();// For isolation of multiple nested details/summary
var target=e.target;var shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}},children:[summaryElement,/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,onCollapseTransitionEnd:function onCollapseTransitionEnd(newCollapsed){setCollapsed(newCollapsed);setOpen(!newCollapsed);},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Details_styles_module.collapsibleContent,children:children})})]})));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const theme_Details_styles_module = ({"details":"details_b_Ee"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
var InfimaClasses='alert alert--info';function Details_Details(_ref){var props=Object.assign({},(_objectDestructuringEmpty(_ref),_ref));return/*#__PURE__*/(0,jsx_runtime.jsx)(Details,Object.assign({},props,{className:(0,clsx/* default */.A)(InfimaClasses,theme_Details_styles_module.details,props.className)}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Details.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXDetails(props){var items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the
// Details theme component
var summary=items.find(function(item){return/*#__PURE__*/react.isValidElement(item)&&item.type==='summary';});var children=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.filter(function(item){return item!==summary;})});return/*#__PURE__*/(0,jsx_runtime.jsx)(Details_Details,Object.assign({},props,{summary:summary,children:children}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(1107);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Heading.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXHeading(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,Object.assign({},props));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Ul_styles_module = ({"containsTaskList":"containsTaskList_mC6p"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformUlClassName(className){// Fix https://github.com/facebook/docusaurus/issues/9098
if(typeof className==='undefined'){return undefined;}return (0,clsx/* default */.A)(className,// This class is set globally by GitHub/MDX. We keep the global class, and
// add another class to get a task list without the default ul styling
// See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
(className==null?void 0:className.includes('contains-task-list'))&&Ul_styles_module.containsTaskList);}function MDXUl(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",Object.assign({},props,{className:transformUlClassName(props.className)}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Li.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXLi(props){// MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
(0,useBrokenLinks/* default */.A)().collectAnchor(props.id);var anchorTargetClassName=(0,anchorUtils/* useAnchorTargetClassName */.v)(props.id);return/*#__PURE__*/(0,jsx_runtime.jsx)("li",Object.assign({className:(0,clsx/* default */.A)(anchorTargetClassName,props.className)},props));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Img_styles_module = ({"img":"img_ev3q"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function transformImgClassName(className){return (0,clsx/* default */.A)(className,Img_styles_module.img);}function MDXImg(props){return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/alt-text
(0,jsx_runtime.jsx)("img",Object.assign({decoding:"async",loading:"lazy"},props,{className:transformImgClassName(props.className)})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 15 modules
var Admonition = __webpack_require__(7293);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Noop.js
var Noop = __webpack_require__(418);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MDXComponents={Head:Head/* default */.A,details:MDXDetails,// For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
Details:MDXDetails,code:MDXCode,a:MDXA,pre:MDXPre,ul:MDXUl,li:MDXLi,img:MDXImg,h1:function h1(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h1"},props));},h2:function h2(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h2"},props));},h3:function h3(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h3"},props));},h4:function h4(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h4"},props));},h5:function h5(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h5"},props));},h6:function h6(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(MDXHeading,Object.assign({as:"h6"},props));},admonition:Admonition/* default */.A,mermaid:Noop/* default */.A};/* harmony default export */ const theme_MDXComponents = (MDXComponents);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXContent(_ref){var children=_ref.children;return/*#__PURE__*/(0,jsx_runtime.jsx)(lib/* MDXProvider */.x,{components:theme_MDXComponents,children:children});}

/***/ }),

/***/ 4336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ EditMetaRow)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8587);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"iconEdit":"iconEdit_Z9Sw"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/index.js
var _excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconEdit(_ref){var className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,clsx/* default */.A)(styles_module.iconEdit,className),"aria-hidden":"true"},restProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("g",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){var editUrl=_ref.editUrl;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{to:editUrl,className:ThemeClassNames/* ThemeClassNames */.G.common.editThisPage,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconEdit,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
var IntlUtils = __webpack_require__(6266);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LastUpdatedAtDate(_ref){var lastUpdatedAt=_ref.lastUpdatedAt;var atDate=new Date(lastUpdatedAt);var dateTimeFormat=(0,IntlUtils/* useDateTimeFormat */.i)({day:'numeric',month:'short',year:'numeric',timeZone:'UTC'});var formattedLastUpdatedAt=dateTimeFormat.format(atDate);return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("time",{dateTime:atDate.toISOString(),itemProp:"dateModified",children:formattedLastUpdatedAt})})},children:' on {date}'});}function LastUpdatedByUser(_ref2){var lastUpdatedBy=_ref2.lastUpdatedBy;return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:lastUpdatedBy})},children:' by {user}'});}function LastUpdated(_ref3){var lastUpdatedAt=_ref3.lastUpdatedAt,lastUpdatedBy=_ref3.lastUpdatedBy;return/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:ThemeClassNames/* ThemeClassNames */.G.common.lastUpdated,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:lastUpdatedAt?/*#__PURE__*/(0,jsx_runtime.jsx)(LastUpdatedAtDate,{lastUpdatedAt:lastUpdatedAt}):'',byUser:lastUpdatedBy?/*#__PURE__*/(0,jsx_runtime.jsx)(LastUpdatedByUser,{lastUpdatedBy:lastUpdatedBy}):''},children:'Last updated{atDate}{byUser}'}), false&&/*#__PURE__*/0]});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const EditMetaRow_styles_module = ({"lastUpdated":"lastUpdated_JAkA","noPrint":"noPrint_WFHX"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditMetaRow(_ref){var className=_ref.className,editUrl=_ref.editUrl,lastUpdatedAt=_ref.lastUpdatedAt,lastUpdatedBy=_ref.lastUpdatedBy;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('row',className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col',EditMetaRow_styles_module.noPrint),children:editUrl&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditThisPage,{editUrl:editUrl})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col',EditMetaRow_styles_module.lastUpdated),children:(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/(0,jsx_runtime.jsx)(LastUpdated,{lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy})})]});}

/***/ }),

/***/ 6266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useDateTimeFormat)
/* harmony export */ });
/* unused harmony export useCalendar */
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useCalendar(){var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(),_useDocusaurusContext2=_useDocusaurusContext.i18n,currentLocale=_useDocusaurusContext2.currentLocale,localeConfigs=_useDocusaurusContext2.localeConfigs;return localeConfigs[currentLocale].calendar;}function useDateTimeFormat(options){if(options===void 0){options={};}var _useDocusaurusContext3=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(),currentLocale=_useDocusaurusContext3.i18n.currentLocale;var calendar=useCalendar();return new Intl.DateTimeFormat(currentLocale,Object.assign({calendar:calendar},options));}

/***/ }),

/***/ 7293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Admonition)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-common/lib/utils/admonitionUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children){var items=react.Children.toArray(children);var mdxAdmonitionTitleWrapper=items.find(function(item){return/*#__PURE__*/react.isValidElement(item)&&item.type==='mdxAdmonitionTitle';});var rest=items.filter(function(item){return item!==mdxAdmonitionTitleWrapper;});var mdxAdmonitionTitle=mdxAdmonitionTitleWrapper==null?void 0:mdxAdmonitionTitleWrapper.props.children;return{mdxAdmonitionTitle:mdxAdmonitionTitle,rest:rest.length>0?/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:rest}):null};}function processAdmonitionProps(props){var _props$title;var _extractMDXAdmonition=extractMDXAdmonitionTitle(props.children),mdxAdmonitionTitle=_extractMDXAdmonition.mdxAdmonitionTitle,rest=_extractMDXAdmonition.rest;var title=(_props$title=props.title)!=null?_props$title:mdxAdmonitionTitle;return Object.assign({},props,title&&{title:title},{children:rest});}
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"admonition":"admonition_xJq3","admonitionHeading":"admonitionHeading_Gvgb","admonitionIcon":"admonitionIcon_Rf37","admonitionContent":"admonitionContent_BuS1"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionContainer(_ref){var type=_ref.type,className=_ref.className,children=_ref.children;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.common.admonition,ThemeClassNames/* ThemeClassNames */.G.common.admonitionType(type),styles_module.admonition,className),children:children});}function AdmonitionHeading(_ref2){var icon=_ref2.icon,title=_ref2.title;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.admonitionHeading,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:styles_module.admonitionIcon,children:icon}),title]});}function AdmonitionContent(_ref3){var children=_ref3.children;return children?/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.admonitionContent,children:children}):null;}function AdmonitionLayout(props){var type=props.type,icon=props.icon,title=props.title,children=props.children,className=props.className;return/*#__PURE__*/(0,jsx_runtime.jsxs)(AdmonitionContainer,{type:type,className:className,children:[title||icon?/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionHeading,{title:title,icon:icon}):null,/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionContent,{children:children})]});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Note.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconNote(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Note.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var infimaClassName='alert alert--secondary';var defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconNote,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function AdmonitionTypeNote(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,Object.assign({},defaultProps,props,{className:(0,clsx/* default */.A)(infimaClassName,props.className),children:props.children}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Tip.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconTip(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Tip.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tip_infimaClassName='alert alert--success';var Tip_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconTip,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function AdmonitionTypeTip(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,Object.assign({},Tip_defaultProps,props,{className:(0,clsx/* default */.A)(Tip_infimaClassName,props.className),children:props.children}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Info.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconInfo(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Info.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Info_infimaClassName='alert alert--info';var Info_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconInfo,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function AdmonitionTypeInfo(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,Object.assign({},Info_defaultProps,props,{className:(0,clsx/* default */.A)(Info_infimaClassName,props.className),children:props.children}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Warning.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconCaution(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Warning.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Warning_infimaClassName='alert alert--warning';var Warning_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconCaution,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function AdmonitionTypeWarning(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,Object.assign({},Warning_defaultProps,props,{className:(0,clsx/* default */.A)(Warning_infimaClassName,props.className),children:props.children}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Icon/Danger.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AdmonitionIconDanger(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},props,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Danger.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Danger_infimaClassName='alert alert--danger';var Danger_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconDanger,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function AdmonitionTypeDanger(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,Object.assign({},Danger_defaultProps,props,{className:(0,clsx/* default */.A)(Danger_infimaClassName,props.className),children:props.children}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Type/Caution.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Caution_infimaClassName='alert alert--warning';var Caution_defaultProps={icon:/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionIconCaution,{}),title:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};// TODO remove before v4: Caution replaced by Warning
// see https://github.com/facebook/docusaurus/issues/7558
function AdmonitionTypeCaution(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionLayout,Object.assign({},Caution_defaultProps,props,{className:(0,clsx/* default */.A)(Caution_infimaClassName,props.className),children:props.children}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/Types.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var admonitionTypes={note:AdmonitionTypeNote,tip:AdmonitionTypeTip,info:AdmonitionTypeInfo,warning:AdmonitionTypeWarning,danger:AdmonitionTypeDanger};// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
var admonitionAliases={secondary:function secondary(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionTypeNote,Object.assign({title:"secondary"},props));},important:function important(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionTypeInfo,Object.assign({title:"important"},props));},success:function success(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionTypeTip,Object.assign({title:"success"},props));},caution:AdmonitionTypeCaution};/* harmony default export */ const Types = (Object.assign({},admonitionTypes,admonitionAliases));
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function getAdmonitionTypeComponent(type){var component=Types[type];if(component){return component;}console.warn("No admonition component found for admonition type \""+type+"\". Using Info as fallback.");return Types.info;}function Admonition(unprocessedProps){var props=processAdmonitionProps(unprocessedProps);var AdmonitionTypeComponent=getAdmonitionTypeComponent(props.type);return/*#__PURE__*/(0,jsx_runtime.jsx)(AdmonitionTypeComponent,Object.assign({},props));}

/***/ }),

/***/ 8426:
/***/ ((module, exports) => {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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