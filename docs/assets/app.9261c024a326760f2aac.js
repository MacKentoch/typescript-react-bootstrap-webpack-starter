/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + "9261c024a326760f2aac" + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/front/index.tsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/front/Root.tsx":
/*!****************************!*\
  !*** ./src/front/Root.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hoc_withMainLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hoc/withMainLayout */ "./src/front/hoc/withMainLayout/index.ts");
/* harmony import */ var _routes_MainRoutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/MainRoutes */ "./src/front/routes/MainRoutes.tsx");
/* harmony import */ var _components_logoutRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/logoutRoute */ "./src/front/components/logoutRoute/index.ts");
/* harmony import */ var _contexts_auth_providerComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contexts/auth/providerComponent */ "./src/front/contexts/auth/providerComponent/index.tsx");
/* harmony import */ var _style_GlobalStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style/GlobalStyles */ "./src/front/style/GlobalStyles.ts");












// #nedregion
// #region constants
var MainApp = Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(_hoc_withMainLayout__WEBPACK_IMPORTED_MODULE_6__["default"])())(_routes_MainRoutes__WEBPACK_IMPORTED_MODULE_7__["default"]);
var history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_5___default()();
// we lazy load pages:
var LoadableLogin = Object(loadable_components__WEBPACK_IMPORTED_MODULE_4__["default"])(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./pages/login */ "./src/front/pages/login/index.ts")); });
var LoadablePageNotFound = Object(loadable_components__WEBPACK_IMPORTED_MODULE_4__["default"])(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./pages/pageNotFound */ "./src/front/pages/pageNotFound/index.ts")); });
// #endregion
var Root = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Router"], { history: history },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_style_GlobalStyles__WEBPACK_IMPORTED_MODULE_10__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_contexts_auth_providerComponent__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ScrollToTop, null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/login", component: LoadableLogin }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MainApp, null),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_logoutRoute__WEBPACK_IMPORTED_MODULE_8__["default"], { path: "/logout" }),
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { component: LoadablePageNotFound })))))));
    };
    return Root;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Root);


/***/ }),

/***/ "./src/front/components/backToTop/BackToTop.tsx":
/*!******************************************************!*\
  !*** ./src/front/components/backToTop/BackToTop.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _backToTopButton_BackToTopButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backToTopButton/BackToTopButton */ "./src/front/components/backToTop/backToTopButton/BackToTopButton.tsx");
/* eslint-disable no-undefined */
// #region imports



// #endregion
function BackToTop(_a) {
    var minScrollY = _a.minScrollY, onScrollDone = _a.onScrollDone;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), showBackButton = _b[0], setShowBackButton = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), windowScrollY = _c[0], setWindowScrollY = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), tickingScollObserve = _d[0], setTickingScollObserve = _d[1];
    // #region on windows scroll callback
    var handleWindowScroll = function () {
        if (!window) {
            return;
        }
        /* eslint-disable no-undefined */
        var windowPagYOffset = window.pageYOffset;
        var documentPageYOffset = document.documentElement || document.body.parentNode || document.body;
        var currentWindowScrollY = window.pageYOffset !== undefined
            ? windowPagYOffset
            : documentPageYOffset.scrollTop;
        /* eslint-enable no-undefined */
        // scroll event fires to often, using window.requestAnimationFrame to limit computations
        if (!tickingScollObserve) {
            window.requestAnimationFrame(function () {
                if (windowScrollY !== currentWindowScrollY) {
                    var shouldShowBackButton = currentWindowScrollY >= minScrollY ? true : false;
                    setWindowScrollY(currentWindowScrollY);
                    setShowBackButton(shouldShowBackButton);
                }
                setTickingScollObserve(false);
            });
        }
        setTickingScollObserve(true);
    };
    // #endregion
    // #region on button click (smooth scroll)
    var handlesOnBackButtonClick = function (event) {
        event && event.preventDefault();
        if (window && windowScrollY && windowScrollY > minScrollY) {
            // using here smoothscroll-polyfill
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            // smoothScroll.scrollTo(scrollTo, this.scrollDone);
        }
    };
    var scrollDone = function () { return onScrollDone && onScrollDone(); };
    // #endregion
    // #region mount and unmount subscrubstions
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleWindowScroll);
        }
        return function unsubscribeEvents() {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleWindowScroll);
            }
        };
    });
    // #endregion
    return (
    // @ts-ignore
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_1__["Motion"], { style: { x: Object(react_motion__WEBPACK_IMPORTED_MODULE_1__["spring"])(showBackButton ? 0 : 120, react_motion__WEBPACK_IMPORTED_MODULE_1__["presets"].stiff) } }, function (_a) {
        var x = _a.x;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_backToTopButton_BackToTopButton__WEBPACK_IMPORTED_MODULE_2__["default"], { position: _backToTopButton_BackToTopButton__WEBPACK_IMPORTED_MODULE_2__["ButtonPosition"]['bottom-right'], onClick: handlesOnBackButtonClick, motionStyle: {
                WebkitTransform: "translate3d(" + x + "px, 0, 0)",
                transform: "translate3d(" + x + "px, 0, 0)",
            } }));
    }));
}
BackToTop.displayName = 'BackToTop';
BackToTop.defaultProps = {
    minScrollY: 120,
    onScrollDone: function () {
        return;
    },
};
/* harmony default export */ __webpack_exports__["default"] = (BackToTop);


/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/BackToTopButton.tsx":
/*!****************************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/BackToTopButton.tsx ***!
  \****************************************************************************/
/*! exports provided: ButtonPosition, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPosition", function() { return ButtonPosition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UpIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UpIcon */ "./src/front/components/backToTop/backToTopButton/UpIcon.tsx");
/* harmony import */ var _styled_WithRightMargin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled/WithRightMargin */ "./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.tsx");

// #region imports




// #endregion
// #region flow types
var ButtonPosition;
(function (ButtonPosition) {
    ButtonPosition[ButtonPosition["bottom-left"] = 0] = "bottom-left";
    ButtonPosition[ButtonPosition["bottom-right"] = 1] = "bottom-right";
})(ButtonPosition || (ButtonPosition = {}));
// #endregion
// #region constants
var defaultBackGroundColor = '#4A4A4A';
var sideOffset = '-10px';
var bottomOffset = '40px';
var defaultWidth = '100px';
var defaultZindex = 10;
var defaultOpacity = 0.5;
var defaultStyle = {
    position: 'fixed',
    right: sideOffset,
    left: '',
    bottom: bottomOffset,
    width: defaultWidth,
    zIndex: defaultZindex,
    opacity: defaultOpacity,
    backgroundColor: defaultBackGroundColor,
};
// #endregion
function BackToTopButton(_a) {
    var onClick = _a.onClick, position = _a.position, children = _a.children, motionStyle = _a.motionStyle;
    var buttonStyle = setPosition(position, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, motionStyle, defaultStyle));
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { style: buttonStyle, className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
            btn: true,
        }), onClick: onClick },
        !children && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_WithRightMargin__WEBPACK_IMPORTED_MODULE_4__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UpIcon__WEBPACK_IMPORTED_MODULE_3__["default"], { color: '#F1F1F1' }))),
        !!children && children));
}
// #region statics
BackToTopButton.defaultProps = {
    position: 'bottom-right',
};
BackToTopButton.displayName = 'BackToTopButton';
// #endregion
// #region helpers
function setPosition(position, refStyle) {
    if (position === void 0) { position = ButtonPosition['bottom-right']; }
    if (refStyle === void 0) { refStyle = defaultStyle; }
    var style = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, refStyle);
    switch (position) {
        case ButtonPosition['bottom-right']:
            style.right = sideOffset;
            style.left = '';
            return style;
        case ButtonPosition['bottom-left']:
            style.right = '';
            style.left = sideOffset;
            return style;
        default:
            return refStyle;
    }
}
// #endregion
/* harmony default export */ __webpack_exports__["default"] = (BackToTopButton);


/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/UpIcon.tsx":
/*!*******************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/UpIcon.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// #region imports

// #endregion
var UpIcon = function (_a) {
    var color = _a.color;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: "24px", height: "24px", viewBox: "0 0 512 512", fill: "" + color },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1\n      c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z" })));
};
// #region statics
UpIcon.defaultProps = {
    color: '#F1F1F1',
};
UpIcon.displayName = 'UpIcon';
// #endregion
/* harmony default export */ __webpack_exports__["default"] = (UpIcon);


/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.tsx":
/*!***********************************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

// #region imports

var WithRightMargin = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  margin-right: 10px;\n"], ["\n  margin-right: 10px;\n"])));
/* harmony default export */ __webpack_exports__["default"] = (WithRightMargin);
var templateObject_1;


/***/ }),

/***/ "./src/front/components/logoutRoute/LogoutRoute.tsx":
/*!**********************************************************!*\
  !*** ./src/front/components/logoutRoute/LogoutRoute.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

// #region imports


// #endregion
function LogoutRoute(props) {
    var disconnectUser = props.disconnectUser;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        disconnectUser();
    });
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login' } })));
}
LogoutRoute.displayName = 'LogoutRoute';
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(LogoutRoute));


/***/ }),

/***/ "./src/front/components/logoutRoute/index.ts":
/*!***************************************************!*\
  !*** ./src/front/components/logoutRoute/index.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _LogoutRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoutRoute */ "./src/front/components/logoutRoute/LogoutRoute.tsx");
/* harmony import */ var _contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/auth/consumerHOC */ "./src/front/contexts/auth/consumerHOC/index.tsx");
// #region imports



// #endregion
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(_contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_2__["default"])())(_LogoutRoute__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./src/front/components/navigation/NavigationBar.tsx":
/*!***********************************************************!*\
  !*** ./src/front/components/navigation/NavigationBar.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
// #region imports


// #endregion
function NavigationBar(_a) {
    var _b = _a.navModel, rightLinks = _b.rightLinks, brand = _b.brand, isAuthenticated = _a.isAuthenticated, disconnectUser = _a.disconnectUser, history = _a.history;
    // #region state
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isOpen = _c[0], setIsOpen = _c[1];
    // #endregion
    // #region navigation bar toggle
    var toggle = function (evt) {
        evt && evt.preventDefault();
        setIsOpen(!isOpen);
    };
    // #endregion
    // #region handlesNavItemClick event
    var handlesNavItemClick = function (link) {
        if (link === void 0) { link = '/'; }
        return function (evt) {
            evt && evt.preventDefault();
            history.push(link);
        };
    };
    // #endregion
    // #region disconnect
    var handlesDisconnect = function (evt) {
        evt && evt.preventDefault();
        disconnectUser();
        history.push('/');
    };
    // #endregion
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], { color: "light", light: true, expand: "md" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], { href: "/" }, brand),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], { onClick: toggle }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], { isOpen: isOpen, navbar: true },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], { className: "ml-auto", navbar: true },
                rightLinks.map(function (_a, index) {
                    var label = _a.label, link = _a.link;
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], { key: "" + index },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { href: "#", onClick: handlesNavItemClick(link) }, label)));
                }),
                isAuthenticated && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { href: "#", onClick: handlesDisconnect }, "Disconnect")))))));
}
NavigationBar.displayName = 'NavigationBar';
/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);


/***/ }),

/***/ "./src/front/components/navigation/index.tsx":
/*!***************************************************!*\
  !*** ./src/front/components/navigation/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/auth/consumerHOC */ "./src/front/contexts/auth/consumerHOC/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationBar */ "./src/front/components/navigation/NavigationBar.tsx");
// #region imports




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"], Object(_contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_1__["default"])())(_NavigationBar__WEBPACK_IMPORTED_MODULE_3__["default"]));


/***/ }),

/***/ "./src/front/config/appConfig.ts":
/*!***************************************!*\
  !*** ./src/front/config/appConfig.ts ***!
  \***************************************/
/*! exports provided: appConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
var appConfig = {
    DEV_MODE: true,
    // sw path
    sw: {
        path: 'public/assets/sw.js',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (appConfig);


/***/ }),

/***/ "./src/front/config/navigation.ts":
/*!****************************************!*\
  !*** ./src/front/config/navigation.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// #endregion
var navigation = {
    brand: 'React Bootstrap Starter',
    leftLinks: [],
    rightLinks: [
        {
            label: 'Home',
            link: '/',
        },
        {
            label: 'Protected',
            link: '/protected',
            view: 'protected',
            isRouteBtn: true,
        },
        {
            label: 'About',
            link: '/about',
            view: 'about',
            isRouteBtn: true,
        },
    ],
};
/* harmony default export */ __webpack_exports__["default"] = (navigation);


/***/ }),

/***/ "./src/front/contexts/auth/consumerHOC/index.tsx":
/*!*******************************************************!*\
  !*** ./src/front/contexts/auth/consumerHOC/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withAuth; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ "./src/front/contexts/auth/context/index.tsx");

// #region imports



// #endregion
// #region CONSUMER HOC
function withAuth() {
    return function (BaseComponent) {
        var WithAuth = /** @class */ (function (_super) {
            tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WithAuth, _super);
            function WithAuth() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WithAuth.prototype.render = function () {
                // @ts-ignore
                var passProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](this.props, []);
                return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_3__["AuthContextConsumer"], null, function (fromAuthProps) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BaseComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, fromAuthProps, passProps))); }));
            };
            return WithAuth;
        }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(WithAuth, BaseComponent);
    };
}
// #endregion


/***/ }),

/***/ "./src/front/contexts/auth/context/index.tsx":
/*!***************************************************!*\
  !*** ./src/front/contexts/auth/context/index.tsx ***!
  \***************************************************/
/*! exports provided: authDefault, AuthContextProvider, AuthContextConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authDefault", function() { return authDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextProvider", function() { return AuthContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextConsumer", function() { return AuthContextConsumer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

// #region imports
//  @ts-ignore

// #endregion
// #region default context value
var authDefault = {
    isAuthenticated: false,
    lastAuthDate: null,
    isExpiredToken: true,
    token: '',
    user: null,
};
// #endregion
// #region context
var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, authDefault));
var AuthContextProvider = AuthContext.Provider;
var AuthContextConsumer = AuthContext.Consumer;
// #endregion


/***/ }),

/***/ "./src/front/contexts/auth/providerComponent/index.tsx":
/*!*************************************************************!*\
  !*** ./src/front/contexts/auth/providerComponent/index.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ "./src/front/contexts/auth/context/index.tsx");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth */ "./src/front/services/auth/index.ts");

// #region imports



// #endregion
// #region PROVIDER component
var AuthProvider = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthProvider, _super);
    // #region lifecyle
    function AuthProvider(props) {
        var _this = _super.call(this, props) || this;
        // #endregion
        _this.checkIsAuthenticated = function () {
            var checkUserHasId = function (user) { return user && user.user && user.user.id; };
            var user = _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].getUserInfo() ? _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].getUserInfo() : null;
            var isAuthenticated = !!_services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].getToken() && !!checkUserHasId(user);
            _this.setState({
                isAuthenticated: isAuthenticated,
            });
            return isAuthenticated;
        };
        _this.checkTokenIsExpired = function () {
            var token = _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].getToken();
            var isExpiredToken = _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].isExpiredToken(token);
            _this.setState({
                isExpiredToken: isExpiredToken,
            });
            return isExpiredToken;
        };
        _this.setToken = function (token) {
            if (token === void 0) { token = ''; }
            _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].setToken(token);
            _this.setState({ token: token, isAuthenticated: true });
        };
        _this.setUserInfo = function (user) {
            if (typeof user === 'object') {
                _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].setUserInfo(user);
                _this.setState({ user: user });
            }
        };
        _this.disconnectUser = function () {
            _services_auth__WEBPACK_IMPORTED_MODULE_3__["default"].clearAllAppStorage();
            _this.checkIsAuthenticated();
            return true;
        };
        // initialize state in constructor (otherwise function won't be passed)
        _this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.props.initialState, { checkIsAuthenticated: _this.checkIsAuthenticated, checkTokenIsExpired: _this.checkTokenIsExpired, disconnectUser: _this.disconnectUser, setToken: _this.setToken, setUserInfo: _this.setUserInfo });
        return _this;
    }
    AuthProvider.prototype.render = function () {
        var children = this.props.children;
        var value = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.state);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_2__["AuthContextProvider"], { value: value }, children);
    };
    AuthProvider.defaultProps = {
        initialState: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _context__WEBPACK_IMPORTED_MODULE_2__["authDefault"]),
    };
    return AuthProvider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (AuthProvider);
// #endregion


/***/ }),

/***/ "./src/front/hoc/utils/index.ts":
/*!**************************************!*\
  !*** ./src/front/hoc/utils/index.ts ***!
  \**************************************/
/*! exports provided: getDisplayName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return getDisplayName; });
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}


/***/ }),

/***/ "./src/front/hoc/withMainLayout/index.ts":
/*!***********************************************!*\
  !*** ./src/front/hoc/withMainLayout/index.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withMainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withMainLayout */ "./src/front/hoc/withMainLayout/withMainLayout.tsx");
// #region imports

// #endregion
/* harmony default export */ __webpack_exports__["default"] = (_withMainLayout__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/front/hoc/withMainLayout/withMainLayout.tsx":
/*!*********************************************************!*\
  !*** ./src/front/hoc/withMainLayout/withMainLayout.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navigation */ "./src/front/components/navigation/index.tsx");
/* harmony import */ var _components_backToTop_BackToTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/backToTop/BackToTop */ "./src/front/components/backToTop/BackToTop.tsx");
/* harmony import */ var _config_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/navigation */ "./src/front/config/navigation.ts");
/* harmony import */ var _services_sw_registerServiceWorker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/sw/registerServiceWorker */ "./src/front/services/sw/registerServiceWorker.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/index */ "./src/front/hoc/utils/index.ts");

// #region imports









// #endregion
// #region withMainLayout HOC
function withMainLayout( /* no args option yet, but could pass them here */) {
    return function (BaseComponent) {
        // #region returned Component
        var WithMainLayout = /** @class */ (function (_super) {
            tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WithMainLayout, _super);
            function WithMainLayout() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = { navModel: _config_navigation__WEBPACK_IMPORTED_MODULE_7__["default"] };
                // #endregion
                /* eslint-disable no-unused-vars */
                _this.handleLeftNavItemClick = function (event, viewName) {
                    // something to do here?
                };
                _this.handleRightNavItemClick = function (event, viewName) {
                    // something to do here?
                };
                return _this;
                /* eslint-enable no-unused-vars */
            }
            // #region lifecycle
            WithMainLayout.prototype.componentDidMount = function () {
                // register service worker (no worry about multiple attempts to register, browser will ignore when already registered)
                Object(_services_sw_registerServiceWorker__WEBPACK_IMPORTED_MODULE_8__["default"])();
            };
            WithMainLayout.prototype.render = function () {
                /* eslint-disable no-unused-vars */
                var _a = this.props, history = _a.history, location = _a.location, match = _a.match, passProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["history", "location", "match"]);
                /* eslint-enable no-unused-vars */
                var navModel = this.state.navModel;
                return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { id: "appContainer" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_navigation__WEBPACK_IMPORTED_MODULE_5__["default"], { navModel: navModel, handleLeftNavItemClick: this.handleLeftNavItemClick, handleRightNavItemClick: this.handleRightNavItemClick }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], { fluid: true },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BaseComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, passProps))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_backToTop_BackToTop__WEBPACK_IMPORTED_MODULE_6__["default"], { minScrollY: 40, scrollTo: "appContainer" })));
            };
            WithMainLayout.displayName = "withMainLayout" + Object(_utils_index__WEBPACK_IMPORTED_MODULE_9__["getDisplayName"])(BaseComponent);
            return WithMainLayout;
        }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
        // #region add static displayName for dev
        // /* eslint-disable no-process-env */
        // if (process.env.NODE_ENV !== 'production') {
        //   // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
        //   WithMainLayout.displayName = wrapDisplayName(
        //     BaseComponent,
        //     'withMainLayout',
        //   );
        // }
        // /* eslint-enable no-process-env */
        // #endregion
        return Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(WithMainLayout);
    };
}
// #endregion
/* harmony default export */ __webpack_exports__["default"] = (withMainLayout);


/***/ }),

/***/ "./src/front/index.tsx":
/*!*****************************!*\
  !*** ./src/front/index.tsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Root */ "./src/front/Root.tsx");







// #region constants
var ELEMENT_TO_BOOTSTRAP = 'root';
var bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// #endregion
// #region globals (styles, polyfill ...)
// smoothscroll polyfill
smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default.a.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;
window.snapSaveState = function () { return Object(loadable_components__WEBPACK_IMPORTED_MODULE_4__["getState"])(); };
// #endregion
// #region render (with hot reload if dev)
var renderApp = function (RootComponent) {
    var Application = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RootComponent, null))); };
    // needed for react-snap:
    if (bootstrapedElement && bootstrapedElement.hasChildNodes()) {
        Object(loadable_components__WEBPACK_IMPORTED_MODULE_4__["loadComponents"])().then(function () {
            Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Application, null), bootstrapedElement);
        });
    }
    else {
        Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Application, null), bootstrapedElement);
    }
};
renderApp(_Root__WEBPACK_IMPORTED_MODULE_6__["default"]);
if (false) {}
// #endregion


/***/ }),

/***/ "./src/front/routes/MainRoutes.tsx":
/*!*****************************************!*\
  !*** ./src/front/routes/MainRoutes.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/front/routes/routes.ts");
// #region imports



// #endregion
var MainRoutes = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/", component: _routes__WEBPACK_IMPORTED_MODULE_2__["Home"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/about", component: _routes__WEBPACK_IMPORTED_MODULE_2__["About"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["PrivateRoute"], { path: "/protected", component: _routes__WEBPACK_IMPORTED_MODULE_2__["Protected"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _routes__WEBPACK_IMPORTED_MODULE_2__["PageNotFound"] })));
};
/* harmony default export */ __webpack_exports__["default"] = (MainRoutes);


/***/ }),

/***/ "./src/front/routes/routes.ts":
/*!************************************!*\
  !*** ./src/front/routes/routes.ts ***!
  \************************************/
/*! exports provided: Home, About, Protected, PageNotFound, PrivateRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Protected", function() { return Protected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return PageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoute", function() { return PrivateRoute; });
/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js");
// #region imports

// #endregion
var Home = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../pages/home */ "./src/front/pages/home/index.ts")); });
var About = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../pages/about */ "./src/front/pages/about/index.ts")); });
var Protected = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../pages/protected */ "./src/front/pages/protected/index.ts")); });
var PageNotFound = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ../pages/pageNotFound */ "./src/front/pages/pageNotFound/index.ts")); });
var PrivateRoute = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/privateRoute */ "./src/front/components/privateRoute/index.tsx"));
});


/***/ }),

/***/ "./src/front/services/auth/index.ts":
/*!******************************************!*\
  !*** ./src/front/services/auth/index.ts ***!
  \******************************************/
/*! exports provided: auth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_is_after__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/is_after */ "./node_modules/date-fns/is_after/index.js");
/* harmony import */ var date_fns_is_after__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_is_after__WEBPACK_IMPORTED_MODULE_1__);
// #region imports


// #endregion
// #region constants
var TOKEN_KEY = 'token';
var USER_INFO = 'userInfo';
var APP_PERSIST_STORES_TYPES = [
    'localStorage',
    'sessionStorage',
];
var parse = JSON.parse;
var stringify = JSON.stringify;
// #endregion
/*
  auth object
  -> store "TOKEN_KEY"
  - default storage is "localStorage"
  - default token key is 'token'
 */
var auth = {
    // /////////////////////////////////////////////////////////////
    // TOKEN
    // /////////////////////////////////////////////////////////////
    /**
     * get token from localstorage
     *
     * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
     * @param {any} [tokenKey=TOKEN_KEY]  optionnal parameter to specify a token key
     * @returns {string} token value
     */
    getToken: function (fromStorage, tokenKey) {
        if (fromStorage === void 0) { fromStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (tokenKey === void 0) { tokenKey = TOKEN_KEY; }
        // localStorage:
        if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
            return (localStorage && localStorage.getItem(tokenKey)) || null;
        }
        // sessionStorage:
        if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
            return (sessionStorage && sessionStorage.getItem(tokenKey)) || null;
        }
        // default:
        return null;
    },
    /**
     * set the token value into localstorage (managed by localforage)
     *
     * @param {string} [value=''] token value
     * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
     * @param {any} [tokenKey='token'] token key
     * @returns {boolean} success/failure flag
     */
    setToken: function (value, toStorage, tokenKey) {
        if (value === void 0) { value = ''; }
        if (toStorage === void 0) { toStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (tokenKey === void 0) { tokenKey = TOKEN_KEY; }
        if (!value || value.length <= 0) {
            return false;
        }
        // localStorage:
        if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
            if (localStorage) {
                localStorage.setItem(tokenKey, value);
                return true;
            }
        }
        // sessionStorage:
        if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
            if (sessionStorage) {
                sessionStorage.setItem(tokenKey, value);
                return true;
            }
        }
        return false;
    },
    /**
     * check
     * - if token key contains a valid token value (defined and not an empty value)
     * - if the token expiration date is passed
     *
     *
     * Note: 'isAuthenticated' just checks 'tokenKey' on store (localStorage by default or sessionStorage)
     *
     * You may think: 'ok I just put an empty token key and I have access to protected routes?''
     *    -> answer is:  YES^^
     * BUT
     * -> : your backend will not recognize a wrong token so private data or safe and you protected view could be a bit ugly without any data.
     *
     * => ON CONCLUSION: this aim of 'isAuthenticated'
     *    -> is to help for a better "user experience"  (= better than displaying a view with no data since server did not accept the user).
     *    -> it is not a security purpose (security comes from backend, since frontend is easily hackable => user has access to all your frontend)
     *
     * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
     * @param {any} [tokenKey=TOKEN_KEY] token key
     * @returns {bool} is authenticed response
     */
    isAuthenticated: function (fromStorage, tokenKey) {
        if (fromStorage === void 0) { fromStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (tokenKey === void 0) { tokenKey = TOKEN_KEY; }
        // localStorage:
        if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
            if (localStorage && localStorage.getItem(tokenKey)) {
                return true;
            }
            else {
                return false;
            }
        }
        // sessionStorage:
        if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
            if (sessionStorage && sessionStorage.getItem(tokenKey)) {
                return true;
            }
            else {
                return false;
            }
        }
        // default:
        return false;
    },
    /**
     * delete token
     *
     * @param {any} [tokenKey='token'] token key
     * @returns {bool} success/failure flag
     */
    clearToken: function (storage, tokenKey) {
        if (storage === void 0) { storage = APP_PERSIST_STORES_TYPES[0]; }
        if (tokenKey === void 0) { tokenKey = TOKEN_KEY; }
        // localStorage:
        if (localStorage && localStorage[tokenKey]) {
            localStorage.removeItem(tokenKey);
            return true;
        }
        // sessionStorage:
        if (sessionStorage && sessionStorage[tokenKey]) {
            sessionStorage.removeItem(tokenKey);
            return true;
        }
        return false;
    },
    /**
     * return expiration date from token
     *
     * @param {string} encodedToken - base 64 token received from server and stored in local storage
     * @returns {date | null} returns expiration date or null id expired props not found in decoded token
     */
    getTokenExpirationDate: function (encodedToken) {
        if (!encodedToken) {
            return new Date(0); // is expired
        }
        var token = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(encodedToken);
        if (!token.exp) {
            return new Date(0); // is expired
        }
        var expirationDate = new Date(token.exp * 1000);
        return expirationDate;
    },
    /**
     * tell is token is expired (compared to now)
     *
     * @param {string} encodedToken - base 64 token received from server and stored in local storage
     * @returns {bool} returns true if expired else false
     */
    isExpiredToken: function (encodedToken) {
        var expirationDate = this.getTokenExpirationDate(encodedToken);
        var rightNow = new Date();
        var isExpiredToken = date_fns_is_after__WEBPACK_IMPORTED_MODULE_1___default()(rightNow, expirationDate);
        return isExpiredToken;
    },
    // /////////////////////////////////////////////////////////////
    // USER_INFO
    // /////////////////////////////////////////////////////////////
    /**
     * get user info from localstorage
     *
     * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
     * @param {any} [userInfoKey='userInfo']  optionnal parameter to specify a token key
     * @returns {string} token value
     */
    getUserInfo: function (fromStorage, userInfoKey) {
        if (fromStorage === void 0) { fromStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (userInfoKey === void 0) { userInfoKey = USER_INFO; }
        // localStorage:
        if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
            return ((localStorage && parse(localStorage.getItem(userInfoKey) || '')) || null);
        }
        // sessionStorage:
        if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
            return ((sessionStorage && parse(sessionStorage.getItem(userInfoKey) || '')) ||
                null);
        }
        // default:
        return null;
    },
    /**
     * set the userInfo value into localstorage
     *
     * @param {object} [value=''] token value
     * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
     * @param {any} [userInfoKey='userInfo'] token key
     * @returns {boolean} success/failure flag
     */
    setUserInfo: function (value, toStorage, userInfoKey) {
        if (value === void 0) { value = ''; }
        if (toStorage === void 0) { toStorage = APP_PERSIST_STORES_TYPES[0]; }
        if (userInfoKey === void 0) { userInfoKey = USER_INFO; }
        if (!value || value.length <= 0) {
            return;
        }
        // localStorage:
        if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
            if (localStorage) {
                localStorage.setItem(userInfoKey, stringify(value));
            }
        }
        // sessionStorage:
        if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
            if (sessionStorage) {
                sessionStorage.setItem(userInfoKey, stringify(value));
            }
        }
    },
    /**
     * delete userInfo
     *
     * @param {string} [userInfoKey='userInfo'] token key
     * @returns {bool} success/failure flag
     */
    clearUserInfo: function (userInfoKey) {
        if (userInfoKey === void 0) { userInfoKey = USER_INFO; }
        // localStorage:
        if (localStorage && localStorage[userInfoKey]) {
            localStorage.removeItem(userInfoKey);
        }
        // sessionStorage:
        if (sessionStorage && sessionStorage[userInfoKey]) {
            sessionStorage.removeItem(userInfoKey);
        }
    },
    // /////////////////////////////////////////////////////////////
    // COMMON
    // /////////////////////////////////////////////////////////////
    /**
     * forget me method: clear all
     * @returns {bool} success/failure flag
     */
    clearAllAppStorage: function () {
        if (localStorage) {
            localStorage.clear();
        }
        if (sessionStorage) {
            sessionStorage.clear();
        }
    },
};
/* harmony default export */ __webpack_exports__["default"] = (auth);


/***/ }),

/***/ "./src/front/services/sw/registerServiceWorker.ts":
/*!********************************************************!*\
  !*** ./src/front/services/sw/registerServiceWorker.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/appConfig */ "./src/front/config/appConfig.ts");
// #region  imports

// #endregion
// #region constants
var swPath = _config_appConfig__WEBPACK_IMPORTED_MODULE_0__["default"].sw.path;
// #endregion
function registerServiceWorker() {
    if (typeof window !== undefined) {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                // $FlowIgnore
                navigator.serviceWorker
                    .register(swPath)
                    .then(function (registration) {
                    console.log('SW registered: ', registration);
                })
                    .catch(function (registrationError) {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (registerServiceWorker);


/***/ }),

/***/ "./src/front/style/GlobalStyles.ts":
/*!*****************************************!*\
  !*** ./src/front/style/GlobalStyles.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

// #region imports

// #endregion
var GlobalStyle = function () { return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"], ["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"]))); };
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);
var templateObject_1;


/***/ })

/******/ });
//# sourceMappingURL=app.9261c024a326760f2aac.js.map