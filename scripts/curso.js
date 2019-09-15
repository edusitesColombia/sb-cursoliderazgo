document.addEventListener('DOMContentLoaded', function() {
    console.log('Cargando js');
    let seccion0 = document.getElementById('section-0');
    let s0Visible = seccion0.classList.contains('state-visible');

    while (s0Visible == true) {
        let header = document.getElementById('page-header');
        header.classList.add('home-ruta');
        let textoBienvenida = document.createElement('p');
        textoBienvenida.classList.add('texto-bienvenida');
        let titulo = document.getElementById('page-mast').firstElementChild;
        textoBienvenida.innerText = 'Esperamos que este espacio virtual, permita a todos los docentes acercarse a reflexiones y ejercicios que promuevan su capacidad de liderazgo en sus contextos escolares';
        titulo.insertAdjacentElement('afterend', textoBienvenida);
        document.getElementsByClassName('chapter-title').onclick = header.classList.remove('home-ruta');
    }
});