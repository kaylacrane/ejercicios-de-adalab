'use strict';
/*Ejercicio 6: 
Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.
.*/

function getData(arr) {
  let array = document.querySelectorAll('input[type=text]');

  for (const movie of array) {
    console.log(`¡A mí también me encantó ${movieName}`);
  }
}

const button = document.querySelector('#button');
button.addEventListener('click', getData());
