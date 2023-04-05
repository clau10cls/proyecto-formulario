// CONTENEDOR DEL FORMULARIO

const containerMsf = document.querySelector('#container-msf');

/* 

const msfStep1 = containerMsf.querySelector('#msf-step1');
const msfStep2 = containerMsf.querySelector('#msf-step2');
const msfStep3 = containerMsf.querySelector('#msf-step3');
const msfStep4 = containerMsf.querySelector('#msf-step4'); 

*/

// ARRAY DE PASOS FORMULARIO

const contentmsf = containerMsf.querySelectorAll('.content-msf');

// BOTONES

const msf1BtnNext = containerMsf.querySelector('#msf1-btn_next')

const msf2BtnPrev = containerMsf.querySelector('#msf2-btn_prev')
const msf2BtnNext = containerMsf.querySelector('#msf2-btn_next')

const msf3BtnPrev = containerMsf.querySelector('#msf3-btn_prev')
const msf3BtnNext = containerMsf.querySelector('#msf3-btn_next')

const msf4BtnPrev = containerMsf.querySelector('#msf4-btn_prev')
const msf4BtnSubmit = containerMsf.querySelector('#msf4-btn_submit')

// FUNCION BOTONES PASO 1

msf1BtnNext.addEventListener('click',()=>{
    for (let i = 0; i < contentmsf.length; i++){
        if(contentmsf[i].classList.contains('msf_active')){
            contentmsf[i].style = 'margin-left: -100%';
            contentmsf[i].classList.remove('msf_active');
            contentmsf[i].classList.add('msf_inactive');
            i++;
            contentmsf[i].style = 'margin-left: 0';
            contentmsf[i].classList.add('msf_active');
            contentmsf[i].classList.remove('msf_inactive');
        }
    };
})

// FUNCION BOTONES PASO 2

msf2BtnPrev.addEventListener('click',()=>{
    for (let i = 0; i < contentmsf.length; i++){
        if(contentmsf[i].classList.contains('msf_active')){
            contentmsf[i].style = 'margin-left: 100%';
            contentmsf[i].classList.remove('msf_active');
            contentmsf[i].classList.add('msf_inactive');
            i--;
            contentmsf[i].style = 'margin-left: 0';
            contentmsf[i].classList.add('msf_active');
            contentmsf[i].classList.remove('msf_inactive');
        }
    };
})

msf2BtnNext.addEventListener('click',()=>{
    for (let i = 0; i < contentmsf.length; i++){
        if(contentmsf[i].classList.contains('msf_active')){
            contentmsf[i].style = 'margin-left: -100%';
            contentmsf[i].classList.remove('msf_active');
            contentmsf[i].classList.add('msf_inactive');
            i++;
            contentmsf[i].style = 'margin-left: 0';
            contentmsf[i].classList.add('msf_active');
            contentmsf[i].classList.remove('msf_inactive');
        }
    };
})

// FUNCION BOTONES PASO 3

msf3BtnPrev.addEventListener('click',()=>{
    for (let i = 0; i < contentmsf.length; i++){
        if(contentmsf[i].classList.contains('msf_active')){
            contentmsf[i].style = 'margin-left: 100%';
            contentmsf[i].classList.remove('msf_active');
            contentmsf[i].classList.add('msf_inactive');
            i--;
            contentmsf[i].style = 'margin-left: 0';
            contentmsf[i].classList.add('msf_active');
            contentmsf[i].classList.remove('msf_inactive');
        }
    };
})

msf3BtnNext.addEventListener('click',()=>{
    for (let i = 0; i < contentmsf.length; i++){
        if(contentmsf[i].classList.contains('msf_active')){
            contentmsf[i].style = 'margin-left: -100%';
            contentmsf[i].classList.remove('msf_active');
            contentmsf[i].classList.add('msf_inactive');
            i++;
            contentmsf[i].style = 'margin-left: 0';
            contentmsf[i].classList.add('msf_active');
            contentmsf[i].classList.remove('msf_inactive');
        }
    };
})

// FUNCION BOTONES PASO 4

msf4BtnPrev.addEventListener('click',()=>{
    for (let i = 0; i < contentmsf.length; i++){
        if(contentmsf[i].classList.contains('msf_active')){
            contentmsf[i].style = 'margin-left: 100%';
            contentmsf[i].classList.remove('msf_active');
            contentmsf[i].classList.add('msf_inactive');
            i--;
            contentmsf[i].style = 'margin-left: 0';
            contentmsf[i].classList.add('msf_active');
            contentmsf[i].classList.remove('msf_inactive');
        }
    };
})

msf4BtnSubmit.addEventListener('click',()=> alert('Datos cargados correctamente!'));