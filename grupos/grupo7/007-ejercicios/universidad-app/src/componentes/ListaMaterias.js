import React from 'react';
import ItemMateria from './ItemMateria'
import AgregarMateria from './AgregarMateria'

export default class ListaMaterias extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            lista: props.lista
        };
    }

    borrar(materia) {
        this.props.borrar("Materia",materia);
    }
    agregar(materia) {
        this.props.agregar("Materia",materia);
    }
    detalle(materia) {
        this.props.detalle("Materia",materia);
    }

    render(){
        return (
            <div style={{textAlign: 'center'}}>
                <AgregarMateria agregar={this.agregar.bind(this)} profesores={this.props.profesores} />
                <br />
                <br />
                <h1>Materias</h1>
                <hr/>
                <ul>
                {this.props.lista.map(e => {
                    return (
                    <ItemMateria key={e.id}
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