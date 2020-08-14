"use strict";

const kitten = document.querySelector(".img");

kitten.addEventListener("click", rotate, true);

let rotation = 0;
function rotate() {
  kitten.style.transform = "rotate(" + rotation + "deg)";
  rotation += 180;
}
