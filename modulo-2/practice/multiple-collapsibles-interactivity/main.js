"use strict";

/* assign variable to ALL div.js-title */
const titleBars = document.querySelectorAll(".js-title");

const paragraphs = document.querySelectorAll(".js-text");

const titleIcons = document.querySelectorAll(".js-icon");
/* add click event listener to js-title */

titleBars.forEach((titleBar) => {
  titleBar.addEventListener("click", (x) => {
    paragraphs.forEach((pg) => (pg.style.maxHeight = 0));

    titleBars.forEach((titleBar) =>
      titleBar.classList.remove("js-title-active")
    );

    titleIcons.forEach((titleIcon) =>
      titleIcon.classList.remove("fa-rotate-180")
    );

    titleBar.classList.toggle("js-title-active");
    const paragraph = titleBar.nextElementSibling;

    if (titleBar.classList.contains("js-title-active")) {
      paragraph.style.maxHeight = paragraph.scrollHeight + "px";
      const titleIcon = titleBar.lastElementChild;
      titleIcon.classList.add("fa-rotate-180");
    } else {
      paragraph.style.maxHeight = 0;
    }
  });
});
