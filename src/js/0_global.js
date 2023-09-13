/* eslint-disable no-unused-vars */
'use strict';

// console.log ('ready :)');

const nameInput = document.querySelector('.js-input-name');
const jobInput = document.querySelector('.js-input-job');
const emailInput = document.querySelector('.js-input-email');
const telephoneInput = document.querySelector('.js-input-phone');
const linkedinInput = document.querySelector('.js-input-linkedin');
const gitInput = document.querySelector('.js-input-git');

const namePreview = document.querySelector('.js-name');

const jobPreview = document.querySelector('.js-job');

/*****************
 * funcion en los input para que se active al escribir la usuaria: CHANGE / INPUT / KEYUP
 *
 *
 //namePreview.innerHTML=nameInput.value
/*function previewCard() {
  nameInput.input
}
<input type="text" id="myInput" oninput="myFunction()">*/


function myFunction() {
  let text = nameInput.value;
  namePreview.innerHTML = text;
}

/*********************** */
const design = document.querySelector('.js-designLegend');
const fill = document.querySelector('.js-fillLegend');
const share = document.querySelector('.js-shareLegend');

const designForm = document.querySelector('.js-design-form');
const fillForm = document.querySelector('.js-fill-form');
const shareForm = document.querySelector('.js-share-form');


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

const inputElement = document.getElementById('fullName');
const nameElement = document.getElementById('nameh2');

inputElement.addEventListener('input', function() {
  nameElement.textContent = inputElement.value;
});

const jobInputElement = document.getElementById('jobPosition');
const jobElement = document.getElementById('job');

jobInputElement.addEventListener('input', function() {
  jobElement.textContent = jobInputElement.value;
});