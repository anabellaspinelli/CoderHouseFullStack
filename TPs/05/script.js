function obtenerResultado(operation) {
	var results = [];
	var left;

	if (!(arguments.length%2)) {
		console.error('Invalid Amount of Operands');
		return;
	}
	for (var i = 1; i < arguments.length; i++) {
		if (i%2) {
			left = arguments[i];
		}
		else {
			results.push(operate(operation, left, arguments[i]));
		}
	}
	 console.log(results);
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
			console.error('Invalid Operation');
	}
}

console.log('%cResultados de script.js', 'background: blue; color: white; font-size: x-large');
obtenerResultado('add', 2, 3, 4, 5);
obtenerResultado('substract', 2, 3, 4, 5);
obtenerResultado('multiply', 2, 3, 4, 5);
obtenerResultado('divide', 2, 3, 4, 5);
obtenerResultado('sadd', 2, 3, 4, 5);
obtenerResultado('add', 2, 3, 4);