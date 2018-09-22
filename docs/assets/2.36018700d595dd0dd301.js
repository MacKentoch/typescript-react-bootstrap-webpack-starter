(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/front/hoc/withEnterAnimation/index.js":
/*!***************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withEnterAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withEnterAnimation */ "./src/front/hoc/withEnterAnimation/withEnterAnimation.js");
// @flow

/* harmony default export */ __webpack_exports__["default"] = (_withEnterAnimation__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js":
/*!****************************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js ***!
  \****************************************************************/
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
// @region imports

// #endregion
var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"], ["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"])));
var AnimatedDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), function (_a) {
    var viewEnter = _a.viewEnter;
    return viewEnter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      opacity: 0;\n      animation-name: ", ";\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    "], ["\n      opacity: 0;\n      animation-name: ", ";\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    "])), fadeIn);
});
/* harmony default export */ __webpack_exports__["default"] = (AnimatedDiv);
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/withEnterAnimation.js":
/*!****************************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/withEnterAnimation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js");
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_AnimatedDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled/AnimatedDiv */ "./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.js");
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
function withEnterAnimation() {
    return function (BaseComponent) {
        var WithEnterAnimation = /** @class */ (function (_super) {
            __extends(WithEnterAnimation, _super);
            function WithEnterAnimation() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WithEnterAnimation.prototype.render = function () {
                var passProps = __rest(this.props, []);
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_AnimatedDiv__WEBPACK_IMPORTED_MODULE_2__["default"], { viewEnter: true },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, __assign({}, passProps))));
            };
            return WithEnterAnimation;
        }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
        /* eslint-disable no-process-env */
        if (true) {
            // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
            WithEnterAnimation.displayName = recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default()(BaseComponent, 'withEnterAnimation');
        }
        /* eslint-enable no-process-env */
        return WithEnterAnimation;
    };
}
/* harmony default export */ __webpack_exports__["default"] = (withEnterAnimation);


/***/ }),

/***/ "./src/front/pages/home/Home.js":
/*!**************************************!*\
  !*** ./src/front/pages/home/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap/lib/Jumbotron */ "./node_modules/reactstrap/lib/Jumbotron.js");
/* harmony import */ var reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _styled_HomeInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled/HomeInfo */ "./src/front/pages/home/styled/HomeInfo.js");
/* harmony import */ var _styled_MainTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled/MainTitle */ "./src/front/pages/home/styled/MainTitle.js");
/* harmony import */ var _styled_LightNote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled/LightNote */ "./src/front/pages/home/styled/LightNote.js");
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
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // #region lifecycle
    Home.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Jumbotron__WEBPACK_IMPORTED_MODULE_1___default.a, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_HomeInfo__WEBPACK_IMPORTED_MODULE_3__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_MainTitle__WEBPACK_IMPORTED_MODULE_4__["default"], null, "ReactJS 16.4+ Bootstrap 4"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null,
                        "with Hot Reload (",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "react-hot-loader 4+"),
                        ")!!!"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "and React 16.3+ Context API"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "and React Router v4"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "and webpack 4.x"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "and babel 7"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null,
                        "and styled-components (",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_LightNote__WEBPACK_IMPORTED_MODULE_5__["default"], null, "so keep using SCSS like styles and benefit performant css-in-js"),
                        ")"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Starter"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { className: "btn btn-success btn-lg", to: '/about' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-info" }),
                            "\u00A0 go to about"))))));
    };
    return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (Home);


/***/ }),

/***/ "./src/front/pages/home/index.js":
/*!***************************************!*\
  !*** ./src/front/pages/home/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/front/pages/home/Home.js");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.js");
// @flow
// #region imports



// #endregion
/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_0___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])( /* no option yet */))(_Home__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./src/front/pages/home/styled/HomeInfo.js":
/*!*************************************************!*\
  !*** ./src/front/pages/home/styled/HomeInfo.js ***!
  \*************************************************/
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
var HomeInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
/* harmony default export */ __webpack_exports__["default"] = (HomeInfo);
var templateObject_1;


/***/ }),

/***/ "./src/front/pages/home/styled/LightNote.js":
/*!**************************************************!*\
  !*** ./src/front/pages/home/styled/LightNote.js ***!
  \**************************************************/
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
var LightNote = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].i(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 0.7em;\n"], ["\n  font-size: 0.7em;\n"])));
/* harmony default export */ __webpack_exports__["default"] = (LightNote);
var templateObject_1;


/***/ }),

/***/ "./src/front/pages/home/styled/MainTitle.js":
/*!**************************************************!*\
  !*** ./src/front/pages/home/styled/MainTitle.js ***!
  \**************************************************/
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
var MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #222 !important;\n  font-weight: 800;\n"], ["\n  color: #222 !important;\n  font-weight: 800;\n"])));
/* harmony default export */ __webpack_exports__["default"] = (MainTitle);
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=2.36018700d595dd0dd301.js.map