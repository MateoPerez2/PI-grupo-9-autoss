const express = require('express');
const autos = require('../db')

const productController = {

    
    product: function(req, res) {
        res.render('product', {comentario: autos.filtrarComentarios(), descripcion: autos.filtrarDescipcion()})
    },
    
    


}

module.exports = productController;