import React from "react";

class DetalleAlumno extends React.Component {
  render() {
    return (
      <ul>
        {this.props.alumnos
          .find((a) => a.id == this.props.id)
          .map((e) => (
            <p>{e.nombre}</p>
          ))}
      </ul>
    );
  }
}

export default DetalleAlumno;
