'use strict';
/*
Para que no nos pille el toro esta Navidad, vamos a crear un código que muestre en consola un árbol de navidad con triángulos (▲). Nosotros le diremos la altura y creará un triángulo con un número igual de lineas que la altura que le hemos pasado. Por ejemplo si le pasamos 5, creará este árbol:
▲
▲▲
▲▲▲
▲▲▲▲
▲▲▲▲▲
*/

const triangleOne = '▲';
const star = '★';
const trunk = '|';
let tree = [];
let triangleLine = ' ';
let spaceLine = ' ';
function makeTree(height) {
  console.log(spaceLine.repeat(height + 1) + star);
  for (let index = 0; index < height; index++) {
    triangleLine += triangleOne.repeat(2);
    spaceLine = ' '.repeat(height - index);
    tree.push(spaceLine + triangleLine);
    console.log(tree[index]);
  }
  console.log(spaceLine.repeat(height + 1) + trunk);
}
makeTree(3);
