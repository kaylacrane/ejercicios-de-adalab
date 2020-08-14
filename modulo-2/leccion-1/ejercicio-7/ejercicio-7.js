/*Crear una página HTML con una lista ul vacía y, usando JavaScript, añadir al contenido de esa lista tres li, el primero tendrá como texto 1, el segundo 2 y el tercero 3.*/

"use strict";

const listElement = document.querySelector("ul");

const content = "<li>1</li><li>2</li><li>3</li>";

listElement.innerHTML = content;
