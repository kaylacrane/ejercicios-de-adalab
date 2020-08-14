'use strict';
/*
Partiendo del ejemplo anterior, vamos a realizar un temporizador que empiece en 0 y cada 2 segundos se incremente.
*/
let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
};

setInterval(
  incrementAndShowCounter,
  2000
); /* counts in milliseconds so 1000 is 1 sec*/
