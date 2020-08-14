"use strict";

/* let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
} 

Reescribe el código del ejemplo anterior (no del ejercicio anterior) utilizando un ternario en lugar de un if...else.
*/

let avocados;
const avocadoPrice = 1.5;
const money = 33;

avocados = money >= avocadoPrice ? money / avocadoPrice : 0;
console.log(avocados);
document.querySelector("div").innerHTML = avocados;
