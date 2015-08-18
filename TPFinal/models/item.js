var Mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
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
        console.log(itemId);

        Mongo.connect(dbURL, function(err, db) {
            db.collection('items').findOne({
                _id: ObjectID(itemId)
            }, function(err, item) {
                db.close();
                callback(err, item);
            });
        });
    },
    search: function(keyword, callback) {
        var items = [];

        Mongo.connect(dbURL, function(err, db) {
            var cursor = db.collection('items').find({
                description: {
                    $regex: keyword || '',
                    $options: "i"
                },
                title: {
                    $regex: keyword || '',
                    $options: "i"
                }
            });
            cursor.on('data', function(doc) {
                items.push(doc);
            });

            cursor.on('error', function(err) {
                console.log(err);
            });

            cursor.on('end', function() {
                callback(err, items);
                db.close();
            });
        });
    },
    getAll: function(callback) {
        var items = [];

        Mongo.connect(dbURL, function(err, db) {
            var cursor = db.collection('items').find({});

            cursor.on('data', function(doc) {
                items.push(doc);
            });

            cursor.on('error', function(err) {
                console.log(err);
            });

            cursor.on('end', function() {
                callback(err, items);
                db.close();
            });
        });
    },

    validations: {
        schema: {
            category: 'required',
            title: 'required|min:10|max:100',
            description: 'required|min:30|max:300',
            price: 'required|number|max:7',
            currency: 'required',
            seller: {
                name: 'required|min:3|max:30',
                email: 'required|email',
                province: 'required',
                city: 'required'
            }
        },
        messages: {
            required: 'Por favor ingresá {{ field }}',
            email: 'Por favor ingresá un email válido',
            number: 'Por favor ingresá sólo números en {{ field }}'
        }
    }
};

module.exports = itemModel;