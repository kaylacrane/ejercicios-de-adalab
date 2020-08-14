import React from 'react';
import image from '../images/photo.png';
/*
EJERCICIO 3
Convierte el componente MediaCard del ejercicio anterior en un componente funcional.
*/

const MediaCardFunction = () => {
  return (
    <div className="media-card">
      <div className="top">
        <div className="image-container">
          <img src={image} alt="profile" className="photo" />
        </div>
        <div className="text-container">
          <span className="name">Class React</span>
          <span className="date">Monday, July 10, 2020</span>
        </div>
      </div>
      <p className="paragraph-text">
        Los componentes funcionales son otro tipo de componentes que utilizan la
        estructura de una función para definirse y más adelante, cuando veamos
        el uso de los hooks, aprenderemos que son los que vamos a utilizar en
        estos casos. Actualmente, y dado que React es una tecnología muy nueva
        que aún está evolucionando, conviven estos dos tipos de componentes en
        los proyectos actuales (por eso, cuando habéis...
      </p>
      <div className="bottom">
        <span className="read-more">Read more...</span>
        <div className="likes">
          <span className="likes-number">47</span>
          <span className="heart">♥</span>
        </div>
      </div>
    </div>
  );
};

export default MediaCardFunction;
