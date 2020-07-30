import React from "react";

export default class AlumnoDetalle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alumno: props.alumno,
        };
    }

    render() {
        return (
            <>
                <div>{this.state.alumno.id}</div>
                <div>{this.state.alumno.nombre}</div>
                <div>{this.state.alumno.edad}</div>
                <button
                    onClick={() => this.props.setVistaHandler("alumnos", -1)}
                >
                    Volver
                </button>
            </>
        );
    }
}
