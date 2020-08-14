'use strict';
const randomNumberDisplay = document.querySelector('.randomNumberDisplay');
const dogBreedDisplay = document.querySelector('.dogBreedDisplay');
const dogPhotoDisplay = document.querySelector('.dogPhotoDisplay');

let randomNumber;

fetch('https://api.rand.fun/number/integer?max=93')
  .then((response) => response.json())
  .then((data) => {
    console.log(data.result);
    return (randomNumber = data.result);
  });
fetch('https://dog.ceo/api/breeds/list/all')
  .then((response) => response.json())
  .then((data) => {
    let breedList = [];
    for (const key in data.message) {
      breedList.push(key);
    }
    console.log(breedList);
  });
