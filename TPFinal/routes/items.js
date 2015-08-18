var express = require('express');
var router = express.Router();
var itemModel = require('../models/item');

/* GET Publish page. */
router.get('/publish', function(req, res, next) {
    res.render('items/publish.nunj', {
        stylesheets: ['publish'],
        scripts: ['jquery.validate', 'publish']
    });
});

/*GET item page by ID*/
router.get('/:id', function(req, res, next) {
    var itemId = Number(req.params.id);

    itemModel.get(itemId, function(err, item) {
        if (err) {
            console.log(err);
            return res.render('error.nunj', {
                message: err.message
            });
        }

        res.render('items/item.nunj', {
            item: item,
            stylesheets: ['item']
        });
    });
});

/*GET items by keyword */
router.get('/search/:keyword', function(req, res, next) {
    var keyword = req.params.keyword;

    itemModel.search(keyword, function(err, items) {
        if (err) {
            console.log(err);
            return res.render('error.nunj', {
                message: err.message
            });
        }

        if (items.length > 0) {
            res.render('items/listing.nunj', {
                items: items
            });
        } else {
            res.render('error.nunj', {
                message: 'Error: No items found'
            });
        }

    });
});

module.exports = router;