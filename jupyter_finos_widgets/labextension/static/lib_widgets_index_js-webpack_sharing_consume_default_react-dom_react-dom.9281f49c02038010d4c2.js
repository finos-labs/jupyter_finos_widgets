(self["webpackChunkjupyter_finos_widgets"] = self["webpackChunkjupyter_finos_widgets"] || []).push([["lib_widgets_index_js-webpack_sharing_consume_default_react-dom_react-dom"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./css/widget.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/widget.css ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "/* --- CONNECTION STATUS WIDGET --- */\n\n.connection-status-widget {\n  background-color: #383d45;\n  display: flex;\n  border-radius: 5px;\n  max-width: fit-content;\n}\n\n.connection-status-widget > p {\n  padding: 7px 7px 0 7px;\n  color: #fbffff;\n}\n\n.success {\n  background-color: #58a55c;\n}\n\n.failure {\n  background-color: #d94f40;\n}\n\n/* --- CHANNEL JOIN WIDGET --- */\n\n.channel-list {\n  margin: 0;\n  display: flex;\n  padding: 5px 0;\n}\n\n.channel-button {\n  box-sizing: border-box;\n  border: none;\n  border-radius: 3px;\n  width: 60px;\n  height: 30px;\n  margin-right: 5px;\n}\n\n.channel-button:hover {\n  cursor: pointer;\n  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.5);\n}\n\n.channel-button:active {\n  box-shadow: inset 0px 0px 50px rgba(255, 255, 255, 0.5);\n}\n\n.channel-button:disabled {\n  color: black;\n  border: 1.5px solid black;\n  box-shadow: inset 0px 0px 50px rgba(255, 255, 255, 0.5);\n}\n\n/* --- RAISE INTENT WIDGET --- */\n\n.raise-intent-widget {\n  padding: 5px 0;\n}\n\n.raise-intent-widget > select {\n  height: 36px;\n  padding: 0 7px;\n  color: #254d7e;\n  margin-right: 10px;\n  border-radius: 3px;\n  border: 1px solid #27578c;\n}\n\n.raise-intent-widget > select:hover {\n  cursor: pointer;\n  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.5);\n}\n\n.raise-intent-widget > button {\n  height: 36px;\n  border: none;\n  padding: 0 7px;\n  color: #ffffff;\n  border-radius: 3px;\n  background-color: #254d7e;\n}\n\n.raise-intent-widget > button:hover {\n  cursor: pointer;\n  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.5);\n}\n\n.raise-intent-widget > p {\n  color: red;\n  padding-top: 5px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3_NOT_FOUND_MSG": () => (/* binding */ FDC3_NOT_FOUND_MSG),
/* harmony export */   "FDC3_READY_ERROR_MSG": () => (/* binding */ FDC3_READY_ERROR_MSG),
/* harmony export */   "FDC3_READY_UNKNOWN_ERROR": () => (/* binding */ FDC3_READY_UNKNOWN_ERROR),
/* harmony export */   "FDC3_VERSION_DEFAULT": () => (/* binding */ FDC3_VERSION_DEFAULT)
/* harmony export */ });
const FDC3_READY_ERROR_MSG = 'Timed out waiting for `fdc3Ready` event.';
const FDC3_VERSION_DEFAULT = 'loading...';
const FDC3_NOT_FOUND_MSG = 'FDC3 Not Found';
const FDC3_READY_UNKNOWN_ERROR = 'Unknown error - please contact developers. FDC3 was not found in a strange way.';


/***/ }),

/***/ "./lib/version.js":
/*!************************!*\
  !*** ./lib/version.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODULE_NAME": () => (/* binding */ MODULE_NAME),
/* harmony export */   "MODULE_VERSION": () => (/* binding */ MODULE_VERSION)
/* harmony export */ });
// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = __webpack_require__(/*! ../package.json */ "./package.json");
/**
 * The _model_module_version/_view_module_version this package implements.
 *
 * The html widget manager assumes that this is the same as the npm package
 * version number.
 */
const MODULE_VERSION = data.version;
/*
 * The current package name.
 */
const MODULE_NAME = data.name;


/***/ }),

/***/ "./lib/widgets/fdc3-channel-join/FDC3ChannelJoin.component.js":
/*!********************************************************************!*\
  !*** ./lib/widgets/fdc3-channel-join/FDC3ChannelJoin.component.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3ChannelJoinComponent": () => (/* binding */ FDC3ChannelJoinComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const FDC3ChannelJoinComponent = ({ channelId, userChannels, onSelect, onLeave, }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", Object.assign({ className: "channel-list", style: { listStyle: 'none' } }, { children: [
        ...userChannels.map(({ displayMetadata: { name, color }, id }) => {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: "channel-button", style: { backgroundColor: color }, disabled: channelId === id, onClick: onSelect.bind(null, id) }, { children: name }), void 0) }, id));
        }),
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({ className: "channel-button", disabled: !channelId, onClick: onLeave }, { children: "Leave" }), void 0) }, "channel-picker-button-key"),
    ] }), void 0));


/***/ }),

/***/ "./lib/widgets/fdc3-channel-join/FDC3ChannelJoin.model.js":
/*!****************************************************************!*\
  !*** ./lib/widgets/fdc3-channel-join/FDC3ChannelJoin.model.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3ChannelJoinModel": () => (/* binding */ FDC3ChannelJoinModel)
/* harmony export */ });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @finos/fdc3 */ "webpack/sharing/consume/default/@finos/fdc3/@finos/fdc3");
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_finos_fdc3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../version */ "./lib/version.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class FDC3ChannelJoinModel extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: FDC3ChannelJoinModel.model_name, _model_module: FDC3ChannelJoinModel.model_module, _model_module_version: FDC3ChannelJoinModel.model_module_version, _view_name: FDC3ChannelJoinModel.view_name, _view_module: FDC3ChannelJoinModel.view_module, _view_module_version: FDC3ChannelJoinModel.view_module_version, userChannels: [], channelId: null });
    }
    // TODO - the DOMWidgetModel type should just return void, though no complaints yet?
    initialize(attr, opts) {
        const _super = Object.create(null, {
            initialize: { get: () => super.initialize }
        });
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            _super.initialize.call(this, attr, opts);
            yield _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__.fdc3Ready();
            this.set('channelId', (_a = (yield _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__.getCurrentChannel())) === null || _a === void 0 ? void 0 : _a.id);
            this.set('userChannels', (yield _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__.getUserChannels()).map(({ type, id, displayMetadata }) => ({
                type,
                id,
                displayMetadata,
            })));
        });
    }
}
FDC3ChannelJoinModel.serializers = Object.assign({}, _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel.serializers);
FDC3ChannelJoinModel.model_name = 'FDC3ChannelJoinModel';
FDC3ChannelJoinModel.model_module = _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_NAME;
FDC3ChannelJoinModel.model_module_version = _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION;
FDC3ChannelJoinModel.view_name = 'FDC3ChannelJoinView';
FDC3ChannelJoinModel.view_module = _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_NAME;
FDC3ChannelJoinModel.view_module_version = _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION;


/***/ }),

/***/ "./lib/widgets/fdc3-channel-join/FDC3ChannelJoin.view.js":
/*!***************************************************************!*\
  !*** ./lib/widgets/fdc3-channel-join/FDC3ChannelJoin.view.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3ChannelJoinView": () => (/* binding */ FDC3ChannelJoinView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @finos/fdc3 */ "webpack/sharing/consume/default/@finos/fdc3/@finos/fdc3");
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_finos_fdc3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FDC3ChannelJoin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FDC3ChannelJoin.component */ "./lib/widgets/fdc3-channel-join/FDC3ChannelJoin.component.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class FDC3ChannelJoinView extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.DOMWidgetView {
    constructor(opts) {
        super(opts);
        this.model.bind('change', this.render.bind(this));
        this.selectChannel = this.selectChannel.bind(this);
        this.leaveChannel = this.leaveChannel.bind(this);
    }
    selectChannel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _finos_fdc3__WEBPACK_IMPORTED_MODULE_3__.joinChannel(id);
            this.model.set('channelId', id);
            this.model.save_changes();
        });
    }
    leaveChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield _finos_fdc3__WEBPACK_IMPORTED_MODULE_3__.leaveCurrentChannel();
            this.model.set('channelId', null);
            this.model.save_changes();
        });
    }
    render() {
        const props = {
            channelId: this.model.get('channelId'),
            userChannels: this.model.get('userChannels'),
            onSelect: this.selectChannel,
            onLeave: this.leaveChannel,
        };
        (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(this.el).render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FDC3ChannelJoin_component__WEBPACK_IMPORTED_MODULE_4__.FDC3ChannelJoinComponent, Object.assign({}, props), void 0));
        return this;
    }
}


/***/ }),

/***/ "./lib/widgets/fdc3-channel-join/index.js":
/*!************************************************!*\
  !*** ./lib/widgets/fdc3-channel-join/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3ChannelJoinModel": () => (/* reexport safe */ _FDC3ChannelJoin_model__WEBPACK_IMPORTED_MODULE_0__.FDC3ChannelJoinModel),
/* harmony export */   "FDC3ChannelJoinView": () => (/* reexport safe */ _FDC3ChannelJoin_view__WEBPACK_IMPORTED_MODULE_1__.FDC3ChannelJoinView)
/* harmony export */ });
/* harmony import */ var _FDC3ChannelJoin_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FDC3ChannelJoin.model */ "./lib/widgets/fdc3-channel-join/FDC3ChannelJoin.model.js");
/* harmony import */ var _FDC3ChannelJoin_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FDC3ChannelJoin.view */ "./lib/widgets/fdc3-channel-join/FDC3ChannelJoin.view.js");




/***/ }),

/***/ "./lib/widgets/fdc3-connection-status/FDC3ConnectionStatus.model.js":
/*!**************************************************************************!*\
  !*** ./lib/widgets/fdc3-connection-status/FDC3ConnectionStatus.model.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3ConnectionStatusModel": () => (/* binding */ FDC3ConnectionStatusModel)
/* harmony export */ });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../version */ "./lib/version.js");
// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.


class FDC3ConnectionStatusModel extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: FDC3ConnectionStatusModel.model_name, _model_module: FDC3ConnectionStatusModel.model_module, _model_module_version: FDC3ConnectionStatusModel.model_module_version, _view_name: FDC3ConnectionStatusModel.view_name, _view_module: FDC3ConnectionStatusModel.view_module, _view_module_version: FDC3ConnectionStatusModel.view_module_version });
    }
}
FDC3ConnectionStatusModel.serializers = Object.assign({}, _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel.serializers);
FDC3ConnectionStatusModel.model_name = 'FDC3ConnectionStatusModel';
FDC3ConnectionStatusModel.model_module = _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_NAME;
FDC3ConnectionStatusModel.model_module_version = _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_VERSION;
FDC3ConnectionStatusModel.view_name = 'FDC3ConnectionStatusView';
FDC3ConnectionStatusModel.view_module = _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_NAME;
FDC3ConnectionStatusModel.view_module_version = _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_VERSION;


/***/ }),

/***/ "./lib/widgets/fdc3-connection-status/FDC3ConnectionStatus.view.js":
/*!*************************************************************************!*\
  !*** ./lib/widgets/fdc3-connection-status/FDC3ConnectionStatus.view.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3ConnectionStatusView": () => (/* binding */ FDC3ConnectionStatusView)
/* harmony export */ });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @finos/fdc3 */ "webpack/sharing/consume/default/@finos/fdc3/@finos/fdc3");
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_finos_fdc3__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class FDC3ConnectionStatusView extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetView {
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const channelColor = getChannelColor(isFalsyOrEmpty(window.fdc3) ? undefined : yield _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__.getCurrentChannel());
            this.el.classList.add('connection-status-widget');
            this.badge = document.createElement('p');
            this.badge.innerHTML = 'FDC3 API connection';
            this.status = document.createElement('p');
            this.status.innerHTML = isFalsyOrEmpty(window.fdc3) ? 'not found' : 'found';
            this.status.classList.add(isFalsyOrEmpty(window.fdc3) ? 'failure' : 'success');
            this.status.style.borderBottom = `7px solid ${channelColor}`;
            this.el.appendChild(this.badge);
            this.el.appendChild(this.status);
        });
    }
    // TODO does this method do anything?
    value_changed() {
        return this.model.get('fdc3_info');
    }
}
const getChannelColor = (channel_data) => {
    const default_color = '#808080';
    return channel_data ? channel_data.displayMetadata.color : default_color;
};
const isFalsyOrEmpty = (value) => {
    if (typeof value === 'object') {
        return Object.keys(value).length ? false : true;
    }
    return value ? false : true;
};


/***/ }),

/***/ "./lib/widgets/fdc3-connection-status/index.js":
/*!*****************************************************!*\
  !*** ./lib/widgets/fdc3-connection-status/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3ConnectionStatusModel": () => (/* reexport safe */ _FDC3ConnectionStatus_model__WEBPACK_IMPORTED_MODULE_0__.FDC3ConnectionStatusModel),
/* harmony export */   "FDC3ConnectionStatusView": () => (/* reexport safe */ _FDC3ConnectionStatus_view__WEBPACK_IMPORTED_MODULE_1__.FDC3ConnectionStatusView)
/* harmony export */ });
/* harmony import */ var _FDC3ConnectionStatus_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FDC3ConnectionStatus.model */ "./lib/widgets/fdc3-connection-status/FDC3ConnectionStatus.model.js");
/* harmony import */ var _FDC3ConnectionStatus_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FDC3ConnectionStatus.view */ "./lib/widgets/fdc3-connection-status/FDC3ConnectionStatus.view.js");




/***/ }),

/***/ "./lib/widgets/fdc3-context-display/FDC3ContextDisplay.component.js":
/*!**************************************************************************!*\
  !*** ./lib/widgets/fdc3-context-display/FDC3ContextDisplay.component.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3ContextDisplayComponent": () => (/* binding */ FDC3ContextDisplayComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const CONTEXT_TYPES = [
    'fdc3.contact',
    'fdc3.contactList',
    'fdc3.country',
    'fdc3.instrument',
    'fdc3.instrumentList',
    'fdc3.organization',
    'fdc3.position',
    'fdc3.portfolio',
];
const FDC3ContextDisplayComponent = ({ contextType, context, onContextTypeChange, }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({ htmlFor: "context-type" }, { children: "Select Context Type: " }), void 0),
                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", Object.assign({ name: "context-type", value: contextType, onChange: (e) => onContextTypeChange(e.target.value) }, { children: CONTEXT_TYPES.map((contextType, index) => {
                        const contextName = contextType.split('.')[1];
                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", Object.assign({ value: contextType }, { children: contextName.charAt(0).toUpperCase() + contextName.slice(1) }), index));
                    }) }), void 0)] }, void 0),
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: JSON.stringify(context, undefined, 2) }, void 0)] }, void 0));


/***/ }),

/***/ "./lib/widgets/fdc3-context-display/FDC3ContextDisplay.model.js":
/*!**********************************************************************!*\
  !*** ./lib/widgets/fdc3-context-display/FDC3ContextDisplay.model.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3ContextDisplayModel": () => (/* binding */ FDC3ContextDisplayModel)
/* harmony export */ });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../version */ "./lib/version.js");
/* harmony import */ var _connectifi_agent_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @connectifi/agent-web */ "webpack/sharing/consume/default/@connectifi/agent-web/@connectifi/agent-web");
/* harmony import */ var _connectifi_agent_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_connectifi_agent_web__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// import * as fdc3 from '@finos/fdc3'

// import { createAgent } from '@connectifi/agent-web'

class FDC3ContextDisplayModel extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel {
    constructor() {
        super(...arguments);
        this._listener = null;
    }
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: FDC3ContextDisplayModel.model_name, _model_module: FDC3ContextDisplayModel.model_module, _model_module_version: FDC3ContextDisplayModel.model_module_version, _view_name: FDC3ContextDisplayModel.view_name, _view_module: FDC3ContextDisplayModel.view_module, _view_module_version: FDC3ContextDisplayModel.view_module_version, contextType: null, context: {} });
    }
    onContextChange() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.fdc3Agent) {
                    console.log('in the thing!');
                    (_a = this._listener) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                    const contextType = this.get('contextType');
                    console.log('contextType', contextType);
                    this._listener = yield this.fdc3Agent.addContextListener(contextType, (ctx) => {
                        console.log('CONEXT CALLBACK');
                        this.set('context', ctx);
                        this.save_changes();
                    });
                }
                else {
                    console.log('elsoe block what');
                }
            }
            catch (e) {
                console.log('ERROR', e);
            }
        });
    }
    initialize(attr, opts) {
        const _super = Object.create(null, {
            initialize: { get: () => super.initialize }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.initialize.call(this, attr, opts);
            if (window.fdc3) {
                this.fdc3Agent = window.fdc3;
            }
            else {
                const connectifiFdc3 = yield _connectifi_agent_web__WEBPACK_IMPORTED_MODULE_2__.createAgent('https://dev.connectifi-interop.com', 'jupyter-notebook@Demo');
                if (connectifiFdc3 === undefined) {
                    throw Error('Error got undefined');
                }
                window.fdc3 = connectifiFdc3;
                this.fdc3Agent = window.fdc3;
            }
            // await connectifiFdc3.fdc3Ready()
            this.on('change:contextType', this.onContextChange.bind(this));
        });
    }
}
FDC3ContextDisplayModel.serializers = Object.assign({}, _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel.serializers);
FDC3ContextDisplayModel.model_name = 'FDC3ContextDisplayModel';
FDC3ContextDisplayModel.model_module = _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_NAME;
FDC3ContextDisplayModel.model_module_version = _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_VERSION;
FDC3ContextDisplayModel.view_name = 'FDC3ContextDisplayView'; // Set to null if no view
FDC3ContextDisplayModel.view_module = _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_NAME; // Set to null if no view
FDC3ContextDisplayModel.view_module_version = _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_VERSION;


/***/ }),

/***/ "./lib/widgets/fdc3-context-display/FDC3ContextDisplay.view.js":
/*!*********************************************************************!*\
  !*** ./lib/widgets/fdc3-context-display/FDC3ContextDisplay.view.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3ContextDisplayView": () => (/* binding */ FDC3ContextDisplayView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _FDC3ContextDisplay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FDC3ContextDisplay.component */ "./lib/widgets/fdc3-context-display/FDC3ContextDisplay.component.js");

// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.



class FDC3ContextDisplayView extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.DOMWidgetView {
    constructor(opts) {
        super(opts);
        this.model.bind('change', this.render.bind(this));
    }
    render() {
        const props = {
            contextType: this.model.get('contextType'),
            context: this.model.get('context'),
            onContextTypeChange: (value) => {
                this.model.set('contextType', value);
                this.model.set('context', {});
                this.model.save_changes();
            },
        };
        (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(this.el).render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FDC3ContextDisplay_component__WEBPACK_IMPORTED_MODULE_3__.FDC3ContextDisplayComponent, Object.assign({}, props), void 0));
        return this;
    }
}


/***/ }),

/***/ "./lib/widgets/fdc3-context-display/index.js":
/*!***************************************************!*\
  !*** ./lib/widgets/fdc3-context-display/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3ContextDisplayModel": () => (/* reexport safe */ _FDC3ContextDisplay_model__WEBPACK_IMPORTED_MODULE_0__.FDC3ContextDisplayModel),
/* harmony export */   "FDC3ContextDisplayView": () => (/* reexport safe */ _FDC3ContextDisplay_view__WEBPACK_IMPORTED_MODULE_1__.FDC3ContextDisplayView)
/* harmony export */ });
/* harmony import */ var _FDC3ContextDisplay_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FDC3ContextDisplay.model */ "./lib/widgets/fdc3-context-display/FDC3ContextDisplay.model.js");
/* harmony import */ var _FDC3ContextDisplay_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FDC3ContextDisplay.view */ "./lib/widgets/fdc3-context-display/FDC3ContextDisplay.view.js");




/***/ }),

/***/ "./lib/widgets/fdc3-raise-intent/FDC3RaiseIntent.model.js":
/*!****************************************************************!*\
  !*** ./lib/widgets/fdc3-raise-intent/FDC3RaiseIntent.model.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3RaiseIntentModel": () => (/* binding */ FDC3RaiseIntentModel)
/* harmony export */ });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @finos/fdc3 */ "webpack/sharing/consume/default/@finos/fdc3/@finos/fdc3");
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_finos_fdc3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../version */ "./lib/version.js");
// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class FDC3RaiseIntentModel extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: FDC3RaiseIntentModel.model_name, _model_module: FDC3RaiseIntentModel.model_module, _model_module_version: FDC3RaiseIntentModel.model_module_version, _view_name: FDC3RaiseIntentModel.view_name, _view_module: FDC3RaiseIntentModel.view_module, _view_module_version: FDC3RaiseIntentModel.view_module_version, context: {}, intent: '' });
    }
    initialize(attr, opts) {
        const _super = Object.create(null, {
            initialize: { get: () => super.initialize }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.initialize.call(this, attr, opts);
            yield _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__.fdc3Ready();
            _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__.addContextListener('fdc3.instrument', (ctx) => {
                this.set('context', ctx);
                this.save_changes();
            });
        });
    }
}
FDC3RaiseIntentModel.serializers = Object.assign({}, _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel.serializers);
FDC3RaiseIntentModel.model_name = 'FDC3RaiseIntentModel';
FDC3RaiseIntentModel.model_module = _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_NAME;
FDC3RaiseIntentModel.model_module_version = _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION;
FDC3RaiseIntentModel.view_name = 'FDC3RaiseIntentView';
FDC3RaiseIntentModel.view_module = _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_NAME;
FDC3RaiseIntentModel.view_module_version = _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION;


/***/ }),

/***/ "./lib/widgets/fdc3-raise-intent/FDC3RaiseIntent.view.js":
/*!***************************************************************!*\
  !*** ./lib/widgets/fdc3-raise-intent/FDC3RaiseIntent.view.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3RaiseIntentView": () => (/* binding */ FDC3RaiseIntentView)
/* harmony export */ });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @finos/fdc3 */ "webpack/sharing/consume/default/@finos/fdc3/@finos/fdc3");
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_finos_fdc3__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class FDC3RaiseIntentView extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetView {
    render() {
        this.el.classList.add('raise-intent-widget');
        this.selectDropdown = document.createElement('select');
        this.selectDropdown.appendChild(createPlaceholderOption());
        intents.map((intent) => {
            const selectOption = document.createElement('option');
            selectOption.value = intent.action;
            selectOption.text = intent.text;
            this.selectDropdown.appendChild(selectOption);
        });
        const raiseIntentButton = document.createElement('button');
        raiseIntentButton.textContent = 'Raise Intent';
        raiseIntentButton.addEventListener('click', () => this.raiseIntent());
        this.message = document.createElement('p');
        this.el.appendChild(this.selectDropdown);
        this.el.appendChild(raiseIntentButton);
        this.el.appendChild(this.message);
        this.model.on('change:intent', this.onSelectChanged, this);
        this.selectDropdown.onchange = this.onSelectChanged.bind(this);
    }
    onSelectChanged() {
        this.model.set('intent', this.selectDropdown.value);
        this.model.save_changes();
    }
    raiseIntent() {
        return __awaiter(this, void 0, void 0, function* () {
            const ctx = this.model.get('context');
            const intent = this.model.get('intent');
            if (isFalsyOrEmpty(intent)) {
                this.message.innerHTML = 'Cannot raise intent: No intent selected';
                return;
            }
            if (isFalsyOrEmpty(ctx)) {
                this.message.innerHTML = 'Cannot raise intent: No context data';
                return;
            }
            this.message.innerHTML = '';
            try {
                yield _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__.raiseIntent(intent, ctx);
            }
            catch (error) {
                this.message.innerHTML = `${error}`;
            }
        });
    }
}
const createPlaceholderOption = () => {
    const placeholderOption = document.createElement('option');
    placeholderOption.value = '';
    placeholderOption.text = 'Select an intent';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    return placeholderOption;
};
const intents = [
    { action: 'ViewChart', text: 'View Chart' },
    { action: 'ViewInstrument', text: 'View Instrument' },
    { action: 'ViewNews', text: 'View News' },
    { action: 'ViewQuote', text: 'View Quote' },
];
const isFalsyOrEmpty = (value) => {
    if (typeof value === 'object') {
        return Object.keys(value).length ? false : true;
    }
    return value ? false : true;
};


/***/ }),

/***/ "./lib/widgets/fdc3-raise-intent/index.js":
/*!************************************************!*\
  !*** ./lib/widgets/fdc3-raise-intent/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3RaiseIntentModel": () => (/* reexport safe */ _FDC3RaiseIntent_model__WEBPACK_IMPORTED_MODULE_0__.FDC3RaiseIntentModel),
/* harmony export */   "FDC3RaiseIntentView": () => (/* reexport safe */ _FDC3RaiseIntent_view__WEBPACK_IMPORTED_MODULE_1__.FDC3RaiseIntentView)
/* harmony export */ });
/* harmony import */ var _FDC3RaiseIntent_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FDC3RaiseIntent.model */ "./lib/widgets/fdc3-raise-intent/FDC3RaiseIntent.model.js");
/* harmony import */ var _FDC3RaiseIntent_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FDC3RaiseIntent.view */ "./lib/widgets/fdc3-raise-intent/FDC3RaiseIntent.view.js");




/***/ }),

/***/ "./lib/widgets/fdc3-ticker-input/FDC3TickerInput.component.js":
/*!********************************************************************!*\
  !*** ./lib/widgets/fdc3-ticker-input/FDC3TickerInput.component.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3TickerInputComponent": () => (/* binding */ FDC3TickerInputComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FDC3TickerInputComponent = ({ value, error, onSubmit, }) => {
    const [ticker, setTicker] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
    const onInput = (e) => setTicker(e.target.value);
    const submit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e) => {
        e.preventDefault();
        onSubmit(ticker);
    }, [ticker]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setTicker(value);
    }, [value]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", Object.assign({ onSubmit: submit }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: ticker, onInput: onInput }, void 0),
                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "submit", value: "Submit" }, void 0),
                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", Object.assign({ style: { color: 'red' } }, { children: error }), void 0)] }), void 0) }, void 0));
};


/***/ }),

/***/ "./lib/widgets/fdc3-ticker-input/FDC3TickerInput.model.js":
/*!****************************************************************!*\
  !*** ./lib/widgets/fdc3-ticker-input/FDC3TickerInput.model.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3TickerInputModel": () => (/* binding */ FDC3TickerInputModel)
/* harmony export */ });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../version */ "./lib/version.js");
/* harmony import */ var _connectifi_agent_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @connectifi/agent-web */ "webpack/sharing/consume/default/@connectifi/agent-web/@connectifi/agent-web");
/* harmony import */ var _connectifi_agent_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_connectifi_agent_web__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// import { createAgent } from '@connectifi/agent-web'

class FDC3TickerInputModel extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel {
    constructor() {
        super(...arguments);
        this._listener = null;
    }
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: FDC3TickerInputModel.model_name, _model_module: FDC3TickerInputModel.model_module, _model_module_version: FDC3TickerInputModel.model_module_version, _view_name: FDC3TickerInputModel.view_name, _view_module: FDC3TickerInputModel.view_module, _view_module_version: FDC3TickerInputModel.view_module_version, value: '', error: '' });
    }
    initialize(attr, opts) {
        const _super = Object.create(null, {
            initialize: { get: () => super.initialize }
        });
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            _super.initialize.call(this, attr, opts);
            if (window.fdc3) {
                console.log('it was found!');
                this.desktopAgent = window.fdc3;
            }
            else {
                const connectifiFdc3 = yield _connectifi_agent_web__WEBPACK_IMPORTED_MODULE_2__.createAgent('https://dev.connectifi-interop.com', 'jupyter-notebook@Demo');
                if (connectifiFdc3 === undefined) {
                    throw Error('desktopAgent not found!');
                }
                window.fdc3 = connectifiFdc3;
                this.desktopAgent = window.fdc3;
            }
            this.on('change:value', ({ changed: { value } }) => __awaiter(this, void 0, void 0, function* () {
                // await fdc3.fdc3Ready()
                if (this.desktopAgent === undefined) {
                    throw Error('desktopAgent not found in callback!');
                }
                if (value) {
                    try {
                        yield this.desktopAgent.broadcast({
                            type: 'fdc3.instrument',
                            id: { ticker: value },
                        });
                        this.set('error', '');
                    }
                    catch (e) {
                        this.set('error', e.message);
                    }
                }
                else {
                    const error = 'Ticker input is empty';
                    this.set('error', error, { silent: true });
                    this.trigger('change');
                }
            }));
            // await fdc3.fdc3Ready()
            (_a = this._listener) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this._listener = yield this.desktopAgent.addContextListener('fdc3.instrument', (ctx) => {
                console.log('LISTENER MY MAN', ctx);
                this.set('value', ctx.id.ticker);
                this.save_changes();
            });
        });
    }
}
FDC3TickerInputModel.serializers = Object.assign({}, _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel.serializers);
FDC3TickerInputModel.model_name = 'FDC3TickerInputModel';
FDC3TickerInputModel.model_module = _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_NAME;
FDC3TickerInputModel.model_module_version = _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_VERSION;
FDC3TickerInputModel.view_name = 'FDC3TickerInputView';
FDC3TickerInputModel.view_module = _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_NAME;
FDC3TickerInputModel.view_module_version = _version__WEBPACK_IMPORTED_MODULE_1__.MODULE_VERSION;


/***/ }),

/***/ "./lib/widgets/fdc3-ticker-input/FDC3TickerInput.view.js":
/*!***************************************************************!*\
  !*** ./lib/widgets/fdc3-ticker-input/FDC3TickerInput.view.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3TickerInputView": () => (/* binding */ FDC3TickerInputView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _FDC3TickerInput_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FDC3TickerInput.component */ "./lib/widgets/fdc3-ticker-input/FDC3TickerInput.component.js");




class FDC3TickerInputView extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.DOMWidgetView {
    constructor(opts) {
        super(opts);
        this.model.bind('change', this.render.bind(this));
        this.submit = this.submit.bind(this);
    }
    submit(ticker) {
        console.log(ticker, this.model.get('value'));
        if (this.model.get('value') === ticker) {
            this.model.trigger('change:value', { changed: { value: ticker } });
        }
        else {
            this.model.set('value', ticker);
            this.model.save_changes();
        }
    }
    render() {
        const props = {
            value: this.model.get('value'),
            error: this.model.get('error'),
            onSubmit: this.submit,
        };
        (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(this.el).render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FDC3TickerInput_component__WEBPACK_IMPORTED_MODULE_3__.FDC3TickerInputComponent, Object.assign({}, props), void 0));
        return this;
    }
}


/***/ }),

/***/ "./lib/widgets/fdc3-ticker-input/index.js":
/*!************************************************!*\
  !*** ./lib/widgets/fdc3-ticker-input/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3TickerInputModel": () => (/* reexport safe */ _FDC3TickerInput_model__WEBPACK_IMPORTED_MODULE_0__.FDC3TickerInputModel),
/* harmony export */   "FDC3TickerInputView": () => (/* reexport safe */ _FDC3TickerInput_view__WEBPACK_IMPORTED_MODULE_1__.FDC3TickerInputView)
/* harmony export */ });
/* harmony import */ var _FDC3TickerInput_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FDC3TickerInput.model */ "./lib/widgets/fdc3-ticker-input/FDC3TickerInput.model.js");
/* harmony import */ var _FDC3TickerInput_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FDC3TickerInput.view */ "./lib/widgets/fdc3-ticker-input/FDC3TickerInput.view.js");




/***/ }),

/***/ "./lib/widgets/fdc3-version/FDC3Version.component.js":
/*!***********************************************************!*\
  !*** ./lib/widgets/fdc3-version/FDC3Version.component.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3VersionComponent": () => (/* binding */ FDC3VersionComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FDC3VersionComponent = ({ model, }) => {
    const [fdc3VersionString, setFDC3VersionString] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Loading Model');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setFDC3VersionString(model.get('fdc3Version'));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const callback = (e) => {
            setFDC3VersionString(model.get('fdc3Version'));
        };
        model.on('change:fdc3Version', callback);
        return () => {
            model.unbind('change:fdc3Version');
        };
    }, [model, setFDC3VersionString]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: fdc3VersionString }, void 0);
};


/***/ }),

/***/ "./lib/widgets/fdc3-version/FDC3Version.model.js":
/*!*******************************************************!*\
  !*** ./lib/widgets/fdc3-version/FDC3Version.model.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3VersionModel": () => (/* binding */ FDC3VersionModel)
/* harmony export */ });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @finos/fdc3 */ "webpack/sharing/consume/default/@finos/fdc3/@finos/fdc3");
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_finos_fdc3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../version */ "./lib/version.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./lib/constants.js");
// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class FDC3VersionModel extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel {
    constructor(attr, opts, autoLoad = true, readyCheck = _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__.fdc3Ready, readyFormMs) {
        super(attr, opts);
        this.readyCheck = readyCheck;
        this.readyForMs = readyFormMs;
        if (autoLoad) {
            this.retrieveFDC3Version();
        }
    }
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: FDC3VersionModel.model_name, _model_module: FDC3VersionModel.model_module, _model_module_version: FDC3VersionModel.model_module_version, _view_name: FDC3VersionModel.view_name, _view_module: FDC3VersionModel.view_module, _view_module_version: FDC3VersionModel.view_module_version, fdc3Version: _constants__WEBPACK_IMPORTED_MODULE_3__.FDC3_VERSION_DEFAULT });
    }
    retrieveFDC3Version() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.readyCheck(this.readyForMs);
                const { fdc3Version } = yield _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__.getInfo();
                this.set('fdc3Version', `FDC3 Version: ${fdc3Version}`);
            }
            catch (e) {
                if (e instanceof Error && e.message === _constants__WEBPACK_IMPORTED_MODULE_3__.FDC3_READY_ERROR_MSG) {
                    this.set('fdc3Version', _constants__WEBPACK_IMPORTED_MODULE_3__.FDC3_NOT_FOUND_MSG);
                }
                else {
                    this.set('fdc3Version', _constants__WEBPACK_IMPORTED_MODULE_3__.FDC3_READY_UNKNOWN_ERROR);
                }
            }
        });
    }
}
FDC3VersionModel.serializers = Object.assign({}, _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.DOMWidgetModel.serializers);
FDC3VersionModel.model_name = 'FDC3VersionModel';
FDC3VersionModel.model_module = _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_NAME;
FDC3VersionModel.model_module_version = _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION;
FDC3VersionModel.view_name = 'FDC3VersionView';
FDC3VersionModel.view_module = _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_NAME;
FDC3VersionModel.view_module_version = _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION;


/***/ }),

/***/ "./lib/widgets/fdc3-version/FDC3Version.view.js":
/*!******************************************************!*\
  !*** ./lib/widgets/fdc3-version/FDC3Version.view.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3VersionView": () => (/* binding */ FDC3VersionView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _FDC3Version_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FDC3Version.component */ "./lib/widgets/fdc3-version/FDC3Version.component.js");





class FDC3VersionView extends _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__.DOMWidgetView {
    render() {
        (0,react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot)(this.el).render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_2___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FDC3Version_component__WEBPACK_IMPORTED_MODULE_4__.FDC3VersionComponent, { model: this.model }, void 0) }, void 0));
        return this;
    }
}


/***/ }),

/***/ "./lib/widgets/fdc3-version/index.js":
/*!*******************************************!*\
  !*** ./lib/widgets/fdc3-version/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3VersionModel": () => (/* reexport safe */ _FDC3Version_model__WEBPACK_IMPORTED_MODULE_0__.FDC3VersionModel),
/* harmony export */   "FDC3VersionView": () => (/* reexport safe */ _FDC3Version_view__WEBPACK_IMPORTED_MODULE_1__.FDC3VersionView)
/* harmony export */ });
/* harmony import */ var _FDC3Version_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FDC3Version.model */ "./lib/widgets/fdc3-version/FDC3Version.model.js");
/* harmony import */ var _FDC3Version_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FDC3Version.view */ "./lib/widgets/fdc3-version/FDC3Version.view.js");




/***/ }),

/***/ "./lib/widgets/index.js":
/*!******************************!*\
  !*** ./lib/widgets/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FDC3ChannelJoinModel": () => (/* reexport safe */ _fdc3_channel_join__WEBPACK_IMPORTED_MODULE_1__.FDC3ChannelJoinModel),
/* harmony export */   "FDC3ChannelJoinView": () => (/* reexport safe */ _fdc3_channel_join__WEBPACK_IMPORTED_MODULE_1__.FDC3ChannelJoinView),
/* harmony export */   "FDC3ConnectionStatusModel": () => (/* reexport safe */ _fdc3_connection_status__WEBPACK_IMPORTED_MODULE_2__.FDC3ConnectionStatusModel),
/* harmony export */   "FDC3ConnectionStatusView": () => (/* reexport safe */ _fdc3_connection_status__WEBPACK_IMPORTED_MODULE_2__.FDC3ConnectionStatusView),
/* harmony export */   "FDC3ContextDisplayModel": () => (/* reexport safe */ _fdc3_context_display__WEBPACK_IMPORTED_MODULE_3__.FDC3ContextDisplayModel),
/* harmony export */   "FDC3ContextDisplayView": () => (/* reexport safe */ _fdc3_context_display__WEBPACK_IMPORTED_MODULE_3__.FDC3ContextDisplayView),
/* harmony export */   "FDC3RaiseIntentModel": () => (/* reexport safe */ _fdc3_raise_intent__WEBPACK_IMPORTED_MODULE_4__.FDC3RaiseIntentModel),
/* harmony export */   "FDC3RaiseIntentView": () => (/* reexport safe */ _fdc3_raise_intent__WEBPACK_IMPORTED_MODULE_4__.FDC3RaiseIntentView),
/* harmony export */   "FDC3TickerInputModel": () => (/* reexport safe */ _fdc3_ticker_input__WEBPACK_IMPORTED_MODULE_5__.FDC3TickerInputModel),
/* harmony export */   "FDC3TickerInputView": () => (/* reexport safe */ _fdc3_ticker_input__WEBPACK_IMPORTED_MODULE_5__.FDC3TickerInputView),
/* harmony export */   "FDC3VersionModel": () => (/* reexport safe */ _fdc3_version__WEBPACK_IMPORTED_MODULE_6__.FDC3VersionModel),
/* harmony export */   "FDC3VersionView": () => (/* reexport safe */ _fdc3_version__WEBPACK_IMPORTED_MODULE_6__.FDC3VersionView)
/* harmony export */ });
/* harmony import */ var _css_widget_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/widget.css */ "./css/widget.css");
/* harmony import */ var _css_widget_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_widget_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fdc3_channel_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fdc3-channel-join */ "./lib/widgets/fdc3-channel-join/index.js");
/* harmony import */ var _fdc3_connection_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fdc3-connection-status */ "./lib/widgets/fdc3-connection-status/index.js");
/* harmony import */ var _fdc3_context_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fdc3-context-display */ "./lib/widgets/fdc3-context-display/index.js");
/* harmony import */ var _fdc3_raise_intent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fdc3-raise-intent */ "./lib/widgets/fdc3-raise-intent/index.js");
/* harmony import */ var _fdc3_ticker_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fdc3-ticker-input */ "./lib/widgets/fdc3-ticker-input/index.js");
/* harmony import */ var _fdc3_version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fdc3-version */ "./lib/widgets/fdc3-version/index.js");









/***/ }),

/***/ "./css/widget.css":
/*!************************!*\
  !*** ./css/widget.css ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./widget.css */ "./node_modules/css-loader/dist/cjs.js!./css/widget.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"jupyter_finos_widgets","version":"0.1.0","description":"A Custom Jupyter Widget Library","keywords":["jupyter","jupyterlab","jupyterlab-extension","widgets"],"files":["lib/**/*.js","dist/*.js","css/*.css"],"homepage":"https://github.com/chuck-adaptive/jupyter_finos_widgets","bugs":{"url":"https://github.com/chuck-adaptive/jupyter_finos_widgets/issues"},"license":"BSD-3-Clause","author":{"name":"Adaptive","email":"info@weareadaptive.com"},"main":"lib/index.js","type":"module","types":"./lib/index.d.ts","repository":{"type":"git","url":"https://github.com/chuck-adaptive/jupyter_finos_widgets"},"scripts":{"build":"yarn run build:lib && yarn run build:nbextension && yarn run build:labextension:dev","build:prod":"yarn run build:lib && yarn run build:nbextension && yarn run build:labextension","build:labextension":"jupyter labextension build .","build:labextension:dev":"jupyter labextension build --development True .","build:lib":"tsc --project tsconfig.build.json","build:nbextension":"webpack","clean":"yarn run clean:lib && yarn run clean:nbextension && yarn run clean:labextension","clean:lib":"rimraf lib","clean:labextension":"rimraf jupyter_finos_widgets/labextension","clean:nbextension":"rimraf jupyter_finos_widgets/nbextension/static/index.js","lint":"eslint . --ext .ts,.tsx --fix","lint:check":"eslint . --ext .ts,.tsx","prepack":"yarn run build:lib","prettier:write":"prettier --write .","test":"jest","watch":"npm-run-all -p watch:*","watch:lib":"tsc -w","watch:nbextension":"webpack --watch --mode=development","watch:labextension":"jupyter labextension watch ."},"dependencies":{"@connectifi/agent-web":"1.2.14","@emotion/react":"^11.11.1","@emotion/styled":"^11.11.0","@finos/fdc3":"^2.0.1","@jupyter-widgets/base":"^1.1.10 || ^2 || ^3 || ^4 || ^5 || ^6","@mui/material":"^5.13.4","react":"^18.2.0","react-dom":"^18.2.0"},"devDependencies":{"@babel/core":"^7.5.0","@babel/plugin-transform-react-jsx":"^7.21.5","@babel/preset-env":"^7.5.0","@jupyter-widgets/base-manager":"^1.0.2","@jupyterlab/builder":"^3.0.0","@lumino/application":"^1.6.0","@lumino/widgets":"^1.6.0","@testing-library/react":"^14.0.0","@types/jest":"^26.0.0","@types/react":"^18.2.8","@types/react-dom":"^18.2.4","@types/webpack-env":"^1.13.6","@typescript-eslint/eslint-plugin":"^3.6.0","@typescript-eslint/parser":"^3.6.0","acorn":"^7.2.0","css-loader":"^3.2.0","eslint":"^7.4.0","eslint-config-prettier":"^6.11.0","eslint-plugin-prettier":"^3.1.4","eslint-plugin-react":"^7.32.2","fs-extra":"^7.0.0","identity-obj-proxy":"^3.0.0","jest":"^26.0.0","jest-mock-extended":"^3.0.4","mkdirp":"^0.5.1","npm-run-all":"^4.1.3","prettier":"^2.0.5","rimraf":"^2.6.2","source-map-loader":"^1.1.3","style-loader":"^1.0.0","ts-jest":"^26.0.0","ts-loader":"^8.0.0","typescript":"~4.1.3","webpack":"^5.61.0","webpack-cli":"^4.0.0"},"jupyterlab":{"extension":"lib/plugin","outputDir":"jupyter_finos_widgets/labextension/","sharedPackages":{"@jupyter-widgets/base":{"bundled":false,"singleton":true},"react":{"bundled":true,"singleton":true},"react-dom":{"bundled":true,"singleton":true}}}}');

/***/ })

}]);
//# sourceMappingURL=lib_widgets_index_js-webpack_sharing_consume_default_react-dom_react-dom.9281f49c02038010d4c2.js.map