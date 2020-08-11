import React from "react";

class ListaMaterias extends React.Component {
  render() {
    return (
      <ul>
        {this.props.materias.map((a) => (
          <li>{a.nombre}</li>
        ))}
      </ul>
    );
  }
}

export default ListaMaterias;
