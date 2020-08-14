'use strict';

/*
 Sobre el ejercicio 2 vamos a cachear las búsquedas al servidor. De forma que cuando a busquemos una cadena a través del campo de búsqueda, primero busque en localStorage si ya tenemos un resultado en local para esa cadena. Si no lo hay se pide al servidor y luego se guarda en localStorage usando como clave el texto de la búsqueda; si al buscarlo en localStorage lo encontramos pues le enseñamos el resultado directamente al usuario y nos evitamos una petición al servidor.
*/
let savedSearches = {};
const submitButton = document.querySelector('.js-submitButton');

function searchSwapi(event) {
  const searchText = document.querySelector('.js-searchText').value;
  event.preventDefault();
  fetch(`https://swapi.dev/api/people/?search=${searchText}`)
    .then((response) => response.json())
    .then((data) => {
      let searchResults = [];
      let resultsDisplay = document.querySelector('.js-result');
      const dataResults = data.results;
      console.log(dataResults);
      for (let index = 0; index < dataResults.length; index++) {
        const characterName = dataResults[index].name;
        const characterGender = dataResults[index].gender;
        searchResults += `<li>${characterName}, ${characterGender}</li>`;
      }
      savedSearches[searchText] = parse(dataResults);
      console.log(savedSearches);
      resultsDisplay.innerHTML = searchResults;
    });
}

submitButton.addEventListener('click', searchSwapi);
