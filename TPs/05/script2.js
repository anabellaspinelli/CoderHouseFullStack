var operations = {
	add: function(a, b) {
		return a + b;
	},
	substract: function(a, b) {
		return a - b;
	},
	multiply: function(a, b) {
		return a * b;
	},
	divide: function(a, b) {
		return a / b;
	}	
}

function obtenerResultado(operation) {
	var results = [];
	var left;

	if (!(arguments.length%2)) {
		console.error('Invalid amount of operands');
		return;
	}
	if (!(operation in operations)) {
		console.error('Operation does not exist');
		return;
	}
	for (var i = 1; i < arguments.length; i++) {
		if (i%2) {
			left = arguments[i];
		} else {
			results.push(operations[operation](left, arguments[i]));
		}
	};
	console.log(results);
}

console.log('\n\n\n' + '%cResultados de script2.js', 'background: orange; color: white; font-size: x-large');
obtenerResultado('add', 2, 3, 4, 5);
obtenerResultado('substract', 2, 3, 4, 5);
obtenerResultado('multiply', 2, 3, 4, 5);
obtenerResultado('divide', 2, 3, 4, 5);
obtenerResultado('sadd', 2, 3, 4, 5);
obtenerResultado('add', 2, 3, 4);