// CONTENEDOR DEL FORMULARIO

const msfContainer = document.querySelector('#msf-container');

// PASOS FORMULARIO

const msfContent = msfContainer.querySelectorAll('.msf-content');

// BOTONES 

const msfBtnsNext = msfContainer.querySelectorAll('.msf-btn-next');
const msfBtnsPrev = msfContainer.querySelectorAll('.msf-btn-prev');
const msfBtnSubmit = msfContainer.querySelector('#msf-btn_submit');

// FUNCION BOTON ANTERIOR

for (let h = 0; h < msfBtnsPrev.length ; h++){
    msfBtnsPrev[h].addEventListener('click',()=>{
        for (let i = 0; i < msfContent.length; i++){
            if(msfContent[i].classList.contains('msf_active')){
                msfContent[i].style = 'margin-left: 100%';
                msfContent[i].classList.toggle('msf_active');
                msfContent[i].classList.toggle('msf_inactive');
                i--;
                msfContent[i].style = 'margin-left: 0';
                msfContent[i].classList.toggle('msf_active');
                msfContent[i].classList.toggle('msf_inactive');
            };
        };
    });
};

// FUNCION BOTON SIGUIENTE

for (let h = 0; h < msfBtnsNext.length ; h++){
    msfBtnsNext[h].addEventListener('click',()=>{
        for (let i = 0; i < msfContent.length; i++){
            if(msfContent[i].classList.contains('msf_active')){
                msfContent[i].style = 'margin-left: -100%';
                msfContent[i].classList.toggle('msf_active');
                msfContent[i].classList.toggle('msf_inactive');
                i++;
                msfContent[i].style = 'margin-left: 0';
                msfContent[i].classList.toggle('msf_active');
                msfContent[i].classList.toggle('msf_inactive');
            };
        };
    });
};

// FUNCION BOTON SUBMIT

msfBtnSubmit.addEventListener('click',()=> alert('Datos cargados correctamente!'));
