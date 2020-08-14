'use strict';

/*
Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar map para que nos echase una mano?
*/

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const greetingsDisplay = document.querySelector('.greetingsDisplay');

const greetings = names.map((name) => `Hi, ${name}`);
console.log(greetings);
greetingsDisplay.innerHTML = greetings;
