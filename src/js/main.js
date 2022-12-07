/* Secciones */
const secHome = document.getElementById('secHome');
const secInfo = document.getElementById('secInfo');
const secVideo = document.getElementById('secVideo');
const secDesarrollo = document.getElementById('secDesarrollo');
const secContacto = document.getElementById('secContacto');
/* Seccion Desarrollo */
const secDesarrolloHome = document.getElementById('secDesarrolloHome');
const secLivingCenter = document.getElementById('secLivingCenter');
const secAnemidades = document.getElementById('secAnemidades');
const secPlantas = document.getElementById('secPlantas');
const secWorkingCenter = document.getElementById('secWorkingCenter');
const secShopingCenter = document.getElementById('secShopingCenter');
/* Seccion Desarrollo */
const secPlantasHome = document.getElementById('secPlantasHome');
const secDeptoA = document.getElementById('secDeptoA');
const secDeptoB = document.getElementById('secDeptoB');
const secDeptoC = document.getElementById('secDeptoC');

/* Botones de Seccion Desarrollo */
const btnLivingCenter = document.getElementById('btnLivingCenter');
const btnAmenidades = document.getElementById('btnAmenidades');
const btnPlantas = document.getElementById('btnPlantas');
const btnVistas = document.getElementById('btnVistas');
const btnShopingCenter = document.getElementById('btnShopingCenter');
const btnWorkingCenter = document.getElementById('btnWorkingCenter');

/* Botones del Home */
const btnSecInfo = document.getElementById('btnSecInfo');
const btnSecVideo = document.getElementById('btnSecVideo');
const btnSecArquitectura = document.getElementById('btnSecArquitectura');
const btnSecContacto = document.getElementById('btnSecContacto');
const btnSecGaleria = document.getElementById('btnSecGaleria');
const btnSecDesarrollo = document.getElementById('btnSecDesarrollo');

/* Botones de Plantas */
const btnDeptoA = document.getElementById('btnDeptoA');
const btnDeptoB = document.getElementById('btnDeptoB');
const btnDeptoC = document.getElementById('btnDeptoC');

/* Botones flotantes */
const contentBtnMenu = document.getElementById('contentBtnMenu');
const btnMenu = document.getElementById('btnMenu');
const contentBtnBackDesarrollo = document.getElementById('contentBtnBackDesarrollo');
const btnBackDesarrollo = document.getElementById('btnBackDesarrollo');
const contentBtnBackPlantas = document.getElementById('contentBtnBackPlantas');
const btnBackPlantas = document.getElementById('btnBackPlantas');

/* Seccion de transición para las interfaces */
const intTransition = document.getElementById('intTransition');

/* Funciones */
function curtainAnimation(){
    intTransition.classList.remove('hiden');

    setTimeout(() => {
        intTransition.classList.add('animation-courtine');
    }, 50);

    setTimeout(() => {
        intTransition.classList.add('hiden');
    }, 1000);
}

function changePosition(button, zIndex, top = '50%', left = '50%') {
    button.style.top = top;
    button.style.left = left;
    button.style.zIndex = zIndex;
}


/* Interacción de los botones flotantes */
btnMenu.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnMenu, '-1', '70%', '85%');

        secHome.classList.remove('hiden');
        secInfo.classList.add('hiden');
        secVideo.classList.add('hiden');
        secDesarrollo.classList.add('hiden');
        secContacto.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

btnBackDesarrollo.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnMenu, '1', '70%', '85%');
        changePosition(contentBtnBackDesarrollo, '-1');

        secDesarrolloHome.classList.remove('hiden');
        secLivingCenter.classList.add('hiden');
        secAnemidades.classList.add('hiden');
        secPlantas.classList.add('hiden');
        secWorkingCenter.classList.add('hiden');
        secShopingCenter.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

btnBackPlantas.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnBackDesarrollo, '1', '10%', '85%');
        changePosition(contentBtnBackPlantas, '-1');

        secPlantasHome.classList.remove('hiden');
        secDeptoA.classList.add('hiden');
        secDeptoB.classList.add('hiden');
        secDeptoC.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

/* Interacción de botones del Home */
btnSecInfo.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnMenu, '1', '70%', '85%');

        secHome.classList.add('hiden');
        secInfo.classList.remove('hiden');
        secVideo.classList.add('hiden');
        secDesarrollo.classList.add('hiden');
        secContacto.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

btnSecVideo.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnMenu, '1', '70%', '10%');

        secHome.classList.add('hiden');
        secInfo.classList.add('hiden');
        secVideo.classList.remove('hiden');
        secDesarrollo.classList.add('hiden');
        secContacto.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

btnSecDesarrollo.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnMenu, '1', '70%', '85%');

        secHome.classList.add('hiden');
        secInfo.classList.add('hiden');
        secVideo.classList.add('hiden');
        secDesarrollo.classList.remove('hiden');
        secContacto.classList.add('hiden');
        secDesarrolloHome.classList.remove('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

btnSecContacto.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnMenu, '1', '10%', '85%');

        secHome.classList.add('hiden');
        secInfo.classList.add('hiden');
        secVideo.classList.add('hiden');
        secDesarrollo.classList.add('hiden');
        secContacto.classList.remove('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

/* Interacción de los botones de Desarollo */
btnLivingCenter.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnBackDesarrollo, '1', '71%', '3%');
        changePosition(contentBtnMenu, '-1');

        secDesarrolloHome.classList.add('hiden');
        secLivingCenter.classList.remove('hiden');
        secAnemidades.classList.add('hiden');
        secPlantas.classList.add('hiden');
        secWorkingCenter.classList.add('hiden');
        secShopingCenter.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

btnAmenidades.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnBackDesarrollo, '1', '10%', '85%');
        changePosition(contentBtnMenu, '-1');

        secDesarrolloHome.classList.add('hiden');
        secLivingCenter.classList.add('hiden');
        secAnemidades.classList.remove('hiden');
        secPlantas.classList.add('hiden');
        secWorkingCenter.classList.add('hiden');
        secShopingCenter.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

btnPlantas.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnBackDesarrollo, '1', '10%', '85%');
        changePosition(contentBtnMenu, '-1');

        secDesarrolloHome.classList.add('hiden');
        secLivingCenter.classList.add('hiden');
        secAnemidades.classList.add('hiden');
        secPlantas.classList.remove('hiden');
        secWorkingCenter.classList.add('hiden');
        secShopingCenter.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

btnWorkingCenter.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnBackDesarrollo, '1', '10%', '85%');
        changePosition(contentBtnMenu, '-1');

        secDesarrolloHome.classList.add('hiden');
        secLivingCenter.classList.add('hiden');
        secAnemidades.classList.add('hiden');
        secPlantas.classList.add('hiden');
        secWorkingCenter.classList.remove('hiden');
        secShopingCenter.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

btnShopingCenter.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnBackDesarrollo, '1', '10%', '8%');
        changePosition(contentBtnMenu, '-1');

        secDesarrolloHome.classList.add('hiden');
        secLivingCenter.classList.add('hiden');
        secAnemidades.classList.add('hiden');
        secPlantas.classList.add('hiden');
        secWorkingCenter.classList.add('hiden');
        secShopingCenter.classList.remove('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});


/* Interacción de los botones de Plantas */
btnDeptoA.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnBackPlantas, '1', '77%', '2.5%');
        changePosition(contentBtnBackDesarrollo, '-1');

        secPlantasHome.classList.add('hiden');
        secDeptoA.classList.remove('hiden');
        secDeptoB.classList.add('hiden');
        secDeptoC.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

btnDeptoB.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnBackPlantas, '1', '77%', '2.5%');
        changePosition(contentBtnBackDesarrollo, '-1');

        secPlantasHome.classList.add('hiden');
        secDeptoA.classList.add('hiden');
        secDeptoB.classList.remove('hiden');
        secDeptoC.classList.add('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});

btnDeptoC.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnBackPlantas, '1', '77%', '2.5%');
        changePosition(contentBtnBackDesarrollo, '-1');

        secPlantasHome.classList.add('hiden');
        secDeptoA.classList.add('hiden');
        secDeptoB.classList.add('hiden');
        secDeptoC.classList.remove('hiden');
        intTransition.classList.remove('animation-courtine');
    }, 500);
});