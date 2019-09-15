// Inserta una clase a un elemento buscado
function agregarInformacion(coleccion, comparar, insertar) {
    if (coleccion != null) {
        var i;
        for (i = 0; i < coleccion.length; i++) {
            recorrerPadres(coleccion[i], comparar).classList.add(insertar);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let elementoComparar = document.getElementById('section-0');
    if (elementoComparar.classList.contains('state-visible') === true) {
        let elementoBuscar = document.getElementsById(page - header);
        agregarInformacion(elementoBuscar, elementoComparar, 'home-ruta');
    }
    if () {

    }
    let elementoBuscado = document.getElementById(elemento);
})