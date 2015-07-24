function obtenerResultado(operacion) {
	var soluciones = [];
	var left;

	if (!(arguments.length%2)) {
		throw new Error('Invalid Arguments');
	}
	for (var i = 1; i < arguments.length; i++) {
		if (i%2) {
			left = arguments[i];
		}
		else {
			soluciones.push(operar(operacion, left, arguments[i]));
		}
	}
	console.log(soluciones);
}

function operar(operacion, a, b) {
	switch(operacion) {
		case 'sumar':
			return a + b;
		case 'restar':
			return a - b;
		case 'multiplicar':
			return a * b;
		case 'dividir':
			return a / b;
		default:
			throw new Error('Invalid Operation');
	}
}

obtenerResultado('dividir', 3, 2, 4, 5, 6, 1);