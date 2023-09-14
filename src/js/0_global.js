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
const telephonePreview = document.querySelector('.js-phone');
const emailPreview = document.querySelector('.js-email');
const linkedinPreview = document.querySelector('.js-linkedin');
const gitPreview = document.querySelector('.js-gitHub');


const btnReset = document.querySelector('.js-btn-reset');
const btnShare = document.querySelector('js-btn-share');



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


// telephoneInput.addEventListener('input', function () {
//   telephonePreview.href = `mailto:${telephoneInput.value}`;
// });

emailInput.addEventListener('input', function () {
  emailPreview.href = `mailto:${emailInput.value}`;
});

linkedinInput.addEventListener('input', function () {
  linkedinPreview.href = `https://www.linkedin.com/in/${linkedinInput.value}/`;
});

gitInput.addEventListener('input', function () {
  gitPreview.href = `https://www.github.com/${gitInput.value}`;
});



/************* Botón Reset *************/

function handleClickDelete(event) {
  event.preventDefault();
  nameInput.value = '';
  jobInput.value = '';
  telephoneInput.value = '';
  telephonePreview.href ='#';
  emailInput.value = '';
  emailPreview.href ='#';
  linkedinInput.value = '';
  linkedinPreview.href ='#';
  gitInput.value = '';
  gitPreview.href = '#';
  namePreview.innerHTML ='Nombre Apellido';
  jobPreview.innerHTML = 'Front-end developer';
}

btnReset.addEventListener('click', handleClickDelete);