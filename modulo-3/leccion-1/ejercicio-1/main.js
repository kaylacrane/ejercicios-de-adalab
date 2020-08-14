'use strict';

/* amos a crear un programita que haga cálculos geométricos sencillos. En el programa definiremos la clase Square, que tendrá al menos:
Un método para calcular el perímetro (perimeter()) del cuadrado (multiplica la longitud del lado por el número de lados)
Un método para calcular el área (area()) del cuadrado (elevar al cuadrado el lado)
Los métodos recibirán la longitud del lado (side) como parámetro.
Calcularemos y mostraremos el perímetro y el área de un cuadrado de 9 de lado. */

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
