/*Crear dos botones sencillos con los mismos estilos (padding, borde, color) y, usando JavaScript, al segundo añadirle una clase para que parezca que esta desactivado (por ejemplo, aplicarle una opacidad menor).*/

"use strict";
/*
Como siempre que queremos trabajar con un elemento de HTML lo obtenemos con document.querySelector() y lo asignamos a una constante.
*/
const sectionB = document.querySelector(".b2");

sectionB.classList.add("deactivated");
