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
const errorText = document.querySelector('.js-text');

const errorMessage = document.querySelector('.js-error-message');

const previewLStorage = JSON.parse(localStorage.getItem('previewLS'));
const fr = new FileReader();

const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

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
//Local Storage
function formStorage() {
  if (previewLStorage) {
    nameInput.value = previewLStorage.name;
    namePreview.innerHTML = previewLStorage.name;
    if (nameInput.value === '') {
      namePreview.innerHTML = 'Nombre Apellido';
    }
    jobInput.value = previewLStorage.job;
    jobPreview.innerHTML = previewLStorage.job;
    if (jobInput.value === '') {
      jobPreview.innerHTML = 'Front-end developer';
    }
    telephoneInput.value = previewLStorage.phone;
    emailInput.value = previewLStorage.email;
    linkedinInput.value = previewLStorage.linkedin;
    gitInput.value = previewLStorage.github;
    data.photo = previewLStorage.photo;
    profileImage.style.backgroundImage = `url(${previewLStorage.photo})`;
    profilePreview.style.backgroundImage = `url(${previewLStorage.photo})`;
    data.palette = previewLStorage.palette;
    if (previewLStorage.palette === 1) {
      handlepaletteOne();
      paletteOne.checked = true;
    } else if (previewLStorage.palette === 2) {
      handlepaletteTwo();
      paletteTwo.checked = true;
    } else if (previewLStorage.palette === 3) {
      handlepaletteThree();
      paletteThree.checked = true;
    } else {
      handlepaletteFour();
      paletteFour.checked = true;
    }
    //writeImage();
  }
}
formStorage();
// Tarjeta creada y twitter

function handleClickTarget() {
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      if (responseJSON.success === false) {
        errorText.classList.add('hidden');
        messageBox.innerHTML =
          '¡Algo ha ido mal! Cuidado, Miércoles está preparando la guillotina asi que revisa los campos...';
        document.querySelector('.js-twitter-button').classList.add('hidden');
        if (responseJSON.error === 'Database error: ER_DATA_TOO_LONG') {
          errorMessage.innerHTML =
            'La imagen es demasiado grande. Prueba con una de 40kb o menos';
        }
      } else {
        localStorage.setItem('previewLS', JSON.stringify(data));
        targetWhite.classList.remove('hidden');
        errorText.classList.remove('hidden');
        document.querySelector('.js-twitter-button').classList.remove('hidden');
        const cardURLString = responseJSON.cardURL.toString();
        messageBox.href = cardURLString;
        generateTweetURL(cardURLString);
        messageBox.innerHTML = cardURLString;
      }
    });

  hiddenTarget();
  viewTargetWhite();
  viewTwitter();
}

function generateTweetURL(enlaceGenerado) {
  if (typeof enlaceGenerado === 'string') {
    const textoTweet = 'Mira mi tarjeta de visita digital: ' + enlaceGenerado;
    const tweetURL =
      'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textoTweet);
    const twitterShareLink = document.getElementById('twitterShareLink');
    twitterShareLink.href = tweetURL;
  }
}

twitterShareLink.addEventListener('click', generateTweetURL);

generateTweetURL();

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
