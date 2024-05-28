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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideBanners; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_utils/GlobalApi */ \"(app-pages-browser)/./app/_utils/GlobalApi.js\");\n/* harmony import */ var _barrel_optimize_names_FaCrown_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaCrown!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SideBanners() {\n    _s();\n    const [leaderData, setLeaderData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const result = await _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getLeadCount();\n            if (result && result.userInfos) {\n                const sortedData = result.userInfos.sort((a, b)=>b.completedChapterCounter - a.completedChapterCounter);\n                setLeaderData(sortedData);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-8 ml-3 min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"overflow-x-auto shadow-md pt-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl text-center text-blue-400 font-semibold mb-4 animate-pulse\",\n                    children: \"Lider Tablosu\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                leaderData.map((userInfo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold \".concat(index === 0 ? \"text-yellow-500 animate-bounce\" : \"text-gray-500\"),\n                                children: index === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCrown_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCrown, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 32\n                                }, this) : \"\".concat(index + 1, \". \")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-700\",\n                                children: userInfo.email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, userInfo.email, true, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n        lineNumber: 22,\n        columnNumber: 7\n    }, this);\n}\n_s(SideBanners, \"AbhxULq8b3iGLd/Kmi++tf1wJKA=\");\n_c = SideBanners;\nvar _c;\n$RefreshReg$(_c, \"SideBanners\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVyKS9jb3Vyc2VzL19jb21wb25lbnRzL1NpZGVCYW5uZXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNGO0FBQ1I7QUFFMUIsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1PLFlBQVk7WUFDaEIsTUFBTUMsU0FBUyxNQUFNTix3REFBU0EsQ0FBQ08sWUFBWTtZQUMzQyxJQUFJRCxVQUFVQSxPQUFPRSxTQUFTLEVBQUU7Z0JBQzlCLE1BQU1DLGFBQWFILE9BQU9FLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLEVBQUVDLHVCQUF1QixHQUFHRixFQUFFRSx1QkFBdUI7Z0JBQ3hHVCxjQUFjSztZQUNoQjtRQUNGO1FBRUFKO0lBQ0YsR0FBRyxFQUFFO0lBR0wscUJBQ0ksOERBQUNTO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBcUU7Ozs7OztnQkFDaEZaLFdBQVdjLEdBQUcsQ0FBQyxDQUFDQyxVQUFVQyxzQkFDekIsOERBQUNMO3dCQUF5QkMsV0FBVTs7MENBQ2xDLDhEQUFDSztnQ0FBS0wsV0FBVyxhQUE4RSxPQUFqRUksVUFBVSxJQUFJLG1DQUFtQzswQ0FDNUVBLFVBQVUsa0JBQUksOERBQUNsQixrRkFBT0E7Ozs7MkNBQU0sR0FBYSxPQUFWa0IsUUFBUSxHQUFFOzs7Ozs7MENBRTVDLDhEQUFDQztnQ0FBS0wsV0FBVTswQ0FBaUJHLFNBQVNHLEtBQUs7Ozs7Ozs7dUJBSnZDSCxTQUFTRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBVXBDO0dBL0J3Qm5CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm91dGVyKS9jb3Vyc2VzL19jb21wb25lbnRzL1NpZGVCYW5uZXJzLmpzeD83ODEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHbG9iYWxBcGkgZnJvbSBcIi4uLy4uLy4uL191dGlscy9HbG9iYWxBcGlcIlxyXG5pbXBvcnQgeyBGYUNyb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFubmVycygpIHtcclxuICBjb25zdCBbbGVhZGVyRGF0YSwgc2V0TGVhZGVyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEdsb2JhbEFwaS5nZXRMZWFkQ291bnQoKTtcclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudXNlckluZm9zKSB7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IHJlc3VsdC51c2VySW5mb3Muc29ydCgoYSwgYikgPT4gYi5jb21wbGV0ZWRDaGFwdGVyQ291bnRlciAtIGEuY29tcGxldGVkQ2hhcHRlckNvdW50ZXIpO1xyXG4gICAgICAgIHNldExlYWRlckRhdGEoc29ydGVkRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IG1sLTMgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG8gc2hhZG93LW1kIHB0LTJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWNlbnRlciB0ZXh0LWJsdWUtNDAwIGZvbnQtc2VtaWJvbGQgbWItNCBhbmltYXRlLXB1bHNlXCI+TGlkZXIgVGFibG9zdTwvaDI+XHJcbiAgICAgICAgICB7bGVhZGVyRGF0YS5tYXAoKHVzZXJJbmZvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17dXNlckluZm8uZW1haWx9IGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Bmb250LWJvbGQgJHtpbmRleCA9PT0gMCA/ICd0ZXh0LXllbGxvdy01MDAgYW5pbWF0ZS1ib3VuY2UnIDogJ3RleHQtZ3JheS01MDAnfWB9PlxyXG4gICAgICAgICAgICAgICAge2luZGV4ID09PSAwID8gPEZhQ3Jvd24gLz4gOiBgJHtpbmRleCArIDF9LiBgfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+e3VzZXJJbmZvLmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4gICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR2xvYmFsQXBpIiwiRmFDcm93biIsIlNpZGVCYW5uZXJzIiwibGVhZGVyRGF0YSIsInNldExlYWRlckRhdGEiLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJnZXRMZWFkQ291bnQiLCJ1c2VySW5mb3MiLCJzb3J0ZWREYXRhIiwic29ydCIsImEiLCJiIiwiY29tcGxldGVkQ2hhcHRlckNvdW50ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsInVzZXJJbmZvIiwiaW5kZXgiLCJzcGFuIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(router)/courses/_components/SideBanners.jsx\n"));

/***/ })

});