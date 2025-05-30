const autos = require("../db") //La requerimos para tulizar su lista de prodsuctos

const mainController = { //Creo un objeto literal con metodos index y search (metodo=funcion dentro de un objeto literal). Cada uno hace referencia a una vista y a un sufijo

    index: function(req, res) {
        res.render('index', {producto: autos.productos}) // Index va a renderizar la vista, mostrar la vista y pasarle toda la info que la vista necesita. 
        // index recibe dos parametros, req te trae la informacion que viene del pedido y res realiza la respuesta. Le decis que utilize el metodo render dentro res, que recibe dos parametros, la vista que va renderizar y un segundo parametro no obligatorio que es un objeto literal con la informacion que la vista pueda utilizar, utilizando como variable las propiedades que pasate vos como segundo parametro, osea dentro de index ejs vas a usar la variable producto como contenedor de la lista de productos. Si lo llamaba "juan carlos" uso todo en nombre de juan carlos.
    },
    search: function(req, res) {
        const search = req.params.search //veo el formulario donde envio la busqueda del usuario. 
        console.log(search);
        res.render('search-results', {search, producto: autos.productos})
    }
    
    
    


}

module.exports = mainController;