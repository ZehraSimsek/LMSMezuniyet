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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideBanners; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_utils/GlobalApi */ \"(app-pages-browser)/./app/_utils/GlobalApi.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SideBanners() {\n    _s();\n    const [sideBannerList, setSideBannerList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [leaderData, setLeaderData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const name = user.firstName && user.lastName ? \"\".concat(user.firstName) : user.emailAddresses[0].emailAddress.split(\"@\")[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const result = await _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getLeadCount();\n            if (result && result.userInfos) {\n                // Sort the userInfos array in descending order of completedChapterCounter\n                const sortedData = result.userInfos.sort((a, b)=>b.completedChapterCounter - a.completedChapterCounter);\n                setLeaderData(sortedData);\n            }\n        };\n        fetchData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getSideBanners();\n    }, []);\n    const getSideBanners = ()=>{\n        _utils_GlobalApi__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSideBanner().then((resp)=>{\n            console.log(resp);\n            setSideBannerList(resp.sideBanners);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-xl flex flex-wrap justify-center space-x-4\",\n                children: sideBannerList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: item.banner.url,\n                            alt: \"banner\",\n                            width: 250,\n                            height: 500,\n                            onClick: ()=>window.open(item === null || item === void 0 ? void 0 : item.url),\n                            className: \"mb-4 rounded-xl cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8 w-70 ml-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-x-auto shadow-md rounded-lg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \" bg-slate-100 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                className: \"bg-slate-200 text-white\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        colSpan: \"3\",\n                                        className: \"px-4 py-3 text-center text-xl font-semibold\",\n                                        children: \"Lider Tablosu\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                className: \"bg-slate-100 divide-y divide-gray-200\",\n                                children: leaderData.map((userInfo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: \"hover:bg-gray-100 \".concat(index % 2 === 0 ? \"bg-slate-100\" : \"bg-white\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center\",\n                                                    children: index === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-yellow-500 text-xl\",\n                                                        children: \"\\uD83D\\uDC51\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 25\n                                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-gray-500\",\n                                                        children: index + 1\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-4 whitespace-nowrap text-sm text-gray-700\",\n                                                children: userInfo.email\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, userInfo.email, true, {\n                                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zehra\\\\OneDrive\\\\Documents\\\\GitHub\\\\LMSMezuniyet\\\\lms_web\\\\app\\\\(router)\\\\courses\\\\_components\\\\SideBanners.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(SideBanners, \"6UU5LImhaWxLhjQZS9AVI5819AE=\");\n_c = SideBanners;\nvar _c;\n$RefreshReg$(_c, \"SideBanners\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVyKS9jb3Vyc2VzL19jb21wb25lbnRzL1NpZGVCYW5uZXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDRDtBQUNuQjtBQUNxQjtBQUVyQyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZELE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU1VLE9BQU9DLEtBQUtDLFNBQVMsSUFBSUQsS0FBS0UsUUFBUSxHQUFHLEdBQWtCLE9BQWZGLEtBQUtDLFNBQVMsSUFBS0QsS0FBS0csY0FBYyxDQUFDLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFFdEhqQixnREFBU0EsQ0FBQztRQUNSLE1BQU1rQixZQUFZO1lBQ2hCLE1BQU1DLFNBQVMsTUFBTWpCLHdEQUFTQSxDQUFDa0IsWUFBWTtZQUMzQyxJQUFJRCxVQUFVQSxPQUFPRSxTQUFTLEVBQUU7Z0JBQzlCLDBFQUEwRTtnQkFDMUUsTUFBTUMsYUFBYUgsT0FBT0UsU0FBUyxDQUFDRSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsRUFBRUMsdUJBQXVCLEdBQUdGLEVBQUVFLHVCQUF1QjtnQkFDeEdoQixjQUFjWTtZQUNoQjtRQUNGO1FBRUFKO0lBQ0YsR0FBRyxFQUFFO0lBRUxsQixnREFBU0EsQ0FBQztRQUNSMkI7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxpQkFBaUI7UUFDckJ6Qix3REFBU0EsQ0FBQzBCLGFBQWEsR0FBR0MsSUFBSSxDQUFDLENBQUNDO1lBQzlCQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1p0QixrQkFBa0JzQixLQUFLRyxXQUFXO1FBQ3BDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNkNUIsZUFBZTZCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDekIsOERBQUNKO2tDQUNDLDRFQUFDL0IsbURBQUtBOzRCQUNKb0MsS0FBS0YsS0FBS0csTUFBTSxDQUFDQyxHQUFHOzRCQUNwQkMsS0FBSTs0QkFDSkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsU0FBUyxJQUFNQyxPQUFPQyxJQUFJLENBQUNWLGlCQUFBQSwyQkFBQUEsS0FBTUksR0FBRzs0QkFDcENOLFdBQVU7Ozs7Ozt1QkFQSkc7Ozs7Ozs7Ozs7MEJBWVosOERBQUNKO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ2E7d0JBQU1iLFdBQVU7OzBDQUNmLDhEQUFDYztnQ0FBTWQsV0FBVTswQ0FDZiw0RUFBQ2U7OENBQ0MsNEVBQUNDO3dDQUFHQyxTQUFRO3dDQUFJakIsV0FBVTtrREFBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRzVFLDhEQUFDa0I7Z0NBQU1sQixXQUFVOzBDQUNkMUIsV0FBVzJCLEdBQUcsQ0FBQyxDQUFDa0IsVUFBVWhCLHNCQUN6Qiw4REFBQ1k7d0NBQXdCZixXQUFXLHFCQUFtRSxPQUE5Q0csUUFBUSxNQUFNLElBQUksaUJBQWlCOzswREFDMUYsOERBQUNpQjtnREFBR3BCLFdBQVU7MERBQ1osNEVBQUNEO29EQUFJQyxXQUFVOzhEQUNaRyxVQUFVLGtCQUNULDhEQUFDa0I7d0RBQUtyQixXQUFVO2tFQUEwQjs7Ozs7NkVBRTFDLDhEQUFDcUI7d0RBQUtyQixXQUFVO2tFQUFpQkcsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OzswREFJL0MsOERBQUNpQjtnREFBR3BCLFdBQVU7MERBQXFEbUIsU0FBU0csS0FBSzs7Ozs7Ozt1Q0FWMUVILFNBQVNHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ2QztHQTFFd0JuRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcikvY291cnNlcy9fY29tcG9uZW50cy9TaWRlQmFubmVycy5qc3g/NzgxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2xvYmFsQXBpIGZyb20gXCIuLi8uLi8uLi9fdXRpbHMvR2xvYmFsQXBpXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBVc2VyQnV0dG9uLCB1c2VVc2VyIH0gZnJvbSAnQGNsZXJrL25leHRqcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFubmVycygpIHtcclxuICBjb25zdCBbc2lkZUJhbm5lckxpc3QsIHNldFNpZGVCYW5uZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGVhZGVyRGF0YSwgc2V0TGVhZGVyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgbmFtZSA9IHVzZXIuZmlyc3ROYW1lICYmIHVzZXIubGFzdE5hbWUgPyBgJHt1c2VyLmZpcnN0TmFtZX1gIDogdXNlci5lbWFpbEFkZHJlc3Nlc1swXS5lbWFpbEFkZHJlc3Muc3BsaXQoJ0AnKVswXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgR2xvYmFsQXBpLmdldExlYWRDb3VudCgpO1xyXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC51c2VySW5mb3MpIHtcclxuICAgICAgICAvLyBTb3J0IHRoZSB1c2VySW5mb3MgYXJyYXkgaW4gZGVzY2VuZGluZyBvcmRlciBvZiBjb21wbGV0ZWRDaGFwdGVyQ291bnRlclxyXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSByZXN1bHQudXNlckluZm9zLnNvcnQoKGEsIGIpID0+IGIuY29tcGxldGVkQ2hhcHRlckNvdW50ZXIgLSBhLmNvbXBsZXRlZENoYXB0ZXJDb3VudGVyKTtcclxuICAgICAgICBzZXRMZWFkZXJEYXRhKHNvcnRlZERhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFNpZGVCYW5uZXJzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRTaWRlQmFubmVycyA9ICgpID0+IHtcclxuICAgIEdsb2JhbEFwaS5nZXRTaWRlQmFubmVyKCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwKTtcclxuICAgICAgc2V0U2lkZUJhbm5lckxpc3QocmVzcC5zaWRlQmFubmVycyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhsIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICB7c2lkZUJhbm5lckxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtpdGVtLmJhbm5lci51cmx9XHJcbiAgICAgICAgICAgIGFsdD1cImJhbm5lclwiXHJcbiAgICAgICAgICAgIHdpZHRoPXsyNTB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihpdGVtPy51cmwpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggdy03MCBtbC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG8gc2hhZG93LW1kIHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCIgYmctc2xhdGUtMTAwIHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLXNsYXRlLTIwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIzXCIgY2xhc3NOYW1lPVwicHgtNCBweS0zIHRleHQtY2VudGVyIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPkxpZGVyIFRhYmxvc3U8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy1zbGF0ZS0xMDAgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAge2xlYWRlckRhdGEubWFwKCh1c2VySW5mbywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e3VzZXJJbmZvLmVtYWlsfSBjbGFzc05hbWU9e2Bob3ZlcjpiZy1ncmF5LTEwMCAke2luZGV4ICUgMiA9PT0gMCA/ICdiZy1zbGF0ZS0xMDAnIDogJ2JnLXdoaXRlJ31gfT5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCB0ZXh0LXhsXCI+8J+RkTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57aW5kZXggKyAxfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+e3VzZXJJbmZvLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR2xvYmFsQXBpIiwiSW1hZ2UiLCJVc2VyQnV0dG9uIiwidXNlVXNlciIsIlNpZGVCYW5uZXJzIiwic2lkZUJhbm5lckxpc3QiLCJzZXRTaWRlQmFubmVyTGlzdCIsImxlYWRlckRhdGEiLCJzZXRMZWFkZXJEYXRhIiwibmFtZSIsInVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsQWRkcmVzc2VzIiwiZW1haWxBZGRyZXNzIiwic3BsaXQiLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJnZXRMZWFkQ291bnQiLCJ1c2VySW5mb3MiLCJzb3J0ZWREYXRhIiwic29ydCIsImEiLCJiIiwiY29tcGxldGVkQ2hhcHRlckNvdW50ZXIiLCJnZXRTaWRlQmFubmVycyIsImdldFNpZGVCYW5uZXIiLCJ0aGVuIiwicmVzcCIsImNvbnNvbGUiLCJsb2ciLCJzaWRlQmFubmVycyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNyYyIsImJhbm5lciIsInVybCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayIsIndpbmRvdyIsIm9wZW4iLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsImNvbFNwYW4iLCJ0Ym9keSIsInVzZXJJbmZvIiwidGQiLCJzcGFuIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(router)/courses/_components/SideBanners.jsx\n"));

/***/ })

});