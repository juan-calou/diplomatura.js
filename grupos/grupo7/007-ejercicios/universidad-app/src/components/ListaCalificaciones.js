import React from "react";

class ListaCalificaciones extends React.Component {
  render() {
    return (
      <ul>
        {this.props.calificaciones.map((a) => (
          <li>{a.alumno}</li>
        ))}
      </ul>
    );
  }
}

export default ListaCalificaciones;
