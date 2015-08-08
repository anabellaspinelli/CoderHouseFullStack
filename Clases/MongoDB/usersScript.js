var Mongo = require('mongodb').MongoClient;

Mongo.connect('mongodb://localhost:27017/test', function(err, db) {
	if (err) {
		throw new Error ('levantá la base');
	}

    db.collection('users').insert([
        {
        	name: 'user1',
        	email: 'user1@gmail.com'
        },
        {
        	name: 'user2',
        	email: 'user2@gmail.com'
        }
    ], function(err) {
        if (err) {
            console.log(err);s
            db.close();
            return;
        }
    });
});