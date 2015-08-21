var Mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var dbURL = 'mongodb://localhost:27017/instroo'; //TO-DO remove once dbConnection.js is implemented

var dbConnection = require('../lib/dbConnection');

var itemModel = {
    insert: function(item, callback) {
        dbConnection(function(db) {
            db.collection('items').insert(item, function(err) {
                callback(err);
            });
        });
    },
    get: function(itemId, callback) {
        dbConnection(function(db) {
            db.collection('items').findOne({
                _id: ObjectID(itemId)
            }, function(err, item) {
                callback(err, item);
            });
        });
    },
    search: function(keyword, callback) {
        var keywordFilter = {
            description: {
                $regex: keyword || '',
                $options: "i"
            },
            title: {
                $regex: keyword || '',
                $options: "i"
            }
        }

        dbConnection(function(db) {
            dbFind(db, keywordFilter, callback);
        });
    },
    getAll: function(callback) {
        var filter = {};

        dbConnection(function(db) {
            dbFind(db, filter, callback);
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

function dbFind(db, filter, callback) {
    var items = [];

    var cursor = db.collection('items').find(filter);

    cursor.on('data', function(doc) {
        items.push(doc);
    });

    cursor.on('error', function(err) {
        console.log(err);
    });

    cursor.on('end', function() {
        callback(items);
    });
}

module.exports = itemModel;