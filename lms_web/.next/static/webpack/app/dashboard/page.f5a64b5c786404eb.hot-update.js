"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/InProgressCourseList.jsx":
/*!************************************************!*\
  !*** ./app/dashboard/InProgressCourseList.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProgressCourseItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressCourseItem */ \"(app-pages-browser)/./app/dashboard/ProgressCourseItem.jsx\");\n\n\n\nfunction InProgressCourseList(param) {\n    let { userEnrolledCourses } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-5 bg-white mt-3 rounded-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-purple-500 text-[18px] font-semibold fixedElement\",\n                children: \"Son Alınan Kurslar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: userEnrolledCourses.map((item, index)=>{\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressCourseItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, index, false, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = InProgressCourseList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InProgressCourseList);\nvar _c;\n$RefreshReg$(_c, \"InProgressCourseList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvSW5Qcm9ncmVzc0NvdXJzZUxpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUM2QjtBQUV0RCxTQUFTRSxxQkFBcUIsS0FBcUI7UUFBckIsRUFBQ0MsbUJBQW1CLEVBQUMsR0FBckI7SUFDNUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUQ7Ozs7OzswQkFDdkUsOERBQUNEOzBCQUVPRCxvQkFBb0JJLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztrQ0FDM0IsOERBQUNSLDJEQUFrQkEsTUFBTVE7Ozs7O2dCQUc3Qjs7Ozs7Ozs7Ozs7O0FBS2hCO0tBZlNQO0FBaUJULCtEQUFlQSxvQkFBb0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9JblByb2dyZXNzQ291cnNlTGlzdC5qc3g/ZmJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9ncmVzc0NvdXJzZUl0ZW0gZnJvbSAnLi9Qcm9ncmVzc0NvdXJzZUl0ZW0nO1xyXG5cclxuZnVuY3Rpb24gSW5Qcm9ncmVzc0NvdXJzZUxpc3Qoe3VzZXJFbnJvbGxlZENvdXJzZXN9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwLTUgYmctd2hpdGUgbXQtMyByb3VuZGVkLXNtJz5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXB1cnBsZS01MDAgdGV4dC1bMThweF0gZm9udC1zZW1pYm9sZCBmaXhlZEVsZW1lbnQnPlNvbiBBbMSxbmFuIEt1cnNsYXI8L2gyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXJFbnJvbGxlZENvdXJzZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc0NvdXJzZUl0ZW0ga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJblByb2dyZXNzQ291cnNlTGlzdCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb2dyZXNzQ291cnNlSXRlbSIsIkluUHJvZ3Jlc3NDb3Vyc2VMaXN0IiwidXNlckVucm9sbGVkQ291cnNlcyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/InProgressCourseList.jsx\n"));

/***/ })

});