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

    borrar=(calificacion)=>{this.props.borrar(calificacion);}
    agregar=(calificacion)=>{this.props.agregar(calificacion);}
    detalle=(calificacion)=>{this.props.detalle(calificacion);}

    render(){
        return (
            <div style={{textAlign: 'center'}}>
                <AgregarCalificacion agregar={this.agregar} alumnos={this.props.alumnos} materias={this.props.materias}/>
                <br />
                <br />
                <h1>Calificaciones</h1>
                <hr/>
                <ul>
                {this.props.lista.map(e => {
                    return (
                    <ItemCalificacion 
                        borrar={this.borrar}
                        detalle={this.detalle}
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