var Mongo = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017/instroo';

var itemModel = {
    insert: function(item, callback) {
        Mongo.connect(dbURL, function(err, db) {
            db.collection('items').insert(item, function(err) {
                db.close();
                callback(err);
            });
        });
    },
    get: function(itemId, callback) {
        console.log('item id is ', itemId);
        
        Mongo.connect(dbURL, function(err, db) {
            db.collection('items').findOne({id: itemId}, function(err, item) {
                console.log('item is ', item);
                db.close();
                callback(err, item);
            });
        });
    }
};

module.exports = itemModel;