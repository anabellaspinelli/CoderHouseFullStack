var express = require('express');
var router = express.Router();
var Mongo = require('mongodb').MongoClient;

Mongo.connect('mongodb://localhost:27017/test', function(err, db) {
    router.get('/:userId', function(req, res, next) {

        var cursor = db.collection('users').find({
            name: req.params.userId
        });

        cursor.count(function(err, count) {
            if (count === 0) {
                res.send('No user');
                return;
            }
            
            cursor.on('data', function(user) {
                res.render('user', {
                    name: user.name,
                    email: user.email
                });
            });
        });


    });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Pasame user1 o user2');
});


module.exports = router;