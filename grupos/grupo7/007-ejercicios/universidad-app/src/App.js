import React from "react";
import "./App.css";
import ListaAlumnos from "./components/ListaAlumnos";
import DetalleAlumno from "./components/DetalleAlumno";
import ListaProfesores from "./components/ListaProfesores";
import ListaMaterias from "./components/ListaMaterias";
import ListaCalificaciones from "./components/ListaCalificaciones";
import datos from "./datos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: "alumnos",
      idDetalleSeleccionado: -1,
      alumnos: datos.alumnos,
      profesores: datos.profesores,
      materias: datos.materias,
      calificaciones: datos.calificaciones,
    };
  }

  /// <ListaAlumnos /> <ListaProfesores /> <DetalleAlumno>. <DetalleProfesor>
  /**
   * Se utiliza para disparar el cambio de vista.
   * Si viene un id seleccionado, se setea como el detalle actual.
   * @param {*} vista
   * @param {*} idSeleccionado
   */
  setVistaActual(vista, idSeleccionado) {
    const newState = { vistaActual: vista };
    if (idSeleccionado) {
      newState.idDetalleSeleccionado = idSeleccionado;
    } else {
      newState.idDetalleSeleccionado = -1;
    }
    this.setState(newState);
  }

  render() {
    let vistaActual;
    if (this.state.idDetalleSeleccionado >= 0) {
      switch (this.state.vistaActual) {
        case "profesores":
          vistaActual = <ListaProfesores profesores={this.state.profesores} />;
          break;
        case "materias":
          vistaActual = <ListaMaterias materias={this.state.materias} />;
          break;
        case "calificaciones":
          vistaActual = (
            <ListaCalificaciones calificaciones={this.state.calificaciones} />
          );
          break;
        default:
          vistaActual = <ListaAlumnos alumnos={this.state.alumnos} />;
          break;
      }
    } else {
      switch (this.state.vistaActual) {
        case "profesores":
          vistaActual = (
            <DetalleProfesor
              profesores={this.state.profesores}
              id={this.state.idDetalleSeleccionado}
            />
          );
          break;
        case "materias":
          vistaActual = (
            <DetalleMateria
              materias={this.state.materias}
              id={this.state.idDetalleSeleccionado}
            />
          );
          break;
        case "calificaciones":
          vistaActual = (
            <DetalleCalificacion
              calificaciones={this.state.calificaciones}
              id={this.state.idDetalleSeleccionado}
            />
          );
          break;
        default:
          vistaActual = (
            <DetalleAlumno
              alumnos={this.state.alumnos}
              id={this.state.idDetalleSeleccionado}
            />
          );
          break;
      }
    }
    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button
            className="btn btn-outline-info"
            onClick={() => this.setVistaActual("alumnos")}
          >
            Alumnos
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => this.setVistaActual("profesores")}
          >
            Profesores
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => this.setVistaActual("materias")}
          >
            Materias
          </button>
          <button
            className="btn btn-outline-info"
            onClick={() => this.setVistaActual("calificaciones")}
          >
            Calificaciones
          </button>
        </div>
        <h2>{this.state.vistaActual}</h2>
        <div className="mainView">{vistaActual}</div>
      </div>
    );
  }
}

export default App;
