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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideBanners; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_utils/GlobalApi */ \"(app-pages-browser)/./app/_utils/GlobalApi.js\");\n/* harmony import */ var _barrel_optimize_names_FaCrown_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaCrown!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SideBanners() {\n    _s();\n    const [leaderData, setLeaderData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const result = await _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getLeadCount();\n            if (result && result.userInfos) {\n                const sortedData = result.userInfos.sort((a, b)=>b.completedChapterCounter - a.completedChapterCounter);\n                setLeaderData(sortedData);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-8 ml-3 mr-3 min-h-screen bg-slate-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl text-center text-blue-400 font-semibold mb-4\",\n                children: \"Lider Tablosu\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            leaderData.map((userInfo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-2 flex items-center cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold \".concat(index === 0 ? \"text-yellow-500\" : \"text-gray-500\"),\n                            children: index === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCrown_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCrown, {\n                                className: \"animate-pulse text-yellow-500\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 28\n                            }, this) : \"\".concat(index + 1, \". \")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-gray-700 ml-2\",\n                            children: userInfo.email\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-gray-700 ml-2\",\n                            children: [\n                                userInfo.completedChapterCounter,\n                                \"*10\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, userInfo.email, true, {\n                    fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(SideBanners, \"AbhxULq8b3iGLd/Kmi++tf1wJKA=\");\n_c = SideBanners;\nvar _c;\n$RefreshReg$(_c, \"SideBanners\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVyKS9jb3Vyc2VzL19jb21wb25lbnRzL1NpZGVCYW5uZXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNGO0FBQ1I7QUFFMUIsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1PLFlBQVk7WUFDaEIsTUFBTUMsU0FBUyxNQUFNTix3REFBU0EsQ0FBQ08sWUFBWTtZQUMzQyxJQUFJRCxVQUFVQSxPQUFPRSxTQUFTLEVBQUU7Z0JBQzlCLE1BQU1DLGFBQWFILE9BQU9FLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLEVBQUVDLHVCQUF1QixHQUFHRixFQUFFRSx1QkFBdUI7Z0JBQ3hHVCxjQUFjSztZQUNoQjtRQUNGO1FBRUFKO0lBQ0YsR0FBRyxFQUFFO0lBR0wscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBdUQ7Ozs7OztZQUNwRVosV0FBV2MsR0FBRyxDQUFDLENBQUNDLFVBQVVDLHNCQUN6Qiw4REFBQ0w7b0JBQXlCQyxXQUFVOztzQ0FDbEMsOERBQUNLOzRCQUFLTCxXQUFXLGFBQStELE9BQWxESSxVQUFVLElBQUksb0JBQW9CO3NDQUM3REEsVUFBVSxrQkFBSSw4REFBQ2xCLGtGQUFPQTtnQ0FBQ2MsV0FBVTs7Ozs7dUNBQW9DLEdBQWEsT0FBVkksUUFBUSxHQUFFOzs7Ozs7c0NBRXJGLDhEQUFDQzs0QkFBS0wsV0FBVTtzQ0FBc0JHLFNBQVNHLEtBQUs7Ozs7OztzQ0FDcEQsOERBQUNEOzRCQUFLTCxXQUFVOztnQ0FBc0JHLFNBQVNMLHVCQUF1QjtnQ0FBQzs7Ozs7Ozs7bUJBTC9ESyxTQUFTRyxLQUFLOzs7Ozs7Ozs7OztBQVdoQztHQS9Cd0JuQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcikvY291cnNlcy9fY29tcG9uZW50cy9TaWRlQmFubmVycy5qc3g/NzgxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2xvYmFsQXBpIGZyb20gXCIuLi8uLi8uLi9fdXRpbHMvR2xvYmFsQXBpXCJcclxuaW1wb3J0IHsgRmFDcm93biB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhbm5lcnMoKSB7XHJcbiAgY29uc3QgW2xlYWRlckRhdGEsIHNldExlYWRlckRhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBHbG9iYWxBcGkuZ2V0TGVhZENvdW50KCk7XHJcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnVzZXJJbmZvcykge1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSByZXN1bHQudXNlckluZm9zLnNvcnQoKGEsIGIpID0+IGIuY29tcGxldGVkQ2hhcHRlckNvdW50ZXIgLSBhLmNvbXBsZXRlZENoYXB0ZXJDb3VudGVyKTtcclxuICAgICAgICBzZXRMZWFkZXJEYXRhKHNvcnRlZERhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggbWwtMyBtci0zIG1pbi1oLXNjcmVlbiBiZy1zbGF0ZS0zMDBcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1jZW50ZXIgdGV4dC1ibHVlLTQwMCBmb250LXNlbWlib2xkIG1iLTRcIj5MaWRlciBUYWJsb3N1PC9oMj5cclxuICAgICAge2xlYWRlckRhdGEubWFwKCh1c2VySW5mbywgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17dXNlckluZm8uZW1haWx9IGNsYXNzTmFtZT1cIm1iLTIgZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGZvbnQtYm9sZCAke2luZGV4ID09PSAwID8gJ3RleHQteWVsbG93LTUwMCcgOiAndGV4dC1ncmF5LTUwMCd9YH0+XHJcbiAgICAgICAgICAgIHtpbmRleCA9PT0gMCA/IDxGYUNyb3duIGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2UgdGV4dC15ZWxsb3ctNTAwXCIvPiA6IGAke2luZGV4ICsgMX0uIGB9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIG1sLTJcIj57dXNlckluZm8uZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBtbC0yXCI+e3VzZXJJbmZvLmNvbXBsZXRlZENoYXB0ZXJDb3VudGVyfSoxMDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIFxyXG59XHJcbiAgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHbG9iYWxBcGkiLCJGYUNyb3duIiwiU2lkZUJhbm5lcnMiLCJsZWFkZXJEYXRhIiwic2V0TGVhZGVyRGF0YSIsImZldGNoRGF0YSIsInJlc3VsdCIsImdldExlYWRDb3VudCIsInVzZXJJbmZvcyIsInNvcnRlZERhdGEiLCJzb3J0IiwiYSIsImIiLCJjb21wbGV0ZWRDaGFwdGVyQ291bnRlciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwidXNlckluZm8iLCJpbmRleCIsInNwYW4iLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(router)/courses/_components/SideBanners.jsx\n"));

/***/ })

});