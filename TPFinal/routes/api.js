var express = require('express');
var router = express.Router();

var itemModel = require('../models/item');

router.post('/items', function(req, res, next) {
    var item = req.body;

    validateItemData(item);

    itemModel.insert(item, function(err) {
        if (err) {
            console.log(err);
            return res.json({
                error: {
                    message: err.message
                }
            });
        }

        res.json({
            result: item
        });      
    });
});

router.get('/items/validations', function(req, res, next) {
    res.send(JSON.stringify({ 
        rules: {
            category: {
                required: true,
            },
            title: {
                required: true,
                rangelength: [10, 100]
            },
            description: {
                required: true,
                rangelength: [30, 300]
            },
            price: {
                required: true,
                number: true,
                rangelength: [1, 7],

            },
            name: { 
                required: true,
                rangelength: [3, 30]
            },
            email: {
                required: true,
                maxlength: [50]
            },
            phone: {
                number: true
            },
            province: {
                required: true
            },
            city: {
                required: true
            }
        }
    }))
});

function validateItemData(body) {
    console.log(body);
}

module.exports = router;