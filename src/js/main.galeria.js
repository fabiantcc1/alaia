window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('end-preloader');

    setTimeout(() => {
        preloader.classList.add('hiden');
    }, 2000)
})
/* Botones flotantes */
const contentBtnMenu2 = document.getElementById('contentBtnMenu2');
const btnMenu2 = document.getElementById('btnMenu2');

/* Seccion de transición para las interfaces */
const intTransition = document.getElementById('intTransition');

/* Interacción de los botones flotantes */
btnMenu2.addEventListener('click', () => {
    intTransition.classList.remove('hiden');

    setTimeout(() => {
        intTransition.classList.add('animation-courtine');
    }, 50);

    setTimeout(() => {
        location.href = './index.html';
    }, 500);
});