/* eslint-disable no-undef */
/* eslint-disable strict */
/*************preview*************/

const previewLStorage = JSON.parse(localStorage.getItem("previewLS"));

if (previewLStorage!== null){
  nameInput.value = previewLStorage.name;
  jobInput.value = previewLStorage.job;
  telephoneInput.value = previewLStorage.phone;
  emailInput.value = previewLStorage.email;
  linkedinInput.value = previewLStorage.linkedin;
  gitInput.value = previewLStorage.github;
  data.photo = previewLStorage.photo;
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
}

function updatepreview() {
  namePreview.innerHTML = data.name;
  if (nameInput.value === '') {
    namePreview.innerHTML = 'Nombre Apellido';
  }
  jobPreview.innerHTML = data.job;
  if (jobInput.value === '') {
    jobPreview.innerHTML = 'Front-end developer';
  }
  telephonePreview.href = `tel:${data.phone}`;
  emailPreview.href = `mailto:${data.email}`;
  linkedinPreview.href = `https://www.linkedin.com/in/${data.linkedin}/`;
  gitPreview.href = `https://www.github.com/${data.github}`;

  localStorage.setItem("previewLS", JSON.stringify(data));
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
