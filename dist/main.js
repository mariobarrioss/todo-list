/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/background.png */ \"./src/assets/images/background.png\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_background_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".has-bg-img {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") center center;\\n  background-size: cover;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/assets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/images/background.png":
/*!******************************************!*\
  !*** ./src/assets/images/background.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3b4db36bb66c98cceba0848d92640fa7.png\");\n\n//# sourceURL=webpack:///./src/assets/images/background.png?");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _page_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-ui */ \"./src/page-ui.js\");\n\n\n\n_page_ui__WEBPACK_IMPORTED_MODULE_1__[\"createLayout\"]();\n_page_ui__WEBPACK_IMPORTED_MODULE_1__[\"displayProjects\"]();\n_page_ui__WEBPACK_IMPORTED_MODULE_1__[\"addNewProjectForm\"]();\n_page_ui__WEBPACK_IMPORTED_MODULE_1__[\"addNewTodoForm\"]();\n_page_ui__WEBPACK_IMPORTED_MODULE_1__[\"setButtons\"]();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/*! exports provided: addProject, retrieveProjects, updateProject, deleteProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"retrieveProjects\", function() { return retrieveProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProject\", function() { return updateProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProject\", function() { return deleteProject; });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst projectList = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];\n\nconst storeProjectList = () => {\n  localStorage.setItem('projects', JSON.stringify(projectList));\n};\n\nconst addProject = project => {\n  projectList.push(project);\n  storeProjectList();\n};\n\nconst checkDefaultProject = () => {\n  if (projectList.length === 0) {\n    const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('default');\n    addProject(defaultProject);\n  }\n};\n\ncheckDefaultProject();\n\nconst retrieveProjects = () => projectList;\n\nconst updateProject = (id, project) => {\n  projectList.splice(id, 1, project);\n  storeProjectList();\n};\n\nconst deleteProject = (id) => {\n  localStorage.clear();\n  projectList.splice(id, 1);\n  storeProjectList();\n};\n\n\n\n\n//# sourceURL=webpack:///./src/localStorage.js?");

/***/ }),

/***/ "./src/page-ui.js":
/*!************************!*\
  !*** ./src/page-ui.js ***!
  \************************/
/*! exports provided: createLayout, displayProjects, addNewProjectForm, addNewTodoForm, setButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLayout\", function() { return createLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayProjects\", function() { return displayProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNewProjectForm\", function() { return addNewProjectForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNewTodoForm\", function() { return addNewTodoForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setButtons\", function() { return setButtons; });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\nconst createLayout = () => {\n  const pageContent = document.querySelector('#page-content');\n  const layout = `\n    <section class=\"hero is-medium has-bg-img\">\n      <div class=\"hero-head\">\n        <nav class=\"navbar\">\n          <div class=\"container\">\n            <div id=\"navbarMenuHeroA\" class=\"navbar-menu\">\n              <div class=\"navbar-end\">\n                <span class=\"navbar-item\">\n                  <a id=\"new-project-button\" class=\"button is-dark is-inverted\">\n                    <span class=\"icon\">\n                      <i class=\"fab fa-github\"></i>\n                    </span>\n                    <span>New Project</span>\n                  </a>\n                </span>\n                <span class=\"navbar-item\">\n                  <a id=\"new-todo-button\" class=\"button is-dark is-inverted\">\n                    <span class=\"icon\">\n                      <i class=\"fab fa-github\"></i>\n                    </span>\n                    <span>New Todo</span>\n                  </a>\n                </span>\n              </div>\n            </div>\n          </div>\n        </nav>\n      </div>\n\n      <div class=\"hero-body\">\n        <div class=\"container has-text-centered\">\n          <h1 class=\"title\">\n            Agendum\n          </h1>\n          <h2 class=\"subtitle\">\n            Plan your day...\n          </h2>\n        </div>\n      </div>\n\n      <div class=\"hero-foot\">\n        <div id=\"form-section\" class=\"container\">\n        </div>\n      </div>\n    </section>\n\n    <section class=\"section\">\n      <div class=\"container\">\n        <div class=\"columns\">\n          <div class=\"column is-3\">\n            <aside class=\"menu\">\n              <p class=\"menu-label\">\n                projects\n              </p>\n              <ul id=\"project-list\" class=\"menu-list\">\n              </ul>\n            </aside>\n          </div>\n\n          <div class=\"column is-9\">\n            <div id=\"todo-list-content\"  class=\"content is-medium\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>`;\n  pageContent.insertAdjacentHTML('beforeend', layout);\n};\n\nconst displayProjects = () => {\n  const projectList = document.querySelector('#project-list');\n  const projects = Object(_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"retrieveProjects\"])();\n\n  projects.forEach(project => {\n    const { name } = project;\n    const itemContent = `<li><a>${name}</a></li>`;\n    projectList.insertAdjacentHTML('beforeend', itemContent);\n  });\n};\n\nconst addNewProjectForm = () => {\n  const formSection = document.querySelector('#form-section');\n  const newProjectForm = `\n    <section class=\"section\">\n      <div class=\"container\">\n        <div id=\"project-form\" class=\"is-hidden\">\n\n          <div class=\"field\">\n            <label class=\"label\">Title</label>\n            <div class=\"control\">\n              <input class=\"input\" name=\"project-name\" type=\"text\" placeholder=\"Project Name\">\n            </div>\n          </div>\n\n          <div class=\"field\">\n            <div class=\"control\">\n              <button id=\"save-project-button\" class=\"button is-success\">Save Project</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>`;\n  formSection.insertAdjacentHTML('beforeend', newProjectForm);\n};\n\nconst addNewTodoForm = () => {\n  const formSection = document.querySelector('#form-section');\n  const newTodoForm = `\n  <section class=\"section\">\n      <div class=\"container\">\n        <div id=\"todo-form\" class=\"is-hidden\">\n\n          <div class=\"field\">\n            <label class=\"label\">Title</label>\n            <div class=\"control\">\n              <input class=\"input\" name=\"todo-title\" type=\"text\" placeholder=\"Title\">\n            </div>\n          </div>\n\n          <div class=\"field\">\n            <label class=\"label\">Description</label>\n            <div class=\"control\">\n              <textarea class=\"textarea\" name=\"todo-description\" placeholder=\"Description\"></textarea>\n            </div>\n          </div>\n\n          <div class=\"field\">\n            <label class=\"label\">Due Date</label>\n            <div class=\"control\">\n              <input class=\"input\" name=\"todo-dueDate\" type=\"date\" placeholder=\"Due date\">\n            </div>\n          </div>\n\n          <div class=\"field\">\n            <label class=\"label\">Priority</label>\n            <div class=\"control\">\n              <div class=\"select\">\n                <select name=\"todo-priority\">\n                  <option value=\"high\">High</option>\n                  <option value=\"normal\">Normal</option>\n                  <option value=\"low\">Low</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"field\">\n            <label class=\"label\">Project</label>\n            <div class=\"control\">\n                <div class=\"select\">\n                  <select id=\"dropdown\" name=\"project-list\">\n                  </select>\n                </div>\n            </div>\n          </div>\n\n          <div class=\"field\">\n            <div class=\"control\">\n              <button id=\"save-todo-button\" class=\"button is-success\">Save Todo</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>`;\n  formSection.insertAdjacentHTML('beforeend', newTodoForm);\n};\n\nconst generateDropdown = () => {\n  const select = document.getElementById('dropdown');\n  const list = Object(_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"retrieveProjects\"])();\n  list.forEach(project => {\n    const projectName = project.name;\n    const option = `<option value=${projectName}>${projectName}</option>`;\n    select.insertAdjacentHTML('beforeend', option);\n  });\n};\n\nconst formToggle = form => {\n  form.classList.toggle('is-hidden');\n};\n\nconst saveTodo = () => {\n  const title = document.querySelector('[name=\"todo-title\"]').value;\n  const description = document.querySelector('[name=\"todo-description\"]').value;\n  const dueDate = document.querySelector('[name=\"todo-dueDate\"]').value;\n  const priority = document.querySelector('[name=\"todo-priority\"]').value;\n  const project = document.querySelector('[name=\"project-list\"]').value;\n\n  const projectList = Object(_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"retrieveProjects\"])();\n\n  const key = projectList.find(element => element.name === project);\n  const todo = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, dueDate, priority);\n  key.todos.push(todo);\n};\n\nconst saveProject = () => {\n  const name = document.querySelector('[name=\"project-name\"]').value;\n  Object(_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])(new _project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](name));\n  displayProjects();\n};\n\nconst setButtons = () => {\n  const newProjectButton = document.querySelector('#new-project-button');\n  const newTodoButton = document.querySelector('#new-todo-button');\n  const projectForm = document.querySelector('#project-form');\n  const todoForm = document.querySelector('#todo-form');\n  const saveProjectButton = document.querySelector('#save-project-button');\n  const saveTodoButton = document.querySelector('#save-todo-button');\n\n  newProjectButton.addEventListener('click', () => formToggle(projectForm));\n  newTodoButton.addEventListener('click', () => {\n    formToggle(todoForm);\n    generateDropdown();\n  });\n\n  saveProjectButton.addEventListener('click', () => saveProject());\n  saveTodoButton.addEventListener('click', () => saveTodo());\n};\n\n\n\n\n//# sourceURL=webpack:///./src/page-ui.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Project; });\nclass Project {\n  constructor(name, todos = []) {\n    this.name = name;\n    this.todos = todos;\n  }\n\n  updateName(name) {\n    this.name = name;\n  }\n\n  updateTodos(todo) {\n    this.todos.push(JSON.stringify(todo));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todo; });\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n\n  updateTitle(title) {\n    this.title = title;\n  }\n\n  updateDescription(description) {\n    this.description = description;\n  }\n\n  updateDueDate(dueDate) {\n    this.dueDate = dueDate;\n  }\n\n  updatePriority(priority) {\n    this.priority = priority;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ })

/******/ });