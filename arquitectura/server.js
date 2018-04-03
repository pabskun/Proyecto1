
// Se exporta http dentro de la arquitectura
const http = require('http');
// Establecemos un puerto en el que el servidor se va a levantar
const port = 3000;
// Se exporta serveStatic que crea un servidor estático
const serveStatic = require('serve-static');
// Se exporta la conexión de nodejs
const connect = require('connect');
// se exporta nodemon, cuya tarea es crea el servidor del back end
const nodemon = require('nodemon');

// Se establece la conexion y el puerto en el que la aplicación va a correr
connect().use(serveStatic(__dirname)).listen(port, () => {
  console.log('El servidor esta levantado dentro del puerto ' + port);
});

// Se establece cual va a ser el archivo que va a conectar nodemon
nodemon({
  script: 'api/index.js',
  ext: 'js'
});

// Creamos la conexion del backend con Nodemon
nodemon.on('start', () => {
  console.log('La aplicación ha sido levantada correctamente');
}).on('quit', () => {
  console.log('App has quit');
  process.exit();
}).on('restart', (files) => {
  console.log('App restarted due to: ', files);
});
