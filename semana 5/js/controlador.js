let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click', obtenerDatos);

function obtenerDatos(){
   
    let sTitulo = document.querySelector('#txtLibro').value;
    let sGenero = document.querySelector('#sltGenero').value;
    let dFecha = document.querySelector('#txtFecha').value; 
    let sEditorial = document.querySelector('#txtEditorial').value; 
    
    let infoLibro = [sTitulo , sGenero, dFecha, sEditorial];


    console.log(infoLibro);
    console.log('Título: ' + infoLibro[0]);
    console.log('Género: ' + infoLibro[1]);
    console.log('Fecha de lanzamiento: ' + infoLibro[2]);
    console.log('Editorial: ' + infoLibro[3]);
    
}