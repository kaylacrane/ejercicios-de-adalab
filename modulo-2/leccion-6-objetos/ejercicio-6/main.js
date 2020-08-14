'use strict';
/*Ejercicio 6: 
Vamos a crear un objeto que sea una cesta de peras y que debe tener varias propiedades:

-Número máximo de peras
-Número mínimo de peras
-Número actual de peras
-Número inicial de peras

Y varios métodos que hagan:

-Añadir al cesto una pera
-Sacar del cesto una pera
-Restablecer el número de peras al valor inicial.

Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente.
.*/

const basket = {};
basket.maxPears = 12;
basket.minPears = 1;
basket.numberNowPears = 0;
basket.startNumPears = 0;

basket.addPears = function (amount) {
  this.numberNowPears += amount;
};

console.log(basket.numberNowPears);
basket.addPears(12);
console.log(basket.numberNowPears);

basket.removePears = function (amount) {
  this.numberNowPears -= amount;
};

console.log(basket.numberNowPears);
basket.removePears(1);
console.log(basket.numberNowPears);

basket.restart = function () {
  this.numberNowPears = this.startNumPears;
};

basket.restart();
console.log(basket.numberNowPears);
