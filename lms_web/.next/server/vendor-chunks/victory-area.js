"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/victory-area";
exports.ids = ["vendor-chunks/victory-area"];
exports.modules = {

/***/ "(ssr)/./node_modules/victory-area/lib/area.js":
/*!***********************************************!*\
  !*** ./node_modules/victory-area/lib/area.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Area = void 0;\nvar _defaults2 = _interopRequireDefault(__webpack_require__(/*! lodash/defaults */ \"(ssr)/./node_modules/lodash/defaults.js\"));\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar d3Shape = _interopRequireWildcard(__webpack_require__(/*! victory-vendor/d3-shape */ \"(ssr)/./node_modules/victory-vendor/lib/d3-shape.js\"));\nvar _victoryCore = __webpack_require__(/*! victory-core */ \"(ssr)/./node_modules/victory-core/lib/index.js\");\nfunction _getRequireWildcardCache(e) { if (\"function\" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || \"object\" != typeof e && \"function\" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if (\"default\" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n/* eslint no-magic-numbers: [\"error\", { \"ignore\": [-1, 0, 1, 2] }]*/\n\nconst defined = d => {\n  const y = d._y1 !== undefined ? d._y1 : d._y;\n  return y !== null && y !== undefined && d._y0 !== null;\n};\nconst getXAccessor = scale => {\n  return d => scale.x(d._x1 !== undefined ? d._x1 : d._x);\n};\nconst getYAccessor = scale => {\n  return d => scale.y(d._y1 !== undefined ? d._y1 : d._y);\n};\nconst getY0Accessor = scale => {\n  return d => scale.y(d._y0);\n};\nconst getAngleAccessor = scale => {\n  return d => {\n    const x = scale.x(d._x1 !== undefined ? d._x1 : d._x);\n    return -1 * x + Math.PI / 2;\n  };\n};\nconst getCartesianArea = props => {\n  const {\n    horizontal,\n    scale\n  } = props;\n  const interpolationFunction = _victoryCore.LineHelpers.getInterpolationFunction(props);\n  return horizontal ? d3Shape.area().defined(defined).curve(interpolationFunction).x0(getY0Accessor(scale)).x1(getYAccessor(scale)).y(getXAccessor(scale)) : d3Shape.area().defined(defined).curve(interpolationFunction).x(getXAccessor(scale)).y1(getYAccessor(scale)).y0(getY0Accessor(scale));\n};\nconst getAreaFunction = props => {\n  const {\n    polar,\n    scale\n  } = props;\n  const interpolationFunction = _victoryCore.LineHelpers.getInterpolationFunction(props);\n  return polar ? d3Shape.radialArea().defined(defined).curve(interpolationFunction).angle(getAngleAccessor(scale)).outerRadius(getYAccessor(scale)).innerRadius(getY0Accessor(scale)) : getCartesianArea(props);\n};\nconst evaluateProps = props => {\n  /**\n   * Potential evaluated props are:\n   * `ariaLabel`\n   * `desc`\n   * `id`\n   * `style`\n   * `tabIndex`\n   */\n  const ariaLabel = _victoryCore.Helpers.evaluateProp(props.ariaLabel, props);\n  const desc = _victoryCore.Helpers.evaluateProp(props.desc, props);\n  const id = _victoryCore.Helpers.evaluateProp(props.id, props);\n  const style = _victoryCore.Helpers.evaluateStyle(Object.assign({\n    fill: \"black\"\n  }, props.style), props);\n  const tabIndex = _victoryCore.Helpers.evaluateProp(props.tabIndex, props);\n  return Object.assign({}, props, {\n    ariaLabel,\n    desc,\n    id,\n    style,\n    tabIndex\n  });\n};\nconst defaultProps = {\n  groupComponent: /*#__PURE__*/_react.default.createElement(\"g\", null),\n  pathComponent: /*#__PURE__*/_react.default.createElement(_victoryCore.Path, null),\n  role: \"presentation\",\n  shapeRendering: \"auto\"\n};\n\n/**\n * The area primitive used by VictoryArea\n */\nconst Area = initialProps => {\n  const props = evaluateProps((0, _defaults2.default)({}, initialProps, defaultProps));\n  const {\n    ariaLabel,\n    role,\n    shapeRendering,\n    className,\n    polar,\n    origin,\n    data,\n    pathComponent,\n    events,\n    groupComponent,\n    clipPath,\n    id,\n    style,\n    desc,\n    tabIndex\n  } = props;\n  const userProps = _victoryCore.UserProps.getSafeUserProps(props);\n  const defaultTransform = polar && origin ? `translate(${origin.x}, ${origin.y})` : undefined;\n  const transform = props.transform || defaultTransform;\n  const renderLine = style.stroke && style.stroke !== \"none\" && style.stroke !== \"transparent\";\n  const areaFunction = getAreaFunction(props);\n  const lineFunction = renderLine && _victoryCore.LineHelpers.getLineFunction(props);\n  const areaStroke = style.stroke ? \"none\" : style.fill;\n  const sharedProps = {\n    \"aria-label\": ariaLabel,\n    className,\n    role,\n    shapeRendering,\n    transform,\n    ...events,\n    clipPath,\n    tabIndex\n  };\n  const area = /*#__PURE__*/_react.default.cloneElement(pathComponent, Object.assign({\n    key: `${id}-area`,\n    style: Object.assign({}, style, {\n      stroke: areaStroke\n    }),\n    d: areaFunction(data),\n    desc,\n    tabIndex\n  }, sharedProps, userProps));\n  const line = renderLine ? /*#__PURE__*/_react.default.cloneElement(pathComponent, Object.assign({\n    key: `${id}-area-stroke`,\n    style: Object.assign({}, style, {\n      fill: \"none\"\n    }),\n    d: lineFunction(data)\n  }, sharedProps)) : null;\n  return renderLine ? /*#__PURE__*/_react.default.cloneElement(groupComponent, userProps, [area, line]) : area;\n};\nexports.Area = Area;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmljdG9yeS1hcmVhL2xpYi9hcmVhLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLFlBQVk7QUFDWix3Q0FBd0MsbUJBQU8sQ0FBQyxnRUFBaUI7QUFDakUsb0NBQW9DLG1CQUFPLENBQUMsd0dBQU87QUFDbkQsc0NBQXNDLG1CQUFPLENBQUMsb0ZBQXlCO0FBQ3ZFLG1CQUFtQixtQkFBTyxDQUFDLG9FQUFjO0FBQ3pDLHVDQUF1QywrQ0FBK0MsMENBQTBDLGtEQUFrRCxtQkFBbUI7QUFDck0seUNBQXlDLHVDQUF1QywyRUFBMkUsY0FBYyxxQ0FBcUMsb0NBQW9DLFVBQVUsaUJBQWlCLGdFQUFnRSxzRkFBc0YsMERBQTBELHdFQUF3RTtBQUNyaUIsdUNBQXVDLHVDQUF1QztBQUM5RSx3Q0FBd0MseUJBQXlCOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDBEQUEwRCxTQUFTLElBQUksU0FBUztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksR0FBRztBQUNmLDJCQUEyQjtBQUMzQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxZQUFZLEdBQUc7QUFDZiwyQkFBMkI7QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wLy4vbm9kZV9tb2R1bGVzL3ZpY3RvcnktYXJlYS9saWIvYXJlYS5qcz9mZjFjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5BcmVhID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvZGVmYXVsdHNcIikpO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBkM1NoYXBlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInZpY3RvcnktdmVuZG9yL2QzLXNoYXBlXCIpKTtcbnZhciBfdmljdG9yeUNvcmUgPSByZXF1aXJlKFwidmljdG9yeS1jb3JlXCIpO1xuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKGUpIHsgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgV2Vha01hcCkgcmV0dXJuIG51bGw7IHZhciByID0gbmV3IFdlYWtNYXAoKSwgdCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUgPyB0IDogcjsgfSkoZSk7IH1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKGUsIHIpIHsgaWYgKCFyICYmIGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTsgaWYgKG51bGwgPT09IGUgfHwgXCJvYmplY3RcIiAhPSB0eXBlb2YgZSAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUpIHJldHVybiB7IGRlZmF1bHQ6IGUgfTsgdmFyIHQgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUocik7IGlmICh0ICYmIHQuaGFzKGUpKSByZXR1cm4gdC5nZXQoZSk7IHZhciBuID0geyBfX3Byb3RvX186IG51bGwgfSwgYSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciB1IGluIGUpIGlmIChcImRlZmF1bHRcIiAhPT0gdSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgdSkpIHsgdmFyIGkgPSBhID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB1KSA6IG51bGw7IGkgJiYgKGkuZ2V0IHx8IGkuc2V0KSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCB1LCBpKSA6IG5bdV0gPSBlW3VdOyB9IHJldHVybiBuLmRlZmF1bHQgPSBlLCB0ICYmIHQuc2V0KGUsIG4pLCBuOyB9XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLyogZXNsaW50IG5vLW1hZ2ljLW51bWJlcnM6IFtcImVycm9yXCIsIHsgXCJpZ25vcmVcIjogWy0xLCAwLCAxLCAyXSB9XSovXG5cbmNvbnN0IGRlZmluZWQgPSBkID0+IHtcbiAgY29uc3QgeSA9IGQuX3kxICE9PSB1bmRlZmluZWQgPyBkLl95MSA6IGQuX3k7XG4gIHJldHVybiB5ICE9PSBudWxsICYmIHkgIT09IHVuZGVmaW5lZCAmJiBkLl95MCAhPT0gbnVsbDtcbn07XG5jb25zdCBnZXRYQWNjZXNzb3IgPSBzY2FsZSA9PiB7XG4gIHJldHVybiBkID0+IHNjYWxlLngoZC5feDEgIT09IHVuZGVmaW5lZCA/IGQuX3gxIDogZC5feCk7XG59O1xuY29uc3QgZ2V0WUFjY2Vzc29yID0gc2NhbGUgPT4ge1xuICByZXR1cm4gZCA9PiBzY2FsZS55KGQuX3kxICE9PSB1bmRlZmluZWQgPyBkLl95MSA6IGQuX3kpO1xufTtcbmNvbnN0IGdldFkwQWNjZXNzb3IgPSBzY2FsZSA9PiB7XG4gIHJldHVybiBkID0+IHNjYWxlLnkoZC5feTApO1xufTtcbmNvbnN0IGdldEFuZ2xlQWNjZXNzb3IgPSBzY2FsZSA9PiB7XG4gIHJldHVybiBkID0+IHtcbiAgICBjb25zdCB4ID0gc2NhbGUueChkLl94MSAhPT0gdW5kZWZpbmVkID8gZC5feDEgOiBkLl94KTtcbiAgICByZXR1cm4gLTEgKiB4ICsgTWF0aC5QSSAvIDI7XG4gIH07XG59O1xuY29uc3QgZ2V0Q2FydGVzaWFuQXJlYSA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIGhvcml6b250YWwsXG4gICAgc2NhbGVcbiAgfSA9IHByb3BzO1xuICBjb25zdCBpbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBfdmljdG9yeUNvcmUuTGluZUhlbHBlcnMuZ2V0SW50ZXJwb2xhdGlvbkZ1bmN0aW9uKHByb3BzKTtcbiAgcmV0dXJuIGhvcml6b250YWwgPyBkM1NoYXBlLmFyZWEoKS5kZWZpbmVkKGRlZmluZWQpLmN1cnZlKGludGVycG9sYXRpb25GdW5jdGlvbikueDAoZ2V0WTBBY2Nlc3NvcihzY2FsZSkpLngxKGdldFlBY2Nlc3NvcihzY2FsZSkpLnkoZ2V0WEFjY2Vzc29yKHNjYWxlKSkgOiBkM1NoYXBlLmFyZWEoKS5kZWZpbmVkKGRlZmluZWQpLmN1cnZlKGludGVycG9sYXRpb25GdW5jdGlvbikueChnZXRYQWNjZXNzb3Ioc2NhbGUpKS55MShnZXRZQWNjZXNzb3Ioc2NhbGUpKS55MChnZXRZMEFjY2Vzc29yKHNjYWxlKSk7XG59O1xuY29uc3QgZ2V0QXJlYUZ1bmN0aW9uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgcG9sYXIsXG4gICAgc2NhbGVcbiAgfSA9IHByb3BzO1xuICBjb25zdCBpbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBfdmljdG9yeUNvcmUuTGluZUhlbHBlcnMuZ2V0SW50ZXJwb2xhdGlvbkZ1bmN0aW9uKHByb3BzKTtcbiAgcmV0dXJuIHBvbGFyID8gZDNTaGFwZS5yYWRpYWxBcmVhKCkuZGVmaW5lZChkZWZpbmVkKS5jdXJ2ZShpbnRlcnBvbGF0aW9uRnVuY3Rpb24pLmFuZ2xlKGdldEFuZ2xlQWNjZXNzb3Ioc2NhbGUpKS5vdXRlclJhZGl1cyhnZXRZQWNjZXNzb3Ioc2NhbGUpKS5pbm5lclJhZGl1cyhnZXRZMEFjY2Vzc29yKHNjYWxlKSkgOiBnZXRDYXJ0ZXNpYW5BcmVhKHByb3BzKTtcbn07XG5jb25zdCBldmFsdWF0ZVByb3BzID0gcHJvcHMgPT4ge1xuICAvKipcbiAgICogUG90ZW50aWFsIGV2YWx1YXRlZCBwcm9wcyBhcmU6XG4gICAqIGBhcmlhTGFiZWxgXG4gICAqIGBkZXNjYFxuICAgKiBgaWRgXG4gICAqIGBzdHlsZWBcbiAgICogYHRhYkluZGV4YFxuICAgKi9cbiAgY29uc3QgYXJpYUxhYmVsID0gX3ZpY3RvcnlDb3JlLkhlbHBlcnMuZXZhbHVhdGVQcm9wKHByb3BzLmFyaWFMYWJlbCwgcHJvcHMpO1xuICBjb25zdCBkZXNjID0gX3ZpY3RvcnlDb3JlLkhlbHBlcnMuZXZhbHVhdGVQcm9wKHByb3BzLmRlc2MsIHByb3BzKTtcbiAgY29uc3QgaWQgPSBfdmljdG9yeUNvcmUuSGVscGVycy5ldmFsdWF0ZVByb3AocHJvcHMuaWQsIHByb3BzKTtcbiAgY29uc3Qgc3R5bGUgPSBfdmljdG9yeUNvcmUuSGVscGVycy5ldmFsdWF0ZVN0eWxlKE9iamVjdC5hc3NpZ24oe1xuICAgIGZpbGw6IFwiYmxhY2tcIlxuICB9LCBwcm9wcy5zdHlsZSksIHByb3BzKTtcbiAgY29uc3QgdGFiSW5kZXggPSBfdmljdG9yeUNvcmUuSGVscGVycy5ldmFsdWF0ZVByb3AocHJvcHMudGFiSW5kZXgsIHByb3BzKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgYXJpYUxhYmVsLFxuICAgIGRlc2MsXG4gICAgaWQsXG4gICAgc3R5bGUsXG4gICAgdGFiSW5kZXhcbiAgfSk7XG59O1xuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBncm91cENvbXBvbmVudDogLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIG51bGwpLFxuICBwYXRoQ29tcG9uZW50OiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfdmljdG9yeUNvcmUuUGF0aCwgbnVsbCksXG4gIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gIHNoYXBlUmVuZGVyaW5nOiBcImF1dG9cIlxufTtcblxuLyoqXG4gKiBUaGUgYXJlYSBwcmltaXRpdmUgdXNlZCBieSBWaWN0b3J5QXJlYVxuICovXG5jb25zdCBBcmVhID0gaW5pdGlhbFByb3BzID0+IHtcbiAgY29uc3QgcHJvcHMgPSBldmFsdWF0ZVByb3BzKCgwLCBfZGVmYXVsdHMyLmRlZmF1bHQpKHt9LCBpbml0aWFsUHJvcHMsIGRlZmF1bHRQcm9wcykpO1xuICBjb25zdCB7XG4gICAgYXJpYUxhYmVsLFxuICAgIHJvbGUsXG4gICAgc2hhcGVSZW5kZXJpbmcsXG4gICAgY2xhc3NOYW1lLFxuICAgIHBvbGFyLFxuICAgIG9yaWdpbixcbiAgICBkYXRhLFxuICAgIHBhdGhDb21wb25lbnQsXG4gICAgZXZlbnRzLFxuICAgIGdyb3VwQ29tcG9uZW50LFxuICAgIGNsaXBQYXRoLFxuICAgIGlkLFxuICAgIHN0eWxlLFxuICAgIGRlc2MsXG4gICAgdGFiSW5kZXhcbiAgfSA9IHByb3BzO1xuICBjb25zdCB1c2VyUHJvcHMgPSBfdmljdG9yeUNvcmUuVXNlclByb3BzLmdldFNhZmVVc2VyUHJvcHMocHJvcHMpO1xuICBjb25zdCBkZWZhdWx0VHJhbnNmb3JtID0gcG9sYXIgJiYgb3JpZ2luID8gYHRyYW5zbGF0ZSgke29yaWdpbi54fSwgJHtvcmlnaW4ueX0pYCA6IHVuZGVmaW5lZDtcbiAgY29uc3QgdHJhbnNmb3JtID0gcHJvcHMudHJhbnNmb3JtIHx8IGRlZmF1bHRUcmFuc2Zvcm07XG4gIGNvbnN0IHJlbmRlckxpbmUgPSBzdHlsZS5zdHJva2UgJiYgc3R5bGUuc3Ryb2tlICE9PSBcIm5vbmVcIiAmJiBzdHlsZS5zdHJva2UgIT09IFwidHJhbnNwYXJlbnRcIjtcbiAgY29uc3QgYXJlYUZ1bmN0aW9uID0gZ2V0QXJlYUZ1bmN0aW9uKHByb3BzKTtcbiAgY29uc3QgbGluZUZ1bmN0aW9uID0gcmVuZGVyTGluZSAmJiBfdmljdG9yeUNvcmUuTGluZUhlbHBlcnMuZ2V0TGluZUZ1bmN0aW9uKHByb3BzKTtcbiAgY29uc3QgYXJlYVN0cm9rZSA9IHN0eWxlLnN0cm9rZSA/IFwibm9uZVwiIDogc3R5bGUuZmlsbDtcbiAgY29uc3Qgc2hhcmVkUHJvcHMgPSB7XG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCxcbiAgICBjbGFzc05hbWUsXG4gICAgcm9sZSxcbiAgICBzaGFwZVJlbmRlcmluZyxcbiAgICB0cmFuc2Zvcm0sXG4gICAgLi4uZXZlbnRzLFxuICAgIGNsaXBQYXRoLFxuICAgIHRhYkluZGV4XG4gIH07XG4gIGNvbnN0IGFyZWEgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KHBhdGhDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgIGtleTogYCR7aWR9LWFyZWFgLFxuICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBzdHlsZSwge1xuICAgICAgc3Ryb2tlOiBhcmVhU3Ryb2tlXG4gICAgfSksXG4gICAgZDogYXJlYUZ1bmN0aW9uKGRhdGEpLFxuICAgIGRlc2MsXG4gICAgdGFiSW5kZXhcbiAgfSwgc2hhcmVkUHJvcHMsIHVzZXJQcm9wcykpO1xuICBjb25zdCBsaW5lID0gcmVuZGVyTGluZSA/IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQocGF0aENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAga2V5OiBgJHtpZH0tYXJlYS1zdHJva2VgLFxuICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBzdHlsZSwge1xuICAgICAgZmlsbDogXCJub25lXCJcbiAgICB9KSxcbiAgICBkOiBsaW5lRnVuY3Rpb24oZGF0YSlcbiAgfSwgc2hhcmVkUHJvcHMpKSA6IG51bGw7XG4gIHJldHVybiByZW5kZXJMaW5lID8gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChncm91cENvbXBvbmVudCwgdXNlclByb3BzLCBbYXJlYSwgbGluZV0pIDogYXJlYTtcbn07XG5leHBvcnRzLkFyZWEgPSBBcmVhOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/victory-area/lib/area.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/victory-area/lib/helper-methods.js":
/*!*********************************************************!*\
  !*** ./node_modules/victory-area/lib/helper-methods.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getDataWithBaseline = exports.getBaseProps = void 0;\nvar _victoryCore = __webpack_require__(/*! victory-core */ \"(ssr)/./node_modules/victory-core/lib/index.js\");\nconst getDataWithBaseline = (props, scale) => {\n  let data = _victoryCore.Data.getData(props);\n  if (data.length < 2) {\n    data = [];\n  }\n  const getDefaultMin = axis => {\n    const defaultZero = _victoryCore.Scale.getType(scale[axis]) === \"log\" ? 1 / Number.MAX_SAFE_INTEGER : 0;\n    const domain = scale[axis].domain();\n    const minY = _victoryCore.Collection.getMinValue(domain);\n    const maxY = _victoryCore.Collection.getMaxValue(domain);\n    let defaultMin = defaultZero;\n    if (minY < 0 && maxY <= 0) {\n      defaultMin = maxY;\n    } else if (minY >= 0 && maxY > 0) {\n      defaultMin = minY;\n    }\n    return _victoryCore.Collection.containsDates(domain) ? new Date(defaultMin) : defaultMin;\n  };\n  return data.map(datum => {\n    const _y1 = datum._y1 !== undefined ? datum._y1 : datum._y;\n    const _y0 = datum._y0 !== undefined ? datum._y0 : getDefaultMin(\"y\");\n    const _x1 = datum._x1 !== undefined ? datum._x1 : datum._x;\n    const _x0 = datum._x0 !== undefined ? datum._x0 : getDefaultMin(\"x\");\n    return Object.assign({}, datum, {\n      _y0,\n      _y1,\n      _x0,\n      _x1\n    });\n  });\n};\nexports.getDataWithBaseline = getDataWithBaseline;\nconst getCalculatedValues = props => {\n  const {\n    polar\n  } = props;\n  const defaultStyles = _victoryCore.Helpers.getDefaultStyles(props, \"area\");\n  const style = _victoryCore.Helpers.getStyles(props.style, defaultStyles);\n  const range = {\n    x: _victoryCore.Helpers.getRange(props, \"x\"),\n    y: _victoryCore.Helpers.getRange(props, \"y\")\n  };\n  const domain = {\n    x: _victoryCore.Domain.getDomainWithZero(props, \"x\"),\n    y: _victoryCore.Domain.getDomainWithZero(props, \"y\")\n  };\n  const scale = {\n    x: _victoryCore.Scale.getBaseScale(props, \"x\").domain(domain.x).range(props.horizontal ? range.y : range.x),\n    y: _victoryCore.Scale.getBaseScale(props, \"y\").domain(domain.y).range(props.horizontal ? range.x : range.y)\n  };\n  const origin = polar ? props.origin || _victoryCore.Helpers.getPolarOrigin(props) : undefined;\n  const data = getDataWithBaseline(props, scale);\n  return {\n    style,\n    data,\n    scale,\n    domain,\n    origin\n  };\n};\nconst getBaseProps = (initialProps, fallbackProps) => {\n  const modifiedProps = _victoryCore.Helpers.modifyProps(initialProps, fallbackProps, \"area\");\n  const props = Object.assign({}, modifiedProps, getCalculatedValues(modifiedProps));\n  const {\n    data,\n    domain,\n    events,\n    groupComponent,\n    height,\n    horizontal,\n    interpolation,\n    origin,\n    padding,\n    polar,\n    scale,\n    sharedEvents,\n    standalone,\n    style,\n    theme,\n    width,\n    labels,\n    name,\n    disableInlineStyles\n  } = props;\n  const initialChildProps = {\n    parent: {\n      style: style.parent,\n      width,\n      height,\n      scale,\n      data,\n      domain,\n      standalone,\n      theme,\n      polar,\n      origin,\n      padding,\n      name,\n      horizontal\n    },\n    all: {\n      data: {\n        horizontal,\n        polar,\n        origin,\n        scale,\n        data,\n        interpolation,\n        groupComponent,\n        style: disableInlineStyles ? {} : style.data,\n        disableInlineStyles\n      }\n    }\n  };\n  return data.reduce((childProps, datum, index) => {\n    const text = _victoryCore.LabelHelpers.getText(props, datum, index);\n    if (text !== undefined && text !== null || labels && (events || sharedEvents)) {\n      const eventKey = !_victoryCore.Helpers.isNil(datum.eventKey) ? datum.eventKey : index;\n      childProps[eventKey] = {\n        labels: _victoryCore.LabelHelpers.getProps(props, index)\n      };\n    }\n    return childProps;\n  }, initialChildProps);\n};\nexports.getBaseProps = getBaseProps;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmljdG9yeS1hcmVhL2xpYi9oZWxwZXItbWV0aG9kcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQkFBMkIsR0FBRyxvQkFBb0I7QUFDbEQsbUJBQW1CLG1CQUFPLENBQUMsb0VBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wLy4vbm9kZV9tb2R1bGVzL3ZpY3RvcnktYXJlYS9saWIvaGVscGVyLW1ldGhvZHMuanM/MDA0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RGF0YVdpdGhCYXNlbGluZSA9IGV4cG9ydHMuZ2V0QmFzZVByb3BzID0gdm9pZCAwO1xudmFyIF92aWN0b3J5Q29yZSA9IHJlcXVpcmUoXCJ2aWN0b3J5LWNvcmVcIik7XG5jb25zdCBnZXREYXRhV2l0aEJhc2VsaW5lID0gKHByb3BzLCBzY2FsZSkgPT4ge1xuICBsZXQgZGF0YSA9IF92aWN0b3J5Q29yZS5EYXRhLmdldERhdGEocHJvcHMpO1xuICBpZiAoZGF0YS5sZW5ndGggPCAyKSB7XG4gICAgZGF0YSA9IFtdO1xuICB9XG4gIGNvbnN0IGdldERlZmF1bHRNaW4gPSBheGlzID0+IHtcbiAgICBjb25zdCBkZWZhdWx0WmVybyA9IF92aWN0b3J5Q29yZS5TY2FsZS5nZXRUeXBlKHNjYWxlW2F4aXNdKSA9PT0gXCJsb2dcIiA/IDEgLyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IDA7XG4gICAgY29uc3QgZG9tYWluID0gc2NhbGVbYXhpc10uZG9tYWluKCk7XG4gICAgY29uc3QgbWluWSA9IF92aWN0b3J5Q29yZS5Db2xsZWN0aW9uLmdldE1pblZhbHVlKGRvbWFpbik7XG4gICAgY29uc3QgbWF4WSA9IF92aWN0b3J5Q29yZS5Db2xsZWN0aW9uLmdldE1heFZhbHVlKGRvbWFpbik7XG4gICAgbGV0IGRlZmF1bHRNaW4gPSBkZWZhdWx0WmVybztcbiAgICBpZiAobWluWSA8IDAgJiYgbWF4WSA8PSAwKSB7XG4gICAgICBkZWZhdWx0TWluID0gbWF4WTtcbiAgICB9IGVsc2UgaWYgKG1pblkgPj0gMCAmJiBtYXhZID4gMCkge1xuICAgICAgZGVmYXVsdE1pbiA9IG1pblk7XG4gICAgfVxuICAgIHJldHVybiBfdmljdG9yeUNvcmUuQ29sbGVjdGlvbi5jb250YWluc0RhdGVzKGRvbWFpbikgPyBuZXcgRGF0ZShkZWZhdWx0TWluKSA6IGRlZmF1bHRNaW47XG4gIH07XG4gIHJldHVybiBkYXRhLm1hcChkYXR1bSA9PiB7XG4gICAgY29uc3QgX3kxID0gZGF0dW0uX3kxICE9PSB1bmRlZmluZWQgPyBkYXR1bS5feTEgOiBkYXR1bS5feTtcbiAgICBjb25zdCBfeTAgPSBkYXR1bS5feTAgIT09IHVuZGVmaW5lZCA/IGRhdHVtLl95MCA6IGdldERlZmF1bHRNaW4oXCJ5XCIpO1xuICAgIGNvbnN0IF94MSA9IGRhdHVtLl94MSAhPT0gdW5kZWZpbmVkID8gZGF0dW0uX3gxIDogZGF0dW0uX3g7XG4gICAgY29uc3QgX3gwID0gZGF0dW0uX3gwICE9PSB1bmRlZmluZWQgPyBkYXR1bS5feDAgOiBnZXREZWZhdWx0TWluKFwieFwiKTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGF0dW0sIHtcbiAgICAgIF95MCxcbiAgICAgIF95MSxcbiAgICAgIF94MCxcbiAgICAgIF94MVxuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnRzLmdldERhdGFXaXRoQmFzZWxpbmUgPSBnZXREYXRhV2l0aEJhc2VsaW5lO1xuY29uc3QgZ2V0Q2FsY3VsYXRlZFZhbHVlcyA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIHBvbGFyXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgZGVmYXVsdFN0eWxlcyA9IF92aWN0b3J5Q29yZS5IZWxwZXJzLmdldERlZmF1bHRTdHlsZXMocHJvcHMsIFwiYXJlYVwiKTtcbiAgY29uc3Qgc3R5bGUgPSBfdmljdG9yeUNvcmUuSGVscGVycy5nZXRTdHlsZXMocHJvcHMuc3R5bGUsIGRlZmF1bHRTdHlsZXMpO1xuICBjb25zdCByYW5nZSA9IHtcbiAgICB4OiBfdmljdG9yeUNvcmUuSGVscGVycy5nZXRSYW5nZShwcm9wcywgXCJ4XCIpLFxuICAgIHk6IF92aWN0b3J5Q29yZS5IZWxwZXJzLmdldFJhbmdlKHByb3BzLCBcInlcIilcbiAgfTtcbiAgY29uc3QgZG9tYWluID0ge1xuICAgIHg6IF92aWN0b3J5Q29yZS5Eb21haW4uZ2V0RG9tYWluV2l0aFplcm8ocHJvcHMsIFwieFwiKSxcbiAgICB5OiBfdmljdG9yeUNvcmUuRG9tYWluLmdldERvbWFpbldpdGhaZXJvKHByb3BzLCBcInlcIilcbiAgfTtcbiAgY29uc3Qgc2NhbGUgPSB7XG4gICAgeDogX3ZpY3RvcnlDb3JlLlNjYWxlLmdldEJhc2VTY2FsZShwcm9wcywgXCJ4XCIpLmRvbWFpbihkb21haW4ueCkucmFuZ2UocHJvcHMuaG9yaXpvbnRhbCA/IHJhbmdlLnkgOiByYW5nZS54KSxcbiAgICB5OiBfdmljdG9yeUNvcmUuU2NhbGUuZ2V0QmFzZVNjYWxlKHByb3BzLCBcInlcIikuZG9tYWluKGRvbWFpbi55KS5yYW5nZShwcm9wcy5ob3Jpem9udGFsID8gcmFuZ2UueCA6IHJhbmdlLnkpXG4gIH07XG4gIGNvbnN0IG9yaWdpbiA9IHBvbGFyID8gcHJvcHMub3JpZ2luIHx8IF92aWN0b3J5Q29yZS5IZWxwZXJzLmdldFBvbGFyT3JpZ2luKHByb3BzKSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgZGF0YSA9IGdldERhdGFXaXRoQmFzZWxpbmUocHJvcHMsIHNjYWxlKTtcbiAgcmV0dXJuIHtcbiAgICBzdHlsZSxcbiAgICBkYXRhLFxuICAgIHNjYWxlLFxuICAgIGRvbWFpbixcbiAgICBvcmlnaW5cbiAgfTtcbn07XG5jb25zdCBnZXRCYXNlUHJvcHMgPSAoaW5pdGlhbFByb3BzLCBmYWxsYmFja1Byb3BzKSA9PiB7XG4gIGNvbnN0IG1vZGlmaWVkUHJvcHMgPSBfdmljdG9yeUNvcmUuSGVscGVycy5tb2RpZnlQcm9wcyhpbml0aWFsUHJvcHMsIGZhbGxiYWNrUHJvcHMsIFwiYXJlYVwiKTtcbiAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllZFByb3BzLCBnZXRDYWxjdWxhdGVkVmFsdWVzKG1vZGlmaWVkUHJvcHMpKTtcbiAgY29uc3Qge1xuICAgIGRhdGEsXG4gICAgZG9tYWluLFxuICAgIGV2ZW50cyxcbiAgICBncm91cENvbXBvbmVudCxcbiAgICBoZWlnaHQsXG4gICAgaG9yaXpvbnRhbCxcbiAgICBpbnRlcnBvbGF0aW9uLFxuICAgIG9yaWdpbixcbiAgICBwYWRkaW5nLFxuICAgIHBvbGFyLFxuICAgIHNjYWxlLFxuICAgIHNoYXJlZEV2ZW50cyxcbiAgICBzdGFuZGFsb25lLFxuICAgIHN0eWxlLFxuICAgIHRoZW1lLFxuICAgIHdpZHRoLFxuICAgIGxhYmVscyxcbiAgICBuYW1lLFxuICAgIGRpc2FibGVJbmxpbmVTdHlsZXNcbiAgfSA9IHByb3BzO1xuICBjb25zdCBpbml0aWFsQ2hpbGRQcm9wcyA9IHtcbiAgICBwYXJlbnQ6IHtcbiAgICAgIHN0eWxlOiBzdHlsZS5wYXJlbnQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHNjYWxlLFxuICAgICAgZGF0YSxcbiAgICAgIGRvbWFpbixcbiAgICAgIHN0YW5kYWxvbmUsXG4gICAgICB0aGVtZSxcbiAgICAgIHBvbGFyLFxuICAgICAgb3JpZ2luLFxuICAgICAgcGFkZGluZyxcbiAgICAgIG5hbWUsXG4gICAgICBob3Jpem9udGFsXG4gICAgfSxcbiAgICBhbGw6IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaG9yaXpvbnRhbCxcbiAgICAgICAgcG9sYXIsXG4gICAgICAgIG9yaWdpbixcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGludGVycG9sYXRpb24sXG4gICAgICAgIGdyb3VwQ29tcG9uZW50LFxuICAgICAgICBzdHlsZTogZGlzYWJsZUlubGluZVN0eWxlcyA/IHt9IDogc3R5bGUuZGF0YSxcbiAgICAgICAgZGlzYWJsZUlubGluZVN0eWxlc1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGRhdGEucmVkdWNlKChjaGlsZFByb3BzLCBkYXR1bSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gX3ZpY3RvcnlDb3JlLkxhYmVsSGVscGVycy5nZXRUZXh0KHByb3BzLCBkYXR1bSwgaW5kZXgpO1xuICAgIGlmICh0ZXh0ICE9PSB1bmRlZmluZWQgJiYgdGV4dCAhPT0gbnVsbCB8fCBsYWJlbHMgJiYgKGV2ZW50cyB8fCBzaGFyZWRFdmVudHMpKSB7XG4gICAgICBjb25zdCBldmVudEtleSA9ICFfdmljdG9yeUNvcmUuSGVscGVycy5pc05pbChkYXR1bS5ldmVudEtleSkgPyBkYXR1bS5ldmVudEtleSA6IGluZGV4O1xuICAgICAgY2hpbGRQcm9wc1tldmVudEtleV0gPSB7XG4gICAgICAgIGxhYmVsczogX3ZpY3RvcnlDb3JlLkxhYmVsSGVscGVycy5nZXRQcm9wcyhwcm9wcywgaW5kZXgpXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRQcm9wcztcbiAgfSwgaW5pdGlhbENoaWxkUHJvcHMpO1xufTtcbmV4cG9ydHMuZ2V0QmFzZVByb3BzID0gZ2V0QmFzZVByb3BzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/victory-area/lib/helper-methods.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/victory-area/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/victory-area/lib/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar _victoryArea = __webpack_require__(/*! ./victory-area */ \"(ssr)/./node_modules/victory-area/lib/victory-area.js\");\nObject.keys(_victoryArea).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _victoryArea[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _victoryArea[key];\n    }\n  });\n});\nvar _area = __webpack_require__(/*! ./area */ \"(ssr)/./node_modules/victory-area/lib/area.js\");\nObject.keys(_area).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  if (key in exports && exports[key] === _area[key]) return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _area[key];\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmljdG9yeS1hcmVhL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixtQkFBbUIsbUJBQU8sQ0FBQyw2RUFBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0QsWUFBWSxtQkFBTyxDQUFDLDZEQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXAvLi9ub2RlX21vZHVsZXMvdmljdG9yeS1hcmVhL2xpYi9pbmRleC5qcz8yYmIwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIF92aWN0b3J5QXJlYSA9IHJlcXVpcmUoXCIuL3ZpY3RvcnktYXJlYVwiKTtcbk9iamVjdC5rZXlzKF92aWN0b3J5QXJlYSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3ZpY3RvcnlBcmVhW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3ZpY3RvcnlBcmVhW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xudmFyIF9hcmVhID0gcmVxdWlyZShcIi4vYXJlYVwiKTtcbk9iamVjdC5rZXlzKF9hcmVhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfYXJlYVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9hcmVhW2tleV07XG4gICAgfVxuICB9KTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/victory-area/lib/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/victory-area/lib/victory-area.js":
/*!*******************************************************!*\
  !*** ./node_modules/victory-area/lib/victory-area.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.VictoryArea = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar _helperMethods = __webpack_require__(/*! ./helper-methods */ \"(ssr)/./node_modules/victory-area/lib/helper-methods.js\");\nvar _area = __webpack_require__(/*! ./area */ \"(ssr)/./node_modules/victory-area/lib/area.js\");\nvar _victoryCore = __webpack_require__(/*! victory-core */ \"(ssr)/./node_modules/victory-core/lib/index.js\");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\nconst fallbackProps = {\n  width: 450,\n  height: 300,\n  padding: 50,\n  interpolation: \"linear\"\n};\nconst options = {\n  components: [{\n    name: \"parent\",\n    index: \"parent\"\n  }, {\n    name: \"data\",\n    index: \"all\"\n  }, {\n    name: \"labels\"\n  }]\n};\n\n// eslint-disable-next-line @typescript-eslint/no-empty-interface\n\n/**\n * Draw area charts with React. VictoryArea is a composable component, so it doesn't include axes.\n * Add VictoryArea as a child of VictoryChart for a complete chart.\n */\nclass VictoryAreaBase extends _react.default.Component {\n  static animationWhitelist = [\"data\", \"domain\", \"height\", \"padding\", \"style\", \"width\"];\n  static defaultProps = {\n    containerComponent: /*#__PURE__*/_react.default.createElement(_victoryCore.VictoryContainer, null),\n    dataComponent: /*#__PURE__*/_react.default.createElement(_area.Area, null),\n    groupComponent: /*#__PURE__*/_react.default.createElement(_victoryCore.VictoryClipContainer, null),\n    labelComponent: /*#__PURE__*/_react.default.createElement(_victoryCore.VictoryLabel, {\n      renderInPortal: true\n    }),\n    samples: 50,\n    sortKey: \"x\",\n    sortOrder: \"ascending\",\n    standalone: true,\n    theme: _victoryCore.VictoryTheme.grayscale\n  };\n  static displayName = \"VictoryArea\";\n  static role = \"area\";\n  static continuous = true;\n  static defaultTransitions = _victoryCore.DefaultTransitions.continuousTransitions();\n  static defaultPolarTransitions = _victoryCore.DefaultTransitions.continuousPolarTransitions();\n  static getDomain = _victoryCore.Domain.getDomainWithZero;\n  static getData = _victoryCore.Data.getData;\n  static getBaseProps(props) {\n    return (0, _helperMethods.getBaseProps)(props, fallbackProps);\n  }\n  static expectedComponents = [\"dataComponent\", \"labelComponent\", \"groupComponent\", \"containerComponent\"];\n\n  // Overridden in native versions\n  shouldAnimate() {\n    return !!this.props.animate;\n  }\n  render() {\n    const {\n      animationWhitelist,\n      role\n    } = VictoryAreaBase;\n    const props = _victoryCore.Helpers.modifyProps(this.props, fallbackProps, role);\n    if (this.shouldAnimate()) {\n      return this.animateComponent(props, animationWhitelist);\n    }\n    const children = this.renderContinuousData(props);\n    const component = props.standalone ? this.renderContainer(props.containerComponent, children) : children;\n    return _victoryCore.UserProps.withSafeUserProps(component, props);\n  }\n}\nconst VictoryArea = exports.VictoryArea = (0, _victoryCore.addEvents)(VictoryAreaBase, options);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmljdG9yeS1hcmVhL2xpYi92aWN0b3J5LWFyZWEuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsbUJBQW1CO0FBQ25CLG9DQUFvQyxtQkFBTyxDQUFDLHdHQUFPO0FBQ25ELHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjtBQUMvQyxZQUFZLG1CQUFPLENBQUMsNkRBQVE7QUFDNUIsbUJBQW1CLG1CQUFPLENBQUMsb0VBQWM7QUFDekMsdUNBQXVDLHVDQUF1QztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXAvLi9ub2RlX21vZHVsZXMvdmljdG9yeS1hcmVhL2xpYi92aWN0b3J5LWFyZWEuanM/MGI3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVmljdG9yeUFyZWEgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWxwZXJNZXRob2RzID0gcmVxdWlyZShcIi4vaGVscGVyLW1ldGhvZHNcIik7XG52YXIgX2FyZWEgPSByZXF1aXJlKFwiLi9hcmVhXCIpO1xudmFyIF92aWN0b3J5Q29yZSA9IHJlcXVpcmUoXCJ2aWN0b3J5LWNvcmVcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuY29uc3QgZmFsbGJhY2tQcm9wcyA9IHtcbiAgd2lkdGg6IDQ1MCxcbiAgaGVpZ2h0OiAzMDAsXG4gIHBhZGRpbmc6IDUwLFxuICBpbnRlcnBvbGF0aW9uOiBcImxpbmVhclwiXG59O1xuY29uc3Qgb3B0aW9ucyA9IHtcbiAgY29tcG9uZW50czogW3tcbiAgICBuYW1lOiBcInBhcmVudFwiLFxuICAgIGluZGV4OiBcInBhcmVudFwiXG4gIH0sIHtcbiAgICBuYW1lOiBcImRhdGFcIixcbiAgICBpbmRleDogXCJhbGxcIlxuICB9LCB7XG4gICAgbmFtZTogXCJsYWJlbHNcIlxuICB9XVxufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1pbnRlcmZhY2VcblxuLyoqXG4gKiBEcmF3IGFyZWEgY2hhcnRzIHdpdGggUmVhY3QuIFZpY3RvcnlBcmVhIGlzIGEgY29tcG9zYWJsZSBjb21wb25lbnQsIHNvIGl0IGRvZXNuJ3QgaW5jbHVkZSBheGVzLlxuICogQWRkIFZpY3RvcnlBcmVhIGFzIGEgY2hpbGQgb2YgVmljdG9yeUNoYXJ0IGZvciBhIGNvbXBsZXRlIGNoYXJ0LlxuICovXG5jbGFzcyBWaWN0b3J5QXJlYUJhc2UgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQge1xuICBzdGF0aWMgYW5pbWF0aW9uV2hpdGVsaXN0ID0gW1wiZGF0YVwiLCBcImRvbWFpblwiLCBcImhlaWdodFwiLCBcInBhZGRpbmdcIiwgXCJzdHlsZVwiLCBcIndpZHRoXCJdO1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbnRhaW5lckNvbXBvbmVudDogLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3ZpY3RvcnlDb3JlLlZpY3RvcnlDb250YWluZXIsIG51bGwpLFxuICAgIGRhdGFDb21wb25lbnQ6IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9hcmVhLkFyZWEsIG51bGwpLFxuICAgIGdyb3VwQ29tcG9uZW50OiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfdmljdG9yeUNvcmUuVmljdG9yeUNsaXBDb250YWluZXIsIG51bGwpLFxuICAgIGxhYmVsQ29tcG9uZW50OiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfdmljdG9yeUNvcmUuVmljdG9yeUxhYmVsLCB7XG4gICAgICByZW5kZXJJblBvcnRhbDogdHJ1ZVxuICAgIH0pLFxuICAgIHNhbXBsZXM6IDUwLFxuICAgIHNvcnRLZXk6IFwieFwiLFxuICAgIHNvcnRPcmRlcjogXCJhc2NlbmRpbmdcIixcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHRoZW1lOiBfdmljdG9yeUNvcmUuVmljdG9yeVRoZW1lLmdyYXlzY2FsZVxuICB9O1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSBcIlZpY3RvcnlBcmVhXCI7XG4gIHN0YXRpYyByb2xlID0gXCJhcmVhXCI7XG4gIHN0YXRpYyBjb250aW51b3VzID0gdHJ1ZTtcbiAgc3RhdGljIGRlZmF1bHRUcmFuc2l0aW9ucyA9IF92aWN0b3J5Q29yZS5EZWZhdWx0VHJhbnNpdGlvbnMuY29udGludW91c1RyYW5zaXRpb25zKCk7XG4gIHN0YXRpYyBkZWZhdWx0UG9sYXJUcmFuc2l0aW9ucyA9IF92aWN0b3J5Q29yZS5EZWZhdWx0VHJhbnNpdGlvbnMuY29udGludW91c1BvbGFyVHJhbnNpdGlvbnMoKTtcbiAgc3RhdGljIGdldERvbWFpbiA9IF92aWN0b3J5Q29yZS5Eb21haW4uZ2V0RG9tYWluV2l0aFplcm87XG4gIHN0YXRpYyBnZXREYXRhID0gX3ZpY3RvcnlDb3JlLkRhdGEuZ2V0RGF0YTtcbiAgc3RhdGljIGdldEJhc2VQcm9wcyhwcm9wcykge1xuICAgIHJldHVybiAoMCwgX2hlbHBlck1ldGhvZHMuZ2V0QmFzZVByb3BzKShwcm9wcywgZmFsbGJhY2tQcm9wcyk7XG4gIH1cbiAgc3RhdGljIGV4cGVjdGVkQ29tcG9uZW50cyA9IFtcImRhdGFDb21wb25lbnRcIiwgXCJsYWJlbENvbXBvbmVudFwiLCBcImdyb3VwQ29tcG9uZW50XCIsIFwiY29udGFpbmVyQ29tcG9uZW50XCJdO1xuXG4gIC8vIE92ZXJyaWRkZW4gaW4gbmF0aXZlIHZlcnNpb25zXG4gIHNob3VsZEFuaW1hdGUoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5wcm9wcy5hbmltYXRlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhbmltYXRpb25XaGl0ZWxpc3QsXG4gICAgICByb2xlXG4gICAgfSA9IFZpY3RvcnlBcmVhQmFzZTtcbiAgICBjb25zdCBwcm9wcyA9IF92aWN0b3J5Q29yZS5IZWxwZXJzLm1vZGlmeVByb3BzKHRoaXMucHJvcHMsIGZhbGxiYWNrUHJvcHMsIHJvbGUpO1xuICAgIGlmICh0aGlzLnNob3VsZEFuaW1hdGUoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0ZUNvbXBvbmVudChwcm9wcywgYW5pbWF0aW9uV2hpdGVsaXN0KTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnJlbmRlckNvbnRpbnVvdXNEYXRhKHByb3BzKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBwcm9wcy5zdGFuZGFsb25lID8gdGhpcy5yZW5kZXJDb250YWluZXIocHJvcHMuY29udGFpbmVyQ29tcG9uZW50LCBjaGlsZHJlbikgOiBjaGlsZHJlbjtcbiAgICByZXR1cm4gX3ZpY3RvcnlDb3JlLlVzZXJQcm9wcy53aXRoU2FmZVVzZXJQcm9wcyhjb21wb25lbnQsIHByb3BzKTtcbiAgfVxufVxuY29uc3QgVmljdG9yeUFyZWEgPSBleHBvcnRzLlZpY3RvcnlBcmVhID0gKDAsIF92aWN0b3J5Q29yZS5hZGRFdmVudHMpKFZpY3RvcnlBcmVhQmFzZSwgb3B0aW9ucyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/victory-area/lib/victory-area.js\n");

/***/ })

};
;