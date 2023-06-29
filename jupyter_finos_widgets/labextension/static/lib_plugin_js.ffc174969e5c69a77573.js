"use strict";
(self["webpackChunkjupyter_finos_widgets"] = self["webpackChunkjupyter_finos_widgets"] || []).push([["lib_plugin_js"],{

/***/ "./lib/plugin.js":
/*!***********************!*\
  !*** ./lib/plugin.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets */ "./lib/widgets/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "./lib/version.js");
// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.



const EXTENSION_ID = 'jupyter_finos_widgets:plugin';
/**
 * The example plugin.
 */
const examplePlugin = {
    id: EXTENSION_ID,
    requires: [_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__.IJupyterWidgetRegistry],
    activate: activateWidgetExtension,
    autoStart: true,
};
// the "as unknown as ..." typecast above is solely to support JupyterLab 1
// and 2 in the same codebase and should be removed when we migrate to Lumino.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (examplePlugin);
/**
 * Activate the widget extension.
 */
function activateWidgetExtension(app, registry) {
    registry.registerWidget({
        name: _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_NAME,
        version: _version__WEBPACK_IMPORTED_MODULE_2__.MODULE_VERSION,
        exports: _widgets__WEBPACK_IMPORTED_MODULE_1__,
    });
}


/***/ })

}]);
//# sourceMappingURL=lib_plugin_js.ffc174969e5c69a77573.js.map