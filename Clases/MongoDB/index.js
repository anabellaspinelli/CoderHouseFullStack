var Mongo = require('mongodb').MongoClient;

Mongo.connect('mongodb://localhost:27017/test', function(err, db) {
	if (err) {
		throw new Error ('levantá la base');
	}

/*	db.collection('collectionJS').insert({
		texto: 'desde node'
	}, function(err) {
		if (err) {
			console.log(err);
			db.close();
			return;
		}

		db.collection('collectionJS').find(function(err, data) {
			console.log(data);
		});
	});*/

/*	var cursor = db.collection('collectionJS').find({texto: 'desde node'});
	cursor.on('data', function(data) {
		console.log(data);
	});

	cursor.on('error', function(err) {
		console.log(err);
	});

	cursor.on('end', function() {
		db.close();
	});*/

	db.collection('collectionJS').find({texto: 'desde node'}).toArray(function(err, res) {
		if (err) {
			console.log(error);
		}

		console.log(res);
	});
});