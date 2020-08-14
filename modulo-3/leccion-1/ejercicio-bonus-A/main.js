'use strict';

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  givePerimeter() {
    const perimeter = this.numberOfSides * this.base;
    console.log(`The perimeter is ${perimeter}`);
  }
  giveArea() {
    const area = this.base * this.height;
    console.log(`The area is ${area}`);
  }
}

const myPolygon = new Polygon(5, 3, 4);
myPolygon.givePerimeter();
myPolygon.giveArea();

class Square extends Polygon {
  constructor(side) {
    super(4, side, side);
    this.side = side;
  }
}

class Triangle extends Polygon {
  constructor(side) {
    super(3, base, height);
  }
}
