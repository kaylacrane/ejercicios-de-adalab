/*EJERCICIO 1 Lección 3.5
Odio la cebolla
Vamos a crear un componente OnionHater que consta de un textarea. Escucharemos los evento de cambio del valor del textarea de forma que, si el texto escrito contiene la palabra 'cebolla' hagamos un alert diciendo 'ODIO LA CEBOLLA'.
PISTA: para acceder al valor del textarea lo podemos hacer desde el objeto evento, el parámetro de la función escuchadora, con ev.target.value
PISTA: para comprobar si una cadena contiene un texto podemos usar el método includes de las cadenas*/

import React from 'react';

class App extends React.Component {
  render() {
    const onChangeListener = (ev) => {
      console.log(ev);
      const input = ev.currentTarget.value;
      if (input.toLowerCase().includes('onion')) alert('ODIO LA CEBOLLA');
    };
    const textArea = <textarea onChange={onChangeListener}></textarea>;
    return <ul>{textArea}</ul>;
  }
}

export default App;
