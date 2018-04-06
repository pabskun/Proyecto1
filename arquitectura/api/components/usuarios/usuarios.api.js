const UserModel = require('./usuarios.model');

module.exports.registrar = function(req, res)  {
  console.log(req.body);
  let newUser = new UserModel({
    nombre: req.body.nombre,
    correo: req.body.correo,
    telefono: req.body.telefono
  });

  newUser.save( function(err) {
    if (err) {
      res.json({ success: false, msg: 'Ha ocurrido un error en el registro de usuarios' + err });
    } else {
      res.json({ success: true, msg: 'Se registró el usuario correctamente' });
    }
  });
};

module.exports.listarTodos = function(req, res) {
  UserModel.find().then(function(user) {
    res.send(user);
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