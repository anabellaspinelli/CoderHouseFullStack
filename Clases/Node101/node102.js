/*var fs = require('fs');
var concatString = '';
var count = 2;

for (var i = 2; i < process.argv.length; i++) {
	fs.readFile(process.argv[i], 'utf8', function(err, data) {
		concatString += data;
		count++;
		if (count === process.argv.length) {
			console.log(concatString);
		}
	});
}*/

var fs = require('fs');
var concatString = '';
var filesContents = {};
var count = 2;

for (var i = 2; i < process.argv.length; i++) {
	fs.readFile(process.argv[i], 'utf8', function(err, data) {
		filesContents[count] = data;
		count++;
		if (count === process.argv.length) {
			for (var i = 2; i < count; i++) {
				concatString += filesContents[i];
			};
			console.log(concatString);
		}
	});
}