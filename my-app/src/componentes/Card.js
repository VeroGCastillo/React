import React from "react";
import "../Hojas-de-estilo/Card.css";
function Card(props) {
  return (
    <div className="contenedor-harrypotter">
      <img
        className="imagen-harrypotter"
        src={require(`../assets/img/${props.imagen}-harrypotter.jpg`)}
        alt="capaharrypotter"
      />
      <div className="contenedor-texto-harrypotter">
        <p className="nombre-articulo">{props.nombre}de Harry Potter</p>
        <p className="texto-articulo">{props.articulo}</p>
      </div>
    </div>
  );
}

export default Card;
