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
        console.log('item is ', item._id);
        if (err) {
            console.log(err);
            return res.render('error.nunj', {
                message: err.message
            });
        }

        res.render('items/item.nunj', {
            item: item
        });
    });
});

module.exports = router;