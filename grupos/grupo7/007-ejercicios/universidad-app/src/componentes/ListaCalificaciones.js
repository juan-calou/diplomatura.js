import React from 'react';
import ItemCalificacion from './ItemCalificacion'
import AgregarCalificacion from './AgregarCalificacion'

export default class ListaAlumnos extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            lista: props.lista
        };

    }

    borrar(calificacion) {
        // 
        this.props.borrar("Calificacion",calificacion);
    }
    agregar(calificacion) {
        this.props.agregar("Calificacion",calificacion);
    }
    detalle(calificacion) {
        this.props.detalle("Calificacion",calificacion);
    }

    render(){
        return (
            <div style={{textAlign: 'center'}}>
                <AgregarCalificacion agregar={this.agregar.bind(this)} />
                <br />
                <br />
                <h1>Calificaciones</h1>
                <hr/>
                <ul>
                {this.props.lista.map(e => {
                    return (
                    <ItemCalificacion 
                        Borrar={this.borrar.bind(this)}
                        Detalle={this.detalle.bind(this)}
                        Alumno={this.props.alumnos.find(a => a.id===e.alumno)}
                        Materia={this.props.materias.find(m => m.id===e.materia)}
                        Nota={e.nota}
                        Item={e}
                    />
                    );
                })}
                </ul>
        </div>)
    }
}