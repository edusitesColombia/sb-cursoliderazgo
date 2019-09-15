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

    if (elementoComparar.classList.contains('home-ruta') === true) {
        let textoBienvenida = document.createElement('p');
        textoBienvenida.classList.add('texto-bienvenida');
        let titulo = document.getElementById('page-mast').firstElementChild;
        textoBienvenida.innerText = 'Esperamos que este espacio virtual, permita a todos los docentes acercarse a reflexiones y ejercicios que promuevan su capacidad de liderazgo en sus contextos escolares';
        titulo.insertAdjacentElement(afterend, textoBienvenida);


    }

});