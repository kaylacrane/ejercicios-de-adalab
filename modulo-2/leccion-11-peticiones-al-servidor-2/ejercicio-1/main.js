'use strict';

/*
 Vamos a explorar un API abierto de información sobre el mundo Star Wars. En esta página tenemos la documentación completa del API y un formulario que nos permite hacer peticiones a la URL que indiquemos. Identifica la siguiente información sobre SWAPI:
1 la URL base del API -- https://swapi.dev/api/
2 si necesita autenticación -- no, Swapi is a completely open API
3 método HTTP que deben usar las peticiones a este API -- get
4 URL para acceder a la info del personaje "Luke Skywalker" -- http https://swapi.dev/api/people/1/
5 URL para acceder a la info de la película "A New Hope" --  "https://swapi.dev/api/films/1/
6 a qué otros recursos puedo acceder desde el API además de personajes y pelis -- starships, vehicles, species, planets
7 URL para acceder al listado de personajes, ¿está paginada? --  http https://swapi.dev/api/people/, sí (paginada)
8 cómo puedo buscar personajes mediante la URL -- search by name
9 cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee -- just append ?format=wookiee to your urls
*/

