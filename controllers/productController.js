const express = require('express');
const autos = require('../db')

const autos= require("../db/autos")
const productController = {

    
    product: function(req, res) {
        res.render('product', {comentario: autos.filtrarComentarios(), descripcion: autos.filtrarDescipcion()})
    },
    
    


}

module.exports = productController;