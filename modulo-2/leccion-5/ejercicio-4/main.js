'use strict';
/*Cambiar el color de fondo de la página cuando se haga scroll. Para ello tenemos que:
Añadir un div con suficiente texto dentro para que haya scroll. Podéis usar el siguiente comando de emmet para hacerlo p*50>lorem.
Preparar classes para cambiar el color de fondo del div.
Escuchar el evento scroll sobre la ventana window.
Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.
Nota: window.scrollY nos devuelve la posición del scroll vertical.*/

console.log(window);
const scrollWindow = document.querySelector('div');

function changeColor() {
  if (window.scrollY > 250) {
    scrollWindow.classList.add('pink');
    scrollWindow.classList.remove('blue');
  } else {
    scrollWindow.classList.remove('pink');
    scrollWindow.classList.add('blue');
  }
}

window.addEventListener('scroll', changeColor);
