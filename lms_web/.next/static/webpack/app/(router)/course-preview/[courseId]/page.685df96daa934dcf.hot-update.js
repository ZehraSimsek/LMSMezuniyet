"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(router)/course-preview/[courseId]/page",{

/***/ "(app-pages-browser)/./app/(router)/course-preview/[courseId]/_components/CourseContent.jsx":
/*!******************************************************************************!*\
  !*** ./app/(router)/course-preview/[courseId]/_components/CourseContent.jsx ***!
  \******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Lock_Play_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Lock,Play!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/play.js\");\n/* harmony import */ var _barrel_optimize_names_Lock_Play_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Lock,Play!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/lock.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction CourseContent(param) {\n    let { courseInfo } = param;\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3 bg-white rounded-sm mt-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Kurs İ\\xe7eriği\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            courseInfo.chapter.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"p-3 text-[14px] flex justify-between \\n                items-center border rounded-sm px-4 \\n                cursor-pointer m-2 hover:bg-gray-200 hover:text-gray-500 \\n                \".concat(activeIndex == index && \"bg-purple-600 text-white\"),\n                        children: [\n                            index + 1,\n                            \". \",\n                            item.name,\n                            activeIndex == index ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Lock_Play_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 20\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Lock_Play_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 20\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(CourseContent, \"VdNP8ORBCXtUNPDJRm2kO4BciKM=\");\n_c = CourseContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseContent);\nvar _c;\n$RefreshReg$(_c, \"CourseContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVyKS9jb3Vyc2UtcHJldmlldy9bY291cnNlSWRdL19jb21wb25lbnRzL0NvdXJzZUNvbnRlbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBQ0U7QUFFdEMsU0FBU0ksY0FBYyxLQUFZO1FBQVosRUFBQ0MsVUFBVSxFQUFDLEdBQVo7O0lBQ25CLE1BQU0sQ0FBQ0MsYUFBY0MsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVsRCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSEwsV0FBV00sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBT0Msc0JBQzVCLDhEQUFDTjs4QkFDRCw0RUFBQ0U7d0JBQUdELFdBQVcsMkxBRzBDLE9BQW5ESCxlQUFlUSxTQUFTOzs0QkFDdEJBLFFBQU07NEJBQUU7NEJBQUdELEtBQUtFLElBQUk7NEJBQ3BCVCxlQUFlUSxzQkFDaEIsOERBQUNYLHFGQUFJQTtnQ0FBQ00sV0FBVTs7Ozs7cURBQ2hCLDhEQUFDUCxxRkFBSUE7Z0NBQUNPLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5DO0dBckJTTDtLQUFBQTtBQXVCVCwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcikvY291cnNlLXByZXZpZXcvW2NvdXJzZUlkXS9fY29tcG9uZW50cy9Db3Vyc2VDb250ZW50LmpzeD8yYzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0xvY2ssUGxheX0gZnJvbSAnbHVjaWRlLXJlYWN0J1xyXG5cclxuZnVuY3Rpb24gQ291cnNlQ29udGVudCh7Y291cnNlSW5mb30pIHtcclxuICAgIGNvbnN0IFthY3RpdmVJbmRleCAsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3AtMyBiZy13aGl0ZSByb3VuZGVkLXNtIG10LTMnPlxyXG4gICAgICAgIDxoMj5LdXJzIMSww6dlcmnEn2k8L2gyPlxyXG4gICAgICAgIHtjb3Vyc2VJbmZvLmNoYXB0ZXIubWFwKChpdGVtICwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YHAtMyB0ZXh0LVsxNHB4XSBmbGV4IGp1c3RpZnktYmV0d2VlbiBcclxuICAgICAgICAgICAgICAgIGl0ZW1zLWNlbnRlciBib3JkZXIgcm91bmRlZC1zbSBweC00IFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIgbS0yIGhvdmVyOmJnLWdyYXktMjAwIGhvdmVyOnRleHQtZ3JheS01MDAgXHJcbiAgICAgICAgICAgICAgICAke2FjdGl2ZUluZGV4ID09IGluZGV4ICYmICdiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAge2luZGV4KzF9LiB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAge2FjdGl2ZUluZGV4ID09IGluZGV4P1xyXG4gICAgICAgICAgICAgICAgICAgPFBsYXkgY2xhc3NOYW1lPVwiaC00IHctNFwiLz46XHJcbiAgICAgICAgICAgICAgICAgICA8TG9jayBjbGFzc05hbWU9XCJoLTQgdy00XCIvPn1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VDb250ZW50Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2NrIiwiUGxheSIsIkNvdXJzZUNvbnRlbnQiLCJjb3Vyc2VJbmZvIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiY2hhcHRlciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(router)/course-preview/[courseId]/_components/CourseContent.jsx\n"));

/***/ })

});