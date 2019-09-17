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
    if (claseControl == true && !location.hash) {

        console.log(location.hash);
        insertaClaseRuta();
        let textoBienvenida = document.createElement('p');
        textoBienvenida.classList.add('texto-bienvenida');
        let titulo = document.getElementById('page-mast').firstElementChild;
        textoBienvenida.innerText = 'Esperamos que este espacio virtual, permita a todos los docentes acercarse a reflexiones y ejercicios que promuevan su capacidad de liderazgo en sus contextos escolares';
        titulo.insertAdjacentElement('afterend', textoBienvenida);

        window.addEventListener('hashchange', function() {
            console.log('al menos entro');
            if (claseControl == true && identPrincipal.classList.contains('por-defecto') == true && location.hash != '') {
                console.log('por defecto');
                insertaClaseRuta();
            } else if (claseControl == true && identPrincipal.classList.contains('home-ruta') == true && !location.hash) {
                console.log('en cambio');
                insertaClasePorDefecto();

            }

        });


    } else if (claseControl == true && location.hash != '') {
        insertaClasePorDefecto();
    }
});