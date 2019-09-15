document.addEventListener('DOMContentLoaded', function() {
    console.log("cuando carga");
    if (document.getElementById('section-0').classList.contains('state-visible') === true) {
        console.log(document.getElementById('section-0').classList);
        document.getElementById('moodle-page').classList.add('home-ruta');
    }

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
            document.getElementById('moodle-page').classList.remove('home-ruta');
            document.getElementById('moodle-page').classList.add('por-defecto');
        });
    }


});