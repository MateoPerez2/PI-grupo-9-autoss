const autos = require('../db')

const productController = {

    
    product: function(req, res) {
        let id = req.params.id; // obetenes al parametro que ingreso el usuario dentro de la ruta,  osea el producto que yo toque con la imagen, osea el id del producto.
        res.render('product', { filtroId: autos.filtrarPorId(id)}) // mostramos la vista de product. y como segundo parametro recibe el objeto literario que tienen la propiedad filtrar id cuya propiedad filitrar id va a tener porducto seleccionado
    },
    productAdd: function(req, res) {
        res.render('product-add',  {profile: autos})
    }
    
    


}

module.exports = productController;