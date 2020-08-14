"use strict";
/* En este ejercicio vamos a crear un control de acceso. Para ello prepararemos una variable y le asignaremos un nombre. Posteriormente, si el nombre es el tuyo o el de tu compañera mostraremos el mensaje "Bienvenida, (tu nombre aquí)". Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado". */

let userName = "Kayla";
if (userName === "Kayla" || userName === "Maria Jose") {
  document.querySelector(".greeting").innerHTML = `Hello, ${userName}`;
} else {
  alert("Lo siento pero el usuario que has introducido no está registrado");
}
