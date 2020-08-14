"use strict";

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const textChange = document.querySelector("h2");
const textChangeTwo = document.querySelector("h3");
const name = document.querySelector("li");
const nameTwo = document.querySelector("li:nth-child(2)");

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más un nombre ubicado en el primer li (variable )
textChange.innerHTML = textChange.innerHTML + " " + name.innerHTML;

textChangeTwo.innerHTML = textChangeTwo.innerHTML + " " + nameTwo.innerHTML;
