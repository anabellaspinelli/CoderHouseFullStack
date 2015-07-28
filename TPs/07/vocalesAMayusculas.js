var fs = require('fs');
var path = require('path');
var filename = process.argv[2];

fs.readFile(filename, 'utf8', function(err, data) {
	if (err) {
		console.log(err);
		return;
	}

	fs.writeFile(createNewFileName(filename), vowelsToUppercase(data), 'utf8', function(err, data) {
		if (err) {
			console.log(err);
			return;
		}
	});
});

function vowelsToUppercase(string) {
	var result = '';
	var charArray = string.split('');

	charArray.forEach(function(letter) {
		if (/[aeiou]/.test(letter)) {
            result = result + letter.toUpperCase();
        } else {
        	result = result + letter;
        }
	});

	return result;
}

function createNewFileName(filename) {
	var extension = path.extname(filename);
	return filename.replace(extension, 'UpperCase' + extension);
}