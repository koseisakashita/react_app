var express = require('express');
var router = express.Router();
var data = require('../public/javascripts/data');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(data);
});

router.get('/:id', function(req, res, next) {
  res.json(data[req.params.id]);
});

module.exports = router;
