/* eslint-disable no-unused-vars */
'use strict';

// queryselector

const design = document.querySelector('.js-designLegend');
const fill = document.querySelector('.js-fillLegend');
const share = document.querySelector('.js-shareLegend');

const designForm = document.querySelector('.js-design-form');
const fillForm = document.querySelector('.js-fill-form');
const shareForm = document.querySelector('.js-share-form');


const nameInput = document.querySelector('.js-input-name');
const jobInput = document.querySelector('.js-input-job');
const telephoneInput = document.querySelector('.js-input-phone');
const emailInput = document.querySelector('.js-input-email');
const linkedinInput = document.querySelector('.js-input-linkedin');
const gitInput = document.querySelector('.js-input-git');

const namePreview = document.querySelector('.js-name');
const jobPreview = document.querySelector('.js-job');
const phonePreview = document.querySelector('.js-phone');
const mesagePreview = document.querySelector('.js-mesage');
const linkedinPreview = document.querySelector('.js-linkedin');
const gitPreview = document.querySelector('.js-gitHub');


const btnReset = document.querySelector('.js-btn-reset');



/************* Colapsables*************/

function collapseDesign(){
  designForm.classList.add('collapsed');
}
function openDesign(){
  designForm.classList.remove('collapsed');
}


function collapseFill(){
  fillForm.classList.add('collapsed');
}
function openFill(){
  fillForm.classList.remove('collapsed');
}


function collapseShare(){
  shareForm.classList.add('collapsed');
}
function openShare(){
  shareForm.classList.remove('collapsed');
}


function handleClickDesign(event){
  collapseFill();
  collapseShare();
  openDesign();
}

function handleClickFill(event){
  openFill();
  collapseDesign();
  collapseShare();
}

function handleClickShare(event){
  collapseDesign();
  collapseFill();
  openShare();
}

design.addEventListener('click',handleClickDesign);
fill.addEventListener('click',handleClickFill);
share.addEventListener('click',handleClickShare);


/*************preview*************/

const inputElement = document.getElementById('fullName');
const nameElement = document.getElementById('nameh2');

inputElement.addEventListener('input', function() {
  nameElement.textContent = inputElement.value;
  if (inputElement.value === ''){
    namePreview.innerHTML = 'Nombre Apellido';
  }
}
);

const jobInputElement = document.getElementById('jobPosition');
const jobElement = document.getElementById('job');

jobInputElement.addEventListener('input', function() {
  jobElement.textContent = jobInputElement.value;
  if (jobInputElement.value === ''){
    jobPreview.innerHTML = 'Front-end developer';
  }
});

// const phonePreview = document.querySelector('.js-phone');
// const mesagePreview = document.querySelector('.js-mesage');
// const linkedinPreview = document.querySelector('.js-linkedin');
// const gitPreview = document.querySelector('.js-gitHub');

// const telephoneInput = document.querySelector('.js-input-phone');
// const emailInput = document.querySelector('.js-input-email');
// const linkedinInput = document.querySelector('.js-input-linkedin');
// const gitInput = document.querySelector('.js-input-git');

// telephoneInput.addEventListener ('input', function(){
//   phonePreview = telephone.value;
//   if (phonePreview === ' ') {
//     phonePreview.href = 'telephoneInput.value';
//   } else {
//     #.href = `tel:${telephonePreview}`;
//   }
// });




/************* Botón Reset *************/

function handleClickDelete(event) {
  event.preventDefault();
  nameInput.value = '';
  jobInput.value = '';
  emailInput.value = '';
  telephoneInput.value = '';
  linkedinInput.value = '';
  gitInput.value = '';
  namePreview.innerHTML ='Nombre Apellido';
  jobPreview.innerHTML = 'Front-end developer';
}

btnReset.addEventListener('click', handleClickDelete);