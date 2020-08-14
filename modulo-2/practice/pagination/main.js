'use strict';

const searchButton = document.querySelector('.search-button');
const searchResultsDisplay = document.querySelector('.search-results-display');
let searchResults = [];

function makeServerRequest(event) {
  const searchText = document.querySelector('.search-text').value;
  event.preventDefault();
  fetch(`http://api.tvmaze.com/search/shows?q=${searchText}`)
    .then((response) => response.json())
    .then((data) => {
      searchResults = data;
      console.log('%c My results', 'color: orange;');
      console.log({ data });
      let show = data[0].show;
      console.table({ show });
      console.trace(show);
    });

  searchResultsDisplay.innerHTML = searchResults;
}

searchButton.addEventListener('click', makeServerRequest);

const animal = {
  name: 'Max',
  meal: 6,
  diet: 'kibble',
};

function thisAndThat(animal) {
  const { name, meal, diet } = animal;
  console.log(`Feed ${name} ${meal} kilos of ${diet}`);
}
thisAndThat(animal);
