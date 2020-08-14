"use strict";
/*
Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.
Nota: La etiqueta input no tiene apertura y cierre, por lo tanto técnicamente no tiene contenido. Si para leer y modificar el contenido de una etiqueta con apertura y cierre utilizábamos innerHTML, en el caso de los inputs utilizaremos value.
*/

const button = document.querySelector("button");
const results = document.querySelector(".js-result");

function sayHello() {
  const name = document.querySelector("input").value;
  console.log(`Hola ${name}`);
  results.innerHTML = `Hola ${name}`;
}

button.addEventListener("click", sayHello);

const textEn = document.querySelector(".text-en");
console.log(textEn);

const resultsEn = document.querySelector(".js-result-en");
console.log(resultsEn);

function sayHelloEn(event) {
  const nameEn = event.currentTarget.value;
  console.log(`Hello ${nameEn}`);
  resultsEn.innerHTML = `Hello ${nameEn}`;
}

textEn.addEventListener("keydown", sayHelloEn);
