'use strict';
/*
Con JavaScript, crear un código para mostrar una ventana en nuestro navegador una vez transcurridos 15 segundos que ponga "su sesión ha expirado" (creada usando HTML y CSS).
*/
let container = document.querySelector('.container');
const addMsg = () => {
  const newParagraph = document.createElement('p');
  const msg = document.createTextNode('your session has expired ⌛');
  newParagraph.appendChild(msg);
  container.appendChild(newParagraph);
};

setTimeout(addMsg, 15000);
