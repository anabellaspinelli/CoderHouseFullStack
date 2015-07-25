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

//////////////////////////////////////////////////////////////////////////////////////////

/*var contador = 0;

for (var i = 0; i < 10; i++) {
	setTimeout((function(param) {
		return function () {
			console.log(param);
		} 
	})(i), getRandomInt(1000, 4000));
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function createFunction() {
	var args = Array.prototype.slice.call(arguments);
	return function createdFunction() {
		console.log(args);
	};
}

var f = createFunction('one', 'two');*/

//////////////////////////////////////////////////////////////////////////////////////////

/*var fs = require('fs');
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
			console.log(filesContents);
			console.log(concatString);
		}
	});
}*/

/////////////////////////////////////////////////////////////////////////////////////////

var fs = require('fs');
var curFilename;
var processed = 0;
var filesContent = [];
var filenames = process.argv.slice(2);

function createReadHandler(pos) {
	return function (err, content) {
		var result;

		processed++;

		if (err) {
			console.log(err);
			return;
		}
		
		filesContent[pos] = content;

		if (processed === filenames.length) {
			result = filesContent.reduce(function(prevContent, curContent) {
				return prevContent + curContent;
			}, '');
			console.log(result);
		}
	};
}

for (var i = 0; i < filenames.length; i++) {
	curFilename = filenames[i];
	fs.readFile(curFilename, 'UTF8', createReadHandler(i));
}

///////////////////////////////////////////////////////////////////////

var filenames = process.argv.slice(2);
var fileContents = [];
var processed = 0;
var curFilename;

for (var i = 0; i < filenames.length; i++) {
	curFilename = filenames[i];
	fs.readFile(curFilename, 'UTF8', createReadFunction(i));
};

function createReadFunction(pos) {
	return function(err, data) {
		processed++;
		if (err) {
			console.log(err);
			return
		}

		fileContents[pos] = data;

		if (processed === filenames.length) {
			console.log(fileContents.join(''));
		}
	}
}




















































