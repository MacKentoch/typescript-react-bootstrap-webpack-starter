(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./src/front/mock/userInfo.json":
/*!**************************************!*\
  !*** ./src/front/mock/userInfo.json ***!
  \**************************************/
/*! exports provided: token, user, default */
/***/ (function(module) {

module.exports = {"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ","user":{"id":111,"login":"john.doe@fake.mail","firstname":"John","lastname":"Doe","isAdmin":true}};

/***/ }),

/***/ "./src/front/pages/login/Login.js":
/*!****************************************!*\
  !*** ./src/front/pages/login/Login.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/lib/Button */ "./node_modules/reactstrap/lib/Button.js");
/* harmony import */ var reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/lib/Row */ "./node_modules/reactstrap/lib/Row.js");
/* harmony import */ var reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/lib/Col */ "./node_modules/reactstrap/lib/Col.js");
/* harmony import */ var reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/appConfig */ "./src/front/config/appConfig.js");
/* harmony import */ var _services_API_fetchTools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/API/fetchTools */ "./src/front/services/API/fetchTools.js");
/* harmony import */ var _mock_userInfo_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mock/userInfo.json */ "./src/front/mock/userInfo.json");
var _mock_userInfo_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../mock/userInfo.json */ "./src/front/mock/userInfo.json", 1);
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// #region imports








// #endregion
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            email: '',
            password: '',
            isLogging: false,
        };
        // #endregion
        _this.disconnectUser = function () {
            var disconnectUser = _this.props.disconnectUser;
            disconnectUser();
        };
        _this.handlesOnEmailChange = function (event) {
            event.preventDefault();
            // should add some validator before setState in real use cases
            _this.setState({ email: event.target.value.trim() });
        };
        _this.handlesOnPasswordChange = function (event) {
            event.preventDefault();
            // should add some validator before setState in real use cases
            _this.setState({ password: event.target.value.trim() });
        };
        _this.handlesOnLogin = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var _a, history, setToken, setUserInfo, _b, email, password, userLogin, response, _c, token, user, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (event) {
                            event.preventDefault();
                        }
                        _a = this.props, history = _a.history, setToken = _a.setToken, setUserInfo = _a.setUserInfo;
                        _b = this.state, email = _b.email, password = _b.password;
                        userLogin = {
                            login: email,
                            password: password,
                        };
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        this.setState({ isLogging: true });
                        return [4 /*yield*/, this.logUser(userLogin)];
                    case 2:
                        response = _d.sent();
                        _c = response.data, token = _c.token, user = _c.user;
                        setToken(token);
                        setUserInfo(user);
                        this.setState({ isLogging: false });
                        history.push({ pathname: '/' }); // back to Home
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _d.sent();
                        this.setState({ isLogging: false });
                        /* eslint-disable no-console */
                        console.log('login went wrong..., error: ', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.logUser = function (login, password) {
            if (login === void 0) { login = ''; }
            if (password === void 0) { password = ''; }
            return __awaiter(_this, void 0, void 0, function () {
                var __SOME_LOGIN_API__, url, method, headers, options, response, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            __SOME_LOGIN_API__ = 'login';
                            url = Object(_services_API_fetchTools__WEBPACK_IMPORTED_MODULE_6__["getLocationOrigin"])() + "/" + __SOME_LOGIN_API__;
                            method = 'post';
                            headers = {};
                            options = {
                                credentials: 'same-origin',
                                data: {
                                    login: login,
                                    password: password,
                                },
                            };
                            if (_config_appConfig__WEBPACK_IMPORTED_MODULE_5__["appConfig"].DEV_MODE) {
                                return [2 /*return*/, new Promise(function (resolve) {
                                        return setTimeout(resolve({ data: _mock_userInfo_json__WEBPACK_IMPORTED_MODULE_7__ }), 3000);
                                    })];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.request(__assign({ method: method,
                                    url: url, withCredentials: true, headers: __assign({ Accept: 'application/json', 'Content-Type': 'application/json', 'Acces-Control-Allow-Origin': '*' }, headers) }, options))];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, Promise.resolve(response)];
                        case 3:
                            error_2 = _a.sent();
                            return [2 /*return*/, Promise.reject(error_2)];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        _this.goHome = function (event) {
            if (event) {
                event.preventDefault();
            }
            var history = _this.props.history;
            history.push({ pathname: '/' });
        };
        return _this;
    }
    // #region lifecycle
    Login.prototype.componentDidMount = function () {
        this.disconnectUser(); // diconnect user: remove token and user info
    };
    Login.prototype.render = function () {
        var _a = this.state, email = _a.email, password = _a.password, isLogging = _a.isLogging;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "content" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_3___default.a, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_4___default.a, { md: { size: 4, offset: 4 }, xs: { size: 10, offset: 1 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { className: "form-horizontal", noValidate: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", null, "Login"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { htmlFor: "inputEmail", className: "col-lg-2 control-label" }, "Email"),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_4___default.a, { lg: 12 },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "text", className: "form-control", id: "inputEmail", placeholder: "Email", autoComplete: "username email", value: email, onChange: this.handlesOnEmailChange }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { htmlFor: "inputPassword", className: "col-lg-2 control-label" }, "Password"),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_4___default.a, { lg: 12 },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "password", className: "form-control", id: "inputPassword", placeholder: "Password", autoComplete: "current-password", value: password, onChange: this.handlesOnPasswordChange }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-group" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_4___default.a, { lg: { size: 12 } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2___default.a, { className: "login-button btn-block", color: "primary", disabled: isLogging, onClick: this.handlesOnLogin }, isLogging ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                                        "login in... \u00A0",
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-spinner fa-pulse fa-fw" }))) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Login"))))))))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Row__WEBPACK_IMPORTED_MODULE_3___default.a, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Col__WEBPACK_IMPORTED_MODULE_4___default.a, { md: { size: 4, offset: 4 }, xs: { size: 10, offset: 1 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "pull-right" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_lib_Button__WEBPACK_IMPORTED_MODULE_2___default.a, { className: "btn-block", onClick: this.goHome }, "back to home"))))));
    };
    return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (Login);


/***/ }),

/***/ "./src/front/pages/login/index.js":
/*!****************************************!*\
  !*** ./src/front/pages/login/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ "./src/front/pages/login/Login.js");
/* harmony import */ var _hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hoc/withEnterAnimation */ "./src/front/hoc/withEnterAnimation/index.js");
/* harmony import */ var _contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/auth/consumerHOC */ "./src/front/contexts/auth/consumerHOC/index.js");
// @flow
// #region imports




// #endregion
/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_0___default()(Object(_hoc_withEnterAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])( /* no option yet */), Object(_contexts_auth_consumerHOC__WEBPACK_IMPORTED_MODULE_3__["default"])())(_Login__WEBPACK_IMPORTED_MODULE_1__["default"]));


/***/ }),

/***/ "./src/front/services/API/fetchTools.js":
/*!**********************************************!*\
  !*** ./src/front/services/API/fetchTools.js ***!
  \**********************************************/
/*! exports provided: getLocationOrigin, getMethod, postMethod, defaultOptions, jsonHeader, encodeBase64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationOrigin", function() { return getLocationOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMethod", function() { return getMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postMethod", function() { return postMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonHeader", function() { return jsonHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeBase64", function() { return encodeBase64; });
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_0__);
// @flow
// #region imports

// #endregion
// #region  window.location.origin polyfill
var getLocationOrigin = function () {
    if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    return window.location.origin;
};
// #endregion
// #region query options:
var getMethod = {
    method: 'get',
};
var postMethod = {
    method: 'post',
};
var defaultOptions = {
    credentials: 'same-origin',
};
var jsonHeader = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};
// #endregion
// #region general helpers
var encodeBase64 = function (stringToEncode) {
    if (stringToEncode === void 0) { stringToEncode = ''; }
    return js_base64__WEBPACK_IMPORTED_MODULE_0__["Base64"].encode(stringToEncode);
};
// #endregion


/***/ })

}]);
//# sourceMappingURL=1.36018700d595dd0dd301.js.map