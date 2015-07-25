function convertToNumberAndAdd() {
	var result = 0;

	for (var i = 2; i < process.argv.length; i++) {
		result += Number(process.argv[i]);
	}
	return(result);
}

function convertToNumberAndAddWithMapAndReduce() {
	return process.argv.slice(2).map(Number).reduce(function(prevElement, curElement) {
		return prevElement + curElement;
	}, 0);
}

console.log('Using a for loop ---> ' + convertToNumberAndAdd());
console.log('Using map and reduce ---> ' + convertToNumberAndAddWithMapAndReduce());