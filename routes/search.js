var express = require('express');
var router = express.Router();

/*SEARCH Redirect*/
router.post('/', function(req, res, next) {
    console.log(req.body);
    res.redirect('/items/search/' + req.body.keyword);
});

module.exports = router;