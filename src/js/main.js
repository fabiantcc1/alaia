/* Secciones */
const secHome = document.getElementById('secHome');
const secInfo = document.getElementById('secInfo');
const secVideo = document.getElementById('secVideo');
const secDesarrollo = document.getElementById('secDesarrollo');
const secContacto = document.getElementById('secContacto');

/* Botones del Home */
const btnSecInfo = document.getElementById('btnSecInfo');
const btnSecVideo = document.getElementById('btnSecVideo');
const btnSecArquitectura = document.getElementById('btnSecArquitectura');
const btnSecContacto = document.getElementById('btnSecContacto');
const btnSecGaleria = document.getElementById('btnSecGaleria');
const btnSecDesarrollo = document.getElementById('btnSecDesarrollo');

/* Botones flotantes */
const btnMenu = document.getElementById('btnMenu');

/* Seccion de transición para las interfaces */
const intTransition = document.getElementById('intTransition');

/* Interacción de los botones flotantes */
btnMenu.addEventListener('click', () => {
    intTransition.classList.remove('hiden');

    setTimeout(() => {
        intTransition.classList.add('animation-courtine');
    }, 50);


    setTimeout(() => {
        secHome.classList.remove('hiden');
        secInfo.classList.add('hiden');
        secVideo.classList.add('hiden');
        secDesarrollo.classList.add('hiden');
        secContacto.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);

    setTimeout(() => {
        intTransition.classList.add('hiden');
    }, 1000);
});

/* Interacción de botones del Home */
btnSecInfo.addEventListener('click', () => {
    intTransition.classList.remove('hiden');

    setTimeout(() => {
        intTransition.classList.add('animation-courtine');
    }, 50);

    setTimeout(() => {
        secHome.classList.add('hiden');
        secInfo.classList.remove('hiden');
        secVideo.classList.add('hiden');
        secDesarrollo.classList.add('hiden');
        secContacto.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);

    setTimeout(() => {
        intTransition.classList.add('hiden');
    }, 1000);
});

btnSecVideo.addEventListener('click', () => {
    intTransition.classList.remove('hiden');

    setTimeout(() => {
        intTransition.classList.add('animation-courtine');
    }, 50);

    setTimeout(() => {
        secHome.classList.add('hiden');
        secInfo.classList.add('hiden');
        secVideo.classList.remove('hiden');
        secDesarrollo.classList.add('hiden');
        secContacto.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);

    setTimeout(() => {
        intTransition.classList.add('hiden');
    }, 1000);
});

btnSecDesarrollo.addEventListener('click', () => {
    intTransition.classList.remove('hiden');

    setTimeout(() => {
        intTransition.classList.add('animation-courtine');
    }, 50);

    setTimeout(() => {
        secHome.classList.add('hiden');
        secInfo.classList.add('hiden');
        secVideo.classList.add('hiden');
        secDesarrollo.classList.remove('hiden');
        secContacto.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);

    setTimeout(() => {
        intTransition.classList.add('hiden');
    }, 1000);
});

btnSecContacto.addEventListener('click', () => {
    intTransition.classList.remove('hiden');

    setTimeout(() => {
        intTransition.classList.add('animation-courtine');
    }, 50);

    setTimeout(() => {
        secHome.classList.add('hiden');
        secInfo.classList.add('hiden');
        secVideo.classList.add('hiden');
        secDesarrollo.classList.add('hiden');
        secContacto.classList.remove('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);

    setTimeout(() => {
        intTransition.classList.add('hiden');
    }, 1000);
});