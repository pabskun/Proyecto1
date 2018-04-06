const express = require('express'),
      router = express.Router(),
      users = require('./usuarios.api');

/**
 * 
 */
router.param('id', function(req, res, next, id) {
  req.body.id = id;
  next();
});

/**
 * Función que se encarga de registrar los usuarios dentro del local storage
 */
router.route('/save_user')
  .post(function(req, res){
    users.registrar(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */
router.route('/get_all_users')
  .get(function(req, res) {
    users.listarTodos(req,res);
});

/**
 * Función que actualiza los usuarios
 */
router.route('/update_users')
  .put(function(req, res){
    users.actualizar(req,res);
});

module.exports = router;