function obtenerResultado(operation) {
	var results = [];
	var left;

	if (!(arguments.length%2)) {
		console.error('Invalid amount of operands');
		return;
	}
	for (var i = 1; i < arguments.length; i++) {
		if (i%2) {
			left = arguments[i];
		} else {
			results.push(operation(left, arguments[i]));
		}
	};
	console.log(results);
}

function add(a, b) {
	return a + b;
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}
console.log('\n\n\n' + '%cResultados de script3.js', 'background: green; color: white; font-size: x-large');
obtenerResultado(add, 2, 3, 4, 5);
obtenerResultado(substract, 2, 3, 4, 5);
obtenerResultado(multiply, 2, 3, 4, 5);
obtenerResultado(divide, 2, 3, 4, 5);
obtenerResultado(divide, 2, 3, 4);
obtenerResultado(divisde, 2, 3, 4);
