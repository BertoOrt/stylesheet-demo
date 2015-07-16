var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Best Blog' });
});

router.get('/stylesheet', function(req, res, next) {
  res.render('stylesheet');
});

module.exports = router;
