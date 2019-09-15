document.addEventListener('DOMContentLoaded', function() {
    console.log('Cargando js');
    let seccion0 = document.getElementById('section-0');

    if (seccion0.classList.contains('state-visible') == true) {
        document.getElementById('page-header').classList.add('home-ruta');
    }

    if (document.getElementById('page-header').classList.contains('home-ruta') == true) {
        let textoBienvenida = document.createElement('p');
        textoBienvenida.classList.add('texto-bienvenida');
        let titulo = document.getElementById('page-mast').firstElementChild;
        textoBienvenida.innerText = 'Esperamos que este espacio virtual, permita a todos los docentes acercarse a reflexiones y ejercicios que promuevan su capacidad de liderazgo en sus contextos escolares';
        titulo.insertAdjacentElement('afterend', textoBienvenida);
    }
    let modulos = document.getElementsByClassName('chapter-title');
    for (i = 0; i < modulos.length; i++) {
        modulos[i].addEventListener('click', function() {
            document.getElementById('page-header').classList.remove('home-ruta');
        });
    }
});