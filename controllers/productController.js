const autos = require('../db')
const db = require("../db/models");
const Product = db.Product;

const productController = {

    
    product: function(req, res) {
        let id = req.params.id; // obetenes al parametro que ingreso el usuario dentro de la ruta,  osea el producto que yo toque con la imagen, osea el id del producto.
        
        Product.findByPk(id,{
            include: [
            {association:'comments', include: [{ association:'user'}]  }, 
            {association: 'user' } ]}
                
            )
        
         .then(function (resultados) {
                    console.log(resultados);

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
        if (req.session.user == undefined) {
            return res.redirect('/users/login')
        } 
        else {
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
            .then(function (resultados) {
                return res.redirect('/')
            })
            .catch(function (err) {
                return res.send(err);
            })
        }
    },
    productComment: function(req, res) {
        if (req.session.user == undefined) {
            return res.redirect('/users/login')
        } 
        else {
            let id = req.params.id;
            let comment = req.body.comment;
            let user_id = req.session.user.id;
            
            db.Comment.create({
                texto: comment,
                Idusuario: user_id,
                Idproducto: id
            })
            .then(function (resultados) {
                return res.redirect('/product/' + id)
            })
            .catch(function (err) {
                return res.send(err);
            })
        }
    }

    
    


}

module.exports = productController;