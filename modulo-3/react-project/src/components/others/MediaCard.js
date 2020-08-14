import React from 'react';

/*
EJERCICIO 1
Vamos a partir del ejercicio 1 (o del 2) de la sesión anterior. Vamos a crear un nuevo componente MediaCard encargado de pintar una tarjeta social para un usuario. Vamos a cargar ese nuevo componente en nuestro componente principalApp.js.
*/

/*EJERCICIO 2
Vamos a partir del ejercicio 1 (el anterior). Vamos a usar las props para personalizar el contenido de una tarjeta social MediaCard. En concreto, vamos a personalizar
el nombre del usuario
la fecha
la imagen
el texto descriptivo
el número de likes
si el corazón está o no relleno
*/

class MediaCard extends React.Component {
  render() {
    return (
      <div className="media-card">
        <div className="top">
          <div className="image-container">
            <img src={this.props.image} alt="profile" className="photo" />
          </div>
          <div className="text-container">
            <span className="name">{this.props.name}</span>
            <span className="date">{this.props.date}</span>
          </div>
        </div>
        <p className="paragraph-text">{this.props.text}</p>
        <div className="bottom">
          <span className="read-more">Read more...</span>
          <div className="likes">
            <span className="likes-number">{this.props.likes}</span>
            <span className="heart">{this.props.heart}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MediaCard;
