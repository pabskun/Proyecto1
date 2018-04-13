let botonEnviar = document.querySelector('#btnEnviar');

botonEnviar.addEventListener('click', obtenerDatos);

let botonActualizar = document.querySelector('#btnActualizar');

botonActualizar.addEventListener('click', obtenerDatosActualizar);

let _id = 0;
mostrarDatos();

function obtenerDatos(){
    let inputNombre = document.querySelector('#txtNombre');
    let sNombre = inputNombre.value;

    let inputCorreo = document.querySelector('#txtCorreo');
    let sCorreo = inputCorreo.value;

    let inputTelefono = document.querySelector('#txtTelefono');
    let sTelefono = inputTelefono.value;

    let arrDatos = [sNombre, sCorreo, sTelefono];

    guardarUsuario(arrDatos);
    mostrarDatos();
}

function obtenerDatosActualizar(){
    let inputNombre = document.querySelector('#txtNombre');
    let sNombre = inputNombre.value;

    let inputCorreo = document.querySelector('#txtCorreo');
    let sCorreo = inputCorreo.value;

    let inputTelefono = document.querySelector('#txtTelefono');
    let sTelefono = inputTelefono.value;

    let arrDatos = [_id, sNombre, sCorreo, sTelefono];

    actualizarUsuario(arrDatos);
    mostrarDatos();
}

function mostrarDatos(){
    let listaUsuarios = obtenerListaUsuarios();
    let tbody = document.querySelector('#tblPersonas tbody');

    tbody.innerHTML = '';
    for(let i = 0; i < listaUsuarios.length; i++){
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cCorreo = fila.insertCell();
        let cTel = fila.insertCell();
        let cConfiguracion = fila.insertCell();

        let sNombre = document.createTextNode(listaUsuarios[i]['nombre']);
        let sCorreo = document.createTextNode(listaUsuarios[i]['correo']);
        let sTel = document.createTextNode(listaUsuarios[i]['tel']);

        let botonMod = document.createElement('button');
        botonMod.type = 'button';
        botonMod.innerText = 'Editar';
        botonMod.dataset.id = listaUsuarios[i]['_id'];

        botonMod.addEventListener('click', editarDatos);

        cNombre.appendChild(sNombre);
        cCorreo.appendChild(sCorreo)
        cTel.appendChild(sTel);
        cConfiguracion.appendChild(botonMod);
    }
}

function editarDatos(){
    _id = this.dataset.id;
    let usuario = buscarUsuarioPorId(_id);

    document.querySelector('#txtNombre').value = usuario['nombre'];
    document.querySelector('#txtCorreo').value = usuario['correo'];
    document.querySelector('#txtTelefono').value = usuario['tel'];
}