/*EJERCICIO 3 Lección 3.5
Expreso mi odio en rojo
Partiendo del código del ejercicio 1, vamos a hacer que nuestro componente ocupe toda la pantalla disponible, y tenga el textarea en el centro. Vamos a hacer que al detectar la palabra cebolla en el texto del textarea, en vez de mostrar un alert mostrando nuestro odio, pongamos el fondo del componente de color rojo. Al volver a un texto sin cebolla, el fondo vuelve a ser blanco.
Guardaremos la información de si estamos odiando o no en un atributo de la clase. Para ello en el constructor pondremos this.isHating = false.
En la función que maneja el evento change del textarea modificaremos el atributo isHating y usaremos el método this.forceUpdate() para forzar el repintado.
PISTA: recuerda que para que el this funcione correctamente en nuestra función de handle debemos hacer el bind adecuado en el constructor
BONUS: ¿Podrías hacer que nuestro odio aparezca tanto si 'cebolla' tiene mayúsculas o minúsculas?*/

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    /*making sure react interprets this in relation to this component*/
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.isHating = false;
  }
  onChangeHandler(event) {
    console.log('this', this);
    const input = event.currentTarget.value;
    /*to check if text includes "onion" in any combination of caps and lowercase and update isHating as necessary*/
    if (input.toLowerCase().includes('onion')) {
      this.isHating = true;
    } else {
      this.isHating = false;
    }
    /*to call upon textarea so we can change the background color*/
    const textBox = document.getElementById('textArea');
    /*to change background color*/
    if (this.isHating === true) {
      textBox.style.backgroundColor = 'red';
    } else {
      textBox.style = undefined;
    }
    this.forceUpdate();
  }
  render() {
    /*to position textarea in middle of page*/
    const stylePage = {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    };
    return (
      <div style={stylePage}>
        <textarea onChange={this.onChangeHandler} id="textArea"></textarea>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
