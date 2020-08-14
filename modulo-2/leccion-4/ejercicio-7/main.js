"use strict";
/*Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.
Ejecutala e imprime el resultado para comprobar que funciona.*/
const results = document.querySelector(".results");

function evenOrOdd(x) {
  return x % 2 === 0;
}
/* to show in HTML */
results.innerHTML = evenOrOdd(7);
/* to show results in console */
console.log(evenOrOdd(7));
