"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/vfile-message";
exports.ids = ["vendor-chunks/vfile-message"];
exports.modules = {

/***/ "(ssr)/./node_modules/vfile-message/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vfile-message/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VFileMessage: () => (/* binding */ VFileMessage)\n/* harmony export */ });\n/* harmony import */ var unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-stringify-position */ \"(ssr)/./node_modules/unist-util-stringify-position/lib/index.js\");\n/**\n * @typedef {import('unist').Node} Node\n * @typedef {import('unist').Point} Point\n * @typedef {import('unist').Position} Position\n */\n\n/**\n * @typedef {object & {type: string, position?: Position | undefined}} NodeLike\n *\n * @typedef Options\n *   Configuration.\n * @property {Array<Node> | null | undefined} [ancestors]\n *   Stack of (inclusive) ancestor nodes surrounding the message (optional).\n * @property {Error | null | undefined} [cause]\n *   Original error cause of the message (optional).\n * @property {Point | Position | null | undefined} [place]\n *   Place of message (optional).\n * @property {string | null | undefined} [ruleId]\n *   Category of message (optional, example: `'my-rule'`).\n * @property {string | null | undefined} [source]\n *   Namespace of who sent the message (optional, example: `'my-package'`).\n */\n\n\n\n/**\n * Message.\n */\nclass VFileMessage extends Error {\n  /**\n   * Create a message for `reason`.\n   *\n   * > 🪦 **Note**: also has obsolete signatures.\n   *\n   * @overload\n   * @param {string} reason\n   * @param {Options | null | undefined} [options]\n   * @returns\n   *\n   * @overload\n   * @param {string} reason\n   * @param {Node | NodeLike | null | undefined} parent\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {string} reason\n   * @param {Point | Position | null | undefined} place\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {string} reason\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {Error | VFileMessage} cause\n   * @param {Node | NodeLike | null | undefined} parent\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {Error | VFileMessage} cause\n   * @param {Point | Position | null | undefined} place\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @overload\n   * @param {Error | VFileMessage} cause\n   * @param {string | null | undefined} [origin]\n   * @returns\n   *\n   * @param {Error | VFileMessage | string} causeOrReason\n   *   Reason for message, should use markdown.\n   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]\n   *   Configuration (optional).\n   * @param {string | null | undefined} [origin]\n   *   Place in code where the message originates (example:\n   *   `'my-package:my-rule'` or `'my-rule'`).\n   * @returns\n   *   Instance of `VFileMessage`.\n   */\n  // eslint-disable-next-line complexity\n  constructor(causeOrReason, optionsOrParentOrPlace, origin) {\n    super()\n\n    if (typeof optionsOrParentOrPlace === 'string') {\n      origin = optionsOrParentOrPlace\n      optionsOrParentOrPlace = undefined\n    }\n\n    /** @type {string} */\n    let reason = ''\n    /** @type {Options} */\n    let options = {}\n    let legacyCause = false\n\n    if (optionsOrParentOrPlace) {\n      // Point.\n      if (\n        'line' in optionsOrParentOrPlace &&\n        'column' in optionsOrParentOrPlace\n      ) {\n        options = {place: optionsOrParentOrPlace}\n      }\n      // Position.\n      else if (\n        'start' in optionsOrParentOrPlace &&\n        'end' in optionsOrParentOrPlace\n      ) {\n        options = {place: optionsOrParentOrPlace}\n      }\n      // Node.\n      else if ('type' in optionsOrParentOrPlace) {\n        options = {\n          ancestors: [optionsOrParentOrPlace],\n          place: optionsOrParentOrPlace.position\n        }\n      }\n      // Options.\n      else {\n        options = {...optionsOrParentOrPlace}\n      }\n    }\n\n    if (typeof causeOrReason === 'string') {\n      reason = causeOrReason\n    }\n    // Error.\n    else if (!options.cause && causeOrReason) {\n      legacyCause = true\n      reason = causeOrReason.message\n      options.cause = causeOrReason\n    }\n\n    if (!options.ruleId && !options.source && typeof origin === 'string') {\n      const index = origin.indexOf(':')\n\n      if (index === -1) {\n        options.ruleId = origin\n      } else {\n        options.source = origin.slice(0, index)\n        options.ruleId = origin.slice(index + 1)\n      }\n    }\n\n    if (!options.place && options.ancestors && options.ancestors) {\n      const parent = options.ancestors[options.ancestors.length - 1]\n\n      if (parent) {\n        options.place = parent.position\n      }\n    }\n\n    const start =\n      options.place && 'start' in options.place\n        ? options.place.start\n        : options.place\n\n    /* eslint-disable no-unused-expressions */\n    /**\n     * Stack of ancestor nodes surrounding the message.\n     *\n     * @type {Array<Node> | undefined}\n     */\n    this.ancestors = options.ancestors || undefined\n\n    /**\n     * Original error cause of the message.\n     *\n     * @type {Error | undefined}\n     */\n    this.cause = options.cause || undefined\n\n    /**\n     * Starting column of message.\n     *\n     * @type {number | undefined}\n     */\n    this.column = start ? start.column : undefined\n\n    /**\n     * State of problem.\n     *\n     * * `true` — error, file not usable\n     * * `false` — warning, change may be needed\n     * * `undefined` — change likely not needed\n     *\n     * @type {boolean | null | undefined}\n     */\n    this.fatal = undefined\n\n    /**\n     * Path of a file (used throughout the `VFile` ecosystem).\n     *\n     * @type {string | undefined}\n     */\n    this.file\n\n    // Field from `Error`.\n    /**\n     * Reason for message.\n     *\n     * @type {string}\n     */\n    this.message = reason\n\n    /**\n     * Starting line of error.\n     *\n     * @type {number | undefined}\n     */\n    this.line = start ? start.line : undefined\n\n    // Field from `Error`.\n    /**\n     * Serialized positional info of message.\n     *\n     * On normal errors, this would be something like `ParseError`, buit in\n     * `VFile` messages we use this space to show where an error happened.\n     */\n    this.name = (0,unist_util_stringify_position__WEBPACK_IMPORTED_MODULE_0__.stringifyPosition)(options.place) || '1:1'\n\n    /**\n     * Place of message.\n     *\n     * @type {Point | Position | undefined}\n     */\n    this.place = options.place || undefined\n\n    /**\n     * Reason for message, should use markdown.\n     *\n     * @type {string}\n     */\n    this.reason = this.message\n\n    /**\n     * Category of message (example: `'my-rule'`).\n     *\n     * @type {string | undefined}\n     */\n    this.ruleId = options.ruleId || undefined\n\n    /**\n     * Namespace of message (example: `'my-package'`).\n     *\n     * @type {string | undefined}\n     */\n    this.source = options.source || undefined\n\n    // Field from `Error`.\n    /**\n     * Stack of message.\n     *\n     * This is used by normal errors to show where something happened in\n     * programming code, irrelevant for `VFile` messages,\n     *\n     * @type {string}\n     */\n    this.stack =\n      legacyCause && options.cause && typeof options.cause.stack === 'string'\n        ? options.cause.stack\n        : ''\n\n    // The following fields are “well known”.\n    // Not standard.\n    // Feel free to add other non-standard fields to your messages.\n\n    /**\n     * Specify the source value that’s being reported, which is deemed\n     * incorrect.\n     *\n     * @type {string | undefined}\n     */\n    this.actual\n\n    /**\n     * Suggest acceptable values that can be used instead of `actual`.\n     *\n     * @type {Array<string> | undefined}\n     */\n    this.expected\n\n    /**\n     * Long form description of the message (you should use markdown).\n     *\n     * @type {string | undefined}\n     */\n    this.note\n\n    /**\n     * Link to docs for the message.\n     *\n     * > 👉 **Note**: this must be an absolute URL that can be passed as `x`\n     * > to `new URL(x)`.\n     *\n     * @type {string | undefined}\n     */\n    this.url\n    /* eslint-enable no-unused-expressions */\n  }\n}\n\nVFileMessage.prototype.file = ''\nVFileMessage.prototype.name = ''\nVFileMessage.prototype.reason = ''\nVFileMessage.prototype.message = ''\nVFileMessage.prototype.stack = ''\nVFileMessage.prototype.column = undefined\nVFileMessage.prototype.line = undefined\nVFileMessage.prototype.ancestors = undefined\nVFileMessage.prototype.cause = undefined\nVFileMessage.prototype.fatal = undefined\nVFileMessage.prototype.place = undefined\nVFileMessage.prototype.ruleId = undefined\nVFileMessage.prototype.source = undefined\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmZpbGUtbWVzc2FnZS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEsMEJBQTBCO0FBQ3ZDOztBQUVBO0FBQ0EsYUFBYSxVQUFVLGdEQUFnRDtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdDQUFnQztBQUM5QztBQUNBLGNBQWMsMEJBQTBCO0FBQ3hDO0FBQ0EsY0FBYyxxQ0FBcUM7QUFDbkQ7QUFDQSxjQUFjLDJCQUEyQjtBQUN6QztBQUNBLGNBQWMsMkJBQTJCO0FBQ3pDO0FBQ0E7O0FBRStEOztBQUUvRDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLDRCQUE0QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxvQ0FBb0M7QUFDakQsYUFBYSwyQkFBMkI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEscUNBQXFDO0FBQ2xELGFBQWEsMkJBQTJCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLG9DQUFvQztBQUNqRCxhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHFDQUFxQztBQUNsRCxhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0EsYUFBYSwrQkFBK0I7QUFDNUM7QUFDQSxhQUFhLDBFQUEwRTtBQUN2RjtBQUNBLGFBQWEsMkJBQTJCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnRkFBaUI7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wLy4vbm9kZV9tb2R1bGVzL3ZmaWxlLW1lc3NhZ2UvbGliL2luZGV4LmpzP2UwN2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLk5vZGV9IE5vZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUG9pbnR9IFBvaW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvc2l0aW9ufSBQb3NpdGlvblxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdCAmIHt0eXBlOiBzdHJpbmcsIHBvc2l0aW9uPzogUG9zaXRpb24gfCB1bmRlZmluZWR9fSBOb2RlTGlrZVxuICpcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7QXJyYXk8Tm9kZT4gfCBudWxsIHwgdW5kZWZpbmVkfSBbYW5jZXN0b3JzXVxuICogICBTdGFjayBvZiAoaW5jbHVzaXZlKSBhbmNlc3RvciBub2RlcyBzdXJyb3VuZGluZyB0aGUgbWVzc2FnZSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtFcnJvciB8IG51bGwgfCB1bmRlZmluZWR9IFtjYXVzZV1cbiAqICAgT3JpZ2luYWwgZXJyb3IgY2F1c2Ugb2YgdGhlIG1lc3NhZ2UgKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UG9pbnQgfCBQb3NpdGlvbiB8IG51bGwgfCB1bmRlZmluZWR9IFtwbGFjZV1cbiAqICAgUGxhY2Ugb2YgbWVzc2FnZSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbcnVsZUlkXVxuICogICBDYXRlZ29yeSBvZiBtZXNzYWdlIChvcHRpb25hbCwgZXhhbXBsZTogYCdteS1ydWxlJ2ApLlxuICogQHByb3BlcnR5IHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbc291cmNlXVxuICogICBOYW1lc3BhY2Ugb2Ygd2hvIHNlbnQgdGhlIG1lc3NhZ2UgKG9wdGlvbmFsLCBleGFtcGxlOiBgJ215LXBhY2thZ2UnYCkuXG4gKi9cblxuaW1wb3J0IHtzdHJpbmdpZnlQb3NpdGlvbn0gZnJvbSAndW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb24nXG5cbi8qKlxuICogTWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFZGaWxlTWVzc2FnZSBleHRlbmRzIEVycm9yIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG1lc3NhZ2UgZm9yIGByZWFzb25gLlxuICAgKlxuICAgKiA+IPCfqqYgKipOb3RlKio6IGFsc28gaGFzIG9ic29sZXRlIHNpZ25hdHVyZXMuXG4gICAqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uXG4gICAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICAgKiBAcmV0dXJuc1xuICAgKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvblxuICAgKiBAcGFyYW0ge05vZGUgfCBOb2RlTGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IHBhcmVudFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcmlnaW5dXG4gICAqIEByZXR1cm5zXG4gICAqXG4gICAqIEBvdmVybG9hZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uXG4gICAqIEBwYXJhbSB7UG9pbnQgfCBQb3NpdGlvbiB8IG51bGwgfCB1bmRlZmluZWR9IHBsYWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29yaWdpbl1cbiAgICogQHJldHVybnNcbiAgICpcbiAgICogQG92ZXJsb2FkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb25cbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3JpZ2luXVxuICAgKiBAcmV0dXJuc1xuICAgKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtFcnJvciB8IFZGaWxlTWVzc2FnZX0gY2F1c2VcbiAgICogQHBhcmFtIHtOb2RlIHwgTm9kZUxpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBwYXJlbnRcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3JpZ2luXVxuICAgKiBAcmV0dXJuc1xuICAgKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtFcnJvciB8IFZGaWxlTWVzc2FnZX0gY2F1c2VcbiAgICogQHBhcmFtIHtQb2ludCB8IFBvc2l0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZH0gcGxhY2VcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3JpZ2luXVxuICAgKiBAcmV0dXJuc1xuICAgKlxuICAgKiBAb3ZlcmxvYWRcbiAgICogQHBhcmFtIHtFcnJvciB8IFZGaWxlTWVzc2FnZX0gY2F1c2VcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3JpZ2luXVxuICAgKiBAcmV0dXJuc1xuICAgKlxuICAgKiBAcGFyYW0ge0Vycm9yIHwgVkZpbGVNZXNzYWdlIHwgc3RyaW5nfSBjYXVzZU9yUmVhc29uXG4gICAqICAgUmVhc29uIGZvciBtZXNzYWdlLCBzaG91bGQgdXNlIG1hcmtkb3duLlxuICAgKiBAcGFyYW0ge05vZGUgfCBOb2RlTGlrZSB8IE9wdGlvbnMgfCBQb2ludCB8IFBvc2l0aW9uIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNPclBhcmVudE9yUGxhY2VdXG4gICAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcmlnaW5dXG4gICAqICAgUGxhY2UgaW4gY29kZSB3aGVyZSB0aGUgbWVzc2FnZSBvcmlnaW5hdGVzIChleGFtcGxlOlxuICAgKiAgIGAnbXktcGFja2FnZTpteS1ydWxlJ2Agb3IgYCdteS1ydWxlJ2ApLlxuICAgKiBAcmV0dXJuc1xuICAgKiAgIEluc3RhbmNlIG9mIGBWRmlsZU1lc3NhZ2VgLlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgY29uc3RydWN0b3IoY2F1c2VPclJlYXNvbiwgb3B0aW9uc09yUGFyZW50T3JQbGFjZSwgb3JpZ2luKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zT3JQYXJlbnRPclBsYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgb3JpZ2luID0gb3B0aW9uc09yUGFyZW50T3JQbGFjZVxuICAgICAgb3B0aW9uc09yUGFyZW50T3JQbGFjZSA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCByZWFzb24gPSAnJ1xuICAgIC8qKiBAdHlwZSB7T3B0aW9uc30gKi9cbiAgICBsZXQgb3B0aW9ucyA9IHt9XG4gICAgbGV0IGxlZ2FjeUNhdXNlID0gZmFsc2VcblxuICAgIGlmIChvcHRpb25zT3JQYXJlbnRPclBsYWNlKSB7XG4gICAgICAvLyBQb2ludC5cbiAgICAgIGlmIChcbiAgICAgICAgJ2xpbmUnIGluIG9wdGlvbnNPclBhcmVudE9yUGxhY2UgJiZcbiAgICAgICAgJ2NvbHVtbicgaW4gb3B0aW9uc09yUGFyZW50T3JQbGFjZVxuICAgICAgKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7cGxhY2U6IG9wdGlvbnNPclBhcmVudE9yUGxhY2V9XG4gICAgICB9XG4gICAgICAvLyBQb3NpdGlvbi5cbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICAnc3RhcnQnIGluIG9wdGlvbnNPclBhcmVudE9yUGxhY2UgJiZcbiAgICAgICAgJ2VuZCcgaW4gb3B0aW9uc09yUGFyZW50T3JQbGFjZVxuICAgICAgKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7cGxhY2U6IG9wdGlvbnNPclBhcmVudE9yUGxhY2V9XG4gICAgICB9XG4gICAgICAvLyBOb2RlLlxuICAgICAgZWxzZSBpZiAoJ3R5cGUnIGluIG9wdGlvbnNPclBhcmVudE9yUGxhY2UpIHtcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBhbmNlc3RvcnM6IFtvcHRpb25zT3JQYXJlbnRPclBsYWNlXSxcbiAgICAgICAgICBwbGFjZTogb3B0aW9uc09yUGFyZW50T3JQbGFjZS5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBPcHRpb25zLlxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB7Li4ub3B0aW9uc09yUGFyZW50T3JQbGFjZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNhdXNlT3JSZWFzb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZWFzb24gPSBjYXVzZU9yUmVhc29uXG4gICAgfVxuICAgIC8vIEVycm9yLlxuICAgIGVsc2UgaWYgKCFvcHRpb25zLmNhdXNlICYmIGNhdXNlT3JSZWFzb24pIHtcbiAgICAgIGxlZ2FjeUNhdXNlID0gdHJ1ZVxuICAgICAgcmVhc29uID0gY2F1c2VPclJlYXNvbi5tZXNzYWdlXG4gICAgICBvcHRpb25zLmNhdXNlID0gY2F1c2VPclJlYXNvblxuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5ydWxlSWQgJiYgIW9wdGlvbnMuc291cmNlICYmIHR5cGVvZiBvcmlnaW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG9yaWdpbi5pbmRleE9mKCc6JylcblxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBvcHRpb25zLnJ1bGVJZCA9IG9yaWdpblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5zb3VyY2UgPSBvcmlnaW4uc2xpY2UoMCwgaW5kZXgpXG4gICAgICAgIG9wdGlvbnMucnVsZUlkID0gb3JpZ2luLnNsaWNlKGluZGV4ICsgMSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMucGxhY2UgJiYgb3B0aW9ucy5hbmNlc3RvcnMgJiYgb3B0aW9ucy5hbmNlc3RvcnMpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMuYW5jZXN0b3JzW29wdGlvbnMuYW5jZXN0b3JzLmxlbmd0aCAtIDFdXG5cbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgb3B0aW9ucy5wbGFjZSA9IHBhcmVudC5wb3NpdGlvblxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ID1cbiAgICAgIG9wdGlvbnMucGxhY2UgJiYgJ3N0YXJ0JyBpbiBvcHRpb25zLnBsYWNlXG4gICAgICAgID8gb3B0aW9ucy5wbGFjZS5zdGFydFxuICAgICAgICA6IG9wdGlvbnMucGxhY2VcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgIC8qKlxuICAgICAqIFN0YWNrIG9mIGFuY2VzdG9yIG5vZGVzIHN1cnJvdW5kaW5nIHRoZSBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQHR5cGUge0FycmF5PE5vZGU+IHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuYW5jZXN0b3JzID0gb3B0aW9ucy5hbmNlc3RvcnMgfHwgdW5kZWZpbmVkXG5cbiAgICAvKipcbiAgICAgKiBPcmlnaW5hbCBlcnJvciBjYXVzZSBvZiB0aGUgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtFcnJvciB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLmNhdXNlID0gb3B0aW9ucy5jYXVzZSB8fCB1bmRlZmluZWRcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0aW5nIGNvbHVtbiBvZiBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLmNvbHVtbiA9IHN0YXJ0ID8gc3RhcnQuY29sdW1uIDogdW5kZWZpbmVkXG5cbiAgICAvKipcbiAgICAgKiBTdGF0ZSBvZiBwcm9ibGVtLlxuICAgICAqXG4gICAgICogKiBgdHJ1ZWAg4oCUIGVycm9yLCBmaWxlIG5vdCB1c2FibGVcbiAgICAgKiAqIGBmYWxzZWAg4oCUIHdhcm5pbmcsIGNoYW5nZSBtYXkgYmUgbmVlZGVkXG4gICAgICogKiBgdW5kZWZpbmVkYCDigJQgY2hhbmdlIGxpa2VseSBub3QgbmVlZGVkXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5mYXRhbCA9IHVuZGVmaW5lZFxuXG4gICAgLyoqXG4gICAgICogUGF0aCBvZiBhIGZpbGUgKHVzZWQgdGhyb3VnaG91dCB0aGUgYFZGaWxlYCBlY29zeXN0ZW0pLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLmZpbGVcblxuICAgIC8vIEZpZWxkIGZyb20gYEVycm9yYC5cbiAgICAvKipcbiAgICAgKiBSZWFzb24gZm9yIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubWVzc2FnZSA9IHJlYXNvblxuXG4gICAgLyoqXG4gICAgICogU3RhcnRpbmcgbGluZSBvZiBlcnJvci5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5saW5lID0gc3RhcnQgPyBzdGFydC5saW5lIDogdW5kZWZpbmVkXG5cbiAgICAvLyBGaWVsZCBmcm9tIGBFcnJvcmAuXG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplZCBwb3NpdGlvbmFsIGluZm8gb2YgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIE9uIG5vcm1hbCBlcnJvcnMsIHRoaXMgd291bGQgYmUgc29tZXRoaW5nIGxpa2UgYFBhcnNlRXJyb3JgLCBidWl0IGluXG4gICAgICogYFZGaWxlYCBtZXNzYWdlcyB3ZSB1c2UgdGhpcyBzcGFjZSB0byBzaG93IHdoZXJlIGFuIGVycm9yIGhhcHBlbmVkLlxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IHN0cmluZ2lmeVBvc2l0aW9uKG9wdGlvbnMucGxhY2UpIHx8ICcxOjEnXG5cbiAgICAvKipcbiAgICAgKiBQbGFjZSBvZiBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQHR5cGUge1BvaW50IHwgUG9zaXRpb24gfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5wbGFjZSA9IG9wdGlvbnMucGxhY2UgfHwgdW5kZWZpbmVkXG5cbiAgICAvKipcbiAgICAgKiBSZWFzb24gZm9yIG1lc3NhZ2UsIHNob3VsZCB1c2UgbWFya2Rvd24uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucmVhc29uID0gdGhpcy5tZXNzYWdlXG5cbiAgICAvKipcbiAgICAgKiBDYXRlZ29yeSBvZiBtZXNzYWdlIChleGFtcGxlOiBgJ215LXJ1bGUnYCkuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMucnVsZUlkID0gb3B0aW9ucy5ydWxlSWQgfHwgdW5kZWZpbmVkXG5cbiAgICAvKipcbiAgICAgKiBOYW1lc3BhY2Ugb2YgbWVzc2FnZSAoZXhhbXBsZTogYCdteS1wYWNrYWdlJ2ApLlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLnNvdXJjZSA9IG9wdGlvbnMuc291cmNlIHx8IHVuZGVmaW5lZFxuXG4gICAgLy8gRmllbGQgZnJvbSBgRXJyb3JgLlxuICAgIC8qKlxuICAgICAqIFN0YWNrIG9mIG1lc3NhZ2UuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHVzZWQgYnkgbm9ybWFsIGVycm9ycyB0byBzaG93IHdoZXJlIHNvbWV0aGluZyBoYXBwZW5lZCBpblxuICAgICAqIHByb2dyYW1taW5nIGNvZGUsIGlycmVsZXZhbnQgZm9yIGBWRmlsZWAgbWVzc2FnZXMsXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RhY2sgPVxuICAgICAgbGVnYWN5Q2F1c2UgJiYgb3B0aW9ucy5jYXVzZSAmJiB0eXBlb2Ygb3B0aW9ucy5jYXVzZS5zdGFjayA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBvcHRpb25zLmNhdXNlLnN0YWNrXG4gICAgICAgIDogJydcblxuICAgIC8vIFRoZSBmb2xsb3dpbmcgZmllbGRzIGFyZSDigJx3ZWxsIGtub3du4oCdLlxuICAgIC8vIE5vdCBzdGFuZGFyZC5cbiAgICAvLyBGZWVsIGZyZWUgdG8gYWRkIG90aGVyIG5vbi1zdGFuZGFyZCBmaWVsZHMgdG8geW91ciBtZXNzYWdlcy5cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgdGhlIHNvdXJjZSB2YWx1ZSB0aGF04oCZcyBiZWluZyByZXBvcnRlZCwgd2hpY2ggaXMgZGVlbWVkXG4gICAgICogaW5jb3JyZWN0LlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLmFjdHVhbFxuXG4gICAgLyoqXG4gICAgICogU3VnZ2VzdCBhY2NlcHRhYmxlIHZhbHVlcyB0aGF0IGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgYGFjdHVhbGAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7QXJyYXk8c3RyaW5nPiB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLmV4cGVjdGVkXG5cbiAgICAvKipcbiAgICAgKiBMb25nIGZvcm0gZGVzY3JpcHRpb24gb2YgdGhlIG1lc3NhZ2UgKHlvdSBzaG91bGQgdXNlIG1hcmtkb3duKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5ub3RlXG5cbiAgICAvKipcbiAgICAgKiBMaW5rIHRvIGRvY3MgZm9yIHRoZSBtZXNzYWdlLlxuICAgICAqXG4gICAgICogPiDwn5GJICoqTm90ZSoqOiB0aGlzIG11c3QgYmUgYW4gYWJzb2x1dGUgVVJMIHRoYXQgY2FuIGJlIHBhc3NlZCBhcyBgeGBcbiAgICAgKiA+IHRvIGBuZXcgVVJMKHgpYC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy51cmxcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICB9XG59XG5cblZGaWxlTWVzc2FnZS5wcm90b3R5cGUuZmlsZSA9ICcnXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLm5hbWUgPSAnJ1xuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5yZWFzb24gPSAnJ1xuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5tZXNzYWdlID0gJydcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUuc3RhY2sgPSAnJ1xuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5jb2x1bW4gPSB1bmRlZmluZWRcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUubGluZSA9IHVuZGVmaW5lZFxuVkZpbGVNZXNzYWdlLnByb3RvdHlwZS5hbmNlc3RvcnMgPSB1bmRlZmluZWRcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUuY2F1c2UgPSB1bmRlZmluZWRcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUuZmF0YWwgPSB1bmRlZmluZWRcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUucGxhY2UgPSB1bmRlZmluZWRcblZGaWxlTWVzc2FnZS5wcm90b3R5cGUucnVsZUlkID0gdW5kZWZpbmVkXG5WRmlsZU1lc3NhZ2UucHJvdG90eXBlLnNvdXJjZSA9IHVuZGVmaW5lZFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/vfile-message/lib/index.js\n");

/***/ })

};
;