'use strict';

/*
 Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML.
*/

const numbers = [1, 2, 3];
const ul = document.querySelector('ul');

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  const newItem = document.createElement('li');
  const newContent = document.createTextNode(element);
  newItem.appendChild(newContent);
  ul.appendChild(newItem);
}
