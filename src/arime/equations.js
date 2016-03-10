'use strict';

const equations = {};
const plus = '+';
const minus = '-';

for (let x = 0; x <= 10; x++) {
	
	equations[x] = {
		[plus]:{},
		[minus]:{}
	};
	for (let y = 0; y < 10; y++) {
		equations[x][plus][y] = x + y;
		equations[x][minus][y] = x - y;
	}
	
}

module.exports = equations;
