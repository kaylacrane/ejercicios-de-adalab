'use strict';

/*
 Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.
*/

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
      resultsDisplay.innerHTML = searchResults;
    });
}

submitButton.addEventListener('click', searchSwapi);
