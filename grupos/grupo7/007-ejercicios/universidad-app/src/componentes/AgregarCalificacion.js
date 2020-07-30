import React from 'react';

export default class AgregarCalificacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre:"Su nombre" , 
            edad:"Su edad"
        };
    }

    onChangeNombre(e) {
        console.log("nombre :",e.target.value);
        this.setState({ nombre: e.target.value });
    }
    onChangeEdad(e) {
        console.log("edad :",e.target.value);
        this.setState({ edad: e.target.value });
    }

    agregar() {
        this.props.agregar({nombre:this.state.nombre,edad:this.state.edad});
    }

    render() {
        return (
            <div className="container"> Nueva Calificación
            <hr/>
             <div className="row" style={{textAlign: 'left'}}>
              <div className="col-sm-3" >Nombre :</div>
              <div className="col-sm-6">
                 <input value={this.state.nombre} onChange={this.onChangeNombre.bind(this)}/>
              </div>
             </div>
             <div className="row" style={{textAlign: 'left'}}>
              <div className="col-sm-3" >Edad :</div>
              <div className="col-sm-6">
                 <input value={this.state.edad} onChange={this.onChangeEdad.bind(this)}/>
              </div>
             </div>
             <hr />
             <button onClick={this.agregar.bind(this)} className="btn btn-primary">
                Agregar
             </button>
           </div>
         );
    }
}