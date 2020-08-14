'use strict';

/* Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos creado un objeto literal con el listado de tareas y su estado. Nuestra misión es:
Mostrar una frase que indique cuántas tareas hay.
Pintar todas las tareas en pantalla.
Tachar las ya realizadas.
Permitir marcar una tarea como 'completa' o 'incompleta'.
Vamos a partir de este array de datos en nuestro fichero JavaScript:
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];
Veamos cómo afrontar un ejercicio de este tipo, dónde tenemos que unir muchos de los conceptos aprendidos hasta ahora, la organización es clave:
a) Vamos a por una tarea. Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.
b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.
c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
la tarea debe mostrarse como completada (tachada)
debemos modificar su estado (propiedad completed) en el array tasks.
d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberiamos actualizar esta información.
*/

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];
const body = document.querySelector('body');
body.innerHTML += `<p>Número de tareas: ${tasks.length}</p>`;

body.innerHTML += `<ul class="list"></ul>`;
let list = document.querySelector('.list');

/*to print task list and mark off finished*/

for (let task of tasks) {
  if (task.completed === true) {
    list.innerHTML += `<li class="listItem finished" >${task.name}</li>`;
  } else {
    list.innerHTML += `<li class="listItem" >${task.name}</li>`;
  }
}
const listItems = document.querySelectorAll('.listItem');
for (let item of listItems) {
  if (item.classList.contains('finished')) {
    item.innerHTML += `<input type="checkbox" checked>`;
  } else {
    item.innerHTML += `<input type="checkbox">`;
  }
}
