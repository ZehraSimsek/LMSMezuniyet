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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProgressCourseItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressCourseItem */ \"(app-pages-browser)/./app/dashboard/ProgressCourseItem.jsx\");\n/* harmony import */ var _barrel_optimize_names_FaCheckCircle_FaHourglassHalf_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaCheckCircle,FaHourglassHalf!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n// // import React from 'react'\n// // import ProgressCourseItem from './ProgressCourseItem';\n// // function InProgressCourseList({userEnrolledCourses}) {\n// //   return (\n// //     <div className='p-5 bg-white mt-3 rounded-sm'>\n// //         <h2 className='text-purple-500 text-[18px] font-semibold fixedElement'>Son Alınan Kurslar</h2>\n// //         <div>\n// //             {\n// //                 userEnrolledCourses.map((item, index) => {\n// //                     return <ProgressCourseItem key={index}\n// //                     course={item}\n// //                     />\n// //                 })\n// //             }\n// //         </div>\n// //     </div>\n// //   )\n// // }\n// // export default InProgressCourseList\n// import React from 'react'\n// import ProgressCourseItem from './ProgressCourseItem';\n// function InProgressCourseList({userEnrolledCourses}) {\n//   return (\n//     <div className='p-5 bg-white mt-3 rounded-sm'>\n//         <h2 className='text-purple-500 text-[18px] font-semibold fixedElement'>Son Alınan Kurslar</h2>\n//         <div className='flex flex-wrap justify-start'>\n//             {\n//                 userEnrolledCourses.map((item, index) => {\n//                     return <ProgressCourseItem key={index}\n//                     course={item}\n//                     />\n//                 })\n//             }\n//         </div>\n//     </div>\n//   )\n// }\n// export default InProgressCourseList\n// import React from 'react'\n// import ProgressCourseItem from './ProgressCourseItem';\n// function InProgressCourseList({userEnrolledCourses}) {\n//   return (\n//     <div className='p-3 mt-2 rounded-sm'>\n//         <div className='font-bold text-custom-color p-2 rounded-md'> \n//             <h2 className=\"text-[20px] font-bold text-sky-700\">Son Alınan Kurslar</h2>\n//         </div>\n//         <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>\n//             {\n//                 userEnrolledCourses.map((item, index) => {\n//                     return <ProgressCourseItem key={index}\n//                     course={item}\n//                     />\n//                 })\n//             }\n//         </div>\n//     </div>\n//   )\n// }\n// export default InProgressCourseList\n// import React from 'react';\n// import ProgressCourseItem from './ProgressCourseItem';\n// import { FaCheckCircle, FaHourglassHalf } from 'react-icons/fa'; // İkonlar için\n// function CourseList({ userEnrolledCourses }) {\n//   const completedCourses = userEnrolledCourses.filter(course => course.isCompleted);\n//   const inProgressCourses = userEnrolledCourses.filter(course => !course.isCompleted);\n//   return (\n//     <div className='p-6 mt-3 rounded-sm'>\n//       <div className='flex justify-center mb-5'>\n//         <div className='flex items-center justify-center bg-blue-500 text-white rounded-full p-2 mr-2'>\n//           <FaHourglassHalf />\n//           <span className='ml-2'>({inProgressCourses.length})</span>\n//         </div>\n//         <div className='flex items-center justify-center bg-green-500 text-white rounded-full p-2 ml-2'>\n//           <FaCheckCircle />\n//           <span className='ml-2'>({completedCourses.length})</span>\n//         </div>\n//       </div>\n//       <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>\n//         {inProgressCourses.map((item, index) => (\n//           <ProgressCourseItem key={index} course={item} />\n//         ))}\n//       </div>\n//       <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>\n//         {completedCourses.map((item, index) => (\n//           <ProgressCourseItem key={index} course={item} />\n//         ))}\n//       </div>\n//     </div>\n//   );\n// }\n// export default CourseList;\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CourseList(param) {\n    let { userEnrolledCourses } = param;\n    _s();\n    const completedCourses = userEnrolledCourses.filter((course)=>course.isCompleted);\n    const inProgressCourses = userEnrolledCourses.filter((course)=>!course.isCompleted);\n    const [showCompleted, setShowCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(localStorage.getItem(\"showCompleted\") === \"true\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"showCompleted\", showCompleted);\n    }, [\n        showCompleted\n    ]);\n    const handleClick = ()=>{\n        setShowCompleted(!showCompleted);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 mt-3 rounded-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center bg-blue-500 text-white rounded-full p-2 mr-2\",\n                        onClick: handleClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheckCircle_FaHourglassHalf_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaHourglassHalf, {\n                                className: \"animate-spin cursor-pointer durat\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2 cursor-pointer\",\n                                children: [\n                                    \"(\",\n                                    inProgressCourses.length,\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center bg-green-500 text-white rounded-full p-2 ml-2\",\n                        onClick: handleClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheckCircle_FaHourglassHalf_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCheckCircle, {\n                                className: \"cursor-pointer animate-pulse\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2 cursor-pointer\",\n                                children: [\n                                    \"(\",\n                                    completedCourses.length,\n                                    \")\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this),\n            showCompleted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-3 gap-5\",\n                children: inProgressCourses.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressCourseItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        course: item,\n                        isCompleted: false\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                        lineNumber: 139,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                lineNumber: 137,\n                columnNumber: 9\n            }, this),\n            showCompleted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-3 gap-5\",\n                children: completedCourses.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressCourseItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        course: item,\n                        isCompleted: true\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                        lineNumber: 146,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n                lineNumber: 144,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\dashboard\\\\InProgressCourseList.jsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, this);\n}\n_s(CourseList, \"elz1Ma8e3TKKhjODgJzHwb9S1qA=\");\n_c = CourseList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseList);\nvar _c;\n$RefreshReg$(_c, \"CourseList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvSW5Qcm9ncmVzc0NvdXJzZUxpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtCQUErQjtBQUMvQiw0REFBNEQ7QUFFNUQsNERBQTREO0FBQzVELGdCQUFnQjtBQUNoQix3REFBd0Q7QUFDeEQsNEdBQTRHO0FBQzVHLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsZ0VBQWdFO0FBQ2hFLGdFQUFnRTtBQUNoRSx1Q0FBdUM7QUFDdkMsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixTQUFTO0FBQ1QsT0FBTztBQUVQLHlDQUF5QztBQUV6Qyw0QkFBNEI7QUFDNUIseURBQXlEO0FBRXpELHlEQUF5RDtBQUN6RCxhQUFhO0FBQ2IscURBQXFEO0FBQ3JELHlHQUF5RztBQUN6Ryx5REFBeUQ7QUFDekQsZ0JBQWdCO0FBQ2hCLDZEQUE2RDtBQUM3RCw2REFBNkQ7QUFDN0Qsb0NBQW9DO0FBQ3BDLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsTUFBTTtBQUNOLElBQUk7QUFFSixzQ0FBc0M7QUFFdEMsNEJBQTRCO0FBQzVCLHlEQUF5RDtBQUV6RCx5REFBeUQ7QUFDekQsYUFBYTtBQUNiLDRDQUE0QztBQUM1Qyx3RUFBd0U7QUFDeEUseUZBQXlGO0FBQ3pGLGlCQUFpQjtBQUNqQixrRUFBa0U7QUFDbEUsZ0JBQWdCO0FBQ2hCLDZEQUE2RDtBQUM3RCw2REFBNkQ7QUFDN0Qsb0NBQW9DO0FBQ3BDLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsTUFBTTtBQUNOLElBQUk7QUFFSixzQ0FBc0M7QUFFdEMsNkJBQTZCO0FBQzdCLHlEQUF5RDtBQUN6RCxtRkFBbUY7QUFFbkYsaURBQWlEO0FBQ2pELHVGQUF1RjtBQUN2Rix5RkFBeUY7QUFFekYsYUFBYTtBQUNiLDRDQUE0QztBQUM1QyxtREFBbUQ7QUFDbkQsMEdBQTBHO0FBQzFHLGdDQUFnQztBQUNoQyx1RUFBdUU7QUFDdkUsaUJBQWlCO0FBQ2pCLDJHQUEyRztBQUMzRyw4QkFBOEI7QUFDOUIsc0VBQXNFO0FBQ3RFLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsZ0VBQWdFO0FBQ2hFLG9EQUFvRDtBQUNwRCw2REFBNkQ7QUFDN0QsY0FBYztBQUNkLGVBQWU7QUFDZixnRUFBZ0U7QUFDaEUsbURBQW1EO0FBQ25ELDZEQUE2RDtBQUM3RCxjQUFjO0FBQ2QsZUFBZTtBQUNmLGFBQWE7QUFDYixPQUFPO0FBQ1AsSUFBSTtBQUVKLDZCQUE2Qjs7O0FBR3NCO0FBQ0c7QUFDVTtBQUVoRSxTQUFTTSxXQUFXLEtBQXVCO1FBQXZCLEVBQUVDLG1CQUFtQixFQUFFLEdBQXZCOztJQUNsQixNQUFNQyxtQkFBbUJELG9CQUFvQkUsTUFBTSxDQUFDQyxDQUFBQSxTQUFVQSxPQUFPQyxXQUFXO0lBQ2hGLE1BQU1DLG9CQUFvQkwsb0JBQW9CRSxNQUFNLENBQUNDLENBQUFBLFNBQVUsQ0FBQ0EsT0FBT0MsV0FBVztJQUVsRixNQUFNLENBQUNFLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQ2EsYUFBYUMsT0FBTyxDQUFDLHFCQUFxQjtJQUU3RmYsZ0RBQVNBLENBQUM7UUFDUmMsYUFBYUUsT0FBTyxDQUFDLGlCQUFpQko7SUFDeEMsR0FBRztRQUFDQTtLQUFjO0lBRWxCLE1BQU1LLGNBQWM7UUFDbEJKLGlCQUFpQixDQUFDRDtJQUNwQjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTt3QkFBZ0ZDLFNBQVNIOzswQ0FDdEcsOERBQUNiLGdIQUFlQTtnQ0FBQ2UsV0FBVTs7Ozs7OzBDQUMzQiw4REFBQ0U7Z0NBQUtGLFdBQVU7O29DQUFzQjtvQ0FBRVIsa0JBQWtCVyxNQUFNO29DQUFDOzs7Ozs7Ozs7Ozs7O2tDQUVuRSw4REFBQ0o7d0JBQUlDLFdBQVU7d0JBQWlGQyxTQUFTSDs7MENBQ3ZHLDhEQUFDZCw4R0FBYUE7Z0NBQUNnQixXQUFVOzs7Ozs7MENBQ3pCLDhEQUFDRTtnQ0FBS0YsV0FBVTs7b0NBQXNCO29DQUFFWixpQkFBaUJlLE1BQU07b0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHbkVWLCtCQUNDLDhEQUFDTTtnQkFBSUMsV0FBVTswQkFDWlIsa0JBQWtCWSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQzVCLDhEQUFDdkIsMkRBQWtCQTt3QkFBYU8sUUFBUWU7d0JBQU1kLGFBQWE7dUJBQWxDZTs7Ozs7Ozs7OztZQUk5QmIsK0JBQ0MsOERBQUNNO2dCQUFJQyxXQUFVOzBCQUNaWixpQkFBaUJnQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQzNCLDhEQUFDdkIsMkRBQWtCQTt3QkFBYU8sUUFBUWU7d0JBQU1kLGFBQWE7dUJBQWxDZTs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQztHQTFDU3BCO0tBQUFBO0FBNENULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvSW5Qcm9ncmVzc0NvdXJzZUxpc3QuanN4P2ZiZTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4vLyAvLyBpbXBvcnQgUHJvZ3Jlc3NDb3Vyc2VJdGVtIGZyb20gJy4vUHJvZ3Jlc3NDb3Vyc2VJdGVtJztcclxuXHJcbi8vIC8vIGZ1bmN0aW9uIEluUHJvZ3Jlc3NDb3Vyc2VMaXN0KHt1c2VyRW5yb2xsZWRDb3Vyc2VzfSkge1xyXG4vLyAvLyAgIHJldHVybiAoXHJcbi8vIC8vICAgICA8ZGl2IGNsYXNzTmFtZT0ncC01IGJnLXdoaXRlIG10LTMgcm91bmRlZC1zbSc+XHJcbi8vIC8vICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1wdXJwbGUtNTAwIHRleHQtWzE4cHhdIGZvbnQtc2VtaWJvbGQgZml4ZWRFbGVtZW50Jz5Tb24gQWzEsW5hbiBLdXJzbGFyPC9oMj5cclxuLy8gLy8gICAgICAgICA8ZGl2PlxyXG4vLyAvLyAgICAgICAgICAgICB7XHJcbi8vIC8vICAgICAgICAgICAgICAgICB1c2VyRW5yb2xsZWRDb3Vyc2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFByb2dyZXNzQ291cnNlSXRlbSBrZXk9e2luZGV4fVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIGNvdXJzZT17aXRlbX1cclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgfSlcclxuLy8gLy8gICAgICAgICAgICAgfVxyXG4vLyAvLyAgICAgICAgIDwvZGl2PlxyXG4vLyAvLyAgICAgPC9kaXY+XHJcbi8vIC8vICAgKVxyXG4vLyAvLyB9XHJcblxyXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBJblByb2dyZXNzQ291cnNlTGlzdFxyXG5cclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgUHJvZ3Jlc3NDb3Vyc2VJdGVtIGZyb20gJy4vUHJvZ3Jlc3NDb3Vyc2VJdGVtJztcclxuXHJcbi8vIGZ1bmN0aW9uIEluUHJvZ3Jlc3NDb3Vyc2VMaXN0KHt1c2VyRW5yb2xsZWRDb3Vyc2VzfSkge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0ncC01IGJnLXdoaXRlIG10LTMgcm91bmRlZC1zbSc+XHJcbi8vICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1wdXJwbGUtNTAwIHRleHQtWzE4cHhdIGZvbnQtc2VtaWJvbGQgZml4ZWRFbGVtZW50Jz5Tb24gQWzEsW5hbiBLdXJzbGFyPC9oMj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAganVzdGlmeS1zdGFydCc+XHJcbi8vICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICAgIHVzZXJFbnJvbGxlZENvdXJzZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UHJvZ3Jlc3NDb3Vyc2VJdGVtIGtleT17aW5kZXh9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY291cnNlPXtpdGVtfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEluUHJvZ3Jlc3NDb3Vyc2VMaXN0XHJcblxyXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBQcm9ncmVzc0NvdXJzZUl0ZW0gZnJvbSAnLi9Qcm9ncmVzc0NvdXJzZUl0ZW0nO1xyXG5cclxuLy8gZnVuY3Rpb24gSW5Qcm9ncmVzc0NvdXJzZUxpc3Qoe3VzZXJFbnJvbGxlZENvdXJzZXN9KSB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPSdwLTMgbXQtMiByb3VuZGVkLXNtJz5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtY3VzdG9tLWNvbG9yIHAtMiByb3VuZGVkLW1kJz4gXHJcbi8vICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBmb250LWJvbGQgdGV4dC1za3ktNzAwXCI+U29uIEFsxLFuYW4gS3Vyc2xhcjwvaDI+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTUnPlxyXG4vLyAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgICB1c2VyRW5yb2xsZWRDb3Vyc2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFByb2dyZXNzQ291cnNlSXRlbSBrZXk9e2luZGV4fVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvdXJzZT17aXRlbX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJblByb2dyZXNzQ291cnNlTGlzdFxyXG5cclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IFByb2dyZXNzQ291cnNlSXRlbSBmcm9tICcuL1Byb2dyZXNzQ291cnNlSXRlbSc7XHJcbi8vIGltcG9ydCB7IEZhQ2hlY2tDaXJjbGUsIEZhSG91cmdsYXNzSGFsZiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJzsgLy8gxLBrb25sYXIgacOnaW5cclxuXHJcbi8vIGZ1bmN0aW9uIENvdXJzZUxpc3QoeyB1c2VyRW5yb2xsZWRDb3Vyc2VzIH0pIHtcclxuLy8gICBjb25zdCBjb21wbGV0ZWRDb3Vyc2VzID0gdXNlckVucm9sbGVkQ291cnNlcy5maWx0ZXIoY291cnNlID0+IGNvdXJzZS5pc0NvbXBsZXRlZCk7XHJcbi8vICAgY29uc3QgaW5Qcm9ncmVzc0NvdXJzZXMgPSB1c2VyRW5yb2xsZWRDb3Vyc2VzLmZpbHRlcihjb3Vyc2UgPT4gIWNvdXJzZS5pc0NvbXBsZXRlZCk7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0ncC02IG10LTMgcm91bmRlZC1zbSc+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG1iLTUnPlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBwLTIgbXItMic+XHJcbi8vICAgICAgICAgICA8RmFIb3VyZ2xhc3NIYWxmIC8+XHJcbi8vICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21sLTInPih7aW5Qcm9ncmVzc0NvdXJzZXMubGVuZ3RofSk8L3NwYW4+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBwLTIgbWwtMic+XHJcbi8vICAgICAgICAgICA8RmFDaGVja0NpcmNsZSAvPlxyXG4vLyAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtbC0yJz4oe2NvbXBsZXRlZENvdXJzZXMubGVuZ3RofSk8L3NwYW4+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNSc+XHJcbi8vICAgICAgICAge2luUHJvZ3Jlc3NDb3Vyc2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuLy8gICAgICAgICAgIDxQcm9ncmVzc0NvdXJzZUl0ZW0ga2V5PXtpbmRleH0gY291cnNlPXtpdGVtfSAvPlxyXG4vLyAgICAgICAgICkpfVxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTUnPlxyXG4vLyAgICAgICAgIHtjb21wbGV0ZWRDb3Vyc2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuLy8gICAgICAgICAgIDxQcm9ncmVzc0NvdXJzZUl0ZW0ga2V5PXtpbmRleH0gY291cnNlPXtpdGVtfSAvPlxyXG4vLyAgICAgICAgICkpfVxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IENvdXJzZUxpc3Q7XHJcblxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9ncmVzc0NvdXJzZUl0ZW0gZnJvbSAnLi9Qcm9ncmVzc0NvdXJzZUl0ZW0nO1xyXG5pbXBvcnQgeyBGYUNoZWNrQ2lyY2xlLCBGYUhvdXJnbGFzc0hhbGYgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5mdW5jdGlvbiBDb3Vyc2VMaXN0KHsgdXNlckVucm9sbGVkQ291cnNlcyB9KSB7XHJcbiAgY29uc3QgY29tcGxldGVkQ291cnNlcyA9IHVzZXJFbnJvbGxlZENvdXJzZXMuZmlsdGVyKGNvdXJzZSA9PiBjb3Vyc2UuaXNDb21wbGV0ZWQpO1xyXG4gIGNvbnN0IGluUHJvZ3Jlc3NDb3Vyc2VzID0gdXNlckVucm9sbGVkQ291cnNlcy5maWx0ZXIoY291cnNlID0+ICFjb3Vyc2UuaXNDb21wbGV0ZWQpO1xyXG5cclxuICBjb25zdCBbc2hvd0NvbXBsZXRlZCwgc2V0U2hvd0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2hvd0NvbXBsZXRlZCcpID09PSAndHJ1ZScpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Nob3dDb21wbGV0ZWQnLCBzaG93Q29tcGxldGVkKTtcclxuICB9LCBbc2hvd0NvbXBsZXRlZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldFNob3dDb21wbGV0ZWQoIXNob3dDb21wbGV0ZWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwLTYgbXQtMyByb3VuZGVkLXNtJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbWItNSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHAtMiBtci0yJyBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICA8RmFIb3VyZ2xhc3NIYWxmIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiBjdXJzb3ItcG9pbnRlciBkdXJhdFwiLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWwtMiBjdXJzb3ItcG9pbnRlcic+KHtpblByb2dyZXNzQ291cnNlcy5sZW5ndGh9KTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHAtMiBtbC0yJyBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICA8RmFDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBhbmltYXRlLXB1bHNlXCIvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtbC0yIGN1cnNvci1wb2ludGVyJz4oe2NvbXBsZXRlZENvdXJzZXMubGVuZ3RofSk8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0NvbXBsZXRlZCAmJiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNSc+XHJcbiAgICAgICAgICB7aW5Qcm9ncmVzc0NvdXJzZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NDb3Vyc2VJdGVtIGtleT17aW5kZXh9IGNvdXJzZT17aXRlbX0gaXNDb21wbGV0ZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAge3Nob3dDb21wbGV0ZWQgJiYgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTUnPlxyXG4gICAgICAgICAge2NvbXBsZXRlZENvdXJzZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8UHJvZ3Jlc3NDb3Vyc2VJdGVtIGtleT17aW5kZXh9IGNvdXJzZT17aXRlbX0gaXNDb21wbGV0ZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9ncmVzc0NvdXJzZUl0ZW0iLCJGYUNoZWNrQ2lyY2xlIiwiRmFIb3VyZ2xhc3NIYWxmIiwiQ291cnNlTGlzdCIsInVzZXJFbnJvbGxlZENvdXJzZXMiLCJjb21wbGV0ZWRDb3Vyc2VzIiwiZmlsdGVyIiwiY291cnNlIiwiaXNDb21wbGV0ZWQiLCJpblByb2dyZXNzQ291cnNlcyIsInNob3dDb21wbGV0ZWQiLCJzZXRTaG93Q29tcGxldGVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJoYW5kbGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcGFuIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/InProgressCourseList.jsx\n"));

/***/ })

});