var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user');


/* GET users listing. */
router.post('/sinscrire', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
