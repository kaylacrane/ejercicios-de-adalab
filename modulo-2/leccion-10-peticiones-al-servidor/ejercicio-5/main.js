'use strict';
/* Vamos a entrar en la URL https://api.github.com/orgs/Adalab a través de nuestro navegador para obtener la respuesta del API de GitHub. A continuación vamos a analizar de qué tipo es cada una de las propiedades que nos está devolviendo. Por ejemplo, de qué tipo son login, id, node_id, is_verified...
Y si entramos en https://dog.ceo/api/breeds/list ¿de qué tipo es la propiedad message? */
fetch(`https://api.github.com/orgs/Adalab`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(typeof data.id);
    for (const property in data) {
      console.log(`${property}: ${typeof data[property]}`);
    }
  });
