var express = require('express');
var router = express.Router();

var config = require('../config');
var orcorum = require('orcorum');

/* GET users listing. */
router.get('/', function(req, res, next) {	
  res.render('post', orcorum.object.extend({title: 'Publicar un instrumento'}, config.get(['pages', 'post'])));
});

module.exports = router;
