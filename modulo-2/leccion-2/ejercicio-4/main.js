"use strict";
const totalDinner = parseInt(document.querySelector(".total-dinner").innerHTML);
const numberPeople = parseInt(
  document.querySelector(".number-people").innerHTML
);
const difference = parseInt(document.querySelector(".difference").innerHTML);

const equalShare = (totalDinner - difference) / numberPeople;
const anasShare = equalShare + difference;

document.querySelector(".anas-share").innerHTML = anasShare + " euros";
document.querySelector(".equal-share").innerHTML = equalShare + " euros";

console.log("Ana tiene que pagar: " + anasShare + " euros");
console.log("Los demás tienen que pagar: " + equalShare + " euros");
