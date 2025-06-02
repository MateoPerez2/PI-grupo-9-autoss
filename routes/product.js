var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');


router.get('/product-add', productController.productAdd)
router.get('/:id', productController.product)
router.post('/product-add', productController.productCreate)
router.post('/product-comment/:id', productController.productComment)

module.exports = router;
