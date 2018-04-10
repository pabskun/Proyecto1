let botonEnviar = document.querySelector('#btnEnviar');

botonEnviar.addEventListener('click', obtenerDatos);
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

function mostrarDatos(){
    let listaUsuarios = obtenerListaUsuarios();
    let tbody = document.querySelector('#tblPersonas tbody');

    tbody.innerHTML = '';
    for(let i = 0; i < listaUsuarios.length; i++){
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cCorreo = fila.insertCell();
        let cTel = fila.insertCell();

        let sNombre = document.createTextNode(listaUsuarios[i]['nombre']);
        let sCorreo = document.createTextNode(listaUsuarios[i]['correo']);
        let sTel = document.createTextNode(listaUsuarios[i]['tel']);

        cNombre.appendChild(sNombre);
        cCorreo.appendChild(sCorreo)
        cTel.appendChild(sTel);
    }
}
