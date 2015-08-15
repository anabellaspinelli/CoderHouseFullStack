var express = require('express');
var router = express.Router();

var config = require('../config');
var orcorum = require('orcorum');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', orcorum.object.extend({ title: 'Instroo' }, config.get(['pages', 'home'])));
});

module.exports = router;