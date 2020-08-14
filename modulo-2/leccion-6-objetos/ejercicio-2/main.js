'use strict';
/*
Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.
Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.
*/

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = '34 años';
adalaber1.job = 'periodista';

const sentence = document.querySelector('.sentence');
sentence.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.job}.`;

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = '25 años';
adalaber2.job = 'actriz';

const sentence2 = document.querySelector('.sentence2');
sentence2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} y soy ${adalaber2.job}.`;

const adalaber = {};
adalaber.name = 'María';
adalaber.run = () => `Estoy corriendo`;

const sentence3 = document.querySelector('.sentence3');
console.log(adalaber.run());

sentence3.innerHTML = adalaber.run();
