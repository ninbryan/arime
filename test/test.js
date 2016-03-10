'use strict';

var arime = require('../build/arime');
var randomNumbers = [];
var testExpressions = [];
var w = 0;
var x = 0;
var y = 0;
var len = 0;

function r() {
	return Math.random() * 1000 - 500;
}

for (w = 0; w < 10; w++) {
	randomNumbers[w] = r();
}

len = randomNumbers.length;

for (x = 0; x < len; x++) {
	for (y = 0; y < len; y++) {
		
		testExpressions.push({
			'x':x,
			'y':y,
			'x + y':arime.add(x, y),
			'x - y':arime.subtract(x, y)
		});
	}
}

console.log(arime.toString());
console.log(testExpressions);
