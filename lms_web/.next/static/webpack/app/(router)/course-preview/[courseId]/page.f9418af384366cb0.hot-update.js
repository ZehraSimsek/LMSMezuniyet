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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Lock_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Lock!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/lock.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction CourseContent(param) {\n    let { courseInfo } = param;\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3 bg-white rounded-sm mt-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Kursun I\\xe7eriği\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            courseInfo.chapter.map((item, index)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"p-2 text-[14px] flex justify-between \\n                items-center border rounded-sm px-4 \\n                cursor-pointer m-2 hover:bg-gray-200 hover:text-gray-500 \".concat(activeIndex === index ? \"bg-purple-600 text-white\" : \"\"),\n                        children: [\n                            index + 1,\n                            \". \",\n                            item.name,\n                            activeIndex === index ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Play, {\n                                className: \"h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 20\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Lock_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 20\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Lock_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: \"h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 20\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\_components\\\\CourseContent.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(CourseContent, \"VdNP8ORBCXtUNPDJRm2kO4BciKM=\");\n_c = CourseContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseContent);\nvar _c;\n$RefreshReg$(_c, \"CourseContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVyKS9jb3Vyc2UtcHJldmlldy9bY291cnNlSWRdL19jb21wb25lbnRzL0NvdXJzZUNvbnRlbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0M7QUFDSDtBQUVqQyxTQUFTRyxjQUFjLEtBQVk7UUFBWixFQUFDQyxVQUFVLEVBQUMsR0FBWjs7SUFDbkIsTUFBTSxDQUFDQyxhQUFjQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDO0lBRWxELHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7MEJBQUc7Ozs7OztZQUNITCxXQUFXTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFPQzs4QkFDNUIsOERBQUNOOzhCQUNELDRFQUFDRTt3QkFBR0QsV0FBVyx5S0FFd0csT0FBeERILGdCQUFnQlEsUUFBUSw2QkFBNkI7OzRCQUM1R0EsUUFBTTs0QkFBRTs0QkFBR0QsS0FBS0UsSUFBSTs0QkFDcEJULGdCQUFnQlEsc0JBQ2pCLDhEQUFDRTtnQ0FBS1AsV0FBVTs7Ozs7cURBQ2hCLDhEQUFDTixnRkFBSUE7Z0NBQUNNLFdBQVU7Ozs7OzswQ0FFaEIsOERBQUNOLGdGQUFJQTtnQ0FBQ00sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHM0I7Ozs7Ozs7QUFHUjtHQXRCU0w7S0FBQUE7QUF3QlQsK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhyb3V0ZXIpL2NvdXJzZS1wcmV2aWV3L1tjb3Vyc2VJZF0vX2NvbXBvbmVudHMvQ291cnNlQ29udGVudC5qc3g/MmM0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtMb2NrfSBmcm9tICdsdWNpZGUtcmVhY3QnXHJcblxyXG5mdW5jdGlvbiBDb3Vyc2VDb250ZW50KHtjb3Vyc2VJbmZvfSkge1xyXG4gICAgY29uc3QgW2FjdGl2ZUluZGV4ICwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncC0zIGJnLXdoaXRlIHJvdW5kZWQtc20gbXQtMyc+XHJcbiAgICAgICAgPGgyPkt1cnN1biBJw6dlcmnEn2k8L2gyPlxyXG4gICAgICAgIHtjb3Vyc2VJbmZvLmNoYXB0ZXIubWFwKChpdGVtICwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YHAtMiB0ZXh0LVsxNHB4XSBmbGV4IGp1c3RpZnktYmV0d2VlbiBcclxuICAgICAgICAgICAgICAgIGl0ZW1zLWNlbnRlciBib3JkZXIgcm91bmRlZC1zbSBweC00IFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yLXBvaW50ZXIgbS0yIGhvdmVyOmJnLWdyYXktMjAwIGhvdmVyOnRleHQtZ3JheS01MDAgJHthY3RpdmVJbmRleCA9PT0gaW5kZXggPyAnYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlJyA6ICcnfWB9PiBcclxuICAgICAgICAgICAgICAgICAgIHtpbmRleCsxfS4ge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgIHthY3RpdmVJbmRleCA9PT0gaW5kZXggP1xyXG4gICAgICAgICAgICAgICAgICAgPFBsYXkgY2xhc3NOYW1lPVwiaC00IHctNFwiLz46XHJcbiAgICAgICAgICAgICAgICAgICA8TG9jayBjbGFzc05hbWU9XCJoLTQgdy00XCIvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgPExvY2sgY2xhc3NOYW1lPVwiaC00IHctNFwiLz5cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VDb250ZW50Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2NrIiwiQ291cnNlQ29udGVudCIsImNvdXJzZUluZm8iLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJjaGFwdGVyIiwibWFwIiwiaXRlbSIsImluZGV4IiwibmFtZSIsIlBsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(router)/course-preview/[courseId]/_components/CourseContent.jsx\n"));

/***/ })

});