const express = require('express');
const autos = require('../db')

const productAddController = {

    
    productAdd: function(req, res) {
        res.render('product-add',  {profile: autos})
    },
    



}

module.exports = productAddController;