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

/***/ "(app-pages-browser)/./app/(router)/courses/_components/SideBanners.jsx":
/*!**********************************************************!*\
  !*** ./app/(router)/courses/_components/SideBanners.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideBanners; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_utils/GlobalApi */ \"(app-pages-browser)/./app/_utils/GlobalApi.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SideBanners() {\n    _s();\n    const [leaderData, setLeaderData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const result = await _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getLeadCount();\n            if (result && result.userInfos) {\n                const sortedData = result.userInfos.sort((a, b)=>b.completedChapterCounter - a.completedChapterCounter);\n                setLeaderData(sortedData);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mb-8 w-70 ml-3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto shadow-md rounded-lg p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mb-4\",\n                        children: \"Lider Tablosu\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this),\n                    leaderData.map((userInfo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-bold \".concat(index === 0 ? \"text-yellow-500\" : \"text-gray-500\"),\n                                    children: index === 0 ? \"\\uD83D\\uDC51 \" : \"\".concat(index + 1, \". \")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-gray-700\",\n                                    children: userInfo.email\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, userInfo.email, true, {\n                            fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(SideBanners, \"AbhxULq8b3iGLd/Kmi++tf1wJKA=\");\n_c = SideBanners;\nvar _c;\n$RefreshReg$(_c, \"SideBanners\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVyKS9jb3Vyc2VzL19jb21wb25lbnRzL1NpZGVCYW5uZXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ0Q7QUFFbkMsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLFlBQVk7WUFDaEIsTUFBTUMsU0FBUyxNQUFNTCx3REFBU0EsQ0FBQ00sWUFBWTtZQUMzQyxJQUFJRCxVQUFVQSxPQUFPRSxTQUFTLEVBQUU7Z0JBQzlCLE1BQU1DLGFBQWFILE9BQU9FLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLEVBQUVDLHVCQUF1QixHQUFHRixFQUFFRSx1QkFBdUI7Z0JBQ3hHVCxjQUFjSztZQUNoQjtRQUNGO1FBRUFKO0lBQ0YsR0FBRyxFQUFFO0lBR0wscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQTZCOzs7Ozs7b0JBQzFDWixXQUFXYyxHQUFHLENBQUMsQ0FBQ0MsVUFBVUMsc0JBQ3pCLDhEQUFDTDs0QkFBeUJDLFdBQVU7OzhDQUNsQyw4REFBQ0s7b0NBQUtMLFdBQVcsYUFBK0QsT0FBbERJLFVBQVUsSUFBSSxvQkFBb0I7OENBQzdEQSxVQUFVLElBQUksa0JBQVEsR0FBYSxPQUFWQSxRQUFRLEdBQUU7Ozs7Ozs4Q0FFdEMsOERBQUNDO29DQUFLTCxXQUFVOzhDQUFpQkcsU0FBU0csS0FBSzs7Ozs7OzsyQkFKdkNILFNBQVNHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdwQztHQWpDd0JuQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcikvY291cnNlcy9fY29tcG9uZW50cy9TaWRlQmFubmVycy5qc3g/NzgxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2xvYmFsQXBpIGZyb20gXCIuLi8uLi8uLi9fdXRpbHMvR2xvYmFsQXBpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFubmVycygpIHtcclxuICBjb25zdCBbbGVhZGVyRGF0YSwgc2V0TGVhZGVyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEdsb2JhbEFwaS5nZXRMZWFkQ291bnQoKTtcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudXNlckluZm9zKSB7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IHJlc3VsdC51c2VySW5mb3Muc29ydCgoYSwgYikgPT4gYi5jb21wbGV0ZWRDaGFwdGVyQ291bnRlciAtIGEuY29tcGxldGVkQ2hhcHRlckNvdW50ZXIpO1xyXG4gICAgICAgIHNldExlYWRlckRhdGEoc29ydGVkRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggdy03MCBtbC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG8gc2hhZG93LW1kIHJvdW5kZWQtbGcgcC00XCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTRcIj5MaWRlciBUYWJsb3N1PC9oMj5cclxuICAgICAgICAgIHtsZWFkZXJEYXRhLm1hcCgodXNlckluZm8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXt1c2VySW5mby5lbWFpbH0gY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZvbnQtYm9sZCAke2luZGV4ID09PSAwID8gJ3RleHQteWVsbG93LTUwMCcgOiAndGV4dC1ncmF5LTUwMCd9YH0+XHJcbiAgICAgICAgICAgICAgICB7aW5kZXggPT09IDAgPyAn8J+RkSAnIDogYCR7aW5kZXggKyAxfS4gYH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPnt1c2VySW5mby5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4gICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR2xvYmFsQXBpIiwiU2lkZUJhbm5lcnMiLCJsZWFkZXJEYXRhIiwic2V0TGVhZGVyRGF0YSIsImZldGNoRGF0YSIsInJlc3VsdCIsImdldExlYWRDb3VudCIsInVzZXJJbmZvcyIsInNvcnRlZERhdGEiLCJzb3J0IiwiYSIsImIiLCJjb21wbGV0ZWRDaGFwdGVyQ291bnRlciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwidXNlckluZm8iLCJpbmRleCIsInNwYW4iLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(router)/courses/_components/SideBanners.jsx\n"));

/***/ })

});