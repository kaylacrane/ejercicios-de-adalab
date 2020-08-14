'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20,
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21,
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22,
      },
    ],
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23,
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24,
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25,
      },
    ],
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26,
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27,
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];
const results = document.querySelector('.js-result');
// TÚ CÓDIGO AQUÍ

/* add ul to div.js-result*/
const ul = document.createElement('ul');
/* TO MAKE A LIST OF PROMO NAMES IN UL */
function getPromoNames() {
  results.appendChild(ul);
  for (let index = 0; index < promos.length; index++) {
    /* create a text node that contains each promo name*/
    const promoName = document.createTextNode(promos[index].name);
    /* create each li */
    let li = document.createElement('li');
    /*add each li to ul section */
    ul.appendChild(li);
    /*add text node to each li*/
    li.appendChild(promoName);
  }
}
// getPromoNames();

/* TO MAKE A LIST THAT HAS THE PROMO NAMES AND LETTERS CONTAINED IN LI */

function getLetterAndName() {
  results.appendChild(ul);
  for (let index = 0; index < promos.length; index++) {
    /* create a text node that contains each promo name*/
    const promoName = document.createTextNode(`Nombre: ${promos[index].name}`);
    /*create a text node that contains each promo letter */
    const promoLetter = document.createTextNode(
      `Promo: ${promos[index].promo}`
    );
    /* create each li */
    const li = document.createElement('li');
    /*create a p for each */
    const pName = document.createElement('p');
    const pLetter = document.createElement('p');
    /*add each li to ul section */
    ul.appendChild(li);
    /*add paragraph node to each li*/
    li.appendChild(pName);
    li.appendChild(pLetter);
    /*add text to each paragraph*/
    pName.appendChild(promoName);
    pLetter.appendChild(promoLetter);
  }
}
// getLetterAndName();

/* TO MAKE A LIST THAT HAS: PROMO NAMES,LETTERS, AND NUMBER OF STUDENTS */
function getPromoDetails() {
  results.appendChild(ul);
  for (let index = 0; index < promos.length; index++) {
    /* create a text node that contains each promo name*/
    const promoName = document.createTextNode(`Nombre: ${promos[index].name}`);
    /*create a text node that contains each promo letter */
    const promoLetter = document.createTextNode(
      `Promo: ${promos[index].promo}`
    );
    /*create a text node that contains number of students */
    const promoSize = document.createTextNode(
      `Número de alumnas: ${promos[index].students.length}`
    );
    /* create each li */
    const li = document.createElement('li');
    /*create a p for each */
    const pName = document.createElement('p');
    const pLetter = document.createElement('p');
    const pSize = document.createElement('p');
    /*add each li to ul section */
    ul.appendChild(li);
    /*add paragraph node to each li*/
    li.appendChild(pName);
    li.appendChild(pLetter);
    li.appendChild(pSize);
    /*add text to each paragraph*/
    pName.appendChild(promoName);
    pLetter.appendChild(promoLetter);
    pSize.appendChild(promoSize);
  }
}

getPromoDetails();
