const { Association, where } = require("sequelize");
const autos = require("../db") //La requerimos para tulizar su lista de prodsuctos
const db = require("../db/models");
const op = db.Sequelize.Op;
const Product = db.Product;
const mainController = { //Creo un objeto literal con metodos index y search (metodo=funcion dentro de un objeto literal). Cada uno hace referencia a una vista y a un sufijo

    index: function (req, res) {

        Product.findAll({ include: [{ association: 'user' }] })
            .then(function (resultados) {
                return res.render('index', { producto: resultados })
            })
            .catch(function (err) {
                return res.send(err);
            })

    },
    search: function (req, res) {
        res.render('search-results', {producto: autos.productos} )


    }






}

module.exports = mainController;