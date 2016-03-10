'use strict';

// Constants

import {zero, plus, minus, dot} from './arime/arithmetic';
import equations from './arime/equations';
import operations from './arime/operations'
import StringyNumber, {absoluteValue, indexOfDot, isNegative} from './arime/StringyNumber';

// //

// Functions

function add(a, b) {

	let negA = isNegative(a);
	let negB = isNegative(b);

	// -a + -b
	if (negA && negB) {

		return '-' + add(absoluteValue(a), absoluteValue(b));
	}
	// -a + b
	if (negA) {
		return subtract(b, absoluteValue(a));
	}
	// a + -b
	if (negB) {
		return subtract(a, absoluteValue(b));
	}
	// a + b

	// string time...
	let aDotIndex = indexOfDot(a);
	let aLength = a.length;
	
	let bDotIndex = indexOfDot(b);
	let bLength = b.length;

	return `(${a} + ${b})`;

}

function subtract(a, b) {

	let negA = isNegative(a);
	let negB = isNegative(b);
	// -a - -b
	if (negA && negB) {
		return subtract(absoluteValue(b), absoluteValue(a));
	}
	// -a - b
	if (negA) {
		return '-' + add(absoluteValue(a), b);
	}
	// a - -b
	if (negB) {
		return add(a, absoluteValue(b));
	}
	// a - b
	return `(${a} - ${b})`;

}


const arime = {
	add: function(numA, numB) {

		let a = StringyNumber(numA);
		let b = StringyNumber(numB);

		if (a && b) {
			return add(a, b);
		}

	},
	subtract: function(numA, numB) {

		let a = StringyNumber(numA);
		let b = StringyNumber(numB);

		if (a && b) {
			return subtract(a, b);
		}

	},
	toString: function() {

		return 'arime: an <b>ari</b>th<b>me</b>tic library';

	}
};

export default arime;

// //
