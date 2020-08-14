'use strict';

/*
Vamos a modificar nuestra solución del ejercicio 2 para que, en lugar de seguir ejecutando la función indefinidamente, detengamos su ejecución con clearInterval.
*/

let counter = 0;

const incrementAndShowCounter = () => {
  if (counter < 12) {
    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = counter;
  } else if (counter === 12) {
    clearInterval(temp);
  }
};

let temp = setInterval(incrementAndShowCounter, 1000);
