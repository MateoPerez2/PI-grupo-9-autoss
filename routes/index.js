var express = require('express'); //modulo de terceros 
var router = express.Router(); //te permite utilizar la funcion de ruteo que tiene express

const mainController = require('../controllers/mainController'); // requiero el controlador que exporte. Son modulo propios

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', mainController.index) // Por el metodo get cuando se accede a una ruta con dicho prefijo y sufijo, apartir del metodo get vamos a mostrar el metodo correspondiente que se encuentra dentro del controlador
// para cada sufijo lo asocio con su respectivo metodo del controlador que hace referencia a su respectivo sufijo 

router.get('/index', mainController.index)

router.get('/search', mainController.search)




module.exports = router;
