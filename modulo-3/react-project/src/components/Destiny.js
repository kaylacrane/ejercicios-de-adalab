/*
EJERCICIO 2 Lección 3.5
Elige tu destino
Vamos a crear un componente Destiny que contiene un select con un listado de ciudades: Buenos Aires, Sydney, Praga, Boston y Tokio. Al cambiar el valor del select, haremos aparecer un alert que diga 'Tu destino es viajar a XXX', siendo XXX la ciudad seleccionada.*/

import React from 'react';
import CityImage from './CityImage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.city = '';

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler = (ev) => {
    this.city = ev.currentTarget.value;

    this.forceUpdate();
  };
  render() {
    const selectOptions = (
      <select onChange={this.onChangeHandler}>
        <option value="default" disabled selected>
          Selecciona un destino
        </option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    );
    /*generates the message only if a city has been selected*/
    if (this.city) {
      const container = document.querySelector('.container');
      container.innerHTML = `Tu destino es viajar a ${this.city}`;
    }
    return (
      <div>
        {selectOptions}
        <div className="container"></div>
        <CityImage city={this.city} />
      </div>
    );
  }
}

export default App;
