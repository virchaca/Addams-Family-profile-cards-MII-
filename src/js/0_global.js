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


const cardPreview = document.querySelector ('.js-card-preview');
const paletteOne = document.querySelector ('.js-palette-one');
const paletteTwo = document.querySelector ('.js-palette-two');
const paletteThree = document.querySelector ('.js-palette-three');


const btnReset = document.querySelector('.js-btn-reset');
const btnShare = document.querySelector('.js-btn-share');


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

const data = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

function updatepreview(){
  namePreview.innerHTML = data.name;
  if (nameInput.value === ''){
    namePreview.innerHTML = 'Nombre Apellido';
  }
  jobPreview.innerHTML = data.job;
  if (jobInput.value === ''){
    jobPreview.innerHTML = 'Front-end developer';
  }
  telephonePreview.href = `tel:${data.phone}`;
  emailPreview.href = `mailto:${data.email}`;
  linkedinPreview.href = `https://www.linkedin.com/in/${data.linkedin}/`;
  gitPreview.href = `https://www.github.com/${data.github}`;
}

function handleInputName() {
  data.name = nameInput.value;
  updatepreview();
}

function handleInputJob() {
  data.job = jobInput.value;
  updatepreview();
}
function handleInputPhone() {
  data.phone = telephoneInput.value;
  updatepreview();
}
function handleInputEmail() {
  data.email = emailInput.value;
  updatepreview();
}
function handleInputLinkedin() {
  data.linkedin = linkedinInput.value;
  updatepreview();
}
function handleInputGit() {
  data.github = gitInput.value;
  updatepreview();
}

nameInput.addEventListener('input', handleInputName);
jobInput.addEventListener('input', handleInputJob);
telephoneInput.addEventListener('input', handleInputPhone);
emailInput.addEventListener('input', handleInputEmail);
linkedinInput.addEventListener('input', handleInputLinkedin);
gitInput.addEventListener('input', handleInputGit);

/*************** Colores ************* */

// 1.hacer click addEventlistener sobre los tres botones
// 2. hacer la funcion manejadora
// 3. dentro de cada funcion manejadora quitar dos clase y poner una


function handlepaletteOne(event){
  event.preventDefault();
  cardPreview.classList.add ('paletteOne');
  cardPreview.classList.remove ('paletteTwo');
  cardPreview.classList.remove ('paletteThree');
}
function handlepaletteTwo(event){
  event.preventDefault();
  cardPreview.classList.remove ('paletteOne');
  cardPreview.classList.add ('paletteTwo');
  cardPreview.classList.remove ('paletteThree');
}
function handlepaletteThree(event){
  event.preventDefault();
  cardPreview.classList.remove ('paletteOne');
  cardPreview.classList.remove('paletteTwo');
  cardPreview.classList.add ('paletteThree');
}

paletteOne.addEventListener('change', handlepaletteOne);
paletteTwo.addEventListener('change', handlepaletteTwo);
paletteThree.addEventListener('change', handlepaletteThree);


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