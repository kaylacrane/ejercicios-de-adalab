"use strict";

/* Te habrá pasado varias veces de ir por la calle y que alguien te pregunte "perdona, tienes a mano un conversor de edad de perros a humanos" y tener que contestar con vergüenza que no y que esa persona te mire raro... ¡hasta ahora! Vamos a crearla para evitar esto que pasa tan a menudo. Para ello, las reglas son las siguientes:
El primer año de un perro equivale a 15 años de humano
El segundo año de un perro equivale a nueve años de humano
A partir del tercero, cada año de perro equivale a 5 años de humano. */

let dogAge = 3;
let realAge = 0;
if (dogAge < 1) {
  console.log("Please provide a number greater than or equal to 1.");
} else if (dogAge === 1) {
  realAge = dogAge * 15;
  console.log(realAge + " in human years");
} else if (dogAge === 2) {
  realAge = 15 + 9;
  console.log(realAge + " in human years");
} else if (dogAge >= 3) {
  realAge = 15 + 9 + (dogAge - 2) * 5;
  console.log(realAge + " in human years");
}
