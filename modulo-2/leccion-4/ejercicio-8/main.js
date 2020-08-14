"use strict";
/*Vamos a partir de uno de los ejemplos anteriores que usa una variable global, que luego se modifica desde una función.*/

// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(secretLetter);
console.log(mySecretLetter()); // devuelve "x"
// devuelve "x"

/*
En el ejemplo anterior prueba a cambiar el orden del los console.log. ¿Qué está pasando? ¿Por qué no se imprime en la consola 2 veces "x"? -- because the function changes the value of secretLetter so if you call the variable first you get the original value (y)
*/
