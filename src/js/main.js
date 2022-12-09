window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('end-preloader');

    setTimeout(() => {
        preloader.classList.add('hiden');
    }, 4000)
})

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
const secVistas = document.getElementById('secVistas');
const secWorkingCenter = document.getElementById('secWorkingCenter');
const secShopingCenter = document.getElementById('secShopingCenter');
/* Seccion Desarrollo */
const secPlantasHome = document.getElementById('secPlantasHome');
const secDeptoA = document.getElementById('secDeptoA');
const secDeptoB = document.getElementById('secDeptoB');
const secDeptoC = document.getElementById('secDeptoC');

/* Textos Departamento A */
const txtDeptoAOpcionA = document.getElementById('txtDeptoAOpcionA');
const txtDeptoAOpcionB = document.getElementById('txtDeptoAOpcionB');
const txtDeptoAOpcionC = document.getElementById('txtDeptoAOpcionC');
const txtDeptoAOpcionD = document.getElementById('txtDeptoAOpcionD');
const txtDeptoAOpcionE = document.getElementById('txtDeptoAOpcionE');
const txtDeptoAOpcionF = document.getElementById('txtDeptoAOpcionF');

/* Botones Departamento A */
const btnDeptoAOpcionA = document.getElementById('btnDeptoAOpcionA');
const btnDeptoAOpcionB = document.getElementById('btnDeptoAOpcionB');
const btnDeptoAOpcionC1 = document.getElementById('btnDeptoAOpcionC1');
const btnDeptoAOpcionC2 = document.getElementById('btnDeptoAOpcionC2');
const btnDeptoAOpcionD = document.getElementById('btnDeptoAOpcionD');
const btnDeptoAOpcionE = document.getElementById('btnDeptoAOpcionE');
const btnDeptoAOpcionF = document.getElementById('btnDeptoAOpcionF');

/* Textos Departamento B */
const txtDeptoBOpcionA = document.getElementById('txtDeptoBOpcionA');
const txtDeptoBOpcionB = document.getElementById('txtDeptoBOpcionB');
const txtDeptoBOpcionC = document.getElementById('txtDeptoBOpcionC');
const txtDeptoBOpcionD = document.getElementById('txtDeptoBOpcionD');
const txtDeptoBOpcionE = document.getElementById('txtDeptoBOpcionE');

/* Botones Departamento B */
const btnDeptoBOpcionA = document.getElementById('btnDeptoBOpcionA');
const btnDeptoBOpcionB = document.getElementById('btnDeptoBOpcionB');
const btnDeptoBOpcionC = document.getElementById('btnDeptoBOpcionC');
const btnDeptoBOpcionD = document.getElementById('btnDeptoBOpcionD');
const btnDeptoBOpcionE = document.getElementById('btnDeptoBOpcionE');

/* Textos Departamento C */
const txtDeptoCOpcionA = document.getElementById('txtDeptoCOpcionA');
const txtDeptoCOpcionB = document.getElementById('txtDeptoCOpcionB');
const txtDeptoCOpcionC = document.getElementById('txtDeptoCOpcionC');
const txtDeptoCOpcionD = document.getElementById('txtDeptoCOpcionD');
const txtDeptoCOpcionE = document.getElementById('txtDeptoCOpcionE');
const txtDeptoCOpcionF = document.getElementById('txtDeptoCOpcionF');
const txtDeptoCOpcionG = document.getElementById('txtDeptoCOpcionG');

/* Botones Departamento C */
const btnDeptoCOpcionA = document.getElementById('btnDeptoCOpcionA');
const btnDeptoCOpcionB = document.getElementById('btnDeptoCOpcionB');
const btnDeptoCOpcionC = document.getElementById('btnDeptoCOpcionC');
const btnDeptoCOpcionD1 = document.getElementById('btnDeptoCOpcionD1');
const btnDeptoCOpcionD2 = document.getElementById('btnDeptoCOpcionD2');
const btnDeptoCOpcionE = document.getElementById('btnDeptoCOpcionE');
const btnDeptoCOpcionF1 = document.getElementById('btnDeptoCOpcionF1');
const btnDeptoCOpcionF2 = document.getElementById('btnDeptoCOpcionF2');
const btnDeptoCOpcionG = document.getElementById('btnDeptoCOpcionG');

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

/* Video Manifiesto */
const btnPlay = document.getElementById('btnPlay');
const videoTitle = document.getElementById('videoTitle');
const videoManifiesto = document.getElementById('videoManifiesto');


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

function resetStyleOptionDepto() {
    const selectedOptions = document.querySelectorAll('.room-option-selected');

    selectedOptions.forEach((optionsChecked) => {
        optionsChecked.classList.remove('room-option-selected')
    });
    console.log({selectedOptions});
}

function animateVideoItems(opacity, isActive) {
    btnPlay.style.opacity = opacity;

    if(isActive) {
        btnPlay.classList.add('hiden');
        videoTitle.classList.add('transition-title-video');
    }
    else {
        btnPlay.classList.remove('hiden');
        videoTitle.classList.remove('transition-title-video');
    }
}


/* Interacción de los botones flotantes */
btnMenu.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        if(!secVideo.classList.contains('hiden')) {
            videoManifiesto.load();
            animateVideoItems(1, false);
        }

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
        if(secVistas.classList.contains('show-gallery')){
            secVistas.classList.remove('show-gallery');
        }

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
        resetStyleOptionDepto();
        
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

/* Interaccion del boton de video */
btnPlay.addEventListener('click', () => {
    videoManifiesto.play();
});

videoManifiesto.addEventListener('play', () => {
    animateVideoItems(0, true);
});

videoManifiesto.addEventListener('pause', () => {
    animateVideoItems(1, false);
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

btnVistas.addEventListener('click', () => {
    curtainAnimation();

    setTimeout(() => {
        changePosition(contentBtnBackDesarrollo, '2', '6%', '3%');
        changePosition(contentBtnMenu, '-1');

        secDesarrolloHome.classList.add('hiden');
        secLivingCenter.classList.add('hiden');
        secAnemidades.classList.add('hiden');
        secPlantas.classList.add('hiden');
        secVistas.classList.add('show-gallery');
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


/* Interacción de los botones del Departamento A */
btnDeptoAOpcionA.addEventListener('click', () => {
    txtDeptoAOpcionA.classList.add('room-option-selected');
    txtDeptoAOpcionB.classList.remove('room-option-selected');
    txtDeptoAOpcionC.classList.remove('room-option-selected');
    txtDeptoAOpcionD.classList.remove('room-option-selected');
    txtDeptoAOpcionE.classList.remove('room-option-selected');
    txtDeptoAOpcionF.classList.remove('room-option-selected');
});

btnDeptoAOpcionB.addEventListener('click', () => {
    txtDeptoAOpcionA.classList.remove('room-option-selected');
    txtDeptoAOpcionB.classList.add('room-option-selected');
    txtDeptoAOpcionC.classList.remove('room-option-selected');
    txtDeptoAOpcionD.classList.remove('room-option-selected');
    txtDeptoAOpcionE.classList.remove('room-option-selected');
    txtDeptoAOpcionF.classList.remove('room-option-selected');
});

btnDeptoAOpcionC1.addEventListener('click', () => {
    txtDeptoAOpcionA.classList.remove('room-option-selected');
    txtDeptoAOpcionB.classList.remove('room-option-selected');
    txtDeptoAOpcionC.classList.add('room-option-selected');
    txtDeptoAOpcionD.classList.remove('room-option-selected');
    txtDeptoAOpcionE.classList.remove('room-option-selected');
    txtDeptoAOpcionF.classList.remove('room-option-selected');
});

btnDeptoAOpcionC2.addEventListener('click', () => {
    txtDeptoAOpcionA.classList.remove('room-option-selected');
    txtDeptoAOpcionB.classList.remove('room-option-selected');
    txtDeptoAOpcionC.classList.add('room-option-selected');
    txtDeptoAOpcionD.classList.remove('room-option-selected');
    txtDeptoAOpcionE.classList.remove('room-option-selected');
    txtDeptoAOpcionF.classList.remove('room-option-selected');
});

btnDeptoAOpcionD.addEventListener('click', () => {
    txtDeptoAOpcionA.classList.remove('room-option-selected');
    txtDeptoAOpcionB.classList.remove('room-option-selected');
    txtDeptoAOpcionC.classList.remove('room-option-selected');
    txtDeptoAOpcionD.classList.add('room-option-selected');
    txtDeptoAOpcionE.classList.remove('room-option-selected');
    txtDeptoAOpcionF.classList.remove('room-option-selected');
});

btnDeptoAOpcionE.addEventListener('click', () => {
    txtDeptoAOpcionA.classList.remove('room-option-selected');
    txtDeptoAOpcionB.classList.remove('room-option-selected');
    txtDeptoAOpcionC.classList.remove('room-option-selected');
    txtDeptoAOpcionD.classList.remove('room-option-selected');
    txtDeptoAOpcionE.classList.add('room-option-selected');
    txtDeptoAOpcionF.classList.remove('room-option-selected');
});

btnDeptoAOpcionF.addEventListener('click', () => {
    txtDeptoAOpcionA.classList.remove('room-option-selected');
    txtDeptoAOpcionB.classList.remove('room-option-selected');
    txtDeptoAOpcionC.classList.remove('room-option-selected');
    txtDeptoAOpcionD.classList.remove('room-option-selected');
    txtDeptoAOpcionE.classList.remove('room-option-selected');
    txtDeptoAOpcionF.classList.add('room-option-selected');
});

/* Interacción de los botones del Departamento B */
btnDeptoBOpcionA.addEventListener('click', () => {
    txtDeptoBOpcionA.classList.add('room-option-selected');
    txtDeptoBOpcionB.classList.remove('room-option-selected');
    txtDeptoBOpcionC.classList.remove('room-option-selected');
    txtDeptoBOpcionD.classList.remove('room-option-selected');
    txtDeptoBOpcionE.classList.remove('room-option-selected');
});

btnDeptoBOpcionB.addEventListener('click', () => {
    txtDeptoBOpcionA.classList.remove('room-option-selected');
    txtDeptoBOpcionB.classList.add('room-option-selected');
    txtDeptoBOpcionC.classList.remove('room-option-selected');
    txtDeptoBOpcionD.classList.remove('room-option-selected');
    txtDeptoBOpcionE.classList.remove('room-option-selected');
});

btnDeptoBOpcionC.addEventListener('click', () => {
    txtDeptoBOpcionA.classList.remove('room-option-selected');
    txtDeptoBOpcionB.classList.remove('room-option-selected');
    txtDeptoBOpcionC.classList.add('room-option-selected');
    txtDeptoBOpcionD.classList.remove('room-option-selected');
    txtDeptoBOpcionE.classList.remove('room-option-selected');
});

btnDeptoBOpcionD.addEventListener('click', () => {
    txtDeptoBOpcionA.classList.remove('room-option-selected');
    txtDeptoBOpcionB.classList.remove('room-option-selected');
    txtDeptoBOpcionC.classList.remove('room-option-selected');
    txtDeptoBOpcionD.classList.add('room-option-selected');
    txtDeptoBOpcionE.classList.remove('room-option-selected');
});

btnDeptoBOpcionE.addEventListener('click', () => {
    txtDeptoBOpcionA.classList.remove('room-option-selected');
    txtDeptoBOpcionB.classList.remove('room-option-selected');
    txtDeptoBOpcionC.classList.remove('room-option-selected');
    txtDeptoBOpcionD.classList.remove('room-option-selected');
    txtDeptoBOpcionE.classList.add('room-option-selected');
});

/* Interacción de los botones del Departamento C */
btnDeptoCOpcionA.addEventListener('click', () => {
    txtDeptoCOpcionA.classList.add('room-option-selected');
    txtDeptoCOpcionB.classList.remove('room-option-selected');
    txtDeptoCOpcionC.classList.remove('room-option-selected');
    txtDeptoCOpcionD.classList.remove('room-option-selected');
    txtDeptoCOpcionE.classList.remove('room-option-selected');
    txtDeptoCOpcionF.classList.remove('room-option-selected');
    txtDeptoCOpcionG.classList.remove('room-option-selected');
});

btnDeptoCOpcionB.addEventListener('click', () => {
    txtDeptoCOpcionA.classList.remove('room-option-selected');
    txtDeptoCOpcionB.classList.add('room-option-selected');
    txtDeptoCOpcionC.classList.remove('room-option-selected');
    txtDeptoCOpcionD.classList.remove('room-option-selected');
    txtDeptoCOpcionE.classList.remove('room-option-selected');
    txtDeptoCOpcionF.classList.remove('room-option-selected');
    txtDeptoCOpcionG.classList.remove('room-option-selected');
});

btnDeptoCOpcionC.addEventListener('click', () => {
    txtDeptoCOpcionA.classList.remove('room-option-selected');
    txtDeptoCOpcionB.classList.remove('room-option-selected');
    txtDeptoCOpcionC.classList.add('room-option-selected');
    txtDeptoCOpcionD.classList.remove('room-option-selected');
    txtDeptoCOpcionE.classList.remove('room-option-selected');
    txtDeptoCOpcionF.classList.remove('room-option-selected');
    txtDeptoCOpcionG.classList.remove('room-option-selected');
});

btnDeptoCOpcionD1.addEventListener('click', () => {
    txtDeptoCOpcionA.classList.remove('room-option-selected');
    txtDeptoCOpcionB.classList.remove('room-option-selected');
    txtDeptoCOpcionC.classList.remove('room-option-selected');
    txtDeptoCOpcionD.classList.add('room-option-selected');
    txtDeptoCOpcionE.classList.remove('room-option-selected');
    txtDeptoCOpcionF.classList.remove('room-option-selected');
    txtDeptoCOpcionG.classList.remove('room-option-selected');
});

btnDeptoCOpcionD2.addEventListener('click', () => {
    txtDeptoCOpcionA.classList.remove('room-option-selected');
    txtDeptoCOpcionB.classList.remove('room-option-selected');
    txtDeptoCOpcionC.classList.remove('room-option-selected');
    txtDeptoCOpcionD.classList.add('room-option-selected');
    txtDeptoCOpcionE.classList.remove('room-option-selected');
    txtDeptoCOpcionF.classList.remove('room-option-selected');
    txtDeptoCOpcionG.classList.remove('room-option-selected');
});

btnDeptoCOpcionE.addEventListener('click', () => {
    txtDeptoCOpcionA.classList.remove('room-option-selected');
    txtDeptoCOpcionB.classList.remove('room-option-selected');
    txtDeptoCOpcionC.classList.remove('room-option-selected');
    txtDeptoCOpcionD.classList.remove('room-option-selected');
    txtDeptoCOpcionE.classList.add('room-option-selected');
    txtDeptoCOpcionF.classList.remove('room-option-selected');
    txtDeptoCOpcionG.classList.remove('room-option-selected');
});

btnDeptoCOpcionF1.addEventListener('click', () => {
    txtDeptoCOpcionA.classList.remove('room-option-selected');
    txtDeptoCOpcionB.classList.remove('room-option-selected');
    txtDeptoCOpcionC.classList.remove('room-option-selected');
    txtDeptoCOpcionD.classList.remove('room-option-selected');
    txtDeptoCOpcionE.classList.remove('room-option-selected');
    txtDeptoCOpcionF.classList.add('room-option-selected');
    txtDeptoCOpcionG.classList.remove('room-option-selected');
});

btnDeptoCOpcionF2.addEventListener('click', () => {
    txtDeptoCOpcionA.classList.remove('room-option-selected');
    txtDeptoCOpcionB.classList.remove('room-option-selected');
    txtDeptoCOpcionC.classList.remove('room-option-selected');
    txtDeptoCOpcionD.classList.remove('room-option-selected');
    txtDeptoCOpcionE.classList.remove('room-option-selected');
    txtDeptoCOpcionF.classList.add('room-option-selected');
    txtDeptoCOpcionG.classList.remove('room-option-selected');
});

btnDeptoCOpcionG.addEventListener('click', () => {
    txtDeptoCOpcionA.classList.remove('room-option-selected');
    txtDeptoCOpcionB.classList.remove('room-option-selected');
    txtDeptoCOpcionC.classList.remove('room-option-selected');
    txtDeptoCOpcionD.classList.remove('room-option-selected');
    txtDeptoCOpcionE.classList.remove('room-option-selected');
    txtDeptoCOpcionF.classList.remove('room-option-selected');
    txtDeptoCOpcionG.classList.add('room-option-selected');
});