import React from 'react';
import avatar from './myAvatar.png';
import './App.scss';

/*EJERCICIO 1
Vamos a crear un nuevo proyecto de React llamado mediacard. Vamos a maquetar esta tarjeta dentro del método render de nuestro componente App para que tenga un diseño lo más parecido posible al de la imagen. Podéis usar una imagen a vuestra elección en lugar de la que aparece en el diseño, y Font-Awesome para el icono del corazón. De esta forma, aprenderemos a cómo trabajar con cosas que ya conocemos (HTML y CSS) en una aplicación de React.*/

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const topPart = (
      <div className="box-header-container">
        <div className="img-container">
          <img src={avatar} className="image" alt="logo"></img>
          <p>This is me</p>
        </div>
        <div className="box-header-text">
          <h3 className="name">Alexa Guerrero</h3>
          <span className="date">Friday, 28 June 2020</span>
        </div>
      </div>
    );
    return (
      <div className="box">
        {topPart}
        <p className="paragraph">
          Cats are a queer kind of folk demand to be let outside at once, and
          expect owner to wait for me as i think about it yet purr when give
          birth. Poop i is fluffy i want to go outside let me go outside
          nevermind inside is better or you have cat to be kitten me right meow
          trip on catnip. Get video posted to internet for chasing red dot.
          Catasstrophe cat snacks. Give me attention or face the wrath but meow
          go back to sleep owner brings food and water tries to pet on head, so
          scratch get sprayed by water because bad cat for licks paws.
        </p>
        <div className="box-footer-container">
          <span className="read-more">Read more...</span>
          <span className="likes">
            <span className="likes-number">37</span>
            <i className="fas fa-heart likes-icon"></i>
          </span>
        </div>
      </div>
    );
  }
}
/* EJERCICIO 2
Partiendo del ejercicio anterior, en este ejercicio aprenderemos mejor cómo funciona JSX. Para ello vamos a asignar nombres a las variables, un tema que será importante cuando creemos nuestros componentes más adelante. Partiendo del ejercicio anterior vamos a hacer que el return de render() devuelva una sola variable, para ello, vamos a extraer a variables cada una de las "etiquetas" del contenido del return del ejercicio original. Por ejemplo, una variable para la cabecera, y otra para el párrafo. Haremos que los nombres de nuestras variables sean descriptivos y, cuando sea posible, cortos.*/

export default App;
