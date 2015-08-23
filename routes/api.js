var express = require('express');
var router = express.Router();
var Indicative = new(require("indicative"));
var qs = require('querystring');
var multer = require('multer');
var uploadConfig = require('../config/fileUpload');
var upload = multer({
    storage: uploadConfig.storage,
    fileFilter: uploadConfig.fileFilter
});

var itemModel = require('../models/item');
var uploadFields = upload.fields([{ name: 'img-1', maxCount: 1 }, {name: 'img-2', maxCount: 1}, {name: 'img-3', maxCount: 1}, {name: 'img-4', maxCount: 1}]);

router.post('/items', uploadFields, function(req, res, next) {
    var item = JSON.parse(req.body.json);
    item.images = [];
    uploadConfig.imgNames.forEach(function(name) {
        if (req.files[name]) {
            item.images.push({
                name: name,
                path: '/' + req.files[name][0].path.substring(7)
            });
        }
    });

    var schema = itemModel.validations.schema;
    var errorMessages = itemModel.validations.messages;

    Indicative.validateAll(schema, item, errorMessages).then(function(validation_passed) {
        itemModel.insert(item, function() {
            res.json({
                result: item
            });
        });
    }).catch(function(err) {
        res.json({
            error: err
        });
    });
});

module.exports = router;