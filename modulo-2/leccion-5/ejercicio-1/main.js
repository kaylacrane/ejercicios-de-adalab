"use strict";
/*Crear una página HTML con un párrafo en el que ponga Hola y un botón. Cuando se pulse el botón hay que cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!*/

const button = document.querySelector("button");

button.addEventListener("click", (changeSentence) => {
  const sentence = document.querySelector("p");
  sentence.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
});
