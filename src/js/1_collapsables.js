/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable strict */
/************* Colapsables*************/

function collapseDesign() {
  designForm.classList.add('collapsed');
}
function openDesign() {
  designForm.classList.remove('collapsed');
}

function collapseFill() {
  fillForm.classList.add('collapsed');
}
function openFill() {
  fillForm.classList.remove('collapsed');
}

function collapseShare() {
  shareForm.classList.add('collapsed');
}
function openShare() {
  shareForm.classList.remove('collapsed');
}

function handleClickDesign(event) {
  collapseFill();
  collapseShare();
  hiddenTwitter();
  hiddenTargetWhite();
  viewTarget();
  openDesign();
}

function handleClickFill(event) {
  openFill();
  collapseDesign();
  collapseShare();
  hiddenTwitter();
  hiddenTargetWhite();
  viewTarget();
}

function handleClickShare(event) {
  collapseDesign();
  collapseFill();
  openShare();
}

design.addEventListener('click', handleClickDesign);
fill.addEventListener('click', handleClickFill);
share.addEventListener('click', handleClickShare);
