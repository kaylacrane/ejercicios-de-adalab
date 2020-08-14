'use strict';

//SELECTORS

//FUNCTIONS

//LISTENERS

/*
//SELECTORS...

//Number of user attempts
let attempts = 0;

//Object saved in BBDD with user information to compare with my form
const userInfo = {
  name: 'front23',
  password: 'bicicleta',
};
const userName = userInfo.name;
const userPassword = userInfo.password;
const alertMsg = document.querySelector('.js-error-wrapper');
alertMsg.classList.add('hidden');
//FUNCTIONS
function checkLogin() {
  const nameInputValue = document.querySelector('.js-user-name').value;
  const passwordInputValue = document.querySelector('.js-user-password').value;

  if (nameInputValue === userName && passwordInputValue === userPassword) {
    alert(`Estás dentro`);
    attempts = 0;
  } else {
    attempts += 1;
    console.log(attempts);
    alertMsg.classList.remove('hidden');
    if (attempts > 3) {
      alert('You are blocked');
    }
  }
}

//LISTENERS
const button = document.querySelector('.js-login-button');
button.addEventListener('click', checkLogin);
*/

