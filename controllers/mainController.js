const { Association } = require("sequelize");
const autos = require("../db") //La requerimos para tulizar su lista de prodsuctos
const db = require("../db/models");
const Product = db.Product;
const mainController = { //Creo un objeto literal con metodos index y search (metodo=funcion dentro de un objeto literal). Cada uno hace referencia a una vista y a un sufijo

    index: function(req, res) {

        Product.findAll({include:[{association:'user'}]})
            .then(function (resultados) {
                console.log(resultados);
                return res.render('index', {producto: resultados })
            })
            .catch(function (err) {
                return res.send(err);
            })

    },
    search: function(req, res) {
        //const search = req.params.search
        res.render('search-results', { producto: autos.productos})
    }
    
    
    


}

module.exports = mainController;