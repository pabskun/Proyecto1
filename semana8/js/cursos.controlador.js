let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);
mostrarCursos();
mostrarCarreras();

function obtenerDatos() {

    let bError = validarRegistro();

    if (bError == false) {
        let aInfoCurso = [];

        let sCarrera = document.querySelector('#sltCarrera').value;
        let sCurso = document.querySelector('#txtCurso').value;
        let nCreditos = Number(document.querySelector('#txtCreditos').value);

        aInfoCurso.push(sCarrera, sCurso, nCreditos);

        setListaCursos(aInfoCurso);
        mostrarCursos();
    }else{
        
    }


}
function mostrarCursos() {
    let listaCursos = getListaCursos();
    let cuerpoTabla = document.querySelector('#tblCursos tbody');
    cuerpoTabla.innerHTML = '';

    for (let i = 0; i < listaCursos.length; i++) {
        let fila = cuerpoTabla.insertRow(i);
        let cCarrera = fila.insertCell();
        let cCurso = fila.insertCell();
        let cCreditos = fila.insertCell();

        let sCarrera = document.createTextNode(listaCursos[i][0]);
        let sCurso = document.createTextNode(listaCursos[i][1]);
        let nCreditos = document.createTextNode(listaCursos[i][2]);

        cCarrera.appendChild(sCarrera);
        cCurso.appendChild(sCurso);
        cCreditos.appendChild(nCreditos);

    }
}
function validarRegistro() {
    let inputsRequeridos = document.querySelectorAll('form input:required, form select:required');
    let bError = false;

    for (let i = 0; i < inputsRequeridos.length; i++) {
        if (inputsRequeridos[i].value == '') {
            inputsRequeridos[i].classList.add('errorInput');
            bError = true;
        } else {
            inputsRequeridos[i].classList.remove('errorInput');
        }
    }

    return bError;
}
function mostrarCarreras(){
    let selectCarreras = document.querySelector('#sltCarrera');
    let listaCarreras = getListaCarreras();

    for(let i = 0; i < listaCarreras.length; i++){
        let nuevaOpcion = new Option(listaCarreras[i][1]);
        nuevaOpcion.value = listaCarreras[i][0];

        selectCarreras.options.add(nuevaOpcion);
    }
}