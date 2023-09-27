/* eslint-disable no-undef */
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

const cardPreview = document.querySelector('.js-card-preview');
const paletteOne = document.querySelector('.js-palette-one');
const paletteTwo = document.querySelector('.js-palette-two');
const paletteThree = document.querySelector('.js-palette-three');
const paletteFour = document.querySelector('.js-palette-four');

const btnReset = document.querySelector('.js-btn-reset');
const btnShare = document.querySelector('.js-btn-share');

const createdTarget = document.querySelector('.js-createdTarget');
const targetWhite = document.querySelector('.js-createdTargetWhite');
const shareHidden = document.querySelector('.js-hidden');
const messageBox = document.querySelector('.js-message');

const data = {
  palette: '1',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

// Tarjeta creada y twitter

// const btnShare = document.querySelector('.js-btn-share');

// const createdTarget = document.querySelector('.js-createdTarget');
// const targetWhite = document.querySelector('.js-createdTargetWhite');
// const shareHidden = document.querySelector('.js-hidden');
//const messageBox = document.querySelector('.js-message');

function handleClickTarget() {
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON);
      if (responseJSON.success === false) {
        messageBox.innerHTML = 'Algo ha ido mal, revisa los campos...';
      } else {
        targetWhite.classList.remove('hidden');
        messageBox.href = responseJSON.cardURL;
        messageBox.innerHTML = responseJSON.cardURL;
        const twiterBtn = document.querySelector('.js-btnTw');
        twiterBtn.addEventListener('click', function () {
          const cardURL = encodeURIComponent(responseJSON.cardURL);
          const twitterShareURL = `https://twitter.com/intent/tweet?url=${cardURL}`;
          // Abre una ventana emergente para compartir en Twitter
          window.open(twitterShareURL, '_blank', 'width=550,height=350');
        });
      }
    });


  hiddenTarget();
  viewTargetWhite();
  viewTwitter();
}

function hiddenTarget() {
  createdTarget.classList.add('hidden');
}
function viewTarget() {
  createdTarget.classList.remove('hidden');
}

function viewTargetWhite() {
  targetWhite.classList.remove('hidden');
}
function hiddenTargetWhite() {
  targetWhite.classList.add('hidden');
}

function viewTwitter() {
  shareHidden.classList.remove('hidden');
}
function hiddenTwitter() {
  shareHidden.classList.add('hidden');
}

// function handleClickTarget() {
//   hiddenTarget();
//   viewTargetWhite();
//   viewTwitter();
// }

createdTarget.addEventListener('click', handleClickTarget);
