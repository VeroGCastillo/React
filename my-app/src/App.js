import React from "react";
import Card from "./componentes/Card";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Articulos a la venta de Harry Potter</h1>
      </div>
      <Card
        nombre="Capa "
        articulo="Capa de Harry Potter de la casa que elijas! Gryffindor, Slytherin, Ravenclaw o Hufflepuff"
        imagen="capa"
      />
      <Card
        nombre="Varita "
        articulo="La varita de Harry Potter mide veintiocho centímetros, y está hecha de acebo, con una pluma de fénix en su centro. Ésta fue donada por Fawkes, mascota de Albus Dumbledore."
        imagen="varita"
      />
      <Card
        nombre="Articulos "
        articulo="Lentes de Harry Potter y corbaba de Gryffindor"
        imagen="articulos"
      />
    </div>
  );
}

export default App;
