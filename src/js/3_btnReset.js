/* eslint-disable strict */
const btnReset = document.querySelector('.js-btn-reset');

btnReset.addEventListener('click',(event)=>{
    event.preventDefault();
    nameInput.value = '';
    jobInput.value = '';
    emailInput.value = '';
    telephoneInput.value = '';
    linkedinInput.value = '';
    gitInput.value = '';
});

