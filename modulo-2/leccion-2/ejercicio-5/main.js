"use strict";

const years = parseInt(document.querySelector(".years").innerHTML);
const months = parseInt(document.querySelector(".months").innerHTML);
const days = parseInt(document.querySelector(".days").innerHTML);

const totalYears = years * 12 * 30 * 24;
const totalMonths = months * 30 * 24;
const totalDays = days * 24;

document.querySelector(".hours").innerHTML =
  totalYears + totalMonths + totalDays;
console.log(parseInt(document.querySelector(".hours").innerHTML) + " hours");
