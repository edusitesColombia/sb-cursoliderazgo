var section0 = document.getElementById('section-0');
var identPrincipal = document.getElementById('moodle-page');
var claseControl = document.body.classList.contains('path-course-view');


function insertaClaseRuta() {
    identPrincipal.classList.remove('por-defecto');
    identPrincipal.classList.add('home-ruta');
}


function insertaClasePorDefecto() {
    identPrincipal.classList.remove('home-ruta');
    identPrincipal.classList.add('por-defecto');
}
//el hash lo uso como forma de controlar la navegacion con los botones del navegador porque las clases estan cargando lento y tocaria hacer esto cuando este todo cargado.
document.addEventListener('DOMContentLoaded', function() {
    if ((claseControl == true && section0.classList.contains('state-visible') == true && location.hash == '') || location.hash == '#section-0') {
        insertaClaseRuta();
        let textoBienvenida = document.createElement('p');
        textoBienvenida.classList.add('texto-bienvenida');
        let titulo = document.getElementById('page-mast').firstElementChild;
        textoBienvenida.innerText = 'Esperamos que este espacio virtual, permita a todos los docentes acercarse a reflexiones y ejercicios que promuevan su capacidad de liderazgo en sus contextos escolares';
        titulo.insertAdjacentElement('afterend', textoBienvenida);

        let modulos = document.getElementsByClassName('chapter-title');
        for (i = 0; i < modulos.length; i++) {
            modulos[i].addEventListener('click', function() {
                insertaClasePorDefecto();
            });
        }
    } else if (claseControl == true && location.hash != '' && location.hash != 'section-0') {
        insertaClasePorDefecto();
    }
});
window.addEventListener('hashchange', function() {
    if ((claseControl == true && identPrincipal.classList.contains('por-defecto') == true) || location.hash == '#section-0') {
        insertaClaseRuta();
        let modulos = document.getElementsByClassName('chapter-title');
        for (i = 0; i < modulos.length; i++) {
            modulos[i].addEventListener('click', function() {
                insertaClasePorDefecto();
            });
        }
    }
});