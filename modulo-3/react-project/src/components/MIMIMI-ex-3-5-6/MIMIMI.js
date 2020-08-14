/*EJERCICIO 3 Lección 3.5
Expreso mi odio en rojo
Partiendo del código del ejercicio 1, vamos a hacer que nuestro componente ocupe toda la pantalla disponible, y tenga el textarea en el centro. Vamos a hacer que al detectar la palabra cebolla en el texto del textarea, en vez de mostrar un alert mostrando nuestro odio, pongamos el fondo del componente de color rojo. Al volver a un texto sin cebolla, el fondo vuelve a ser blanco.
Guardaremos la información de si estamos odiando o no en un atributo de la clase. Para ello en el constructor pondremos this.isHating = false.
En la función que maneja el evento change del textarea modificaremos el atributo isHating y usaremos el método this.forceUpdate() para forzar el repintado.
PISTA: recuerda que para que el this funcione correctamente en nuestra función de handle debemos hacer el bind adecuado en el constructor
BONUS: ¿Podrías hacer que nuestro odio aparezca tanto si 'cebolla' tiene mayúsculas o minúsculas?*/

import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';
// import TranslateButton from './TranslateButton';
import Translator from './Translator';
let text = '';
class App extends React.Component {
  render() {
    /*this is the handler that we pass down to the TextInput in order to gather its value*/
    const handleText = (result) => {
      console.log('result', result);
      text = result;
      this.forceUpdate();
    };

    const stylePage = {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    };
    const styleContainer = {
      height: '40vh',
      width: '40vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '50px',
    };
    return (
      <div style={stylePage}>
        <div className="container" style={styleContainer}>
          <p>Traductor Mimimi</p>
          <TextInput handleText={handleText} />
          <Translator text={text} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
