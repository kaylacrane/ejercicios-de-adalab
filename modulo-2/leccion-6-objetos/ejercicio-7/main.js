'use strict';
/*
Vamos a crear un objeto para almacenar la información de un usuario y una constante llamada job donde guardaremos el valor 'developer'. A continuación seguiremos los siguiente pasos:
Usando la notación con punto o la notación con corchetes ([]) (ej: obj.prop o obj["prop"]):

1 Añadiremos una propiedad llamada firstName y le asignaremos un valor.
2 Añadiremos una propiedad llamada lastName y le asignaremos un valor.
3 Añadiremos una propiedad llamada age y le asignaremos un valor numérico.
4 Añadiremos una propiedad job a la que asignaremos el valor de la constante job
5 Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto
6 Cambiaremos el nombre del usuario por otro distinto
7 Aumentaremos en 1 la edad del usuario
8 Comprobaremos de nuevo que todo sigue funcionando correctamente
*/

const user = {};
const job = 'developer';

console.log(user.job);

user.firstName = 'Jane';
user.lastName = 'Doe';
user.age = 40;
user.job = job;

console.log(user.firstName, user.lastName, user.age + ' years old', user.job);

user.firstName = 'Maxine';
user.lastName = 'Smith';
user.age += 1;

console.log(user.firstName, user.lastName, user.age + ' years old', user.job);
