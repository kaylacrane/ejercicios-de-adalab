"use strict";
/*Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.*/

const paragraph = document.querySelector("p");
console.log(document.body.innerHTML);

paragraph.addEventListener("mouseover", (createParagraph) => {
  document.querySelector("div").innerHTML += "<p>lorem ipsum</p>";
});
