var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');


router.get('/product', productController.product)

router.get('/product/:id', productController.product)

router.get('/product-add', productController.productAdd)




module.exports = router;
