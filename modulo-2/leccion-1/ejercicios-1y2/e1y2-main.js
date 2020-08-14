"use strict" /*betters execution speed/stability of code and makes browsers display error codes*/;

// document.querySelector("h1").innerHTML =
//     "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";
/*statement that describes an action*/

/* declare variables with let and constants with const. Good idea to use const always since JS will bring up an error if we try to reassign it by mistake. Then we can change it to let if needed */
const headerHeight = 72;
const subHeaderHeight = 24;
const screenHeight = 620;
const remainingSpace = screenHeight - headerHeight - subHeaderHeight;
const sections = 4;
const sectionSize = remainingSpace / sections;

// const myAddress = Valdetorres;
// let myAddress = Madrid;
/* Uncaught SyntaxError: Identifier 'myAddress' has already been declared */

/* you can access html elements using css selectores (classes, IDs, tags)  */
// const mainTitle = document.querySelector("h1");
// const mainTitle = document.querySelector("#mainTitle");
// const mainTitle = document.querySelector(".mainTitle");

/* to change contents of HTML element */
// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const titleElement = document.querySelector(".title");

// Cambiamos su contenido con innerHTML
titleElement.innerHTML = "Bienvenida";

//add in content

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const title2Element = document.querySelector(".title");

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
title2Element.innerHTML = titleElement.innerHTML + " adalaber";
