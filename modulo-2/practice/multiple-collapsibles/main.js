"use strict";

/* assign variable to ALL div.js-title */
const titleBars = document.querySelectorAll(".js-title");

/* add click event listener to js-title */

titleBars.forEach((titleBar) => {
  titleBar.addEventListener("click", (x) => {
    const paragraph = titleBar.nextElementSibling;
    titleBars.forEach((titleBar) =>
      titleBar.classList.toggle("js-title-active")
    );

    titleBar.classList.toggle("js-title-active");

    if (titleBar.classList.contains("js-title-active")) {
      paragraph.style.maxHeight = paragraph.scrollHeight + "px";
    } else {
      paragraph.style.maxHeight = 0;
    }
    const titleIcon = titleBar.lastElementChild;

    titleIcon.classList.toggle("fa-rotate-180");
  });
});
