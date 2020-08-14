'use strict';

/*
 Vamos a seguir trabajando sobre el ejercicio 4. El formulario nos ha quedado un poco pobretón, añadamos al menos un campo más para el apellido.
¡Pero, ojo! Queremos tener nuestros datos agrupaditos. El reto es guardar y recoger del localStorage un objeto con dos propiedades, nombre y apellido.
¡A por ello!
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
  if (savedData !== null) {
    textInputs[0].value = savedData.firstName;
    textInputs[1].value = savedData.lastName;
  }
}
