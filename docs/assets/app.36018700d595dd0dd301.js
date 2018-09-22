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
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + "36018700d595dd0dd301" + ".js"
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
/******/ 				var head = document.getElementsByTagName('head')[0];
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
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
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
/******/ 				head.appendChild(script);
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
/******/ 	deferredModules.push(["./src/front/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/front/Root.js":
/*!***************************!*\
  !*** ./src/front/Root.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hoc_withMainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hoc/withMainLayout */ "./src/front/hoc/withMainLayout/index.js");
/* harmony import */ var _routes_MainRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/MainRoutes */ "./src/front/routes/MainRoutes.js");
/* harmony import */ var _components_scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/scrollToTop/ScrollToTop */ "./src/front/components/scrollToTop/ScrollToTop.js");
/* harmony import */ var _components_logoutRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/logoutRoute */ "./src/front/components/logoutRoute/index.js");
/* harmony import */ var _contexts_auth_providerComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contexts/auth/providerComponent */ "./src/front/contexts/auth/providerComponent/index.js");
// @flow
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// #region imports




// #region import createHistory from hashHistory or BrowserHistory:
// import createHistory from 'history/createHashHistory';

// #endregion





// #endregion
// #region constants
var MainApp = recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(_hoc_withMainLayout__WEBPACK_IMPORTED_MODULE_5__["default"])())(_routes_MainRoutes__WEBPACK_IMPORTED_MODULE_6__["default"]);
var history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default()();
// we lazy load pages:
var LoadableLogin = Object(loadable_components__WEBPACK_IMPORTED_MODULE_3__["default"])(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pages/login */ "./src/front/pages/login/index.js")); });
var LoadablePageNotFound = Object(loadable_components__WEBPACK_IMPORTED_MODULE_3__["default"])(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./pages/pageNotFound */ "./src/front/pages/pageNotFound/index.js")); });
// #endregion
var Root = /** @class */ (function (_super) {
    __extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Router"], { history: history },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_auth_providerComponent__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_scrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: "/login", component: LoadableLogin }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainApp, null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_logoutRoute__WEBPACK_IMPORTED_MODULE_8__["default"], { path: "/logout" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: LoadablePageNotFound }))))));
    };
    return Root;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Root);


/***/ }),

/***/ "./src/front/components/backToTop/BackToTop.js":
/*!*****************************************************!*\
  !*** ./src/front/components/backToTop/BackToTop.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backToTopButton_BackToTopButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backToTopButton/BackToTopButton */ "./src/front/components/backToTop/backToTopButton/BackToTopButton.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_2__);
// @flow
/* eslint-disable no-undefined */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// #region imports



// #endregion
var BackToTop = /** @class */ (function (_super) {
    __extends(BackToTop, _super);
    function BackToTop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            windowScrollY: 0,
            showBackButton: false,
            tickingScollObserve: false,
        };
        // #endregion
        // #region on windows scroll callback
        _this.handleWindowScroll = function () {
            if (window) {
                var _a = _this.state, windowScrollY_1 = _a.windowScrollY, tickingScollObserve = _a.tickingScollObserve;
                var minScrollY_1 = _this.props.minScrollY;
                /* eslint-disable no-undefined */
                var currentWindowScrollY_1 = window.pageYOffset !== undefined
                    ? window.pageYOffset
                    : (document.documentElement ||
                        document.body.parentNode ||
                        document.body).scrollTop;
                /* eslint-enable no-undefined */
                // scroll event fires to often, using window.requestAnimationFrame to limit computations
                if (!tickingScollObserve) {
                    window.requestAnimationFrame(function () {
                        if (windowScrollY_1 !== currentWindowScrollY_1) {
                            var shouldShowBackButton = currentWindowScrollY_1 >= minScrollY_1 ? true : false;
                            _this.setState({
                                windowScrollY: currentWindowScrollY_1,
                                showBackButton: shouldShowBackButton,
                            });
                        }
                        _this.setState({ tickingScollObserve: false });
                    });
                }
                _this.setState({ tickingScollObserve: true });
            }
        };
        // #endregion
        // #region on button click (smooth scroll)
        _this.handlesOnBackButtonClick = function (event) {
            if (event) {
                event.preventDefault();
            }
            var minScrollY = _this.props.minScrollY;
            var windowScrollY = _this.state.windowScrollY;
            if (window && windowScrollY && windowScrollY > minScrollY) {
                // using here smoothscroll-polyfill
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                // smoothScroll.scrollTo(scrollTo, this.scrollDone);
            }
        };
        _this.scrollDone = function () {
            var onScrollDone = _this.props.onScrollDone;
            if (onScrollDone) {
                onScrollDone();
            }
        };
        return _this;
        // #endregion
    }
    // #region lifecycle methods
    BackToTop.prototype.componentWillMount = function () {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', this.handleWindowScroll);
        }
    };
    BackToTop.prototype.componentWillUnmount = function () {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', this.handleWindowScroll);
        }
    };
    BackToTop.prototype.render = function () {
        var _this = this;
        var showBackButton = this.state.showBackButton;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"], { style: { x: Object(react_motion__WEBPACK_IMPORTED_MODULE_2__["spring"])(showBackButton ? 0 : 120, react_motion__WEBPACK_IMPORTED_MODULE_2__["presets"].stiff) } }, function (_a) {
            var x = _a.x;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_backToTopButton_BackToTopButton__WEBPACK_IMPORTED_MODULE_1__["default"], { position: 'bottom-right', onClick: _this.handlesOnBackButtonClick, motionStyle: {
                    WebkitTransform: "translate3d(" + x + "px, 0, 0)",
                    transform: "translate3d(" + x + "px, 0, 0)",
                } }));
        }));
    };
    BackToTop.defaultProps = {
        minScrollY: 120,
        onScrollDone: function () { },
    };
    return BackToTop;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (BackToTop);


/***/ }),

/***/ "./src/front/components/backToTop/backToTopButton/BackToTopButton.js":
/*!***************************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/BackToTopButton.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UpIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpIcon */ "./src/front/components/backToTop/backToTopButton/UpIcon.js");
/* harmony import */ var _styled_WithRightMargin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled/WithRightMargin */ "./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.js");
// @flow
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// #region imports




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
var BackToTopButton = function (_a) {
    var onClick = _a.onClick, position = _a.position, children = _a.children, motionStyle = _a.motionStyle;
    var buttonStyle = setPosition(position, __assign({}, motionStyle, defaultStyle));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { style: buttonStyle, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
            btn: true,
        }), onClick: onClick },
        !children && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_WithRightMargin__WEBPACK_IMPORTED_MODULE_3__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpIcon__WEBPACK_IMPORTED_MODULE_2__["default"], { color: '#F1F1F1' }))),
        !!children && children));
};
// #region statics
BackToTopButton.defaultProps = {
    position: 'bottom-right',
};
BackToTopButton.displayName = 'BackToTopButton';
// #endregion
// #region helpers
function setPosition(position, refStyle) {
    if (position === void 0) { position = 'bottom-right'; }
    if (refStyle === void 0) { refStyle = defaultStyle; }
    var style = __assign({}, refStyle);
    switch (position) {
        case 'bottom-right':
            style.right = sideOffset;
            style.left = '';
            return style;
        case 'bottom-left':
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

/***/ "./src/front/components/backToTop/backToTopButton/UpIcon.js":
/*!******************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/UpIcon.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// @flow
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

/***/ "./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.js":
/*!**********************************************************************************!*\
  !*** ./src/front/components/backToTop/backToTopButton/styled/WithRightMargin.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
// @flow
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// #region imports

// #endregion
var WithRightMargin = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-right: 10px;\n"], ["\n  margin-right: 10px;\n"])));
/* harmony default export */ __webpack_exports__["default"] = (WithRightMargin);
var templateObject_1;


/***/ }),

/***/ "./src/front/components/logoutRoute/LogoutRoute.js":
/*!*********************************************************!*\
  !*** ./src/front/components/logoutRoute/LogoutRoute.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
// @flow
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// #region imports


// #endregion
var LogoutRoute = /** @class */ (function (_super) {
    __extends(LogoutRoute, _super);
    function LogoutRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // #region lifecycle
    LogoutRoute.prototype.componentDidMount = function () {
        var disconnectUser = this.props.disconnectUser;
        disconnectUser();
    };
    LogoutRoute.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], __assign({}, this.props),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: { pathname: '/login' } })));
    };
    return LogoutRoute;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(LogoutRoute));


/***/ }),

/***/ "./src/front/components/logoutRoute/index.js":
/*!***************************************************!*\
  !*** ./src/front/components/logoutRoute/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LogoutRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoutRoute */ "./src/front/components/logoutRoute/LogoutRoute.js");
/* harmony import */ var _contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/auth/consumerHOC */ "./src/front/contexts/auth/consumerHOC/index.js");
// @flow
// #region imports



// #endregion
/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_0___default()(Object(_contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_2__["default"])())(_LogoutRoute__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./src/front/components/navigation/NavigationBar.js":
/*!**********************************************************!*\
  !*** ./src/front/components/navigation/NavigationBar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
// @flow
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// #region imports



// #endregion
var NavigationBar = /** @class */ (function (_super) {
    __extends(NavigationBar, _super);
    function NavigationBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
        };
        // #endregion
        // #region navigation bar toggle
        _this.toggle = function (evt) {
            if (evt) {
                evt.preventDefault();
            }
            _this.setState(function (_a) {
                var prevIsOpened = _a.isOpen;
                return ({ isOpen: !prevIsOpened });
            });
        };
        // #endregion
        // #region handlesNavItemClick event
        _this.handlesNavItemClick = function (link) {
            if (link === void 0) { link = '/'; }
            return function (evt) {
                if (evt) {
                    evt.preventDefault();
                }
                var history = _this.props.history;
                history.push(link);
            };
        };
        // #endregion
        // #region disconnect
        _this.handlesDisconnect = function (evt) {
            if (evt) {
                evt.preventDefault();
            }
            var _a = _this.props, history = _a.history, disconnectUser = _a.disconnectUser;
            disconnectUser();
            history.push('/');
        };
        return _this;
        // #endregion
    }
    // #region lifecycle
    NavigationBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, brand = _a.brand, rightLinks = _a.navModel.rightLinks, isAuthenticated = _a.isAuthenticated;
        var isOpen = this.state.isOpen;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], { color: "light", light: true, expand: "md" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], { href: "/" }, brand),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], { onClick: this.toggle }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], { isOpen: isOpen, navbar: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], { className: "ml-auto", navbar: true },
                    rightLinks.map(function (_a, index) {
                        var label = _a.label, link = _a.link, viewName = _a.viewName;
                        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], { key: "" + index },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { href: "#", onClick: _this.handlesNavItemClick(link) }, label)));
                    }),
                    isAuthenticated && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { href: "#", onClick: this.handlesDisconnect }, "Disconnect")))))));
    };
    NavigationBar.defaultProps = {
        brand: 'brand',
    };
    return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(NavigationBar));


/***/ }),

/***/ "./src/front/components/navigation/index.js":
/*!**************************************************!*\
  !*** ./src/front/components/navigation/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/auth/consumerHOC */ "./src/front/contexts/auth/consumerHOC/index.js");
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationBar */ "./src/front/components/navigation/NavigationBar.js");
// @flow
// #region imports



// #endregion
/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_0___default()(Object(_contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_1__["default"])())(_NavigationBar__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ }),

/***/ "./src/front/components/scrollToTop/ScrollToTop.js":
/*!*********************************************************!*\
  !*** ./src/front/components/scrollToTop/ScrollToTop.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
// @flow
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// #region imports


// #endregion
var ScrollToTop = /** @class */ (function (_super) {
    __extends(ScrollToTop, _super);
    function ScrollToTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // #region lifecycle
    ScrollToTop.prototype.componentDidUpdate = function (prevProps) {
        if (window) {
            var prevLocation = prevProps.location;
            var nextLocation = this.props.location;
            if (prevLocation !== nextLocation) {
                window.scrollTo(0, 0);
            }
        }
    };
    ScrollToTop.prototype.render = function () {
        var children = this.props.children;
        return children;
    };
    return ScrollToTop;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ScrollToTop));


/***/ }),

/***/ "./src/front/config/appConfig.js":
/*!***************************************!*\
  !*** ./src/front/config/appConfig.js ***!
  \***************************************/
/*! exports provided: appConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
// @flow
var appConfig = {
    DEV_MODE: true,
    // sw path
    sw: {
        path: 'public/assets/sw.js',
    },
};
/* harmony default export */ __webpack_exports__["default"] = (appConfig);


/***/ }),

/***/ "./src/front/config/navigation.js":
/*!****************************************!*\
  !*** ./src/front/config/navigation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// @flow
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

/***/ "./src/front/contexts/auth/consumerHOC/index.js":
/*!******************************************************!*\
  !*** ./src/front/contexts/auth/consumerHOC/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js");
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index */ "./src/front/contexts/auth/context/index.js");
// @flow
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// #region imports



// #endregion
// #region CONSUMER HOC
function withAuth( /* additionnal args if needed */) {
    return function (BaseComponent) {
        var WithAuth = /** @class */ (function (_super) {
            __extends(WithAuth, _super);
            function WithAuth() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WithAuth.prototype.render = function () {
                var passProps = __rest(this.props, []);
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_index__WEBPACK_IMPORTED_MODULE_2__["AuthContextConsumer"], null, function (fromAuthProps) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, __assign({}, fromAuthProps, passProps))); }));
            };
            return WithAuth;
        }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
        // #region add static displayName for dev
        /* eslint-disable no-process-env */
        if (true) {
            WithAuth.displayName = recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default()(BaseComponent, 'WithAuth');
        }
        /* eslint-enable no-process-env */
        // #endregion
        return WithAuth;
    };
}
// #endregion


/***/ }),

/***/ "./src/front/contexts/auth/context/index.js":
/*!**************************************************!*\
  !*** ./src/front/contexts/auth/context/index.js ***!
  \**************************************************/
/*! exports provided: authDefault, AuthContextProvider, AuthContextConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authDefault", function() { return authDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextProvider", function() { return AuthContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextConsumer", function() { return AuthContextConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// @flow
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// #region imports

// #endregion
// #region default context value
var authDefault = {
    isAuthenticated: false,
    lastAuthDate: null,
};
// #endregion
// #region context
var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(__assign({}, authDefault));
var AuthContextProvider = AuthContext.Provider;
var AuthContextConsumer = AuthContext.Consumer;
// #endregion


/***/ }),

/***/ "./src/front/contexts/auth/providerComponent/index.js":
/*!************************************************************!*\
  !*** ./src/front/contexts/auth/providerComponent/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./src/front/contexts/auth/context/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth */ "./src/front/services/auth/index.js");
// @flow
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// #region imports



// #endregion
// #region PROVIDER component
var AuthProvider = /** @class */ (function (_super) {
    __extends(AuthProvider, _super);
    // #region lifecyle
    function AuthProvider(props) {
        var _this = _super.call(this, props) || this;
        // #endregion
        _this.checkIsAuthenticated = function () {
            var checkUserHasId = function (user) { return user && user.id; };
            var user = _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].getUserInfo() ? _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].getUserInfo() : null;
            var isAuthenticated = _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].getToken() && checkUserHasId(user);
            _this.setState({
                isAuthenticated: isAuthenticated,
            });
            return isAuthenticated;
        };
        _this.checkTokenIsExpired = function () {
            var token = _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].getToken();
            var isExpiredToken = _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].isExpiredToken(token);
            _this.setState({
                isExpiredToken: isExpiredToken,
            });
            return isExpiredToken;
        };
        _this.setToken = function (token) {
            if (token === void 0) { token = ''; }
            _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].setToken(token);
            _this.setState({ token: token, isAuthenticated: true });
        };
        _this.setUserInfo = function (user) {
            if (user === void 0) { user = null; }
            if (typeof user === 'object') {
                _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].setUserInfo(user);
                _this.setState({ user: user });
            }
        };
        _this.disconnectUser = function () {
            _services_auth__WEBPACK_IMPORTED_MODULE_2__["default"].clearAllAppStorage();
            _this.checkIsAuthenticated();
            return true;
        };
        // initialize state in constructor (otherwise function won't be passed)
        _this.state = __assign({}, _this.props.initialState, { checkIsAuthenticated: _this.checkIsAuthenticated, checkTokenIsExpired: _this.checkTokenIsExpired, disconnectUser: _this.disconnectUser, setToken: _this.setToken, setUserInfo: _this.setUserInfo });
        return _this;
    }
    AuthProvider.prototype.render = function () {
        var children = this.props.children;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["AuthContextProvider"], { value: __assign({}, this.state) },
            ' ',
            children,
            ' '));
    };
    AuthProvider.defaultProps = {
        initialState: {
            token: null,
            user: null,
            isAuthenticated: false,
            isExpiredToken: true,
            lastAuthDate: null,
        },
    };
    return AuthProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (AuthProvider);
// #endregion


/***/ }),

/***/ "./src/front/hoc/withMainLayout/index.js":
/*!***********************************************!*\
  !*** ./src/front/hoc/withMainLayout/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withMainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withMainLayout */ "./src/front/hoc/withMainLayout/withMainLayout.js");
// @flow
// #region imports


// #endregion
/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_0___default()()(_withMainLayout__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./src/front/hoc/withMainLayout/withMainLayout.js":
/*!********************************************************!*\
  !*** ./src/front/hoc/withMainLayout/withMainLayout.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js");
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var reactstrap_lib_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/lib/Container */ "./node_modules/reactstrap/lib/Container.js");
/* harmony import */ var reactstrap_lib_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navigation */ "./src/front/components/navigation/index.js");
/* harmony import */ var _components_backToTop_BackToTop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/backToTop/BackToTop */ "./src/front/components/backToTop/BackToTop.js");
/* harmony import */ var _config_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/navigation */ "./src/front/config/navigation.js");
/* harmony import */ var _services_sw_registerServiceWorker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/sw/registerServiceWorker */ "./src/front/services/sw/registerServiceWorker.js");
// @flow
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// #region imports









// #endregion
// #region withMainLayout HOC
function withMainLayout( /* no args option yet, but could pass them here */) {
    return function (BaseComponent) {
        // #region returned Component
        var WithMainLayout = /** @class */ (function (_super) {
            __extends(WithMainLayout, _super);
            function WithMainLayout() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = { navModel: _config_navigation__WEBPACK_IMPORTED_MODULE_7__["default"] };
                // #endregion
                /* eslint-disable no-unused-vars*/
                _this.handleLeftNavItemClick = function (event, viewName) {
                    // something to do here?
                };
                _this.handleRightNavItemClick = function (event, viewName) {
                    // something to do here?
                };
                return _this;
                /* eslint-enable no-unused-vars*/
            }
            // #region lifecycle
            WithMainLayout.prototype.componentDidMount = function () {
                // register service worker (no worry about multiple attempts to register, browser will ignore when already registered)
                Object(_services_sw_registerServiceWorker__WEBPACK_IMPORTED_MODULE_8__["default"])();
            };
            WithMainLayout.prototype.render = function () {
                /* eslint-disable no-unused-vars */
                var _a = this.props, history = _a.history, location = _a.location, match = _a.match, passProps = __rest(_a, ["history", "location", "match"]);
                /* eslint-enable no-unused-vars */
                var navModel = this.state.navModel;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: "appContainer" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navigation__WEBPACK_IMPORTED_MODULE_5__["default"], { brand: navModel.brand, navModel: navModel, handleLeftNavItemClick: this.handleLeftNavItemClick, handleRightNavItemClick: this.handleRightNavItemClick }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Container__WEBPACK_IMPORTED_MODULE_4___default.a, { fluid: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, __assign({}, passProps))),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_backToTop_BackToTop__WEBPACK_IMPORTED_MODULE_6__["default"], { minScrollY: 40, scrollTo: 'appContainer' })));
            };
            return WithMainLayout;
        }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
        // #region add static displayName for dev
        /* eslint-disable no-process-env */
        if (true) {
            // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
            WithMainLayout.displayName = recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default()(BaseComponent, 'withMainLayout');
        }
        /* eslint-enable no-process-env */
        // #endregion
        return recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(WithMainLayout);
    };
}
// #endregion
/* harmony default export */ __webpack_exports__["default"] = (withMainLayout);


/***/ }),

/***/ "./src/front/index.js":
/*!****************************!*\
  !*** ./src/front/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tap-event-plugin */ "./node_modules/react-tap-event-plugin/src/injectTapEventPlugin.js");
/* harmony import */ var react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_injectGlobalStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style/injectGlobalStyles */ "./src/front/style/injectGlobalStyles.js");
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Root */ "./src/front/Root.js");
// @flow
// #region imports
 // NOTE: REALLY important to avoid "regeneratorRuntime is not defined"









// #endregion
// #region constants
var ELEMENT_TO_BOOTSTRAP = 'root';
var bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// #endregion
// #region globals (styles, polyfill ...)
// smoothscroll polyfill
smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_5___default.a.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;
window.snapSaveState = function () { return Object(loadable_components__WEBPACK_IMPORTED_MODULE_6__["getState"])(); };
Object(_style_injectGlobalStyles__WEBPACK_IMPORTED_MODULE_8__["default"])();
react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_3___default()();
// #endregion
// #region render (with hot reload if dev)
var renderApp = function (RootComponent) {
    var Application = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_4__["AppContainer"], null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RootComponent, null))); };
    // needed for react-snap:
    if (bootstrapedElement.hasChildNodes()) {
        Object(loadable_components__WEBPACK_IMPORTED_MODULE_6__["loadComponents"])().then(function () {
            Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["hydrate"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Application, null), bootstrapedElement);
        });
    }
    else {
        Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Application, null), bootstrapedElement);
    }
};
renderApp(_Root__WEBPACK_IMPORTED_MODULE_9__["default"]);
if (false) {}
// #endregion


/***/ }),

/***/ "./src/front/routes/MainRoutes.js":
/*!****************************************!*\
  !*** ./src/front/routes/MainRoutes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/front/routes/routes.js");
// @flow
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

/***/ "./src/front/routes/routes.js":
/*!************************************!*\
  !*** ./src/front/routes/routes.js ***!
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
// @flow
// #region imports

// #endregion
var Home = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../pages/home */ "./src/front/pages/home/index.js")); });
var About = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../pages/about */ "./src/front/pages/about/index.js")); });
var Protected = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../pages/protected */ "./src/front/pages/protected/index.js")); });
var PageNotFound = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () { return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ../pages/pageNotFound */ "./src/front/pages/pageNotFound/index.js")); });
var PrivateRoute = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
    return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/privateRoute */ "./src/front/components/privateRoute/index.js"));
});


/***/ }),

/***/ "./src/front/services/auth/index.js":
/*!******************************************!*\
  !*** ./src/front/services/auth/index.js ***!
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
// @flow
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
            return;
        }
        // localStorage:
        if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
            if (localStorage) {
                localStorage.setItem(tokenKey, value);
            }
        }
        // sessionStorage:
        if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
            if (sessionStorage) {
                sessionStorage.setItem(tokenKey, value);
            }
        }
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
            return (localStorage && parse(localStorage.getItem(userInfoKey))) || null;
        }
        // sessionStorage:
        if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
            return ((sessionStorage && parse(sessionStorage.getItem(userInfoKey))) || null);
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

/***/ "./src/front/services/sw/registerServiceWorker.js":
/*!********************************************************!*\
  !*** ./src/front/services/sw/registerServiceWorker.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/appConfig */ "./src/front/config/appConfig.js");
// @flow
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

/***/ "./src/front/style/injectGlobalStyles.js":
/*!***********************************************!*\
  !*** ./src/front/style/injectGlobalStyles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
// @flow
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// #region imports

// #endregion
var injectGlobalStyle = function () { return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["injectGlobal"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"], ["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"]))); };
/* harmony default export */ __webpack_exports__["default"] = (injectGlobalStyle);
var templateObject_1;


/***/ })

/******/ });
//# sourceMappingURL=app.36018700d595dd0dd301.js.map