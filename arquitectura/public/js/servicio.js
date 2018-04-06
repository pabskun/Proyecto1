function guardarUsuario(pDatosUsuario){
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/save_user',
    type: 'post',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType : 'json',
    async:false,
    data:{
        'nombre' : pDatosUsuario[0],
        'correo' : pDatosUsuario[1],
        'telefono' : pDatosUsuario[2]
    }
  });
  peticion.done(function(response){
    console.log('El usuario se registró con éxito');
  });
  peticion.fail(function(){
    console.log('El usuario no se pudo registrar');
  });
}

function obtenerUsuarios(){
  let listaUsuarios = [];
  let peticion = $.ajax({
    url: 'http://localhost:4000/api/get_all_users',
    type: 'get',
    contentType: 'application/x-www-form-urlencoded; charset=utf-8',
    dataType : 'json',
    async:false,
    data:{
   
    }
  });
  peticion.done(function(datos){

    datos.forEach(dato => {
      listaUsuarios.push(dato);
    });

    console.log('Petición realizada con éxito');
  });
  peticion.fail(function(){
    listaUsuarios = [];
    console.log('Ocurrió un error');
  });
  console.log(listaUsuarios);
  return listaUsuarios;
}