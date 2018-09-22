(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/front/components/privateRoute/PrivateRoute.js":
/*!***********************************************************!*\
  !*** ./src/front/components/privateRoute/PrivateRoute.js ***!
  \***********************************************************/
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
var PrivateRoute = /** @class */ (function (_super) {
    __extends(PrivateRoute, _super);
    function PrivateRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // #region lifecycle
    PrivateRoute.prototype.render = function () {
        var _a = this.props, InnerComponent = _a.component, rest = __rest(_a, ["component"]);
        var _b = this.props, location = _b.location, isAuthenticated = _b.isAuthenticated;
        var isTokenExpired = false; // this.isExpired();
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], __assign({}, rest, { render: function (props) {
                return !isTokenExpired && isAuthenticated ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerComponent, __assign({}, props))) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: { pathname: '/login', state: { from: location } } }));
            } })));
    };
    // #endregion
    PrivateRoute.prototype.isExpired = function () {
        var checkTokenIsExpired = this.props.checkTokenIsExpired;
        var isExpired = checkTokenIsExpired();
        return isExpired;
    };
    return PrivateRoute;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(PrivateRoute));


/***/ }),

/***/ "./src/front/components/privateRoute/index.js":
/*!****************************************************!*\
  !*** ./src/front/components/privateRoute/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrivateRoute */ "./src/front/components/privateRoute/PrivateRoute.js");
/* harmony import */ var _contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/auth/consumerHOC */ "./src/front/contexts/auth/consumerHOC/index.js");
// @flow
// #region imports



// #endregion
/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_0___default()(Object(_contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_2__["default"])())(_PrivateRoute__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ })

}]);
//# sourceMappingURL=5.36018700d595dd0dd301.js.map