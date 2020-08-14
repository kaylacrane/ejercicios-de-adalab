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

// products

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

// cart

const paintCart = () => {
  let codeHTML = '';
  for (let index = 0; index < cart.length; index += 1) {
    codeHTML += `<tr>`;
    codeHTML += `<td>${cart[index].name}</td>`;
    codeHTML += `<td>${cart[index].price}</td>`;
    codeHTML += `<td>`;
    codeHTML += `<button class="card__btn js-cart-decrement" id="${cart[index].id}">-</button>`;
    codeHTML += ` ${cart[index].quantity} `;
    codeHTML += `<button class="card__btn js-cart-increment" id="${cart[index].id}">+</button>`;
    codeHTML += `</td>`;
    codeHTML += `<td class="text-align-right">${
      cart[index].price * cart[index].quantity
    }€</td>`;
    codeHTML += `</tr>`;
  }
  codeHTML += getCartTotalHtmlCode();
  const cardsElement = document.querySelector('.js-cart');
  cardsElement.innerHTML = codeHTML;
  listenCartClicks();
};

const getCartTotalHtmlCode = () => {
  let htmlCode = '';
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">${getTotalPrice()}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
};

const getTotalPrice = () => {
  let total = 0;
  for (const product of cart) {
    total += product.price * product.quantity;
  }
  return total;
  // el for anterior es equivalente a este reduce
  return cart.reduce((total, product) => total + product.price, 0);
};

// events

const handleProductsClick = (ev) => {
  // obtenemos el id del producto clickado
  const clickedId = parseInt(ev.currentTarget.id);
  // buscamos con find
  const product = products.find((productItem) => productItem.id === clickedId);
  const cartProduct = cart.find((productItem) => productItem.id === clickedId);
  if (cartProduct === undefined) {
    /*can also use this to set a min num of units to products*/
    product.quantity = 1;
    cart.push(product);
  } else {
    cartProduct.quantity += 1;
  }

  console.log(cart);
  paintCart();
  updateLocalStorage();
};

const handleCartIncrementClick = (ev) => {
  // obtenemos el id del producto clickado
  const clickedId = parseInt(ev.currentTarget.id);
  // buscamos con find to return true or false (find takes a function!)
  // const product = cart.find((productItem) => productItem.id === clickedId);
  // find works like a for loop but it less efficient because it searches through the entire array even after it's found the item. The for loop does the same but only stops if you put a return
  for (const productItem of cart) {
    if (productItem.id === clickedId) {
      productItem.quantity += 1;
    }
    paintCart();
  }
  // product.quantity += 1; /* this isnt working*/
  // console.log('El producto a incrementar es', product);
  updateLocalStorage();
};

const handleCartDecrementClick = (ev) => {
  // obtenemos el id del producto clickado
  const clickedId = parseInt(ev.currentTarget.id);
  // buscamos con find
  for (let index = 0; index < cart.length; index++) {
    const productItem = cart[index];
    if (productItem.id === clickedId) {
      if (productItem.quantity > 1) {
        productItem.quantity -= 1;
      } else {
        /* delete from cart */
        cart.splice(index, 1);
      }
    }
  }

  // const product = cart.find((productItem) => productItem.id === clickedId);
  // console.log('El producto a decrementar es', product);
  updateLocalStorage();
  paintCart();
};

const listenProductsClicks = () => {
  const productsBtns = document.querySelectorAll('.js-product-inc');
  for (let index = 0; index < productsBtns.length; index++) {
    const productsBtn = productsBtns[index];
    productsBtn.addEventListener('click', handleProductsClick);
  }
};

const listenCartClicks = () => {
  const cartIncrementBtns = document.querySelectorAll('.js-cart-increment');
  for (let index = 0; index < cartIncrementBtns.length; index++) {
    const productsBtn = cartIncrementBtns[index];
    productsBtn.addEventListener('click', handleCartIncrementClick);
  }
  const cartDecrementBtns = document.querySelectorAll('.js-cart-decrement');
  for (let index = 0; index < cartDecrementBtns.length; index++) {
    const productsBtn = cartDecrementBtns[index];
    productsBtn.addEventListener('click', handleCartDecrementClick);
  }
};
// local storage

const updateLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};
const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('cart'));
  if (data !== null) {
    cart = data;
  }
  // if (JSON.parse(localStorage.getItem('cart')) !== null) {
  //   cart = JSON.parse(localStorage.getItem('cart'));
  // }
};

// reset

const btnReset = document.querySelector('.js-reset');
const resetCart = () => {
  console.log('reset!');
  cart = [];
  paintCart();
  localStorage.removeItem('cart');
};

btnReset.addEventListener('click', resetCart);

// start app

getDataFromApi();
getFromLocalStorage();
paintProducts();
paintCart();
