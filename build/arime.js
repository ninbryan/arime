module.exports =
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

	// Constants

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _arithmetic = __webpack_require__(1);

	var _equations = __webpack_require__(2);

	var _equations2 = _interopRequireDefault(_equations);

	var _operations = __webpack_require__(3);

	var _operations2 = _interopRequireDefault(_operations);

	var _StringyNumber = __webpack_require__(7);

	var _StringyNumber2 = _interopRequireDefault(_StringyNumber);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// //

	// Functions

	function _add(a, b) {

		var negA = (0, _StringyNumber.isNegative)(a);
		var negB = (0, _StringyNumber.isNegative)(b);

		// -a + -b
		if (negA && negB) {

			return '-' + _add((0, _StringyNumber.absoluteValue)(a), (0, _StringyNumber.absoluteValue)(b));
		}
		// -a + b
		if (negA) {
			return _subtract(b, (0, _StringyNumber.absoluteValue)(a));
		}
		// a + -b
		if (negB) {
			return _subtract(a, (0, _StringyNumber.absoluteValue)(b));
		}
		// a + b

		// string time...
		var aDotIndex = (0, _StringyNumber.indexOfDot)(a);
		var aLength = a.length;

		var bDotIndex = (0, _StringyNumber.indexOfDot)(b);
		var bLength = b.length;

		return '(' + a + ' + ' + b + ')';
	}

	function _subtract(a, b) {

		var negA = (0, _StringyNumber.isNegative)(a);
		var negB = (0, _StringyNumber.isNegative)(b);
		// -a - -b
		if (negA && negB) {
			return _subtract((0, _StringyNumber.absoluteValue)(b), (0, _StringyNumber.absoluteValue)(a));
		}
		// -a - b
		if (negA) {
			return '-' + _add((0, _StringyNumber.absoluteValue)(a), b);
		}
		// a - -b
		if (negB) {
			return _add(a, (0, _StringyNumber.absoluteValue)(b));
		}
		// a - b
		return '(' + a + ' - ' + b + ')';
	}

	var arime = {
		add: function add(numA, numB) {

			var a = (0, _StringyNumber2.default)(numA);
			var b = (0, _StringyNumber2.default)(numB);

			if (a && b) {
				return _add(a, b);
			}
		},
		subtract: function subtract(numA, numB) {

			var a = (0, _StringyNumber2.default)(numA);
			var b = (0, _StringyNumber2.default)(numB);

			if (a && b) {
				return _subtract(a, b);
			}
		},
		toString: function toString() {

			return 'arime: an <b>ari</b>th<b>me</b>tic library';
		}
	};

	exports.default = arime;

	// //

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var arithmetic = {
	    zero: '0',
	    plus: '+',
	    minus: '-',
	    dot: '.'
	};

	module.exports = arithmetic;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var equations = {};
	var plus = '+';
	var minus = '-';

	for (var x = 0; x <= 10; x++) {
		var _equations$x;

		equations[x] = (_equations$x = {}, _defineProperty(_equations$x, plus, {}), _defineProperty(_equations$x, minus, {}), _equations$x);
		for (var y = 0; y < 10; y++) {
			equations[x][plus][y] = x + y;
			equations[x][minus][y] = x - y;
		}
	}

	module.exports = equations;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _add_subtract = __webpack_require__(4);

	var _multiply = __webpack_require__(5);

	var _multiply2 = _interopRequireDefault(_multiply);

	var _divide = __webpack_require__(6);

	var _divide2 = _interopRequireDefault(_divide);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { add: _add_subtract.add, subtract: _add_subtract.subtract, multiply: _multiply2.default, divide: _divide2.default };

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function add(a, b) {

	    return "(" + a + " + " + b + ")";
	}

	function subtract(a, b) {

	    return "(" + a + " - " + b + ")";
	}

	exports.default = { add: add, subtract: subtract };

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function multiply(a, b) {

	    return "(" + a + " * " + b + ")";
	};

	exports.default = multiply;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function divide(a, b) {

	    return "(" + a + " / " + b + ")";
	};

	exports.default = divide;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var regex = /^[-+]?\d+(\.\d+)?$/;

	// validates to return a string representation of a number otherwise null
	var StringyNumber = function StringyNumber(val) {

		if (typeof val === 'number') {

			return val.toString();
		}

		if (StringyNumber.isStringyNumber(val)) {

			return val;
		}

		return null;
	};

	// validates that negative sign exists as the first character
	StringyNumber.isNegative = function (stringyNum) {

		return stringyNum.charAt(0) === '-';
	};

	// validates opposite of StringyNumber.isNegative
	StringyNumber.isPositive = function (stringyNum) {

		return !StringyNumber.isNegative(stringyNum);
	};

	// absolute stringy number value
	StringyNumber.absoluteValue = function (stringyNum) {

		if (StringyNumber.isNegative(stringyNum)) {

			return stringyNum.slice(1);
		}

		return stringyNum;
	};

	// returns the index position of dot otherwise -1
	StringyNumber.indexOfDot = function (stringyNum) {

		return stringyNum.indexOf('.');
	};

	// function validates a string that represents a number
	StringyNumber.isStringyNumber = function (stringyNum) {

		return typeof stringyNum === 'string' && regex.test(stringyNum);
	};

	module.exports = StringyNumber;

/***/ }
/******/ ]);