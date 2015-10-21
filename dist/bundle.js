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

	window.Fader = __webpack_require__(1);

	console.log(Fader);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Sliderr2 = __webpack_require__(2);

	var _Sliderr3 = _interopRequireDefault(_Sliderr2);

	var Fader = (function (_Sliderr) {
	    _inherits(Fader, _Sliderr);

	    function Fader(i, el, opts) {
	        _classCallCheck(this, Fader);

	        // config the slides using the Sliderr constructor
	        _get(Object.getPrototypeOf(Fader.prototype), 'constructor', this).call(this, i, el, opts);
	    }

	    // override the slideNext method to add the fade effect

	    _createClass(Fader, [{
	        key: 'slideNext',
	        value: function slideNext() {
	            _get(Object.getPrototypeOf(Fader.prototype), 'slideNext', this).call(this);
	            this.slides[this.lastSlide].style.opacity = 0;
	            this.slides[slider._index].style.opacity = 1;
	        }
	    }, {
	        key: 'slidePrev',
	        value: function slidePrev() {
	            _get(Object.getPrototypeOf(Fader.prototype), 'slidePrev', this).call(this);
	            this.slides[this.lastSlide].style.opacity = 0;
	            this.slides[slider._index].style.opacity = 1;
	        }
	    }]);

	    return Fader;
	})(_Sliderr3['default']);

	exports['default'] = Fader;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _default = (function () {
	    /**
	     * @constructor
	     **/

	    function _default(i, el, opts) {
	        _classCallCheck(this, _default);

	        this._index = Number.isInteger(i) ? i : 0;
	        this._el = document.getElementById(el);
	        this.slides = this._el.children;
	        this.lastSlide = i;
	        this.slideWidth = this.slides[0].offsetWidth, this.len = this.slides.length;
	        this.container = document.getElementsByTagName("body")[0]; // change this ASAP
	        this.slideshow = null;
	        this.defaults = {
	            slideshow: true,
	            slidetime: 3000
	        };

	        // let's take advantage of Object.assign to merge the two objects
	        this.opts = !!opts ? Object.assign({}, this.defaults, opts) : this.defaults;
	    }

	    /**
	     * @method: setAnimation
	     **/

	    _createClass(_default, [{
	        key: "slideNext",
	        value: function slideNext() {
	            this._increment();
	        }
	    }, {
	        key: "slidePrev",
	        value: function slidePrev() {
	            this._decrement();
	        }
	    }, {
	        key: "slidePause",
	        value: function slidePause() {
	            clearTimeout(this.slideshow);
	        }
	    }, {
	        key: "slideShow",
	        value: function slideShow() {
	            var _this = this;

	            this.slideshow = setTimeout(function (timer) {
	                _this.slideNext();
	                _this.slideshow = setTimeout(timer, 4000);
	            }, 1000);
	        }
	    }], [{
	        key: "_increment",
	        value: function _increment() {
	            this.lastSlide = this._index;
	            this._index = this._index < this.len - 1 ? this._index + 1 : 0;
	        }
	    }, {
	        key: "_decrement",
	        value: function _decrement() {
	            this.lastSlide = this._index;
	            this._index = this._index > 0 ? this._index - 1 : this.len - 1;
	        }
	    }]);

	    return _default;
	})();

	exports["default"] = _default;
	module.exports = exports["default"];

/***/ }
/******/ ]);