/**
 * Se exporta Moongoose para guardar el modelo dentro del mismo y poder accesarlo despues
 */
let mongoose = require('mongoose');

/**
 * Se crea un esquema, los equemas son la arquitectura basica que van a tener los datos dentro de Mongo
 */
let UserSchema = new mongoose.Schema({
  nombre : {type: String, required : true},
  correo : {type: String, required : true},
  telefono : {type: String, required : true}
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('User', UserSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural