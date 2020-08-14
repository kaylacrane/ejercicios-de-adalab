/*
EJERCICIO 4 Lección 3.5
Visualiza tu destino
Vamos a partir del ejercicio 2 sobre elegir tu destino. Vamos a crear un nuevo componente CityImage que muestra una imagen de una ciudad que recibe por props.
Debe mostrar una imagen de Praga. Para facilitar este comportamiento, este componente debe tener como uno de sus atributos un objeto literal con el formato:
 {
  'Praga': 'http://path-to-praga-image.jpg',
  'Boston': 'http://path-to-boston-image.jpg',
  ...
}
*/

import React from 'react';

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    this.cityImages = {
      Praga:
        'https://place-hold.it/210x295/green/white.png&text=Praga&bold&fontsize=16',
      Boston:
        'https://place-hold.it/210x295/green/white.png&text=Boston&bold&fontsize=16',
      'Buenos Aires':
        'https://place-hold.it/210x295/green/white.png&text=BuenosAires&bold&fontsize=16',
      Sydney:
        'https://place-hold.it/210x295/green/white.png&text=Sydney&bold&fontsize=16',
      Tokio:
        'https://place-hold.it/210x295/green/white.png&text=Tokio&bold&fontsize=16',
    };
  }
  render() {
    const imgStyle = {
      height: '100',
      width: '100',
    };
    return (
      <div>
        <img src={this.cityImages[this.props.city]} />
      </div>
    );
  }
}

export default CityImage;
