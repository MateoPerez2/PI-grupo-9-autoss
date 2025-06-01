var express = require('express');
var router = express.Router();

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

const usersController = require('../controllers/usersController');

router.get('/profile', usersController.profile);
router.get('/profile/:id', usersController.profile);

router.get('/register', usersController.register)
router.post('/newuser/', usersController.create) //a chequear

router.get('/login', usersController.login)
router.post('/login/', usersController.createLogin) //a chequear

router.get('/logout', usersController.logout)

module.exports = router;
