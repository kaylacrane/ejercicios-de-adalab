'use strict';

/*
 Vamos a preparar una página sencilla, con un título, un par de párrafos y un selector de tema. Para hacer el selector:
- Añadiremos dos radio buttons para poder elegir entre claro y oscuro.
- Prepararemos dos clases de css: una pondrá el fondo claro y el texto oscuro, y la otra pondrá el fondo oscuro y el texto claro.
- Aplicaremos a nuestra página una clase u otra según la selección de la usuaria, apoyándonos en el value del input seleccionado.
- Paralelamente cada vez que la usuaria elija un tema, guardaremos esta información en localStorage.
- Al cargar la página buscaremos en localStorage el tema seleccionado en la última visita y lo aplicaremos sin que la usuaria tenga que realizar ninguna acción.
*/

const radioInputs = document.querySelectorAll('.radioButtons');
const noThemeMsg = document.querySelector('.noTheme');

/* to add event listener to all inputs */
radioInputs.forEach((radioInput) => {
  radioInput.addEventListener('change', changeTheme);
});

/* event handler function to apply selected theme */
function changeTheme(ev) {
  noThemeMsg.style.opacity = '0';
  document.body.classList.remove('lightTheme', 'darkTheme');
  if (ev.currentTarget.value === 'lightTheme') {
    document.body.classList.add('lightTheme');
    localStorage.setItem('savedTheme', 'lightTheme');
  } else {
    document.body.classList.add('darkTheme');
    localStorage.setItem('savedTheme', 'darkTheme');
  }
}

window.addEventListener('load', loadLocalData);

function loadLocalData() {
  /*to check if theme was previously saved and apply it*/
  if (localStorage.getItem('savedTheme')) {
    document.body.classList.add(`${localStorage.getItem('savedTheme')}`);
    noThemeMsg.style.opacity = '1';
    /*to make radio button checked*/
    if (localStorage.getItem('savedTheme') === 'lightTheme') {
      document.querySelector('#theme1').checked = 'true';
    } else {
      document.querySelector('#theme2').checked = 'true';
    }
  } else {
    /* to show no theme message when no theme has been previously saved */
    noThemeMsg.style.display = '0';
  }
}
