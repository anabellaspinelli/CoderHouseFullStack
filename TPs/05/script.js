function obtenerResultado(operation) {
	var results = [];
	var left;

	if (!(arguments.length%2)) {
		throw new Error('Invalid Arguments');
	}
	for (var i = 1; i < arguments.length; i++) {
		if (i%2) {
			left = arguments[i];
		}
		else {
			results.push(operate(operation, left, arguments[i]));
		}
	}
	return results;
}

function operate(operation, a, b) {
	switch(operation) {
		case 'add':
			return a + b;
		case 'substract':
			return a - b;
		case 'multiply':
			return a * b;
		case 'divide':
			return a / b;
		default:
			throw new Error('Invalid Operation');
	}
}

console.log(obtenerResultado('multiply', 3, 2, 4, 5, 6, 1));