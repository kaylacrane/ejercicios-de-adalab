"use strict";

/* first collapsible - colors */
const collapsibleTitleBar = document.querySelector(".collapsible_title_bar");
const chevron = document.querySelector(".chevron");
const colorsOptions = document.querySelector(".colors_options");

document
  .querySelector(".collapsible_title_bar")
  .addEventListener("click", openBox, true);

document
  .querySelector(".collapsible_title_bar")
  .addEventListener("click", changeOrientation, true);

let rotation = 180;
function changeOrientation() {
  chevron.style.transform = "rotate(" + rotation + "deg)";
  rotation += 180;
}
function openBox() {
  if (colorsOptions.classList.contains("hidden")) {
    colorsOptions.classList.remove("hidden");
  } else {
    colorsOptions.classList.add("hidden");
  }
}

/* second collapsible */
document.querySelectorAll(".collapsible__button").forEach((button) => {
  button.addEventListener("click", () => {
    const collapsibleContent = button.nextElementSibling;
    button.classList.toggle("collapsible__button--active");
    if (button.classList.contains("collapsible__button--active")) {
      collapsibleContent.style.maxHeight =
        collapsibleContent.scrollHeight + "px";
    } else {
      collapsibleContent.style.maxHeight = 0;
    }
  });
});
