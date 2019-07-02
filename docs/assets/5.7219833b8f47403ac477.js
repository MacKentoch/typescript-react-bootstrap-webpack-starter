(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/front/components/privateRoute/PrivateRoute.tsx":
/*!************************************************************!*\
  !*** ./src/front/components/privateRoute/PrivateRoute.tsx ***!
  \************************************************************/
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
function PrivateRoute(props) {
    var InnerComponent = props.component, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](props, ["component"]);
    var isExpired = function () {
        var checkTokenIsExpired = props.checkTokenIsExpired;
        var isExpired = checkTokenIsExpired();
        return isExpired;
    };
    var renderScene = function (sceneProps) {
        var location = sceneProps.location, isAuthenticated = sceneProps.isAuthenticated;
        var isTokenExpired = false; // this.isExpired()
        return !isTokenExpired && isAuthenticated ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, sceneProps))) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: { pathname: '/login', state: { from: location } } }));
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, rest, { render: renderScene }));
}
PrivateRoute.displayName = 'PrivateRoute';
/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);


/***/ }),

/***/ "./src/front/components/privateRoute/index.tsx":
/*!*****************************************************!*\
  !*** ./src/front/components/privateRoute/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrivateRoute */ "./src/front/components/privateRoute/PrivateRoute.tsx");
/* harmony import */ var _contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/auth/consumerHOC */ "./src/front/contexts/auth/consumerHOC/index.tsx");
// #region imports




// #endregion
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_3__["default"])())(_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ })

}]);
//# sourceMappingURL=5.7219833b8f47403ac477.js.map