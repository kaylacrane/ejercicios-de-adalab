'use strict';

/*
Buenas prácticas trabajando con LS
Partiendo del ejercicio anterior vamos a visitar la página y borraremos el valor del localStorage a través de las DevTools. Con el localStorage limpito, recargaremos la página para simular la primera visita de la usuaria, dónde aun no habría información sobre el nombre guardada (cacheada).
Si al realizar esta acción nos encontramos algún error tenemos que apañarlo.
A partir de ahora recuerda que siempre que recojas un dato del localStorage, deberías comprobar que existe antes de empezar a trabajar con el, y realizar una limpieza del localStorage manual para comprobar que todo funciona como esperas, haya o no datos cacheados.
*/
/*array that includes all inputs*/
const textInputs = document.querySelectorAll('.js-textInput');

/* set an event listener on all inputs at once */
textInputs.forEach((textInput) => {
  textInput.addEventListener('keyup', processAndSaveData);
});

/* set variable for object where we'll save user data (first and last name) */
let userData = {};
function processAndSaveData() {
  /*to store both first and last name inputs at once */
  textInputs.forEach((textInput) => {
    let key = textInput.id;
    userData[key] = textInput.value;
  });
  /*to store data locally in browser */
  localStorage.setItem('userData', JSON.stringify(userData));
}

/*load event listener so locally stored data will display*/
window.addEventListener('load', loadLocalData);

/* to display locally stored data if there is any*/
function loadLocalData() {
  const savedData = JSON.parse(localStorage.getItem('userData'));
  console.log(savedData.firstName);
  if (savedData.firstName && savedData.firstName != '') {
    textInputs[0].value = savedData.firstName;
  }
  if (savedData.lastName && savedData.lastName != '') {
    textInputs[1].value = savedData.lastName;
  }
}
