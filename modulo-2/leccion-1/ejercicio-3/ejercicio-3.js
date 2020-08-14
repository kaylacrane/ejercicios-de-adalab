"use strict";

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const textChange = document.querySelector(".textToChange");

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
textChange.innerHTML = textChange.innerHTML + " World";
