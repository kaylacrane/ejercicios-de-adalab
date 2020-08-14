"use strict";
/*Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.*/
let results = document.querySelector(".results");
function thisFunction(a, b, c, d) {
  return (a + b + c + d) / 4;
}
console.log(thisFunction(10, 12, 15, 13));
results.innerHTML = thisFunction(10, 12, 15, 13);
