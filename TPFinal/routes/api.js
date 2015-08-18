var express = require('express');
var router = express.Router();
var Indicative = new(require("indicative"));
var qs = require('querystring');

var itemModel = require('../models/item');

router.post('/items', function(req, res, next) {
    var item = req.body;
    var schema = itemModel.validations.schema;
    var errorMessages = itemModel.validations.messages;

    Indicative.validate(schema, item, errorMessages).then(function (validation_passed) {
        itemModel.insert(item, function() {
            res.json({
                result: item
            });
        });
    }).catch(function (err) {
        console.log(err);
        res.json({
            error: err
        });
    });
});

/*SEARCH Redirect*/
router.get('/search', function(req, res, next) {
    var reqQs = qs.parse(req.url.slice(req.url.indexOf('?') + 1));

    res.redirect('/items/search/' + reqQs.keyword);
});

module.exports = router;