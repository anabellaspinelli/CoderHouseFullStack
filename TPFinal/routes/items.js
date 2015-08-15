var express = require('express');
var router = express.Router();

var config = require('../config');
var orcorum = require('orcorum');

/* GET Publish page. */
router.get('/post', function(req, res, next) {	
  res.render('items/post.nunj', {title: "Instroo", stylesheets: ['post']});
});

module.exports = router;