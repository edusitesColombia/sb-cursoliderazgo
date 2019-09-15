function insertaClaseRuta() {
    if (document.getElementById('section-0').classList.contains('state-visible') === true) {
        document.getElementById('moodle-page').classList.remove('por-defecto');
        document.getElementById('moodle-page').classList.add('home-ruta');
    }
}

function insertaClasePorDefecto() {
    if (document.getElementById('section-0').classList.contains('state-visible') === false) {
        document.getElementById('moodle-page').classList.remove('home-ruta');
        document.getElementById('moodle-page').classList.add('por-defecto');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("cuando carga");
    insertaClaseRuta();
    if (document.getElementById('moodle-page').classList.contains('home-ruta') === true) {
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
window.addEventListener('hashchange', function() {
    if (document.getElementById('moodle-page').classList.contains('por-defecto') === true) {
        insertaClaseRuta();
    } else if (location.hash != null) {
        insertaClasePorDefecto();
    }
});

window.addEventListener('load', function() {
    if (location.hash != null) {
        insertaClasePorDefecto();
    }
});