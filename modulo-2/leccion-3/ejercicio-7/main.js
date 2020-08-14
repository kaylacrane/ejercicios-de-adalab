"use strict";
"use strict";

/* Calcular cuál va a ser el siguiente año bisiesto

Vamos a escribir un pequeño programa que nos permita saber cuál será el siguiente año bisiesto. Para aportar un poco de información, sabemos que los años bisiestos se producen cada cuatro años a partir del año 0. El primer año bisiesto fue 4, el segundo 8 y así progresivamente. La idea de este ejercicio es que, si estuviésemos en el año 3, al ejecutarlo apareciese en la consola el texto "4", ya que el año 4 sería el siguiente año bisiesto.

Pista: Tenemos que escribir el año en el que estamos en una constante. */
/*
const currentYear = parseInt(document.querySelector(".currentYear").innerHTML);

let nextLeapYear;

if (currentYear % 4 === 0) {
  nextLeapYear = "This year!";
  console.log(nextLeapYear);
  document.querySelector(".nextLeapYear").innerHTML =
    nextLeapYear + " After that: " + (currentYear + 4);
} else if {
  currentYear;
}*/

const currentYear = 2020;

const moduleYear = currentYear % 4;
let nextLeapYear = currentYear + 4;

if (moduleYear === 0) {
  console.log(
    `${currentYear} es bisiesto. El próximo año bisiesto será ${nextLeapYear}`
  );
} else if (moduleYear === 1) {
  nextLeapYear = currentYear + 3;
  console.log(
    `${currentYear} no es bisiesto. El próximo año bisiesto será ${nextLeapYear}`
  );
} else if (moduleYear === 2) {
  nextLeapYear = currentYear + 2;
  console.log(
    `${currentYear} no es bisiesto. El próximo año bisiesto será ${nextLeapYear}`
  );
} else if (moduleYear === 3) {
  nextLeapYear = currentYear + 1;
  console.log(
    `${currentYear} no es bisiesto. El próximo año bisiesto será ${nextLeapYear}`
  );
} else {
}
