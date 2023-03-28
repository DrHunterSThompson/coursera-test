function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};

	return myFunc;
}

var double = makeMultiplier(2);

console.log(double(50));

function doOperation (x, operation) {
	return operation(x);
}

var result = doOperation(50, double);

console.log(result);