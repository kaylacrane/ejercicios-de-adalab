"use strict";
/* Crea un div que contenga un título "NOTIFICACIÓN" y un texto "Mensaje por defecto". Crea también tres clases:
La primera, .success, aplicará un borde verde oscuro, un fondo verde claro y el color de fuente verde oscuro
La segunda, .error, igual pero sustituyendo el verde por rojo
La tercera, .warning, lo mismo pero usando el color amarillo
Usando JavaScript, haremos que:
Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'. */

let div = document.querySelector("div");
if (div.classList.contains("warning")) {
  document.querySelector("h2").innerHTML = "AVISO";
  document.querySelector("p").innerHTML = "Tenga cuidado";
} else if (div.classList.contains("error")) {
  document.querySelector("h2").innerHTML = "ERROR";
  document.querySelector("p").innerHTML = "Ha surgido un error";
} else if (div.classList.contains("success")) {
  document.querySelector("h2").innerHTML = "CORRECTO";
  document.querySelector("p").innerHTML = "Los datos son correctos";
}
