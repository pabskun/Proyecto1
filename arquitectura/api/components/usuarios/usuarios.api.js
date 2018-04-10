/**
 * Se exporta el modelo de usuarios, ya que es la arquitectura basica de los datos dentro de la Base de Datos
 */
const UserModel = require('./usuarios.model');

/**
 * Se exporta la funcion de registrar para que sea entendible para el usuario.route.js
 * @param {peticion} req 
 * @param {respuesta} res 
 */
module.exports.registrar = function(req, res) {
  /**
   * Creamos un nuevo dato con el formato del UserModel
   */
  let newUser = new UserModel({
    nombre: req.body.nombre,
    correo: req.body.correo,
    telefono: req.body.telefono
  });

  /**
   * Almacenamos el nuevo dato dentro de mongo y envío como respuesta el cuerpo de res
   */
  newUser.save(function(error) {
    if (error) {
      res.json({ success: false, msg: 'Ha ocurrido un error en el registro de usuarios' + error });
    } else {
      res.json({ success: true, msg: 'Se registró el usuario correctamente' });
    }
  })
};

/**
 * Funcion que retorna todos los usuarios que tengan la misma estructura del userModel
 * @param {Peticion} req 
 * @param {Respuesta} res 
 */
module.exports.listarTodos = function(req, res) {
  /**
   * Esta funcion busca todos los datos que tengan la misma estructura del userModel y los retorna
   */
  UserModel.find().then(function(usuarios) {
    res.send(usuarios);
  });
};

module.exports.actualizar = function(req, res) {
  UserModel.findByIdAndUpdate(req.body._id, { $set: req.body }, function(err, user) {
    if (err) {
      res.json({ success: false, msg: 'No se ha actualizado.' + handleError(err) });

    } else {
      res.json({ success: true, msg: 'Se ha actualizado correctamente.' + res });
    }
  });
};