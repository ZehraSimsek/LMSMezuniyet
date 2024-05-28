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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideBanners; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_utils/GlobalApi */ \"(app-pages-browser)/./app/_utils/GlobalApi.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SideBanners() {\n    _s();\n    const [sideBannerList, setSideBannerList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [leaderData, setLeaderData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUser)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const result = await _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getLeadCount();\n            if (result && result.userInfos) {\n                // Sort the userInfos array in descending order of completedChapterCounter\n                const sortedData = result.userInfos.sort((a, b)=>b.completedChapterCounter - a.completedChapterCounter);\n                setLeaderData(sortedData);\n            }\n        };\n        fetchData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getSideBanners();\n    }, []);\n    const getSideBanners = ()=>{\n        _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSideBanner().then((resp)=>{\n            console.log(resp);\n            setSideBannerList(resp.sideBanners);\n        });\n    };\n    // Kullanıcının ad ve soyadını almak için email adresini kontrol ediyoruz\n    const getEmailName = (email)=>{\n        const [name, surname] = email.split(\"@\")[0].split(\".\");\n        return \"\".concat(name.charAt(0).toUpperCase()).concat(name.slice(1), \" \").concat(surname.charAt(0).toUpperCase()).concat(surname.slice(1));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-xl flex flex-wrap justify-center space-x-4\",\n                children: sideBannerList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: item.banner.url,\n                            alt: \"banner\",\n                            width: 250,\n                            height: 500,\n                            onClick: ()=>window.open(item === null || item === void 0 ? void 0 : item.url),\n                            className: \"mb-4 rounded-xl cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8 w-70 ml-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-x-auto shadow-md rounded-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"bg-slate-100 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                className: \"bg-slate-200 text-white\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        colSpan: \"3\",\n                                        className: \"px-4 py-3 text-center text-xl font-semibold\",\n                                        children: \"Lider Tablosu\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                className: \"bg-slate-100 divide-y divide-gray-200\",\n                                children: leaderData.map((userInfo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"hover:bg-gray-100 \".concat(index % 2 === 0 ? \"bg-slate-100\" : \"bg-white\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center\",\n                                                    children: index === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-yellow-500 text-xl\",\n                                                        children: \"\\uD83D\\uDC51\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 25\n                                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-gray-500\",\n                                                        children: index + 1\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-4 whitespace-nowrap text-sm text-gray-700\",\n                                                children: getEmailName(userInfo.email)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-4 whitespace-nowrap text-sm text-gray-700\",\n                                                children: userInfo.completedChapterCounter\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, userInfo.email, true, {\n                                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(SideBanners, \"4iYG4BEw7+BMpdFDTNfA8+HZNt0=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUser\n    ];\n});\n_c = SideBanners;\nvar _c;\n$RefreshReg$(_c, \"SideBanners\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVyKS9jb3Vyc2VzL19jb21wb25lbnRzL1NpZGVCYW5uZXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0Q7QUFDbkI7QUFDUztBQUV6QixTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZELE1BQU0sQ0FBQ08sWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sRUFBRVMsSUFBSSxFQUFFLEdBQUdOLHNEQUFPQTtJQUV4QkosZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxZQUFZO1lBQ2hCLE1BQU1DLFNBQVMsTUFBTVYsd0RBQVNBLENBQUNXLFlBQVk7WUFDM0MsSUFBSUQsVUFBVUEsT0FBT0UsU0FBUyxFQUFFO2dCQUM5QiwwRUFBMEU7Z0JBQzFFLE1BQU1DLGFBQWFILE9BQU9FLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLEVBQUVDLHVCQUF1QixHQUFHRixFQUFFRSx1QkFBdUI7Z0JBQ3hHVixjQUFjTTtZQUNoQjtRQUNGO1FBRUFKO0lBQ0YsR0FBRyxFQUFFO0lBRUxYLGdEQUFTQSxDQUFDO1FBQ1JvQjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLGlCQUFpQjtRQUNyQmxCLHdEQUFTQSxDQUFDbUIsYUFBYSxHQUFHQyxJQUFJLENBQUMsQ0FBQ0M7WUFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWmhCLGtCQUFrQmdCLEtBQUtHLFdBQVc7UUFDcEM7SUFDRjtJQUVBLHlFQUF5RTtJQUN6RSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHRixNQUFNRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDO1FBQ2xELE9BQU8sR0FBa0NGLE9BQS9CQSxLQUFLRyxNQUFNLENBQUMsR0FBR0MsV0FBVyxJQUFzQkgsT0FBakJELEtBQUtLLEtBQUssQ0FBQyxJQUFHLEtBQXFDSixPQUFsQ0EsUUFBUUUsTUFBTSxDQUFDLEdBQUdDLFdBQVcsSUFBc0IsT0FBakJILFFBQVFJLEtBQUssQ0FBQztJQUM1RztJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1o5QixlQUFlK0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN6Qiw4REFBQ0o7a0NBQ0MsNEVBQUNoQyxtREFBS0E7NEJBQ0pxQyxLQUFLRixLQUFLRyxNQUFNLENBQUNDLEdBQUc7NEJBQ3BCQyxLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxTQUFTLElBQU1DLE9BQU9DLElBQUksQ0FBQ1YsaUJBQUFBLDJCQUFBQSxLQUFNSSxHQUFHOzRCQUNwQ04sV0FBVTs7Ozs7O3VCQVBKRzs7Ozs7Ozs7OzswQkFZZCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDYTt3QkFBTWIsV0FBVTs7MENBQ2YsOERBQUNjO2dDQUFNZCxXQUFVOzBDQUNmLDRFQUFDZTs4Q0FDQyw0RUFBQ0M7d0NBQUdDLFNBQVE7d0NBQUlqQixXQUFVO2tEQUE4Qzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHNUUsOERBQUNrQjtnQ0FBTWxCLFdBQVU7MENBQ2Q1QixXQUFXNkIsR0FBRyxDQUFDLENBQUNrQixVQUFVaEIsc0JBQ3pCLDhEQUFDWTt3Q0FBd0JmLFdBQVcscUJBQW1FLE9BQTlDRyxRQUFRLE1BQU0sSUFBSSxpQkFBaUI7OzBEQUMxRiw4REFBQ2lCO2dEQUFHcEIsV0FBVTswREFDWiw0RUFBQ0Q7b0RBQUlDLFdBQVU7OERBQ1pHLFVBQVUsa0JBQ1QsOERBQUNrQjt3REFBS3JCLFdBQVU7a0VBQTBCOzs7Ozs2RUFFMUMsOERBQUNxQjt3REFBS3JCLFdBQVU7a0VBQWlCRyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzBEQUkvQyw4REFBQ2lCO2dEQUFHcEIsV0FBVTswREFBcURULGFBQWE0QixTQUFTM0IsS0FBSzs7Ozs7OzBEQUM5Riw4REFBQzRCO2dEQUFHcEIsV0FBVTswREFBcURtQixTQUFTcEMsdUJBQXVCOzs7Ozs7O3VDQVg1Rm9DLFNBQVMzQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CdkM7R0FqRndCdkI7O1FBR0xELGtEQUFPQTs7O0tBSEZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm91dGVyKS9jb3Vyc2VzL19jb21wb25lbnRzL1NpZGVCYW5uZXJzLmpzeD83ODEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHbG9iYWxBcGkgZnJvbSBcIi4uLy4uLy4uL191dGlscy9HbG9iYWxBcGlcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAY2xlcmsvbmV4dGpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVCYW5uZXJzKCkge1xyXG4gIGNvbnN0IFtzaWRlQmFubmVyTGlzdCwgc2V0U2lkZUJhbm5lckxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsZWFkZXJEYXRhLCBzZXRMZWFkZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgR2xvYmFsQXBpLmdldExlYWRDb3VudCgpO1xyXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC51c2VySW5mb3MpIHtcclxuICAgICAgICAvLyBTb3J0IHRoZSB1c2VySW5mb3MgYXJyYXkgaW4gZGVzY2VuZGluZyBvcmRlciBvZiBjb21wbGV0ZWRDaGFwdGVyQ291bnRlclxyXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSByZXN1bHQudXNlckluZm9zLnNvcnQoKGEsIGIpID0+IGIuY29tcGxldGVkQ2hhcHRlckNvdW50ZXIgLSBhLmNvbXBsZXRlZENoYXB0ZXJDb3VudGVyKTtcclxuICAgICAgICBzZXRMZWFkZXJEYXRhKHNvcnRlZERhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFNpZGVCYW5uZXJzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRTaWRlQmFubmVycyA9ICgpID0+IHtcclxuICAgIEdsb2JhbEFwaS5nZXRTaWRlQmFubmVyKCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwKTtcclxuICAgICAgc2V0U2lkZUJhbm5lckxpc3QocmVzcC5zaWRlQmFubmVycyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBLdWxsYW7EsWPEsW7EsW4gYWQgdmUgc295YWTEsW7EsSBhbG1hayBpw6dpbiBlbWFpbCBhZHJlc2luaSBrb250cm9sIGVkaXlvcnV6XHJcbiAgY29uc3QgZ2V0RW1haWxOYW1lID0gKGVtYWlsKSA9PiB7XHJcbiAgICBjb25zdCBbbmFtZSwgc3VybmFtZV0gPSBlbWFpbC5zcGxpdCgnQCcpWzBdLnNwbGl0KCcuJyk7XHJcbiAgICByZXR1cm4gYCR7bmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke25hbWUuc2xpY2UoMSl9ICR7c3VybmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3N1cm5hbWUuc2xpY2UoMSl9YDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhsIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgIHtzaWRlQmFubmVyTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uYmFubmVyLnVybH1cclxuICAgICAgICAgICAgICBhbHQ9XCJiYW5uZXJcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsyNTB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oaXRlbT8udXJsKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggdy03MCBtbC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG8gc2hhZG93LW1kIHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJiZy1zbGF0ZS0xMDAgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctc2xhdGUtMjAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjNcIiBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1jZW50ZXIgdGV4dC14bCBmb250LXNlbWlib2xkXCI+TGlkZXIgVGFibG9zdTwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXNsYXRlLTEwMCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICB7bGVhZGVyRGF0YS5tYXAoKHVzZXJJbmZvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17dXNlckluZm8uZW1haWx9IGNsYXNzTmFtZT17YGhvdmVyOmJnLWdyYXktMTAwICR7aW5kZXggJSAyID09PSAwID8gJ2JnLXNsYXRlLTEwMCcgOiAnYmctd2hpdGUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIHRleHQteGxcIj7wn5GRPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPntpbmRleCArIDF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj57Z2V0RW1haWxOYW1lKHVzZXJJbmZvLmVtYWlsKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gdGV4dC1ncmF5LTcwMFwiPnt1c2VySW5mby5jb21wbGV0ZWRDaGFwdGVyQ291bnRlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4gICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR2xvYmFsQXBpIiwiSW1hZ2UiLCJ1c2VVc2VyIiwiU2lkZUJhbm5lcnMiLCJzaWRlQmFubmVyTGlzdCIsInNldFNpZGVCYW5uZXJMaXN0IiwibGVhZGVyRGF0YSIsInNldExlYWRlckRhdGEiLCJ1c2VyIiwiZmV0Y2hEYXRhIiwicmVzdWx0IiwiZ2V0TGVhZENvdW50IiwidXNlckluZm9zIiwic29ydGVkRGF0YSIsInNvcnQiLCJhIiwiYiIsImNvbXBsZXRlZENoYXB0ZXJDb3VudGVyIiwiZ2V0U2lkZUJhbm5lcnMiLCJnZXRTaWRlQmFubmVyIiwidGhlbiIsInJlc3AiLCJjb25zb2xlIiwibG9nIiwic2lkZUJhbm5lcnMiLCJnZXRFbWFpbE5hbWUiLCJlbWFpbCIsIm5hbWUiLCJzdXJuYW1lIiwic3BsaXQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3JjIiwiYmFubmVyIiwidXJsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvbkNsaWNrIiwid2luZG93Iiwib3BlbiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwiY29sU3BhbiIsInRib2R5IiwidXNlckluZm8iLCJ0ZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(router)/courses/_components/SideBanners.jsx\n"));

/***/ })

});