'use strict';

class Square {
  constructor(side) {
    this.side = side;
  }
  givePerimeter() {
    const perimeter = this.side * 4;
    console.log(`The perimeter is ${perimeter}`);
  }
  giveArea() {
    const area = this.side * this.side;
    console.log(`The area is ${area}`);
  }
}

const mySquare = new Square(10);
mySquare.givePerimeter();
mySquare.giveArea();
