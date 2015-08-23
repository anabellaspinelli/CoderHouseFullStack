var Mongo = require('mongodb').MongoClient;
var credentials = require('../config/db');
var connectedDb;

function dbConnection(callback) {
    if (connectedDb) {
        callback(connectedDb);
        return;
    }

    Mongo.connect(credentials.url, function(err, db) {
        if (err) {
            console.log(err);
            return;
        }

        connectedDb = db;
        callback(db);
    });
}

module.exports = dbConnection;