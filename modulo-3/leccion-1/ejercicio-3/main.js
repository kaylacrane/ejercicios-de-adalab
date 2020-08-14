'use strict';

class Square {
  givePerimeter(side) {
    const perimeter = side * 4;
    console.log(`The perimeter is ${perimeter}`);
  }
  giveArea(side) {
    const area = side * side;
    console.log(`The area is ${area}`);
  }
}

const mySquare = new Square();
mySquare.givePerimeter(9);
mySquare.giveArea(9);
