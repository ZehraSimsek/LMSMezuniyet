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

/***/ "(app-pages-browser)/./app/(router)/course-preview/[courseId]/page.jsx":
/*!*********************************************************!*\
  !*** ./app/(router)/course-preview/[courseId]/page.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_VideoDesc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/VideoDesc */ \"(app-pages-browser)/./app/(router)/course-preview/[courseId]/_components/VideoDesc.jsx\");\n/* harmony import */ var _components_CourseEnroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/CourseEnroll */ \"(app-pages-browser)/./app/(router)/course-preview/[courseId]/_components/CourseEnroll.jsx\");\n/* harmony import */ var _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_utils/GlobalApi */ \"(app-pages-browser)/./app/_utils/GlobalApi.js\");\n/* harmony import */ var _components_CourseContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/CourseContent */ \"(app-pages-browser)/./app/(router)/course-preview/[courseId]/_components/CourseContent.jsx\");\n// \"use client\"\n// import React, { useEffect } from 'react'\n// import VideoDesc from './_components/VideoDesc';\n// import {usePathname} from 'next/router'\n// function CoursePreview({params}) {\n//     const path = usePathname();\n//     useEffect(() =>{\n//         console.log(params);\n//     },[]);\n//   return (\n//     <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>\n//         <div className='col-span-2 bg-white p-36 '>\n//             <VideoDesc />\n//         </div>\n//     </div>\n//   )\n// }\n// export default CoursePreview\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CoursePreview(param) {\n    let { params } = param;\n    _s();\n    const [courseInfo, setCourseInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        params && getCourseInfoById();\n    }, [\n        params\n    ]);\n    const getCourseInfoById = ()=>{\n        _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getCourseById(params === null || params === void 0 ? void 0 : params.courseId).then((resp)=>{\n            setCourseInfo(resp === null || resp === void 0 ? void 0 : resp.courseList);\n        });\n    };\n    return courseInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 md:grid-cols-3 p-5 gap-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-2 bg-white p-3 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VideoDesc__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    courseInfo: courseInfo\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\page.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\page.jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CourseEnroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\page.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CourseContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        courseInfo: courseInfo\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\page.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\page.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\edaka\\\\OneDrive\\\\Belgeler\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\page.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(CoursePreview, \"DB5MTKeBdn4QIZyRcfwRclrLm8E=\");\n_c = CoursePreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoursePreview);\nvar _c;\n$RefreshReg$(_c, \"CoursePreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVyKS9jb3Vyc2UtcHJldmlldy9bY291cnNlSWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZUFBZTtBQUNmLDJDQUEyQztBQUMzQyxtREFBbUQ7QUFDbkQsMENBQTBDO0FBRTFDLHFDQUFxQztBQUNyQyxrQ0FBa0M7QUFFbEMsdUJBQXVCO0FBQ3ZCLCtCQUErQjtBQUMvQixhQUFhO0FBRWIsYUFBYTtBQUNiLGtFQUFrRTtBQUNsRSxzREFBc0Q7QUFDdEQsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsTUFBTTtBQUNOLElBQUk7QUFFSiwrQkFBK0I7OztBQUVtQjtBQUNGO0FBQ0s7QUFDSDtBQUNNO0FBRXhELFNBQVNPLGNBQWMsS0FBUTtRQUFSLEVBQUNDLE1BQU0sRUFBQyxHQUFSOztJQUNuQixNQUFNLENBQUNDLFlBQWFDLGNBQWMsR0FBR1IsK0NBQVFBO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSTyxVQUFRRztJQUNWLEdBQUU7UUFBQ0g7S0FBTztJQUVWLE1BQU1HLG9CQUFvQjtRQUN0Qk4sd0RBQVNBLENBQUNPLGFBQWEsQ0FBQ0osbUJBQUFBLDZCQUFBQSxPQUFRSyxRQUFRLEVBQ3ZDQyxJQUFJLENBQUNDLENBQUFBO1lBQ0pMLGNBQWNLLGlCQUFBQSwyQkFBQUEsS0FBTUMsVUFBVTtRQUNoQztJQUNKO0lBRUYsT0FBT1AsNEJBQ0wsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ2YsNkRBQVNBO29CQUFDTSxZQUFZQTs7Ozs7Ozs7Ozs7MEJBRTNCLDhEQUFDUTs7a0NBQ0csOERBQUNiLGdFQUFZQTs7Ozs7a0NBQ2IsOERBQUNFLGlFQUFhQTt3QkFBQ0csWUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl2QztHQXpCU0Y7S0FBQUE7QUEyQlQsK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhyb3V0ZXIpL2NvdXJzZS1wcmV2aWV3L1tjb3Vyc2VJZF0vcGFnZS5qc3g/NzBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcInVzZSBjbGllbnRcIlxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBWaWRlb0Rlc2MgZnJvbSAnLi9fY29tcG9uZW50cy9WaWRlb0Rlc2MnO1xyXG4vLyBpbXBvcnQge3VzZVBhdGhuYW1lfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbi8vIGZ1bmN0aW9uIENvdXJzZVByZXZpZXcoe3BhcmFtc30pIHtcclxuLy8gICAgIGNvbnN0IHBhdGggPSB1c2VQYXRobmFtZSgpO1xyXG5cclxuLy8gICAgIHVzZUVmZmVjdCgoKSA9PntcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4vLyAgICAgfSxbXSk7XHJcbiAgICBcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgcC01IGdhcC0zJz5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMiBiZy13aGl0ZSBwLTM2ICc+XHJcbi8vICAgICAgICAgICAgIDxWaWRlb0Rlc2MgLz5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQ291cnNlUHJldmlld1xyXG5cInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVmlkZW9EZXNjIGZyb20gJy4vX2NvbXBvbmVudHMvVmlkZW9EZXNjJztcclxuaW1wb3J0IENvdXJzZUVucm9sbCBmcm9tICcuL19jb21wb25lbnRzL0NvdXJzZUVucm9sbCdcclxuaW1wb3J0IEdsb2JhbEFwaSBmcm9tICcuLi8uLi8uLi9fdXRpbHMvR2xvYmFsQXBpJztcclxuaW1wb3J0IENvdXJzZUNvbnRlbnQgZnJvbSAnLi9fY29tcG9uZW50cy9Db3Vyc2VDb250ZW50JztcclxuXHJcbmZ1bmN0aW9uIENvdXJzZVByZXZpZXcoe3BhcmFtc30pIHtcclxuICAgIGNvbnN0IFtjb3Vyc2VJbmZvICwgc2V0Q291cnNlSW5mb10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgcGFyYW1zJiZnZXRDb3Vyc2VJbmZvQnlJZCgpO1xyXG4gICAgfSxbcGFyYW1zXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGdldENvdXJzZUluZm9CeUlkID0gKCkgPT4ge1xyXG4gICAgICAgIEdsb2JhbEFwaS5nZXRDb3Vyc2VCeUlkKHBhcmFtcz8uY291cnNlSWQpXHJcbiAgICAgICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICBzZXRDb3Vyc2VJbmZvKHJlc3A/LmNvdXJzZUxpc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiBjb3Vyc2VJbmZvJiYoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBwLTUgZ2FwLTMnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0yIGJnLXdoaXRlIHAtMyAnPlxyXG4gICAgICAgICAgICA8VmlkZW9EZXNjIGNvdXJzZUluZm89e2NvdXJzZUluZm99Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q291cnNlRW5yb2xsIC8+XHJcbiAgICAgICAgICAgIDxDb3Vyc2VDb250ZW50IGNvdXJzZUluZm89e2NvdXJzZUluZm99Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlUHJldmlld1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlZpZGVvRGVzYyIsIkNvdXJzZUVucm9sbCIsIkdsb2JhbEFwaSIsIkNvdXJzZUNvbnRlbnQiLCJDb3Vyc2VQcmV2aWV3IiwicGFyYW1zIiwiY291cnNlSW5mbyIsInNldENvdXJzZUluZm8iLCJnZXRDb3Vyc2VJbmZvQnlJZCIsImdldENvdXJzZUJ5SWQiLCJjb3Vyc2VJZCIsInRoZW4iLCJyZXNwIiwiY291cnNlTGlzdCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(router)/course-preview/[courseId]/page.jsx\n"));

/***/ })

});