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

    borrar=(alumno) => {this.props.borrar(alumno);}
    agregar=(alumno) => {this.props.agregar(alumno);}
    detalle=(alumno) => {this.props.detalle(alumno);}

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
                    <ItemAlumno key={e.id} borrar={this.borrar} detalle={this.detalle} item={e} />
                    );
                })}
                </ul>
        </div>)
    }
}