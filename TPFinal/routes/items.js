var express = require('express');
var router = express.Router();
var itemModel = require('../models/item');

/* GET Publish page. */
router.get('/publish', function(req, res, next) {	
    res.render('items/publish.nunj', {stylesheets: ['publish'], scripts: ['publish']});
});

router.get('/:id', function(req, res, next) {
    var itemId = Number(req.params.id);

    itemModel.get(itemId, function(err, item) {
        if (err) {
            console.log(err);
            return res.render('error.nunj', {
                message: err.message
            });
        }

        console.log(item);
        res.render('items/item.nunj', {
            item: item,
            stylesheets: ['item']
        });
    });
});

module.exports = router;