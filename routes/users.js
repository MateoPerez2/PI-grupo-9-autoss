var express = require('express');
var router = express.Router();

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

const usersController = require('../controllers/usersController');

router.get('/profile', usersController.profile)
router.get('/register', usersController.register)
router.get('/login', usersController.login)


module.exports = router;
