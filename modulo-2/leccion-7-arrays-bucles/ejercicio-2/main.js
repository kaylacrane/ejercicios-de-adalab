'use strict';
/*
for (let i = 0; i < 20; i++) {
  console.log('Voy por la vuelta ' + i);
}
Partiendo el ejemplo anterior, crea un bucle que muestre 10 veces, en la consola, el texto Voy por la vuelta X siendo el número de vueltas desde 1 hasta 10 (no desde 0 hasta 9).
*/

for (let i = 1; i <= 10; i++) {
  console.log(`Voy por la vuelta ${i}`);
  document.querySelector('p').innerHTML += `Voy por la vuelta ${i}. `;
}
