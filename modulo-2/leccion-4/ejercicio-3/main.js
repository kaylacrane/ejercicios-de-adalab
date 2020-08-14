"use strict";
/*Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.*/

const noIva = document.querySelector(".noIva");
const iva = document.querySelector(".iva");
const totalIva = document.querySelector(".totalIva");

function ticketIva(x) {
  let withoutIva = x;
  let amountIva = x * 0.21;
  let withIva = amountIva + x;
  /* to show results in HTML */
  noIva.innerHTML = withoutIva;
  iva.innerHTML = amountIva;
  totalIva.innerHTML = withIva;
  /* to show results in console */
  console.log(
    `Precio sin IVA: ${withoutIva}, IVA: ${amountIva} y Total: ${withIva}`
  );
}
ticketIva(10);
