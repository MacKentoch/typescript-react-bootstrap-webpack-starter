(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/front/hoc/withEnterAnimation/index.ts":
/*!***************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/index.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withEnterAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withEnterAnimation */ "./src/front/hoc/withEnterAnimation/withEnterAnimation.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_withEnterAnimation__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.tsx":
/*!*****************************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

// @region imports

var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"], ["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"])));
var AnimatedDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  ", ";\n"], ["\n  ",
    ";\n"])), function (_a) {
    var viewEnter = _a.viewEnter;
    return viewEnter && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n      opacity: 0;\n      animation-name: ", ";\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    "], ["\n      opacity: 0;\n      animation-name: ", ";\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    "])), fadeIn);
});
/* harmony default export */ __webpack_exports__["default"] = (AnimatedDiv);
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/front/hoc/withEnterAnimation/withEnterAnimation.tsx":
/*!*****************************************************************!*\
  !*** ./src/front/hoc/withEnterAnimation/withEnterAnimation.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_AnimatedDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled/AnimatedDiv */ "./src/front/hoc/withEnterAnimation/styled/AnimatedDiv.tsx");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index */ "./src/front/hoc/utils/index.ts");

// #region imports



// #endregion
function withEnterAnimation() {
    return function (BaseComponent) {
        var WithEnterAnimation = /** @class */ (function (_super) {
            tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WithEnterAnimation, _super);
            function WithEnterAnimation() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WithEnterAnimation.prototype.render = function () {
                var passProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](this.props, []);
                return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_AnimatedDiv__WEBPACK_IMPORTED_MODULE_2__["default"], { viewEnter: true },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BaseComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, passProps))));
            };
            WithEnterAnimation.displayName = "withEnterAnimation" + Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["getDisplayName"])(BaseComponent);
            return WithEnterAnimation;
        }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
        // /* eslint-disable no-process-env */
        // if (process.env.NODE_ENV !== 'production') {
        //   // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
        //   WithEnterAnimation.displayName = wrapDisplayName(
        //     BaseComponent,
        //     'withEnterAnimation',
        //   );
        // }
        // /* eslint-enable no-process-env */
        return WithEnterAnimation;
    };
}
/* harmony default export */ __webpack_exports__["default"] = (withEnterAnimation);


/***/ }),

/***/ "./src/front/pages/about/About.tsx":
/*!*****************************************!*\
  !*** ./src/front/pages/about/About.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

// #region imports

// #endregion
var About = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // #region lifecycle
    About.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "About")));
    };
    return About;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (About);


/***/ }),

/***/ "./src/front/pages/about/index.ts":
/*!****************************************!*\
  !*** ./src/front/pages/about/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ "./src/front/pages/about/About.tsx");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.ts");
// #region imports



// #endregion
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])( /* no option yet */))(_About__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ })

}]);
//# sourceMappingURL=3.9261c024a326760f2aac.js.map