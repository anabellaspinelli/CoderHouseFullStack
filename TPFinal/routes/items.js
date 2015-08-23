var express = require('express');
var router = express.Router();
var itemModel = require('../models/item');
var qs = require('querystring');

/* GET Publish page. */
router.get('/publish', function(req, res, next) {
    res.render('items/publish.nunj', {
        stylesheets: ['publish'],
        scripts: ['jquery.validate', 'jquery.custom-file-input', 'publish']
    });
});

/*GET publish succes item page*/
router.get('/publish/success/:itemId', function(req, res, next) {
    var itemId = req.url.slice(req.url.indexOf('id-') + 3);

    getItemAndRender(itemId, 'publishsuccess', res)
});

/*GET item page by ID*/
router.get('/id-:id', function(req, res, next) {
    var itemId = req.params.id;

    getItemAndRender(itemId, 'item', res)
});

/* GET items by keyword */
router.get('/search/:keyword', function(req, res, next) {
    var keyword = req.params.keyword;

    itemModel.search(keyword, function(items) {
        renderItemsOrNoResults(res, items);
    });
});

/* GET ALL items */
router.get('/all', function(req, res, next) {
    itemModel.getAll(function(items) {
        renderItemsOrNoResults(res, items); //quizás sea un poco mucho esto?
    });
});

function renderItemsOrNoResults(res, items) {
    if (items.length > 0) {
        res.render('items/listing.nunj', {
            items: items,
            stylesheets: ['listing']
        });
    } else {
        res.render('items/noresults.nunj', {
            stylesheets: ['noresults']
        });
    }
}

function getItemAndRender(itemId, template, res) {
    itemModel.get(itemId, function(err, item) {
        if (err) {
            console.log(err);
            return res.render('error.nunj', {
                message: err.message
            });
        }

        res.render('items/' + template + '.nunj', {
            item: item,
            stylesheets: ['item']
        });
    });
}


module.exports = router;