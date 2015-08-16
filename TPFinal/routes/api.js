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

function validateItemData(body) {
    console.log(body);
}

module.exports = router;