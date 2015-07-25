var fs = require('fs');
var dirContents = [];
var path = process.argv[2];
var dirs = [];
var processed = 0;

fs.readdir(path, function(err, data) {
	dirContents = data;
	
	dirContents.forEach(function(curElement) {
		fs.stat(path + curElement, function(err, stat) {
			processed++;

			if (err) {
				console.log(err);
				return;
			}

			if (stat.isDirectory()) {
				dirs.push(curElement);
			}

			if (processed === dirContents.length) {
				console.log(dirs);
			}
		});
	});
});