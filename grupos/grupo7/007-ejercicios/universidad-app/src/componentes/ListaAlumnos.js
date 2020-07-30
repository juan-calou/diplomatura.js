import React from 'react';
import ItemAlumno from './ItemAlumno'
import AgregarAlumno from './AgregarAlumno'

export default class ListaAlumnos extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            lista: props.lista
        };

    }

    borrar(alumno) {
        // 
        this.props.borrar("Alumno",alumno);
    }
    agregar(alumno) {
        this.props.agregar("Alumno",alumno);
    }
    detalle(alumno) {
        this.props.detalle("Alumno",alumno);
    }

    render(){
        return (
            <div style={{textAlign: 'center'}}>
                <AgregarAlumno agregar={this.agregar.bind(this)} />
                <br />
                <br />
                <h1>Alumnos</h1>
                <hr/>
                <ul>
                {this.props.lista.map(e => {
                    return (
                    <ItemAlumno key={e.id}
                        Borrar={this.borrar.bind(this)}
                        Detalle={this.detalle.bind(this)}
                        item={e}
                    />
                    );
                })}
                </ul>
        </div>)
    }
}