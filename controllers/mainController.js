const autos = require("../db") //La requerimos para tulizar su lista de prodsuctos

const mainController = { //Creo un objeto literal con metodos index y search (metodo=funcion dentro de un objeto literal). Cada uno hace referencia a una vista y a un sufijo

    index: function(req, res) {
        res.render('index', {producto: autos.productos })
    },
    search: function(req, res) {
        //const search = req.params.search
        res.render('search-results', {search, producto: autos.productos})
    }
    
    
    


}

module.exports = mainController;