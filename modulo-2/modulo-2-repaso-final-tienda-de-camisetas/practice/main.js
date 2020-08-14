'use strict';
let products = [];
let cart = [];
const productsDisplayArea = document.querySelector('.js-cards');

function getProducts() {
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      products = data.items;
      displayProducts();
    });
}

function displayProducts() {
  let codeHTML = '';
  for (let index = 0; index < products.length; index++) {
    /* object destructuring: const {properties} = object; */
    const { imageUrl, name, price, id } = products[index];
    codeHTML += `<article class="card">`;
    codeHTML += `<img
    src="${imageUrl}"
    class="card__img"
    alt="Camiseta de ${name}"
  />`;
    codeHTML += `<h3 class="card__title">${name}</h3>`;
    codeHTML += `<p class="card__description">${price}€</p>`;
    codeHTML += `<button class="card__btn js-product-button" id="${id}">Añadir a la cesta</button>`;
    codeHTML += `</article>`;
  }
  productsDisplayArea.innerHTML = codeHTML;
  const addCartButton = document.querySelectorAll('.js-product-button');
  addCartButton.forEach((button) =>
    button.addEventListener('click', addFromProdList)
  );
}

function addFromProdList(ev) {
  const clickedId = parseInt(ev.currentTarget.id);
  const product = products.find((product) => product.id === clickedId);
  const cartProduct = cart.find((item) => item.id === clickedId);
  if (cartProduct === undefined) {
    product.quantity = 1;
    cart.push(product);
  } else {
    cartProduct.quantity += 1;
  }
  displayCartProducts();
}

function displayCartProducts() {
  let codeHTML = '';
  for (const product of cart) {
    const { name, price, quantity, id } = product;
    const productTotal = price * quantity;
    codeHTML += `<tr>`;
    codeHTML += `<td>${name}</td>`;
    codeHTML += `<td>${price}</td>`;
    codeHTML += `<td>`;
    codeHTML += `<button class="card__btn js-cart-decrement" id="${id}">-</button>`;
    codeHTML += ` ${quantity} `;
    codeHTML += `<button class="card__btn js-cart-increment" id="${id}">+</button>`;
    codeHTML += `</td>`;
    codeHTML += `<td class="text-align-right">${productTotal}€</td>`;
    codeHTML += `</tr>`;
  }
  let htmlCode = '';
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">${getTotalPrice()}€</td>`;
  htmlCode += `</tr>`;
  const cardsElement = document.querySelector('.js-cart');
  cardsElement.innerHTML = codeHTML + htmlCode;
  getTotalProducts();
  const cartIncrementButton = document.querySelectorAll('.js-cart-increment');
  cartIncrementButton.forEach((button) =>
    button.addEventListener('click', increaseProductInCart)
  );
  const cartDecreaseButton = document.querySelectorAll('.js-cart-decrement');
  cartDecreaseButton.forEach((button) =>
    button.addEventListener('click', decreaseProductInCart)
  );
}

function getTotalPrice() {
  let totalPrice = 0;
  cart.forEach((product) => {
    totalPrice += product.quantity * product.price;
  });
  return totalPrice;
}

function getTotalProducts() {
  let totalProducts = 0;
  cart.forEach((product) => {
    totalProducts += product.quantity;
  });
  console.log('total products', totalProducts);
  return totalProducts;
}

/*empty cart button*/
const resetButton = document.querySelector('.js-reset');
resetButton.addEventListener('click', resetCart);

function resetCart() {
  cart = [];
  displayCartProducts();
}

function increaseProductInCart(ev) {
  const clickedId = parseInt(ev.currentTarget.id);
  const product = cart.find((product) => product.id === clickedId);
  product.quantity += 1;
  displayCartProducts();
}

function increaseProductInCart(ev) {
  const clickedId = parseInt(ev.currentTarget.id);
  const product = cart.find((product) => product.id === clickedId);
  product.quantity += 1;
  displayCartProducts();
}

function decreaseProductInCart(ev) {
  const clickedId = parseInt(ev.currentTarget.id);
  const clickedProduct = cart.find((product) => product.id === clickedId);
  const clickedIndex = cart.findIndex((product) => product.id === clickedId);
  if (clickedProduct.quantity > 1) {
    clickedProduct.quantity -= 1;
  } else {
    cart.splice(clickedIndex, 1);
  }

  displayCartProducts();
}

getProducts();
displayCartProducts();
