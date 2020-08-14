"use strict";

const priceKiwis = 5;
const kilosKiwis = parseFloat(document.querySelector(".kilos1").innerHTML);
const pricePeras = 2;
const kilosPeras = parseFloat(document.querySelector(".kilos2").innerHTML);
const priceUvas = 4;
const kilosUvas = parseFloat(document.querySelector(".kilos3").innerHTML);
const totalPrice =
  priceKiwis * kilosKiwis + pricePeras * kilosPeras + priceUvas + kilosUvas;
const price = document.querySelector(".price");
price.innerHTML = totalPrice + " euros";
console.log(totalPrice + " euros");
