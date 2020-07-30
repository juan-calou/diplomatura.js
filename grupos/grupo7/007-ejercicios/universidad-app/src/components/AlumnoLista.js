import React from "react";

export default class AlumnoLista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: props.datos,
        };
    }

    shouldComponentUpdate() {
        console.log("asdfasdf");
        this.forceUpdate();
        return true;
    }

    render() {
        return (
            <table className="table table-sm table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.datos.map((a) => (
                        <tr key={a.id}>
                            <td>{a.id}</td>
                            <td>{a.nombre}</td>
                            <td>{a.edad}</td>
                            <td>
                                <button
                                    onClick={() =>
                                        this.props.setVistaHandler(
                                            "alumnos",
                                            a.id
                                        )
                                    }
                                    className="btn btn-secondary btn-sm mr-1"
                                >
                                    Ver
                                </button>
                                <button
                                    onClick={() =>
                                        this.props.eliminarAlumno(a.id)
                                    }
                                    className="btn btn-danger btn-sm"
                                >
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
