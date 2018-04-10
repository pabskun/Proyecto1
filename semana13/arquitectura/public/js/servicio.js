

function guardarUsuario(pDatosUsuario){
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_usuario',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            'nombre' : pDatosUsuario[0],
            'correo' : pDatosUsuario[1],
            'tel' : pDatosUsuario[2]
        }
      });
    
      peticion.done(function(response){
        
      });
    
      peticion.fail(function(){
       
      });
}

function obtenerListaUsuarios(){
    let listaUsuarios = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_todos_usuarios',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
        listaUsuarios = response;
      });
    
      peticion.fail(function(){
       
      });

    return listaUsuarios;
}