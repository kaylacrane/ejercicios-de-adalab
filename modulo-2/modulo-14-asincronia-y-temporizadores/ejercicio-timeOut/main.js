'use strict';
const removeMsg = () => {
  const msg = document.querySelector('.msg');
  msg.innerHTML = '';
};

setTimeout(removeMsg, 6000);
