import React from "react";

class ListaProfesores extends React.Component {
  render() {
    return (
      <ul>
        {this.props.profesores.map((a) => (
          <li>{a.nombre}</li>
        ))}
      </ul>
    );
  }
}

export default ListaProfesores;
