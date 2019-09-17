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

document.addEventListener('DOMContentLoaded', function() {
    console.log('cargo');
    if (claseControl == true && section0.classList.contains('state-visible') == true && location.hash == '') {
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
    } else if (claseControl == true && section0.classList.contains('state-visible') == false) {
        console.log('inserto calse por defecto');
        insertaClasePorDefecto();
    }
});
window.addEventListener('hashchange', function() {
    if (claseControl == true && identPrincipal.classList.contains('por-defecto') == true && location.hash == '') {
        insertaClaseRuta();
        let modulos = document.getElementsByClassName('chapter-title');
        for (i = 0; i < modulos.length; i++) {
            modulos[i].addEventListener('click', function() {
                insertaClasePorDefecto();
            });
        }
    }
});