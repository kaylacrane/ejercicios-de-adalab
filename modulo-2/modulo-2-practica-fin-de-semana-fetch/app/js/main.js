'use strict';

const ENDPOINT =
  'https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json';

const localEndpoint = '../data/users.json';

let users = [];
let favorites = [];
let userList = document.querySelector('.js-user-list');
let favoritesList = document.querySelector('.js-favoritesList');
/* Do your magic! 🦄🦄🦄*/

/* event handler and fetch combined */
function getUsers() {
  fetch(localEndpoint)
    .then((response) => response.json())
    .then((data) => {
      /* to extract each user from json*/
      for (let user of data) {
        users.push(user);
      }
      return users;
    })
    .then((users) => {
      /* to update users list object, and build profiles on page*/
      for (let i = 0; i < users.length; i++) {
        const userName = users[i].name;
        const userPhoto = users[i].picture;
        const userComment = users[i].comment;
        const userList = document.querySelector('.js-user-list');
        userList.innerHTML += `<li class="js-userProfile"><img class="js-userPhoto" src=${userPhoto}><span class="js-userName">${userName}</span><div width="70vw">${userComment}</div></li>`;
      }
      const userProfiles = document.querySelectorAll('.js-userProfile');
      function updateFavoritesObj(ev) {
        const selectedProfile = ev.currentTarget;
        selectedProfile.classList.toggle('js-favorite');
        let userListArray = [];
        userProfiles.forEach((userProfile) => {
          userListArray.push(userProfile);
        });
        /*to update favorites list*/
        const target = event.currentTarget;
        const index = userListArray.indexOf(target);
        if (selectedProfile.classList.contains('js-favorite')) {
          favorites[index] = users[index];
        } else {
          favorites[
            index
          ] = undefined; /* not sure if this is best practice but I needed to make sure items in favorites stayed in the same index as in users array*/
        }
      }

      /* to add event listener to gather favorites*/
      userProfiles.forEach((userProfile) => {
        userProfile.addEventListener('click', updateFavoritesObj);
      });
      /* to add event listener to gather favorites*/
      userProfiles.forEach((userProfile) => {
        userProfile.addEventListener('click', updateFavoritesHtml);
      });
    });
}

/*add event listener to load list of profiles*/
window.addEventListener('load', getUsers);
