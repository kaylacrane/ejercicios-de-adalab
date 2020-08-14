'use strict';

/*
Vamos a crear nuestro propio autocompletado de formularios. Para ello vamos a crear un formulario con tres campos:
- Nombre
- Apellidos
- Teléfono
Por otro lado, en JavaScript tendremos un array de 3 objetos con esa estructura. Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono. Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre. Al seleccionarlo se rellenará el formulario automáticamente. 
*/

const profiles = [
  { firstName: 'Bob', lastName: 'Jones', phone: '123456' },
  { firstName: 'Alice', lastName: 'Smith', phone: '234561' },
  { firstName: 'Gretchen', lastName: 'Harroldson', phone: '4536123' },
];

const profileSelector = document.querySelector('#profileSelector');

profileSelector.addEventListener('change', setDetails);

function setDetails(ev) {
  const chosenProfile = ev.currentTarget.value;
  for (const key in profiles) {
    if (key.firstName === chosenProfile) {
      console.log(`wooho, you chose ${key.firstName}`);
    }
  }
  console.log(profiles[0].firstName);
}
