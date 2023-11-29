"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./instrumentation.js":
/*!****************************!*\
  !*** ./instrumentation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.register = void 0;\nfunction register() {\n    if (true) {\n        // Import the compiled Node-specific instrumentation code\n        __webpack_require__(/*! ./instrumentation.node.js */ \"./instrumentation.node.js\");\n    } else {}\n}\nexports.register = register;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbnN0cnVtZW50YXRpb24uanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFDN0RELGdCQUFnQixHQUFHLEtBQUs7QUFDeEIsU0FBU0U7SUFDTCxJQUFJQyxJQUE2QixFQUFVO1FBQ3ZDLHlEQUF5RDtRQUN6REcsbUJBQU9BLENBQUM7SUFDWixPQUNLLEVBRUo7QUFDTDtBQUNBTixnQkFBZ0IsR0FBR0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0anMtcHJvamVjdC8uL2luc3RydW1lbnRhdGlvbi5qcz8wN2U3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWdpc3RlciA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPT09ICdub2RlanMnKSB7XG4gICAgICAgIC8vIEltcG9ydCB0aGUgY29tcGlsZWQgTm9kZS1zcGVjaWZpYyBpbnN0cnVtZW50YXRpb24gY29kZVxuICAgICAgICByZXF1aXJlKCcuL2luc3RydW1lbnRhdGlvbi5ub2RlLmpzJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBDbGllbnQtc2lkZSBvciBvdGhlciBydW50aW1lIHNwZWNpZmljIGNvZGUgY2FuIGdvIGhlcmVcbiAgICB9XG59XG5leHBvcnRzLnJlZ2lzdGVyID0gcmVnaXN0ZXI7XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJyZWdpc3RlciIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1JVTlRJTUUiLCJyZXF1aXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./instrumentation.js\n");

/***/ }),

/***/ "./instrumentation.node.js":
/*!*********************************!*\
  !*** ./instrumentation.node.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n// instrumentation.node.ts\nvar sdk_node_1 = __webpack_require__(/*! @opentelemetry/sdk-node */ \"@opentelemetry/sdk-node\");\nvar exporter_trace_otlp_http_1 = __webpack_require__(/*! @opentelemetry/exporter-trace-otlp-http */ \"@opentelemetry/exporter-trace-otlp-http\");\nvar resources_1 = __webpack_require__(/*! @opentelemetry/resources */ \"@opentelemetry/resources\");\nvar semantic_conventions_1 = __webpack_require__(/*! @opentelemetry/semantic-conventions */ \"@opentelemetry/semantic-conventions\");\nvar sdk_trace_node_1 = __webpack_require__(/*! @opentelemetry/sdk-trace-node */ \"@opentelemetry/sdk-trace-node\");\nvar sdk = new sdk_node_1.NodeSDK({\n    resource: new resources_1.Resource((_a = {}, _a[semantic_conventions_1.SemanticResourceAttributes.SERVICE_NAME] = \"next-app\", _a)),\n    spanProcessor: new sdk_trace_node_1.SimpleSpanProcessor(new exporter_trace_otlp_http_1.OTLPTraceExporter({\n        url: \"https://api.axiom.co/v1/traces\",\n        headers: {\n            \"Authorization\": \"Bearer xaat-79d29c3f-d2f6-4d16-810e-847701f5aedb\",\n            \"X-Axiom-Dataset\": \"otel-next\"\n        }\n    }))\n});\ntry {\n    sdk.start();\n    console.log(\"OpenTelemetry SDK started successfully\");\n} catch (error) {\n    console.error(\"Error starting OpenTelemetry SDK:\", error);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbnN0cnVtZW50YXRpb24ubm9kZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLElBQUlBO0FBQ0pDLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBQzdELDBCQUEwQjtBQUMxQixJQUFJQyxhQUFhQyxtQkFBT0EsQ0FBQyx3REFBeUI7QUFDbEQsSUFBSUMsNkJBQTZCRCxtQkFBT0EsQ0FBQyx3RkFBeUM7QUFDbEYsSUFBSUUsY0FBY0YsbUJBQU9BLENBQUMsMERBQTBCO0FBQ3BELElBQUlHLHlCQUF5QkgsbUJBQU9BLENBQUMsZ0ZBQXFDO0FBQzFFLElBQUlJLG1CQUFtQkosbUJBQU9BLENBQUMsb0VBQStCO0FBQzlELElBQUlLLE1BQU0sSUFBSU4sV0FBV08sT0FBTyxDQUFDO0lBQzdCQyxVQUFVLElBQUlMLFlBQVlNLFFBQVEsQ0FBRWQsQ0FBQUEsS0FBSyxDQUFDLEdBQ3RDQSxFQUFFLENBQUNTLHVCQUF1Qk0sMEJBQTBCLENBQUNDLFlBQVksQ0FBQyxHQUFHLFlBQ3JFaEIsRUFBQztJQUNMaUIsZUFBZSxJQUFJUCxpQkFBaUJRLG1CQUFtQixDQUFDLElBQUlYLDJCQUEyQlksaUJBQWlCLENBQUM7UUFDckdDLEtBQUs7UUFDTEMsU0FBUztZQUNMLGlCQUFpQjtZQUNqQixtQkFBbUI7UUFDdkI7SUFDSjtBQUNKO0FBQ0EsSUFBSTtJQUNBVixJQUFJVyxLQUFLO0lBQ1RDLFFBQVFDLEdBQUcsQ0FBQztBQUNoQixFQUNBLE9BQU9DLE9BQU87SUFDVkYsUUFBUUUsS0FBSyxDQUFDLHFDQUFxQ0E7QUFDdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0anMtcHJvamVjdC8uL2luc3RydW1lbnRhdGlvbi5ub2RlLmpzPzU3YTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBpbnN0cnVtZW50YXRpb24ubm9kZS50c1xudmFyIHNka19ub2RlXzEgPSByZXF1aXJlKFwiQG9wZW50ZWxlbWV0cnkvc2RrLW5vZGVcIik7XG52YXIgZXhwb3J0ZXJfdHJhY2Vfb3RscF9odHRwXzEgPSByZXF1aXJlKFwiQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItdHJhY2Utb3RscC1odHRwXCIpO1xudmFyIHJlc291cmNlc18xID0gcmVxdWlyZShcIkBvcGVudGVsZW1ldHJ5L3Jlc291cmNlc1wiKTtcbnZhciBzZW1hbnRpY19jb252ZW50aW9uc18xID0gcmVxdWlyZShcIkBvcGVudGVsZW1ldHJ5L3NlbWFudGljLWNvbnZlbnRpb25zXCIpO1xudmFyIHNka190cmFjZV9ub2RlXzEgPSByZXF1aXJlKFwiQG9wZW50ZWxlbWV0cnkvc2RrLXRyYWNlLW5vZGVcIik7XG52YXIgc2RrID0gbmV3IHNka19ub2RlXzEuTm9kZVNESyh7XG4gICAgcmVzb3VyY2U6IG5ldyByZXNvdXJjZXNfMS5SZXNvdXJjZSgoX2EgPSB7fSxcbiAgICAgICAgX2Fbc2VtYW50aWNfY29udmVudGlvbnNfMS5TZW1hbnRpY1Jlc291cmNlQXR0cmlidXRlcy5TRVJWSUNFX05BTUVdID0gJ25leHQtYXBwJyxcbiAgICAgICAgX2EpKSxcbiAgICBzcGFuUHJvY2Vzc29yOiBuZXcgc2RrX3RyYWNlX25vZGVfMS5TaW1wbGVTcGFuUHJvY2Vzc29yKG5ldyBleHBvcnRlcl90cmFjZV9vdGxwX2h0dHBfMS5PVExQVHJhY2VFeHBvcnRlcih7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmF4aW9tLmNvL3YxL3RyYWNlcycsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciB4YWF0LTc5ZDI5YzNmLWQyZjYtNGQxNi04MTBlLTg0NzcwMWY1YWVkYicsXG4gICAgICAgICAgICAnWC1BeGlvbS1EYXRhc2V0JzogJ290ZWwtbmV4dCcsXG4gICAgICAgIH0sXG4gICAgfSkpLFxufSk7XG50cnkge1xuICAgIHNkay5zdGFydCgpO1xuICAgIGNvbnNvbGUubG9nKCdPcGVuVGVsZW1ldHJ5IFNESyBzdGFydGVkIHN1Y2Nlc3NmdWxseScpO1xufVxuY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igc3RhcnRpbmcgT3BlblRlbGVtZXRyeSBTREs6JywgZXJyb3IpO1xufVxuIl0sIm5hbWVzIjpbIl9hIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJzZGtfbm9kZV8xIiwicmVxdWlyZSIsImV4cG9ydGVyX3RyYWNlX290bHBfaHR0cF8xIiwicmVzb3VyY2VzXzEiLCJzZW1hbnRpY19jb252ZW50aW9uc18xIiwic2RrX3RyYWNlX25vZGVfMSIsInNkayIsIk5vZGVTREsiLCJyZXNvdXJjZSIsIlJlc291cmNlIiwiU2VtYW50aWNSZXNvdXJjZUF0dHJpYnV0ZXMiLCJTRVJWSUNFX05BTUUiLCJzcGFuUHJvY2Vzc29yIiwiU2ltcGxlU3BhblByb2Nlc3NvciIsIk9UTFBUcmFjZUV4cG9ydGVyIiwidXJsIiwiaGVhZGVycyIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./instrumentation.node.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _instrumentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../instrumentation */ \"./instrumentation.js\");\n\n\n\n // adjust the path if your instrumentation.ts is in a different directory\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_2___default()) {\n    componentDidMount() {\n        // Registering OpenTelemetry only when the app is running in a Node.js environment\n        if (true) {\n            (0,_instrumentation__WEBPACK_IMPORTED_MODULE_3__.register)();\n        }\n    }\n    render() {\n        const { Component, pageProps } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/tolatemitopeore-aruwaji/Documents/AXIOM/2023/axiom-github-otel/otel-nextjs-traces/pages/_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 12\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDQztBQUNtQixDQUFDLHlFQUF5RTtBQUV4SCxNQUFNRyxjQUFjRixpREFBR0E7SUFDckJHLG9CQUFvQjtRQUNsQixrRkFBa0Y7UUFDbEYsSUFBSSxJQUFrQixFQUFhO1lBQ2pDRiwwREFBUUE7UUFDVjtJQUNGO0lBRUFHLFNBQVM7UUFDUCxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxLQUFLO1FBQzNDLHFCQUFPLDhEQUFDRjtZQUFXLEdBQUdDLFNBQVM7Ozs7OztJQUNqQztBQUNGO0FBRUEsaUVBQWVKLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0anMtcHJvamVjdC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICcuLi9pbnN0cnVtZW50YXRpb24nOyAvLyBhZGp1c3QgdGhlIHBhdGggaWYgeW91ciBpbnN0cnVtZW50YXRpb24udHMgaXMgaW4gYSBkaWZmZXJlbnQgZGlyZWN0b3J5XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gUmVnaXN0ZXJpbmcgT3BlblRlbGVtZXRyeSBvbmx5IHdoZW4gdGhlIGFwcCBpcyBydW5uaW5nIGluIGEgTm9kZS5qcyBlbnZpcm9ubWVudFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVnaXN0ZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJBcHAiLCJyZWdpc3RlciIsIk15QXBwIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@opentelemetry/exporter-trace-otlp-http":
/*!**********************************************************!*\
  !*** external "@opentelemetry/exporter-trace-otlp-http" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@opentelemetry/exporter-trace-otlp-http");

/***/ }),

/***/ "@opentelemetry/resources":
/*!*******************************************!*\
  !*** external "@opentelemetry/resources" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@opentelemetry/resources");

/***/ }),

/***/ "@opentelemetry/sdk-node":
/*!******************************************!*\
  !*** external "@opentelemetry/sdk-node" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@opentelemetry/sdk-node");

/***/ }),

/***/ "@opentelemetry/sdk-trace-node":
/*!************************************************!*\
  !*** external "@opentelemetry/sdk-trace-node" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@opentelemetry/sdk-trace-node");

/***/ }),

/***/ "@opentelemetry/semantic-conventions":
/*!******************************************************!*\
  !*** external "@opentelemetry/semantic-conventions" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("@opentelemetry/semantic-conventions");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();