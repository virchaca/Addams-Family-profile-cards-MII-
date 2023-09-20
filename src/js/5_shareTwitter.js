'use strict';

const createdTarget = document.querySelector('.js-createdTarget');
const targetWhite = document.querySelector('.js-createdTargetWhite');

const shareHidden = document.querySelector('.js-hidden');

function hiddenTarget(){
  createdTarget.classList.add('hidden');
}
function viewTargetWhite(){
  targetWhite.classList.remove('hidden');
}
function viewTwitter(){
  shareHidden.classList.remove('hidden');
}

function handleClickTarget(){
  hiddenTarget();
  viewTargetWhite();
  viewTwitter();
}

createdTarget.addEventListener('click', handleClickTarget);