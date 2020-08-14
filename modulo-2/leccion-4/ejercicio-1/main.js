"use strict";
/*Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando console.log().*/
let results = document.querySelector(".results");
function myFunction(a, b) {
  return a * b;
}

results.innerHTML = myFunction(2, 10);
console.log(myFunction(2, 10));
