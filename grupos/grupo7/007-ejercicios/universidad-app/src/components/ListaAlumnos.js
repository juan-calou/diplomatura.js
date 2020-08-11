import React from "react";

class ListaAlumnos extends React.Component {
  render() {
    return (
      <ul>
        {this.props.alumnos.map((a) => (
          <li>{a.nombre}</li>
        ))}
      </ul>
    );
  }
}

export default ListaAlumnos;
