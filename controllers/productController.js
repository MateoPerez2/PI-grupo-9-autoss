const autos = require('../db')
const db = require("../db/models");
const Product = db.Product;

const productController = {

    
    product: function(req, res) {
        let id = req.params.id; // obetenes al parametro que ingreso el usuario dentro de la ruta,  osea el producto que yo toque con la imagen, osea el id del producto.
        
        Product.findByPk(id,{include: [{association:'comments', include: [{association:'user'}]}]})

         .then(function (resultados) {
                return res.render('product', { producto: resultados })
            })
            .catch(function (err) {
                return res.send(err);
            })
        
    },
    productAdd: function(req, res) {
        res.render('product-add',  {profile: autos})
    }
    
    


}

module.exports = productController;