/**
 * Exportamos las dependencias y el model
 * se exporta express, y despues se inicializa un enrutamiento del mismo para poder exportarlo
 */
const express = require('express'),
router = express.Router(),
users = require('./sucursales.api');

/**
* Establece cual va a ser el parametró único
*/
router.param('id', function(req, res, next, id) {
req.body.id = id;
next();
});

/**
* Función que se encarga de registrar los usuarios dentro del local storage
*/
router.route('/save_sucursal')
.post(function(req, res){
users.registrar(req,res);
});

/**
* Función que obtiene todos los usuarios
*/
router.route('/get_all_sucursales')
.get(function(req, res) {
users.listarTodos(req,res);
});

/**
* Función que actualiza los usuarios
*/
router.route('/update_sucursales')
.put(function(req, res){
users.actualizar(req,res);
});

/**
* Se exporta todas las rutas para que sean interpretadas dentro del index.js
*/
module.exports = router;