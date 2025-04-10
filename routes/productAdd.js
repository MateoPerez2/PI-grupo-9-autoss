var express = require('express');
var router = express.Router();

const productAddController = require('../controllers/product-addController');


router.get('/', productAddController.productAdd)



module.exports = router;
