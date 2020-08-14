'use strict';

let products = [];
let cart = [];

// api

const getDataFromApi = () => {
  fetch('./api/data.json')
    .then((response) => response.json())
    .then((data) => {
      products = data.items;
      paintProducts();
    });
};

// catalog

// Esta función pinta los productos con un for...of
// const paintProducts = () => {
//   let codeHTML = '';
//   for (const product of products) {
//     codeHTML += `<article class="card">`;
//     codeHTML += `<img src="${product.imageUrl}" class="card__img" alt="Camiseta de ${product.name}" />`;
//     codeHTML += `<h3 class="card__title">${product.name}</h3>`;
//     codeHTML += `<p class="card__description">${product.price} €</p>`;
//     codeHTML += `<button class="card__btn" id="${product.id}">Añadir a la cesta</button>`;
//     codeHTML += `</article>`;
//   }
//   const cardsElement = document.querySelector('.js-cards');
//   cardsElement.innerHTML = codeHTML;
//   listenProductsClicks();
// };

const paintProducts = () => {
  let codeHTML = '';
  for (let index = 0; index < products.length; index += 1) {
    codeHTML += `<article class="card">`;
    codeHTML += `<img src="${products[index].imageUrl}" class="card__img" alt="Camiseta de ${products[index].name}" />`;
    codeHTML += `<h3 class="card__title">${products[index].name}</h3>`;
    codeHTML += `<p class="card__description">${products[index].price} €</p>`;
    codeHTML += `<button class="card__btn js-product-inc"
      id="${products[index].id}"
      data-index="${index}"
      data-id="${products[index].id}"
    >Añadir a la cesta</button>`;
    codeHTML += `</article>`;
  }
  const cardsElement = document.querySelector('.js-cards');
  cardsElement.innerHTML = codeHTML;
  listenProductsClicks();
};

// events

// Las 3 siguientes funciones handleProductsClick hacen lo mismo: buscan en el array products el element clickado y lo meten en el array cart
const handleProductsClick = (ev) => {
  // obtenemos el id del producto clickado
  const clickedId = parseInt(ev.currentTarget.id);
  // buscamos con find
  const product = products.find((productItem) => productItem.id === clickedId);
  cart.push(product);
  console.log(cart);
};

// const handleProductsClick = ev => {
//   const clickedId = parseInt(ev.currentTarget.id);
//   for (const product of products) {
//     if (product.id === clickedId) {
//       cart.push(product);
//       console.log(cart);
//     }
//   }
// };

// const handleProductsClick = ev => {
// const clickedIndex = ev.currentTarget.dataset.index;
// const product = products[clickedIndex];
// console.log('Me han clickado', product);
// cart.push(product);
// console.log(cart);
// };

const listenProductsClicks = () => {
  const productsBtns = document.querySelectorAll('.js-product-inc');
  for (let index = 0; index < productsBtns.length; index++) {
    const productsBtn = productsBtns[index];
    productsBtn.addEventListener('click', handleProductsClick);
  }
  // El for...of hace lo mismo que el for clásico anterior
  // for (const productsBtn of productsBtns) {
  //   productsBtn.addEventListener('click', handleProductsClick);
  // }
};

// start app

getDataFromApi();
paintProducts();
