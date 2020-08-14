'use strict';
/* 
Vamos a seguir explorando el API de GitHub explorando la parte del API para acceder a la info sobre organizaciones. La URL de este API es https://api.github.com/orgs/{orgname}, donde {orgname} es el nombre de la organización en GitHub. Por ejemplo, aquí tenéis la URL para obtener información de la organización Adalab https://api.github.com/orgs/Adalab. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
El objetivo de este ejercicio es mostrar en una web el listado completo de los repositorios de una organización que hay creados en GitHub. Por ejemplo, para Adalab, el resultado final debería ser similar a este:

https://gblobscdn.gitbook.com/assets%2F-M5_oEHzWDg0xXSIUT0k%2F-M5_pD5dfADrWsvkwp8c%2F-M5_pLGiGDBS35yw1NVe%2Fresultado-ejercicio-1-listado-de-repos.png?alt=media

Para ello vamos a hacer lo siguiente:
Preparar un input  con un botón para que la usuaria introduzca la organización.
Cuando la usuaria pulse el botón buscar acceder a la información de la organización como primera petición al servidor.
Recoger la información de la URL donde consultar la información de los repositorios de la organización en la respuesta del servidor (en la propiedad repos_url) y hacer una nueva petición a esa URL.
En el último then pintar en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad name de cada objeto repositorio).
*/

const textBox = document.querySelector('.search-text');
const button = document.querySelector('.input-button');
const name = document.querySelector('.name');
const orgImg = document.querySelector('.orgImg');
const repos = document.querySelector('.repos');

function getRepos() {
  const orgName = textBox.value;

  fetch(`https://api.github.com/users/${orgName}/repos`)
    .then((response) => response.json())
    .then((data) => {
      name.innerHTML = data[0].owner.login;
      orgImg.src = data[0].owner.avatar_url;
      for (let index = 0; index < data.length; index++) {
        const repo = data[index].name;
        console.log(repo);
        let newLi = document.createElement('li');
        repos.appendChild(newLi);
        newLi.innerHTML = repo;
      }
    });
}

button.addEventListener('click', getRepos);
