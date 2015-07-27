var fs = require('fs');
var path = require('path');
var dirContents = [];
var route = process.argv[2];
var dirs = [];
var processed = 0;

fs.readdir(route, function(err, data) {
	dirContents = data;
	
	dirContents.forEach(function(curElement) {
		fs.stat(path.join(route, curElement), function(err, stat) {
			processed++;

			if (err) {
				console.log(err);
				return;
			}

			if (stat.isDirectory()) {
				dirs.push(curElement);
			}

			if (processed === dirContents.length) {
				console.log('The given path contains the following subdirectories: \n' + dirs);
			}
		});
	});
});