import React from 'react';
import '../stylesheets/Ejercicio2.css';

/*EJERCICIO 2
Desarrolla un componente HalfPage que todo su contenido lo ponga en la mitad izquierda de la pantalla (mitad de ancho y todo el alto). Usa children para introducir todo el contenido entre la apertura y cierre de HalfPage en su interior. Crea 2 componentes HalfPage con algo de contenido HTML (en JSX) para ver cómo se posiciona en una mitad y la otra.*/

class HalfPage extends React.Component {
  render() {
    return <div className="halfPage">{this.props.children}</div>;
  }
}

export default HalfPage;
