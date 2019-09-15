var section0 = document.getElementById('section-0');
var identPrincipal = document.getElementById('moodle-page');

function insertaClaseRuta() {
    if (section0.classList.contains('state-visible') === true) {
        identPrincipal.classList.remove('por-defecto');
        identPrincipal.classList.add('home-ruta');
    }
}

function insertaClasePorDefecto() {
    if (section0.classList.contains('state-visible') === false) {
        identPrincipal.classList.remove('home-ruta');
        identPrincipal.classList.add('por-defecto');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("cuando carga");
    insertaClaseRuta();
    if (identPrincipal.classList.contains('home-ruta') === true) {
        let textoBienvenida = document.createElement('p');
        textoBienvenida.classList.add('texto-bienvenida');
        let titulo = document.getElementById('page-mast').firstElementChild;
        textoBienvenida.innerText = 'Esperamos que este espacio virtual, permita a todos los docentes acercarse a reflexiones y ejercicios que promuevan su capacidad de liderazgo en sus contextos escolares';
        titulo.insertAdjacentElement('afterend', textoBienvenida);
    }
    let modulos = document.getElementsByClassName('chapter-title');
    for (i = 0; i < modulos.length; i++) {
        modulos[i].addEventListener('click', function() {
            insertaClasePorDefecto();
        });
    }
});


window.addEventListener('load', function() {
    if (location.hash != null) {
        insertaClasePorDefecto();
    }
});