'use strict';
/*
Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.
 */

const myNumbersDisplay = document.querySelector('.myNumbers');
let myNumbers = [];
function get100Numbers() {
  for (let index = 1; index <= 100; index++) {
    console.log(myNumbers.push(index));
  }
}

function getReversed100Numbers() {
  get100Numbers();
  console.log(myNumbers.reverse());
}

getReversed100Numbers();
