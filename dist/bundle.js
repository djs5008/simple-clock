/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock-hand.js":
/*!***************************!*\
  !*** ./src/clock-hand.js ***!
  \***************************/
/*! exports provided: ClockHand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ClockHand\", function() { return ClockHand; });\nclass ClockHand {\r\n\r\n  /**\r\n   * Construct the base class for ClockHand\r\n   *  Expected to be used by child types. Overriding setAngle() and *OPTIONALLY* draw().\r\n   *  Be sure to accept the same required parameters when overriding\r\n   * \r\n   * @param {number} length The length of the clock hand (used in default draw function)\r\n   * @param {number} thickness The thickness of the clock hand (used in default draw function)\r\n   */\r\n  constructor(length, thickness) {\r\n    this.length = length;\r\n    this.thickness = thickness;\r\n    this.angle = 0;\r\n  }\r\n\r\n  /**\r\n   * Set the angle of the clock hand\r\n   *  Defaulted to zero and expected to be overriden by child type\r\n   * \r\n   * @param {number} time The current time since UNIX Epoch\r\n   */\r\n  setAngle(time) {\r\n    this.angle = 0;\r\n  }\r\n\r\n  /**\r\n   * Draw the current clock hand\r\n   *  Override this if clock hands need to be drawn differently\r\n   * \r\n   * @param {Object} center The center point of the clock\r\n   * @param {number} center.x The x-position of the center of the clock\r\n   * @param {number} center.y The y-position of the center of the clock\r\n   * @param {createjs.Graphics} graphics The instance of graphics being drawn to\r\n   */\r\n  draw(center, graphics) {\r\n    let x1 = center.x;\r\n    let y1 = center.y;\r\n    let x2 = this.length * Math.cos(this.angle);\r\n    let y2 = this.length * Math.sin(this.angle);\r\n\r\n    graphics.setStrokeStyle(this.thickness);\r\n    graphics.beginStroke(createjs.Graphics.getRGB(0,0,0));\r\n    graphics.moveTo(x1, y1);\r\n    graphics.lineTo(x1 + x2, y1 - y2);\r\n    graphics.endStroke();\r\n    graphics.setStrokeStyle();\r\n  }\r\n\r\n};\n\n//# sourceURL=webpack:///./src/clock-hand.js?");

/***/ }),

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var _hand_types_standard_hour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hand-types/standard/hour */ \"./src/hand-types/standard/hour.js\");\n/* harmony import */ var _hand_types_standard_minute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hand-types/standard/minute */ \"./src/hand-types/standard/minute.js\");\n/* harmony import */ var _hand_types_standard_second__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hand-types/standard/second */ \"./src/hand-types/standard/second.js\");\n/* harmony import */ var _hand_types_standard_ms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hand-types/standard/ms */ \"./src/hand-types/standard/ms.js\");\n/* harmony import */ var _clock_hand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clock-hand */ \"./src/clock-hand.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Clock {\r\n\r\n  /**\r\n   * Construct a base-clock type object\r\n   *  This will add hands from the \"standard\" hand package\r\n   *  Feel free to experiment with different hand types\r\n   * \r\n   * @param {number} radius The radius of the clock\r\n   */\r\n  constructor(radius) {\r\n    this.radius = radius;\r\n    this.hands = [];\r\n    this.addHand(new _hand_types_standard_hour__WEBPACK_IMPORTED_MODULE_0__[\"HourHand\"](radius * (2/3), radius / 20));\r\n    this.addHand(new _hand_types_standard_minute__WEBPACK_IMPORTED_MODULE_1__[\"MinuteHand\"](radius * (4/5), radius / 40));\r\n    this.addHand(new _hand_types_standard_second__WEBPACK_IMPORTED_MODULE_2__[\"SecondHand\"](radius * (4 / 5), radius / 80));\r\n    this.addHand(new _hand_types_standard_ms__WEBPACK_IMPORTED_MODULE_3__[\"MSHand\"](radius * (1/5), radius / 160));\r\n  }\r\n\r\n  /**\r\n   * Add a hand to this clock\r\n   * \r\n   * @param {ClockHand} hand The hand being added to the clock\r\n   * @throws If the hand passed is not an instance of ClockHand\r\n   */\r\n  addHand(hand) {\r\n    if (hand instanceof _clock_hand__WEBPACK_IMPORTED_MODULE_4__[\"ClockHand\"]) {\r\n      this.hands.push(hand);\r\n    } else {\r\n      throw 'ERROR: Invalid Hand Type. You can only add clock-hands to the clock.';\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Set the current time of the clock\r\n   *  This will set the angle of all children hands\r\n   * \r\n   * @param {number} time The number of milliseconds since UNIX Epoch\r\n   */\r\n  setTime(time) {\r\n    this.hands.forEach(hand => hand.setAngle(time));\r\n  }\r\n\r\n  /**\r\n   * Draw the current clock\r\n   * \r\n   * @param {Object} center The center point of the clock\r\n   * @param {number} center.x The x-position of the center of the clock\r\n   * @param {number} center.y The y-position of the center of the clock\r\n   * @param {createjs.Graphics} graphics The instance of graphics being drawn to\r\n   */\r\n  draw(center, graphics) {\r\n    // Draw outline of clock\r\n    graphics.setStrokeStyle(2);\r\n    graphics.beginStroke(createjs.Graphics.getRGB(0,0,0));\r\n    graphics.drawCircle(center.x, center.y, this.radius);\r\n    graphics.endStroke();\r\n    graphics.setStrokeStyle();\r\n\r\n    // Draw sections\r\n    this.drawIntervals(center, graphics);\r\n    \r\n    // Draw hands\r\n    this.hands.forEach(hand => hand.draw(center, graphics));\r\n\r\n    // Draw center circle\r\n    graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0));\r\n    graphics.drawCircle(center.x, center.y, this.radius / 20);\r\n    graphics.endFill();\r\n  }\r\n\r\n  drawIntervals(center, graphics) {\r\n    let smallLen = 0.95;\r\n    let bigLen = 0.9;\r\n    let step = (360 / 60);\r\n    graphics.beginStroke(createjs.Graphics.getRGB(0, 0, 0));\r\n    for (let x = 0; x < 360; x += step) {\r\n      \r\n      let x1 = center.x + this.radius * Math.cos(x * (Math.PI / 180));\r\n      let y1 = center.y + this.radius * Math.sin(x * (Math.PI / 180));\r\n      let x2 = 0;\r\n      let y2 = 0;\r\n      let size = 0;\r\n\r\n      // set stroke size based on if its an hour or minute\r\n      if (x % (360/12) === 0) {\r\n        graphics.setStrokeStyle(this.radius / 40);\r\n        size = bigLen;\r\n      } else {\r\n        graphics.setStrokeStyle(1);\r\n        size = smallLen;\r\n      }\r\n\r\n      x2 = center.x + (this.radius * size) * Math.cos(x * (Math.PI / 180));\r\n      y2 = center.y + (this.radius * size) * Math.sin(x * (Math.PI / 180));\r\n\r\n      // stroke to point\r\n      graphics.moveTo(x1, y1);\r\n      graphics.lineTo(x2, y2);\r\n    }\r\n    graphics.endStroke();\r\n    graphics.setStrokeStyle();\r\n  }\r\n\r\n};\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/hand-types/standard/hour.js":
/*!*****************************************!*\
  !*** ./src/hand-types/standard/hour.js ***!
  \*****************************************/
/*! exports provided: HourHand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HourHand\", function() { return HourHand; });\n/* harmony import */ var _clock_hand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../clock-hand */ \"./src/clock-hand.js\");\n\r\n\r\nclass HourHand extends _clock_hand__WEBPACK_IMPORTED_MODULE_0__[\"ClockHand\"] {\r\n\r\n  /**\r\n   * Construct a new HourHand type\r\n   *  Used in the standard package of clock-hands\r\n   *  Represents the current hour of the current time\r\n   * \r\n   * @param {number} length \r\n   * @param {number} thickness \r\n   */\r\n  constructor(length, thickness) {\r\n    const DEFAULT_LENGTH = 1;\r\n    const DEFAULT_THICKNESS = 1;\r\n    super(\r\n      length === undefined ? DEFAULT_LENGTH : length,\r\n      thickness === undefined ? DEFAULT_THICKNESS : thickness\r\n    );\r\n  }\r\n\r\n  /**\r\n   * Override setAngle from base ClockHand\r\n   *  Set the angle based on the current hour\r\n   */\r\n  setAngle(time) {\r\n    const HR  = (time / (1000 * 60 * 60)) % 12;\r\n    const PI = Math.PI;\r\n    this.angle = (PI / 2) - (((2 * PI) / 12) * HR);\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/hand-types/standard/hour.js?");

/***/ }),

/***/ "./src/hand-types/standard/minute.js":
/*!*******************************************!*\
  !*** ./src/hand-types/standard/minute.js ***!
  \*******************************************/
/*! exports provided: MinuteHand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MinuteHand\", function() { return MinuteHand; });\n/* harmony import */ var _clock_hand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../clock-hand */ \"./src/clock-hand.js\");\n\r\n\r\nclass MinuteHand extends _clock_hand__WEBPACK_IMPORTED_MODULE_0__[\"ClockHand\"] {\r\n\r\n  /**\r\n   * Construct a new MinuteHand type\r\n   *  Used in the standard package of clock-hands\r\n   *  Represents the current minute of the current time\r\n   * \r\n   * @param {number} length \r\n   * @param {number} thickness \r\n   */\r\n  constructor(length, thickness) {\r\n    const DEFAULT_LENGTH = 1;\r\n    const DEFAULT_THICKNESS = 1;\r\n    super(\r\n      length === undefined ? DEFAULT_LENGTH : length,\r\n      thickness === undefined ? DEFAULT_THICKNESS : thickness\r\n    );\r\n  }\r\n\r\n  /**\r\n   * Override setAngle from base ClockHand\r\n   *  Set the angle based on the current minute\r\n   */\r\n  setAngle(time) {\r\n    const MIN = (time / (1000 * 60)) % 60;\r\n    const PI = Math.PI;\r\n    this.angle = (PI / 2) - (((2 * PI) / 60) * MIN);\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/hand-types/standard/minute.js?");

/***/ }),

/***/ "./src/hand-types/standard/ms.js":
/*!***************************************!*\
  !*** ./src/hand-types/standard/ms.js ***!
  \***************************************/
/*! exports provided: MSHand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MSHand\", function() { return MSHand; });\n/* harmony import */ var _clock_hand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../clock-hand */ \"./src/clock-hand.js\");\n\r\n\r\nclass MSHand extends _clock_hand__WEBPACK_IMPORTED_MODULE_0__[\"ClockHand\"] {\r\n\r\n  /**\r\n   * Construct a new MSHand type\r\n   *  Used in the standard package of clock-hands\r\n   * \r\n   * @param {number} length \r\n   * @param {number} thickness \r\n   */\r\n  constructor(length, thickness) {\r\n    const DEFAULT_LENGTH = 1;\r\n    const DEFAULT_THICKNESS = 1;\r\n    super(\r\n      length === undefined ? DEFAULT_LENGTH : length,\r\n      thickness === undefined ? DEFAULT_THICKNESS : thickness\r\n    );\r\n  }\r\n\r\n  /**\r\n   * Override setAngle from base ClockHand\r\n   *  Set the angle based on the current millisecond\r\n   */\r\n  setAngle(time) {\r\n    const MS  =  time % 1000;\r\n    const PI = Math.PI;\r\n    this.angle = (PI / 2) - (((2 * PI) / 1000) * MS);\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/hand-types/standard/ms.js?");

/***/ }),

/***/ "./src/hand-types/standard/second.js":
/*!*******************************************!*\
  !*** ./src/hand-types/standard/second.js ***!
  \*******************************************/
/*! exports provided: SecondHand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SecondHand\", function() { return SecondHand; });\n/* harmony import */ var _clock_hand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../clock-hand */ \"./src/clock-hand.js\");\n\r\n\r\nclass SecondHand extends _clock_hand__WEBPACK_IMPORTED_MODULE_0__[\"ClockHand\"] {\r\n\r\n  /**\r\n   * Construct a new SecondHand type\r\n   *  Used in the standard package of clock-hands\r\n   *  Represents the current second of the current time\r\n   * \r\n   * @param {number} length \r\n   * @param {number} thickness \r\n   */\r\n  constructor(length, thickness) {\r\n    const DEFAULT_LENGTH = 1;\r\n    const DEFAULT_THICKNESS = 1;\r\n    super(\r\n      length === undefined ? DEFAULT_LENGTH : length,\r\n      thickness === undefined ? DEFAULT_THICKNESS : thickness\r\n    );\r\n  }\r\n\r\n  /**\r\n   * Override setAngle from base ClockHand\r\n   *  Set the angle based on the current second\r\n   */\r\n  setAngle(time) {\r\n    const SEC = (time / (1000)) % 60;\r\n    const PI = Math.PI;\r\n    this.angle = (PI / 2) - (((2 * PI) / 60) * SEC);\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/hand-types/standard/second.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n\r\n\r\n// Set up stage\r\nlet stage = new createjs.StageGL('clock', { antialias: true });\r\nlet buffer = new createjs.Shape();\r\nlet clock = new _clock__WEBPACK_IMPORTED_MODULE_0__[\"Clock\"](stage.canvas.width / 2);\r\nlet center = {\r\n  x: stage.canvas.width / 2,\r\n  y: stage.canvas.height / 2,\r\n};\r\n\r\n// Cache stage components\r\nstage.addChild(buffer);\r\nbuffer.cache(0, 0, stage.canvas.width, stage.canvas.height);\r\nstage.setClearColor('#FFF');\r\n\r\n// Handle Drawing\r\nlet draw = () => {\r\n  // clear buffer\r\n  buffer.graphics.clear();\r\n\r\n  // draw clock\r\n  clock.draw(center, buffer.graphics);\r\n\r\n  // update buffer cache & stage\r\n  buffer.updateCache();\r\n  stage.update();\r\n};\r\n\r\n// Handle time changes\r\nsetInterval(() => {\r\n  let date = new Date();\r\n  let time = date.getTime();\r\n  date.setTime(time - (date.getTimezoneOffset() * 60 * 1000));\r\n  clock.setTime(date.getTime());\r\n}, 0);\r\n\r\n// Handle stage events\r\ncreatejs.Ticker.on('tick', draw);\r\ncreatejs.Ticker.framerate = 60;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });