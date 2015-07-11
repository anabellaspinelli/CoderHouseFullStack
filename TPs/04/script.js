function invertirCadena(cadena) {
	var invertida = '';

	for (var i = cadena.length; i >= 0; i--) {
		invertida = invertida + cadena.charAt(i);
	};
	return invertida;
};

console.log(invertirCadena('hola'));

/*************************************************/

function invertirArr(arr) {
	var invertido = [];

	for (var i = arr.length - 1; i >= 0; i--) {
		invertido.push(arr[i]);
	};
	return invertido;
};

console.log(invertirArr([1,2,3,4]));