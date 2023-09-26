/* eslint-disable no-undef */
/* eslint-disable strict */
/*************** Colores ************* */

// 1.hacer click addEventlistener sobre los tres botones
// 2. hacer la funcion manejadora
// 3. dentro de cada funcion manejadora quitar dos clase y poner una

function handlepaletteOne(event) {
  event.preventDefault();
  cardPreview.classList.add('paletteOne');
  cardPreview.classList.remove('paletteTwo');
  cardPreview.classList.remove('paletteThree');
  cardPreview.classList.remove('paletteFour');
}
function handlepaletteTwo(event) {
  event.preventDefault();
  cardPreview.classList.remove('paletteOne');
  cardPreview.classList.add('paletteTwo');
  cardPreview.classList.remove('paletteThree');
  cardPreview.classList.remove('paletteFour');
}
function handlepaletteThree(event) {
  event.preventDefault();
  cardPreview.classList.remove('paletteOne');
  cardPreview.classList.remove('paletteTwo');
  cardPreview.classList.add('paletteThree');
  cardPreview.classList.remove('paletteFour');
}

function handlepaletteFour(event) {
  event.preventDefault();
  cardPreview.classList.remove('paletteOne');
  cardPreview.classList.remove('paletteTwo');
  cardPreview.classList.remove('paletteThree');
  cardPreview.classList.add('paletteFour');
}

paletteOne.addEventListener('change', handlepaletteOne);
paletteTwo.addEventListener('change', handlepaletteTwo);
paletteThree.addEventListener('change', handlepaletteThree);
paletteFour.addEventListener('change', handlepaletteFour);
