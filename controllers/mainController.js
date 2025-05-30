const autos = require("../db")

const mainController = {

    index: function(req, res) {
        res.render('index', {producto: autos.productos })
    },
    search: function(req, res) {
        //const search = req.params.search
        res.render('search-results', {search, producto: autos.productos})
    }
    
    
    


}

module.exports = mainController;