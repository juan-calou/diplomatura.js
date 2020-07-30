import React from 'react';
import ItemProfesor from './ItemProfesor'
import AgregarProfesor from './AgregarProfesor'

export default class ListaProfesores extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            lista: props.lista
        };

    }

    borrar(profesor) {
        // 
        this.props.borrar("Profesor",profesor);
    }
    agregar(profesor) {
        this.props.agregar("Profesor",profesor);
    }
    detalle(profesor) {
        this.props.detalle("Profesor",profesor);
    }

    render(){
        return (
            <div style={{textAlign: 'center'}}>
                <AgregarProfesor agregar={this.agregar.bind(this)} />
                <br />
                <br />
                <h1>Profesores</h1>
                <hr/>
                <ul>
                {this.props.lista.map(e => {
                    return (
                    <ItemProfesor key={e.id}
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