
const express = require('express');
const router = express.Router();
const users = require('./users.api');

router.route('/registrar_usuario')
    .post(function(req, res){
    users.registrar(req, res);
});

router.route('/listar_todos_usuarios')
    .get(function(req, res){
    users.listar_usuarios(req, res);
});



module.exports = router;