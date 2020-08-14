"use strict";

const name = document.querySelector(".name");
const greeting = document.querySelector(".greeting");

greeting.innerHTML = "Buenos días, ";
name.innerHTML = "María José";

console.log(greeting.innerHTML + name.innerHTML);
