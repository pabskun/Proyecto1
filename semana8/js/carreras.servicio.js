
function getListaCarreras() {
    let listaCarreras = JSON.parse(localStorage.getItem('listaCarrerasLS'));

    if (listaCarreras == null) {
        listaCarreras = [
            ['BISOFT', 'Bachillerato en Ingeniería del Software', new Date('2012-01-01')],
            ['WEB', 'Diplomado en Desarrollo Web', new Date('2012-01-01')]
        ];
    }
    return listaCarreras;
}
function setCarreras(paCarrera) {
    let listaCarreras = getListaCarreras();

    listaCarreras.push(paCarrera);
    localStorage.setItem('listaCarrerasLS', JSON.stringify(listaCarreras));
}

function buscarCarreraPorCodigo(pCodigo) {
    let listaCarreras = getListaCarreras();
    let carreraEncontrada = [];

    for (let i = 0; i < listaCarreras.length; i++) {
        if (listaCarreras[i][0] == pCodigo) {
            carreraEncontrada = listaCarreras[i];
        }
    }

    return carreraEncontrada;
}