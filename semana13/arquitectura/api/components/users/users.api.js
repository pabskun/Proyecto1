
const userModel = require('./users.model');

module.exports.registrar  = function (req, res){

    let newUser = new  userModel({
        nombre : req.body.nombre,
        correo : req.body.correo,
        tel: req.body.tel

    });

    newUser.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el usuario, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El usuario se registró con éxito'});
        }

    });


};

module.exports.listar_usuarios = function(req, res){
    userModel.find().then(
        function(usuarios){
            res.send(usuarios);
        });
};