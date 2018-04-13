

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

function actualizarUsuario(pDatosUsuario){
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/actualizar_usuario',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            '_id' : pDatosUsuario[0],
            'nombre' : pDatosUsuario[1],
            'correo' : pDatosUsuario[2],
            'tel' : pDatosUsuario[3]
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

function buscarUsuarioPorId(pid){
    let usuario = [];
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/buscar_usuario_id',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            'id' : pid
        }
      });
    
      peticion.done(function(response){
        usuario = response;
      });
    
      peticion.fail(function(){
       
      });

    return usuario;
}