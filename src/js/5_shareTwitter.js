'use strict';

const createdTarget = document.querySelector('.js-createdTarget');
const targetWhite = document.querySelector('.js-createdTargetWhite');

const shareHidden = document.querySelector('.js-hidden');

function changeTarget(){
  createdTarget.classList.add('hidden');
}
function changeTargetWhite(){
  targetWhite.classList.remove('hidden');
}
function viewTwitter(){
  shareHidden.classList.remove('hidden');
}

function handleClickTarget(){
  changeTarget();
  changeTargetWhite();
  viewTwitter();
}

createdTarget.addEventListener('click', handleClickTarget);