var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('post', {title: 'Publicar un instrumento'});
});

module.exports = router;
