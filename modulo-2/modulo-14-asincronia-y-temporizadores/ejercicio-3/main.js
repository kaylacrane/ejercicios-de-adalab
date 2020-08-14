'use strict';
/* 
Vamos a realizar el típico mensaje que aparece en un blog con la información de hace cuanto se escribió un post. Por ejemplo, con el texto: "escrito hace 30 segundos". Al principio escribiremos en pantalla "escrito hace 1 segundo" e iremos aumentando el número de segundos. Cuando lleve más de 59 segundos queremos que ponga "escrito hace 1 min".
*/
let counter = 0;
let minutes = 1;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  if (counter > 1 && counter < 59) {
    time.innerHTML = ` ${counter} seconds`;
  } else if (counter > 59) {
    time.innerHTML = ` ${minutes} minute `;
    minutes++;
  } else if (counter % 60 === 0) {
    minutes++;
    time.innerHTML = ` ${minutes} minutes `;
  }
};
setInterval(
  incrementAndShowCounter,
  1000
); /* counts in milliseconds so 1000 is 1 sec*/
