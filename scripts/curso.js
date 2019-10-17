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

// Busca el padre con etiqueta <li> de un elemento y lo retorna.
function recorrerPadres(elementoComparar) {
    var padre = elementoComparar;
    var tipoElemento = "";
    while (tipoElemento != "LI") {
        padre = padre.parentNode;
        tipoElemento = padre.nodeName;
    }
    return padre;
}

// Inserta una clase al padre encontrado de cada elemento de la colección pasada como parametro.
function marcarPadreClase(elemento, nombreClaseAgregar) {
    var elementoEncontrado;
    var i;
    for (i = 0; i < elemento.length; i++) {
        elementoEncontrado = recorrerPadres(elemento[i]);
        elementoEncontrado.classList.add(nombreClaseAgregar);
    }
}


//el hash lo uso como forma de controlar la navegacion con los botones del navegador porque las clases estan cargando lento y tocaria hacer esto cuando este todo cargado.
document.addEventListener('DOMContentLoaded', function() {
    if (claseControl == true) {
        if (location.hash == '' || location.hash == 'section-0') {
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
            //identifica si el modulo fue completado y agrega la clase
            marcarPadreClase(document.getElementsByClassName('snap-section-complete'), 'modulo-completado');

        } else if (location.hash != '' && location.hash != '#section-0') {
            if (location.hash != '#coursetools') {
                insertaClasePorDefecto();
            }
        }
    }
});

/*prueba*/
function locationHashChanged() {
    if (claseControl == true) {

        if (identPrincipal.classList.contains('por-defecto') == true && (location.hash == '' || location.hash == '#section-0')) {

            insertaClaseRuta();
            let modulos = document.getElementsByClassName('chapter-title');
            for (i = 0; i < modulos.length; i++) {
                modulos[i].addEventListener('click', function() {
                    insertaClasePorDefecto();
                });
            }
        } else if (identPrincipal.classList.contains('home-ruta') == true && (location.hash != '' && location.hash != '#section-0' && location.hash != '#coursetools')) {
            insertaClasePorDefecto();
        }
    }
}

window.onhashchange = locationHashChanged;
/*Controla el flujo con las flechas del navegador y los cambios de seccion con los botones del tema porque toda la informacion esta cargada en la misma pagina y solo se habilita y deshabilita
el hash permite controlar si va o se devuelve a la ruta
*/
/*window.addEventListener('hashchange', function() {

    if (claseControl == true) {
        if (identPrincipal.classList.contains('por-defecto') == true && (location.hash == '' || location.hash == '#section-0')) {
            insertaClaseRuta();
            let modulos = document.getElementsByClassName('chapter-title');
            for (i = 0; i < modulos.length; i++) {
                modulos[i].addEventListener('click', function() {
                    insertaClasePorDefecto();
                });
            }
        } else if (identPrincipal.classList.contains('home-ruta') == true && (location.hash != '' && location.hash != '#section-0' && location.hash != '#coursetools')) {
            insertaClasePorDefecto();
        }
    }
});*/