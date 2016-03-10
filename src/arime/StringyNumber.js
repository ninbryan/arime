
const regex = /^[-+]?\d+(\.\d+)?$/;

// validates to return a string representation of a number otherwise null
const StringyNumber = function(val) {

	if (typeof val === 'number') {

		return val.toString();

	}

	if (StringyNumber.isStringyNumber(val)) {

		return val;

	}
	
	return null;

};

// validates that negative sign exists as the first character
StringyNumber.isNegative = function(stringyNum) {

	return stringyNum.charAt(0) === '-';

};

// validates opposite of StringyNumber.isNegative
StringyNumber.isPositive = function(stringyNum) {
	
	return !StringyNumber.isNegative(stringyNum);
	
};

// absolute stringy number value
StringyNumber.absoluteValue = function(stringyNum) {

	if (StringyNumber.isNegative(stringyNum)) {

		return stringyNum.slice(1);

	}

	return stringyNum;

};

// returns the index position of dot otherwise -1
StringyNumber.indexOfDot = function(stringyNum) {

	return stringyNum.indexOf('.');

};

// function validates a string that represents a number
StringyNumber.isStringyNumber = function(stringyNum) {

	return typeof stringyNum === 'string' && regex.test(stringyNum);

};

module.exports = StringyNumber;
