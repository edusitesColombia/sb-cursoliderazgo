document.addEventListener('DOMContentLoaded', function() {
    console.log('Cargando js');
    let seccion0 = document.getElementById('section-0');
    let s0Visible = seccion0.classList.contains('state-visible');

    if (s0Visible == true) {
        document.getElementById('page-header').classList.toggle('home-ruta', true);
        let textoBienvenida = document.createElement('p');
        textoBienvenida.classList.add('texto-bienvenida');
        let titulo = document.getElementById('page-mast').firstElementChild;
        textoBienvenida.innerText = 'Esperamos que este espacio virtual, permita a todos los docentes acercarse a reflexiones y ejercicios que promuevan su capacidad de liderazgo en sus contextos escolares';
        titulo.insertAdjacentElement('afterend', textoBienvenida);
    }
    //document.getElementsByClassName('chapter-title').onclick = document.getElementById('page-header').classList.toggle('home-ruta', false);
});