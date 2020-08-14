'use strict';

/*
 Escribir datos en formularios es muy tedioso para los usuarios. ¡Vamos a cachearlos para facilitarles la vida!
- Prepara un input de texto para el nombre y un párrafo vacío
- Cada vez que la usuaria escriba su nombre (keyUp) tenemos que - pintar el valor en el párrafo y guardarlo en localStorage.
- Al recargar la página tenemos que consultar localStorage y, si hay algún nombre guardado, rellenar el input y el párrafo.
*/

const textInput = document.querySelector('.js-textInput');
const paragraph = document.querySelector('.js-paragraph');

textInput.addEventListener('keyup', processText);

function processText() {
  const text = textInput.value;
  paragraph.innerHTML = text;
  localStorage.setItem('savedText', text);
}

window.addEventListener('load', loadLocalData);

function loadLocalData() {
  if (localStorage.getItem('savedText')) {
    textInput.value = localStorage.getItem('savedText');
  } else {
    paragraph.innerHTML = 'no local storage saved';
  }
}
