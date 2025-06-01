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
        if (req.session.user == undefined) {
            return res.redirect("/users/login")
        } else {
            return res.render('product-add')
        }
    },

    productCreate: function(req, res) {
        let foto = req.body.foto;
        let nombre = req.body.nombre;
        let descripcion = req.body.descripcion;
        let user_id = req.session.user.id;

        Product.create({
            foto: foto,
            nombre: nombre,
            descripcion: descripcion,
            Idusuario: user_id
        })
        console.log(foto, nombre, descripcion)
        res.redirect('/')
    }

    
    


}

module.exports = productController;