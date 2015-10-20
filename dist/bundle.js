/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _sliderr = __webpack_require__(1);

	var _sliderr2 = _interopRequireDefault(_sliderr);

	var Carousel = new _sliderr2['default']();

	console.log(Carousel.sayHello());

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _default =
	/**
	* @constructor
	* 
	**/

	function _default(i, el, opts) {
	    _classCallCheck(this, _default);

	    this._index = isNumber(i) ? Math.floor(i) : 0;
	    this._el = document.getElementByid(el);
	    this.slides = this._el.children;
	    this.lastSlide = i;
	    this.slideWidth = this.slides[0].offsetWidth, this.len = this.slides.length;
	    this.container = document.getElementsByTagName("body")[0];
	    this.slideshow = null;
	    this.animations = {};
	    this.defaults = {
	        slideshow: true,
	        slidetime: 3000
	    };
	};

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ }
/******/ ]);