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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_VideoDesc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/VideoDesc */ \"(app-pages-browser)/./app/(router)/course-preview/[courseId]/_components/VideoDesc.jsx\");\n/* harmony import */ var _components_CourseEnroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/CourseEnroll */ \"(app-pages-browser)/./app/(router)/course-preview/[courseId]/_components/CourseEnroll.jsx\");\n/* harmony import */ var _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_utils/GlobalApi */ \"(app-pages-browser)/./app/_utils/GlobalApi.js\");\n/* harmony import */ var _components_CourseContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/CourseContent */ \"(app-pages-browser)/./app/(router)/course-preview/[courseId]/_components/CourseContent.jsx\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n// \"use client\"\n// import React, { useEffect } from 'react'\n// import VideoDesc from './_components/VideoDesc';\n// import {usePathname} from 'next/router'\n// function CoursePreview({params}) {\n//     const path = usePathname();\n//     useEffect(() =>{\n//         console.log(params);\n//     },[]);\n//   return (\n//     <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>\n//         <div className='col-span-2 bg-white p-36 '>\n//             <VideoDesc />\n//         </div>\n//     </div>\n//   )\n// }\n// export default CoursePreview\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CoursePreview(param) {\n    let { params } = param;\n    _s();\n    const [courseInfo, setCourseInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useUser)();\n    const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        params && getCourseInfoById();\n    }, [\n        params\n    ]);\n    const getCourseInfoById = ()=>{\n        _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getCourseById(params === null || params === void 0 ? void 0 : params.courseId).then((resp)=>{\n            setCourseInfo(resp === null || resp === void 0 ? void 0 : resp.courseList);\n        });\n    };\n    const getUserEnrollDetail = ()=>{\n        _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getUserEnrollDetail(courseInfo.slug, user.primaryEmailAddress.emailAddress).then((resp)=>{\n            if (resp) {\n                setIsUserAlreadyEnrolled;\n            }\n        });\n    };\n    return courseInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 md:grid-cols-3 p-5 gap-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-span-2 bg-white p-36 pt-10 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VideoDesc__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    courseInfo: courseInfo\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\page.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\page.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CourseEnroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        courseInfo: courseInfo\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\page.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CourseContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        courseInfo: courseInfo\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\page.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\page.jsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\course-preview\\\\[courseId]\\\\page.jsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(CoursePreview, \"1Q9cdKTiznIbWtz5Ix1Wt/YIV08=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useUser\n    ];\n});\n_c = CoursePreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoursePreview);\nvar _c;\n$RefreshReg$(_c, \"CoursePreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVyKS9jb3Vyc2UtcHJldmlldy9bY291cnNlSWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGVBQWU7QUFDZiwyQ0FBMkM7QUFDM0MsbURBQW1EO0FBQ25ELDBDQUEwQztBQUUxQyxxQ0FBcUM7QUFDckMsa0NBQWtDO0FBRWxDLHVCQUF1QjtBQUN2QiwrQkFBK0I7QUFDL0IsYUFBYTtBQUViLGFBQWE7QUFDYixrRUFBa0U7QUFDbEUsc0RBQXNEO0FBQ3RELDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLE1BQU07QUFDTixJQUFJO0FBRUosK0JBQStCOzs7QUFFbUI7QUFDRjtBQUNLO0FBQ0g7QUFDTTtBQUNoQjtBQUV4QyxTQUFTUSxjQUFjLEtBQVE7UUFBUixFQUFDQyxNQUFNLEVBQUMsR0FBUjs7SUFDbkIsTUFBTSxDQUFDQyxZQUFhQyxjQUFjLEdBQUdULCtDQUFRQTtJQUM3QyxNQUFNLEVBQUNVLElBQUksRUFBQyxHQUFHTCxzREFBT0E7SUFDdEIsTUFBTSxDQUFDTSx1QkFBd0JDLHlCQUF5QixHQUFHWiwrQ0FBUUEsQ0FBQztJQUVwRUQsZ0RBQVNBLENBQUM7UUFDUlEsVUFBUU07SUFDVixHQUFFO1FBQUNOO0tBQU87SUFFVixNQUFNTSxvQkFBb0I7UUFDdEJWLHdEQUFTQSxDQUFDVyxhQUFhLENBQUNQLG1CQUFBQSw2QkFBQUEsT0FBUVEsUUFBUSxFQUN2Q0MsSUFBSSxDQUFDQyxDQUFBQTtZQUNKUixjQUFjUSxpQkFBQUEsMkJBQUFBLEtBQU1DLFVBQVU7UUFDaEM7SUFDSjtJQUVBLE1BQU1DLHNCQUFzQjtRQUN4QmhCLHdEQUFTQSxDQUFDZ0IsbUJBQW1CLENBQUNYLFdBQVdZLElBQUksRUFBR1YsS0FBS1csbUJBQW1CLENBQUNDLFlBQVksRUFDcEZOLElBQUksQ0FBQ0MsQ0FBQUE7WUFDRixJQUFHQSxNQUFLO2dCQUNOTDtZQUNGO1FBQ0o7SUFDSjtJQUVGLE9BQU9KLDRCQUNMLDhEQUFDZTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUN2Qiw2REFBU0E7b0JBQUNPLFlBQVlBOzs7Ozs7Ozs7OzswQkFFM0IsOERBQUNlOztrQ0FDRyw4REFBQ3JCLGdFQUFZQTt3QkFBQ00sWUFBWUE7Ozs7OztrQ0FDMUIsOERBQUNKLGlFQUFhQTt3QkFBQ0ksWUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl2QztHQXBDU0Y7O1FBRVVELGtEQUFPQTs7O0tBRmpCQztBQXNDVCwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcikvY291cnNlLXByZXZpZXcvW2NvdXJzZUlkXS9wYWdlLmpzeD83MGQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFwidXNlIGNsaWVudFwiXHJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IFZpZGVvRGVzYyBmcm9tICcuL19jb21wb25lbnRzL1ZpZGVvRGVzYyc7XHJcbi8vIGltcG9ydCB7dXNlUGF0aG5hbWV9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuLy8gZnVuY3Rpb24gQ291cnNlUHJldmlldyh7cGFyYW1zfSkge1xyXG4vLyAgICAgY29uc3QgcGF0aCA9IHVzZVBhdGhuYW1lKCk7XHJcblxyXG4vLyAgICAgdXNlRWZmZWN0KCgpID0+e1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbi8vICAgICB9LFtdKTtcclxuICAgIFxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBwLTUgZ2FwLTMnPlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc3Bhbi0yIGJnLXdoaXRlIHAtMzYgJz5cclxuLy8gICAgICAgICAgICAgPFZpZGVvRGVzYyAvPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBDb3Vyc2VQcmV2aWV3XHJcblwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBWaWRlb0Rlc2MgZnJvbSAnLi9fY29tcG9uZW50cy9WaWRlb0Rlc2MnO1xyXG5pbXBvcnQgQ291cnNlRW5yb2xsIGZyb20gJy4vX2NvbXBvbmVudHMvQ291cnNlRW5yb2xsJ1xyXG5pbXBvcnQgR2xvYmFsQXBpIGZyb20gJy4uLy4uLy4uL191dGlscy9HbG9iYWxBcGknO1xyXG5pbXBvcnQgQ291cnNlQ29udGVudCBmcm9tICcuL19jb21wb25lbnRzL0NvdXJzZUNvbnRlbnQnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnQGNsZXJrL25leHRqcyc7XHJcblxyXG5mdW5jdGlvbiBDb3Vyc2VQcmV2aWV3KHtwYXJhbXN9KSB7XHJcbiAgICBjb25zdCBbY291cnNlSW5mbyAsIHNldENvdXJzZUluZm9dID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVVzZXIoKTtcclxuICAgIGNvbnN0IFtpc1VzZXJBbHJlYWR5RW5yb2xsZWQgLCBzZXRJc1VzZXJBbHJlYWR5RW5yb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgcGFyYW1zJiZnZXRDb3Vyc2VJbmZvQnlJZCgpO1xyXG4gICAgfSxbcGFyYW1zXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGdldENvdXJzZUluZm9CeUlkID0gKCkgPT4ge1xyXG4gICAgICAgIEdsb2JhbEFwaS5nZXRDb3Vyc2VCeUlkKHBhcmFtcz8uY291cnNlSWQpXHJcbiAgICAgICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICBzZXRDb3Vyc2VJbmZvKHJlc3A/LmNvdXJzZUxpc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlckVucm9sbERldGFpbCA9ICgpID0+IHtcclxuICAgICAgICBHbG9iYWxBcGkuZ2V0VXNlckVucm9sbERldGFpbChjb3Vyc2VJbmZvLnNsdWcgLCB1c2VyLnByaW1hcnlFbWFpbEFkZHJlc3MuZW1haWxBZGRyZXNzKVxyXG4gICAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwKXtcclxuICAgICAgICAgICAgICBzZXRJc1VzZXJBbHJlYWR5RW5yb2xsZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICByZXR1cm4gY291cnNlSW5mbyYmKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgcC01IGdhcC0zJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMiBiZy13aGl0ZSBwLTM2IHB0LTEwICc+XHJcbiAgICAgICAgICAgIDxWaWRlb0Rlc2MgY291cnNlSW5mbz17Y291cnNlSW5mb30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb3Vyc2VFbnJvbGwgY291cnNlSW5mbz17Y291cnNlSW5mb30vPlxyXG4gICAgICAgICAgICA8Q291cnNlQ29udGVudCBjb3Vyc2VJbmZvPXtjb3Vyc2VJbmZvfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdXJzZVByZXZpZXdcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJWaWRlb0Rlc2MiLCJDb3Vyc2VFbnJvbGwiLCJHbG9iYWxBcGkiLCJDb3Vyc2VDb250ZW50IiwidXNlVXNlciIsIkNvdXJzZVByZXZpZXciLCJwYXJhbXMiLCJjb3Vyc2VJbmZvIiwic2V0Q291cnNlSW5mbyIsInVzZXIiLCJpc1VzZXJBbHJlYWR5RW5yb2xsZWQiLCJzZXRJc1VzZXJBbHJlYWR5RW5yb2xsZWQiLCJnZXRDb3Vyc2VJbmZvQnlJZCIsImdldENvdXJzZUJ5SWQiLCJjb3Vyc2VJZCIsInRoZW4iLCJyZXNwIiwiY291cnNlTGlzdCIsImdldFVzZXJFbnJvbGxEZXRhaWwiLCJzbHVnIiwicHJpbWFyeUVtYWlsQWRkcmVzcyIsImVtYWlsQWRkcmVzcyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(router)/course-preview/[courseId]/page.jsx\n"));

/***/ })

});