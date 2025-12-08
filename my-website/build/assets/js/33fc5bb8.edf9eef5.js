"use strict";
(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[867],{

/***/ 778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogAuthorsPostsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7559);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5500);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6461);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8774);
/* harmony import */ var _docusaurus_plugin_content_blog_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4096);
/* harmony import */ var _theme_BlogLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8027);
/* harmony import */ var _theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7713);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1463);
/* harmony import */ var _theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3892);
/* harmony import */ var _theme_Blog_Components_Author__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9907);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Metadata(_ref){var author=_ref.author;var title=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .useBlogAuthorPageTitle */ .wI)(author);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .PageMetadata */ .be,{title:title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{tag:"blog_authors_posts"})]});}function ViewAllAuthorsLink(){var _useBlogMetadata=(0,_docusaurus_plugin_content_blog_client__WEBPACK_IMPORTED_MODULE_6__/* .useBlogMetadata */ .x)(),authorsListPath=_useBlogMetadata.authorsListPath;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{href:authorsListPath,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .BlogAuthorsListViewAllLabel */ .np,{})});}function Content(_ref2){var author=_ref2.author,items=_ref2.items,sidebar=_ref2.sidebar,listMetadata=_ref2.listMetadata;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_theme_BlogLayout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{sidebar:sidebar,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("header",{className:"margin-bottom--xl",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_theme_Blog_Components_Author__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{as:"h1",author:author}),author.description&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p",{children:author.description}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ViewAllAuthorsLink,{})]}),items.length===0?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .BlogAuthorNoPostsLabel */ .Y4,{})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("hr",{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{items:items}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{metadata:listMetadata})]})]});}function BlogAuthorsPostsPage(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .HtmlClassNameProvider */ .e3,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ThemeClassNames */ .G.wrapper.blogPages,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ThemeClassNames */ .G.page.blogAuthorsPostsPage),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Metadata,Object.assign({},props)),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Content,Object.assign({},props))]});}

/***/ }),

/***/ 2907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogPostItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(4096);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Container/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContainer(_ref){var children=_ref.children,className=_ref.className;return/*#__PURE__*/(0,jsx_runtime.jsx)("article",{className:className,children:children});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"title":"title_f1Hy"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemHeaderTitle(_ref){var className=_ref.className;var _useBlogPost=(0,client/* useBlogPost */.e7)(),metadata=_useBlogPost.metadata,isBlogPostPage=_useBlogPost.isBlogPostPage;var permalink=metadata.permalink,title=metadata.title;var TitleHeading=isBlogPostPage?'h1':'h2';return/*#__PURE__*/(0,jsx_runtime.jsx)(TitleHeading,{className:(0,clsx/* default */.A)(styles_module.title,className),children:isBlogPostPage?title:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:permalink,children:title})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(5846);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
var IntlUtils = __webpack_require__(6266);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Info_styles_module = ({"container":"container_mt6G"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useReadingTimePlural(){var _usePluralForm=(0,usePluralForm/* usePluralForm */.W)(),selectMessage=_usePluralForm.selectMessage;return function(readingTimeFloat){var readingTime=Math.ceil(readingTimeFloat);return selectMessage(readingTime,(0,Translate/* translate */.T)({id:'theme.blog.post.readingTime.plurals',description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One min read|{readingTime} min read'},{readingTime:readingTime}));};}function ReadingTime(_ref){var readingTime=_ref.readingTime;var readingTimePlural=useReadingTimePlural();return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:readingTimePlural(readingTime)});}function DateTime(_ref2){var date=_ref2.date,formattedDate=_ref2.formattedDate;return/*#__PURE__*/(0,jsx_runtime.jsx)("time",{dateTime:date,children:formattedDate});}function Spacer(){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:' · '});}function BlogPostItemHeaderInfo(_ref3){var className=_ref3.className;var _useBlogPost=(0,client/* useBlogPost */.e7)(),metadata=_useBlogPost.metadata;var date=metadata.date,readingTime=metadata.readingTime;var dateTimeFormat=(0,IntlUtils/* useDateTimeFormat */.i)({day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});var formatDate=function formatDate(blogDate){return dateTimeFormat.format(new Date(blogDate));};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(Info_styles_module.container,'margin-vert--md',className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DateTime,{date:date,formattedDate:formatDate(date)}),typeof readingTime!=='undefined'&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Spacer,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(ReadingTime,{readingTime:readingTime})]})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/index.js + 22 modules
var Author = __webpack_require__(9907);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Authors_styles_module = ({"authorCol":"authorCol_Hf19","imageOnlyAuthorRow":"imageOnlyAuthorRow_pa_O","imageOnlyAuthorCol":"imageOnlyAuthorCol_G86a"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Component responsible for the authors layout
function BlogPostItemHeaderAuthors(_ref){var className=_ref.className;var _useBlogPost=(0,client/* useBlogPost */.e7)(),authors=_useBlogPost.metadata.authors,assets=_useBlogPost.assets;var authorsCount=authors.length;if(authorsCount===0){return null;}var imageOnly=authors.every(function(_ref2){var name=_ref2.name;return!name;});var singleAuthor=authors.length===1;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('margin-top--md margin-bottom--sm',imageOnly?Authors_styles_module.imageOnlyAuthorRow:'row',className),children:authors.map(function(author,idx){var _assets$authorsImageU;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(!imageOnly&&(singleAuthor?'col col--12':'col col--6'),imageOnly?Authors_styles_module.imageOnlyAuthorCol:Authors_styles_module.authorCol),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Author/* default */.A,{author:Object.assign({},author,{// Handle author images using relative paths
imageURL:(_assets$authorsImageU=assets.authorsImageUrls[idx])!=null?_assets$authorsImageU:author.imageURL})})},idx);})});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemHeader(){return/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderTitle,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderInfo,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderAuthors,{})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(440);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 45 modules
var MDXContent = __webpack_require__(4240);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContent(_ref){var children=_ref.children,className=_ref.className;var _useBlogPost=(0,client/* useBlogPost */.e7)(),isBlogPostPage=_useBlogPost.isBlogPostPage;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{// This ID is used for the feed generation to locate the main content
id:isBlogPostPage?lib/* blogPostContainerID */.LU:undefined,className:(0,clsx/* default */.A)('markdown',className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(MDXContent/* default */.A,{children:children})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js + 5 modules
var EditMetaRow = __webpack_require__(4336);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js + 1 modules
var TagsListInline = __webpack_require__(4434);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8587);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/ReadMoreLink/index.js
var _excluded=["blogPostTitle"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ReadMoreLabel(){return/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})});}function BlogPostItemFooterReadMoreLink(props){var blogPostTitle=props.blogPostTitle,linkProps=(0,objectWithoutPropertiesLoose/* default */.A)(props,_excluded);return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,Object.assign({"aria-label":(0,Translate/* translate */.T)({message:'Read more about {title}',id:'theme.blog.post.readMoreLabel',description:'The ARIA label for the link to full blog posts from excerpts'},{title:blogPostTitle})},linkProps,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ReadMoreLabel,{})}));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemFooter(){var _useBlogPost=(0,client/* useBlogPost */.e7)(),metadata=_useBlogPost.metadata,isBlogPostPage=_useBlogPost.isBlogPostPage;var tags=metadata.tags,title=metadata.title,editUrl=metadata.editUrl,hasTruncateMarker=metadata.hasTruncateMarker,lastUpdatedBy=metadata.lastUpdatedBy,lastUpdatedAt=metadata.lastUpdatedAt;// A post is truncated if it's in the "list view" and it has a truncate marker
var truncatedPost=!isBlogPostPage&&hasTruncateMarker;var tagsExists=tags.length>0;var renderFooter=tagsExists||truncatedPost||editUrl;if(!renderFooter){return null;}// BlogPost footer - details view
if(isBlogPostPage){var canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);return/*#__PURE__*/(0,jsx_runtime.jsxs)("footer",{className:"docusaurus-mt-lg",children:[tagsExists&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('row','margin-top--sm',ThemeClassNames/* ThemeClassNames */.G.blog.blogFooterEditMetaRow),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListInline/* default */.A,{tags:tags})})}),canDisplayEditMetaRow&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditMetaRow/* default */.A,{className:(0,clsx/* default */.A)('margin-top--sm',ThemeClassNames/* ThemeClassNames */.G.blog.blogFooterEditMetaRow),editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy})]});}// BlogPost footer - list view
else{return/*#__PURE__*/(0,jsx_runtime.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[tagsExists&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col',{'col--9':truncatedPost}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListInline/* default */.A,{tags:tags})}),truncatedPost&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)('col text--right',{'col--3':tagsExists}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemFooterReadMoreLink,{blogPostTitle:title,to:metadata.permalink})})]});}}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// apply a bottom margin in list view
function useContainerClassName(){var _useBlogPost=(0,client/* useBlogPost */.e7)(),isBlogPostPage=_useBlogPost.isBlogPostPage;return!isBlogPostPage?'margin-bottom--xl':undefined;}function BlogPostItem(_ref){var children=_ref.children,className=_ref.className;var containerClassName=useContainerClassName();return/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogPostItemContainer,{className:(0,clsx/* default */.A)(containerClassName,className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemContent,{children:children}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemFooter,{})]});}

/***/ }),

/***/ 3892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BlogPostItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_plugin_content_blog_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4096);
/* harmony import */ var _theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2907);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItems(_ref){var items=_ref.items,_ref$component=_ref.component,BlogPostItemComponent=_ref$component===void 0?_theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A:_ref$component;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:items.map(function(_ref2){var BlogPostContent=_ref2.content;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_plugin_content_blog_client__WEBPACK_IMPORTED_MODULE_1__/* .BlogPostProvider */ ["in"],{content:BlogPostContent,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlogPostItemComponent,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlogPostContent,{})})},BlogPostContent.metadata.permalink);})});}

/***/ }),

/***/ 4434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TagsListInline)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(6133);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tags":"tags_jXut","tag":"tag_QGVx"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){var tags=_ref.tags;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:(0,clsx/* default */.A)(styles_module.tags,'padding--none','margin-left--sm'),children:tags.map(function(tag){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:styles_module.tag,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Tag/* default */.A,Object.assign({},tag))},tag.permalink);})})]});}

/***/ }),

/***/ 6133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(_ref){var permalink=_ref.permalink,label=_ref.label,count=_ref.count,description=_ref.description;return/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{rel:"tag",href:permalink,title:description,className:(0,clsx/* default */.A)(styles_module.tag,count?styles_module.tagWithCount:styles_module.tagRegular),children:[label,count&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:count})]});}

/***/ }),

/***/ 6461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y4: () => (/* binding */ BlogAuthorNoPostsLabel),
/* harmony export */   ZD: () => (/* binding */ useBlogTagsPostsPageTitle),
/* harmony export */   np: () => (/* binding */ BlogAuthorsListViewAllLabel),
/* harmony export */   uz: () => (/* binding */ translateBlogAuthorsListPageTitle),
/* harmony export */   wI: () => (/* binding */ useBlogAuthorPageTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1312);
/* harmony import */ var _utils_usePluralForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5846);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Only used locally
function useBlogPostsPlural(){var _usePluralForm=(0,_utils_usePluralForm__WEBPACK_IMPORTED_MODULE_2__/* .usePluralForm */ .W)(),selectMessage=_usePluralForm.selectMessage;return function(count){return selectMessage(count,(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.post.plurals',description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One post|{count} posts'},{count:count}));};}function useBlogTagsPostsPageTitle(tag){var blogPostsPlural=useBlogPostsPlural();return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.tagTitle',description:'The title of the page for a blog tag',message:'{nPosts} tagged with "{tagName}"'},{nPosts:blogPostsPlural(tag.count),tagName:tag.label});}function useBlogAuthorPageTitle(author){var blogPostsPlural=useBlogPostsPlural();return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.author.pageTitle',description:'The title of the page for a blog author',message:'{authorName} - {nPosts}'},{nPosts:blogPostsPlural(author.count),authorName:author.name||author.key});}var translateBlogAuthorsListPageTitle=function translateBlogAuthorsListPageTitle(){return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.authorsList.pageTitle',message:'Authors',description:'The title of the authors page'});};function BlogAuthorsListViewAllLabel(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"});}function BlogAuthorNoPostsLabel(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."});}

/***/ }),

/***/ 7713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BlogListPaginator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1312);
/* harmony import */ var _theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9022);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPaginator(props){var metadata=props.metadata;var previousPage=metadata.previousPage,nextPage=metadata.nextPage;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav",{className:"pagination-nav","aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.paginator.navAriaLabel',message:'Blog list page navigation',description:'The ARIA label for the blog pagination'}),children:[previousPage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{permalink:previousPage,title:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),nextPage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{permalink:nextPage,title:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:true})]});}

/***/ }),

/***/ 9022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PaginatorNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8774);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function PaginatorNavLink(props){var permalink=props.permalink,title=props.title,subLabel=props.subLabel,isNext=props.isNext;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('pagination-nav__link',isNext?'pagination-nav__link--next':'pagination-nav__link--prev'),to:permalink,children:[subLabel&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"pagination-nav__sublabel",children:subLabel}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"pagination-nav__label",children:title})]});}

/***/ })

}]);