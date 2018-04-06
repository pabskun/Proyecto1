let botonEnviar = document.querySelector('#btnEnviar');

botonEnviar.addEventListener('click', obtenerDatos);
mostrarCarreras()
function obtenerDatos(){
    let inputNombre = document.querySelector('#txtNombre');
    let sNombre = inputNombre.value;

    let inputCorreo = document.querySelector('#txtCorreo');
    let sCorreo = inputCorreo.value;

    let inputTelefono = document.querySelector('#txtTelefono');
    let sTelefono = inputTelefono.value;

    let arrDatos = [sNombre, sCorreo, sTelefono];

    guardarUsuario(arrDatos);
    mostrarCarreras()
}

function mostrarCarreras() {
    let listaUsuarios = obtenerUsuarios();
    let cuerpoTabla = document.querySelector('#tblUsuarios tbody');

    cuerpoTabla.innerHTML = '';

    for (let i = 0; i < listaUsuarios.length; i++) {
        
        let fila = cuerpoTabla.insertRow();
        let colNombre = fila.insertCell();
        let colCorreo = fila.insertCell();
        let colTelefono = fila.insertCell();

        let sNombre = document.createTextNode(listaUsuarios[i]['nombre']);
        let sCorreo = document.createTextNode(listaUsuarios[i]['correo']);
        let sTelefono = document.createTextNode(listaUsuarios[i]['telefono']);


        colNombre.appendChild(sNombre);
        colCorreo.appendChild(sCorreo);
        colTelefono.appendChild(sTelefono);

    }
}