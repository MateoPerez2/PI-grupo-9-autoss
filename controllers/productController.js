const express = require('express');
const autos = require('../db')

const productController = {

    
    product: function(req, res) {
        let id = req.params.id;
        res.render('product', { filtroId: autos.filtrarPorId(id)})
    },
    productAdd: function(req, res) {
        res.render('product-add',  {profile: autos})
    }
    
    


}

module.exports = productController;