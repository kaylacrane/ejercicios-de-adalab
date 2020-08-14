'use strict';
let userData = {};

const inputs = document.querySelectorAll('.input');
inputs.forEach((input) => input.addEventListener('change', setData));

function setData(ev) {
  console.log(ev.currentTarget.name, ev.currentTarget.value);
  const property = ev.currentTarget.name;
  const value = ev.currentTarget.value;
  userData[property] = value;
  console.log(userData);
}
