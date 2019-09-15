document.addEventListener("DOMContentLoaded", function() {
    console.log('Cargando js');
    let elementoComparar = document.getElementById('section-0');
    if (elementoComparar.classList.contains('state-visible') == true) {
        document.getElementById('page-header').classList.add('home-ruta');
    }

    if (elementoComparar.classList.contains('home-ruta') == true) {
        let textoBienvenida = document.createElement('p');
        textoBienvenida.classList.add('texto-bienvenida');
        let titulo = document.getElementById('page-mast').firstElementChild;
        textoBienvenida.innerText = 'Esperamos que este espacio virtual, permita a todos los docentes acercarse a reflexiones y ejercicios que promuevan su capacidad de liderazgo en sus contextos escolares';
        titulo.insertAdjacentElement(afterend, textoBienvenida);


    }

});