import React from "react";
import "./App.css";
import datos from "./datos";
//import ListaDatos from "./components/ListaDatos";
import AlumnoLista from "./components/AlumnoLista";
import AlumnoDetalle from "./components/AlumnoDetalle";

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
    /**
     * Se utiliza para disparar el cambio de vista.
     * Si viene un id seleccionado, se setea como el detalle actual.
     * @param {*} vista
     * @param {*} idSeleccionado
     */
    setVistaActual(vista, idSeleccionado) {
        console.log("SetVista " + vista + " id:" + idSeleccionado);
        const newState = { vistaActual: vista };
        if (idSeleccionado) {
            newState.idDetalleSeleccionado = idSeleccionado;
        } else {
            newState.idDetalleSeleccionado = -1;
        }
        this.setState(newState);
    }
    componentDidUpdate() {
        console.log("didupdate");
    }
    eliminarAlumno(id) {
        const alumnos = this.state.alumnos.filter((e) => e.id !== id);
        const newState = {
            alumnos,
            vistaActual: "alumnos",
        };

        this.setState(newState);
        //this.forceUpdate();
    }

    render() {
        const vistaActual = this.state.vistaActual;
        let contenido;
        switch (vistaActual) {
            case "alumnos":
                if (this.state.idDetalleSeleccionado > 0) {
                    contenido = (
                        <AlumnoDetalle
                            alumno={this.state.alumnos.find(
                                (o) => o.id === this.state.idDetalleSeleccionado
                            )}
                            setVistaHandler={this.setVistaActual.bind(this)}
                        />
                    );
                } else {
                    contenido = (
                        <AlumnoLista
                            datos={this.state.alumnos}
                            setVistaHandler={this.setVistaActual.bind(this)}
                            eliminarAlumno={this.eliminarAlumno.bind(this)}
                        />
                    );
                }
                break;

            default:
                contenido = <div className="btn btn-danger">hay un error</div>;
                break;
        }

        return (
            <div className="App">
                <header className="alert alert-info">Diplomatura JS</header>
                <div id="botonera">
                    <button
                        className="btn btn-outline-info"
                        onClick={() => this.setVistaActual("alumnos", -1)}
                    >
                        Alumnos
                    </button>
                    <button
                        className="btn btn-outline-info"
                        onClick={() => this.setVistaActual("profesores", -1)}
                    >
                        Profesores
                    </button>
                    <button
                        className="btn btn-outline-info"
                        onClick={() => this.setVistaActual("materias", -1)}
                    >
                        Materias
                    </button>
                    <button
                        className="btn btn-outline-info"
                        onClick={() =>
                            this.setVistaActual("calificaciones", -1)
                        }
                    >
                        Calificaciones
                    </button>
                </div>
                <div className="card m-2">
                    <div className="card-header">{vistaActual}</div>
                    <div className="card-body">{contenido}</div>
                </div>
            </div>
        );
    }
}

export default App;
