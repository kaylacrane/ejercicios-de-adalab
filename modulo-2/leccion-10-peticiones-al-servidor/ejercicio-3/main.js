'use strict';

const textBox = document.querySelector('.search-text');
const button = document.querySelector('.input-button');
const username = document.querySelector('.userName');
const userRepos = document.querySelector('.repos');
const userImg = document.querySelector('.userImg');

function searchUsers() {
  const searchText = textBox.value;

  fetch(`https://api.github.com/users/${searchText}`)
    .then((response) => response.json())
    .then((data) => {
      username.innerHTML = data.login;
      userRepos.innerHTML = data.public_repos;
      userImg.src = data.avatar_url;
      userImg.alt = 'User Image';
    });
}

button.addEventListener('click', searchUsers);
