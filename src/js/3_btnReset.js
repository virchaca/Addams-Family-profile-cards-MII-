/* eslint-disable no-undef */
/* eslint-disable strict */
/************* Botón Reset *************/

function handleClickDelete(event) {
  event.preventDefault();
  nameInput.value = '';
  jobInput.value = '';
  telephoneInput.value = '';
  telephonePreview.href = '#';
  emailInput.value = '';
  emailPreview.href = '#';
  linkedinInput.value = '';
  linkedinPreview.href = '#';
  gitInput.value = '';
  gitPreview.href = '#';
  namePreview.innerHTML = 'Nombre Apellido';
  jobPreview.innerHTML = 'Front-end developer';
  handlepaletteOne(event);
  paletteOne.checked = true;
  profileImage.style.backgroundImage = '';
  profilePreview.style.backgroundImage = '';
  targetWhite.classList.add('hidden');
  createdTarget.classList.remove('hidden');
  shareHidden.classList.add('hidden');
  localStorage.setItem('previewLS', JSON.stringify(data));
}

btnReset.addEventListener('click', handleClickDelete);
