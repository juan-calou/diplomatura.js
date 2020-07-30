import React from 'react';

export default class AgregarProfesor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre:"Su nombre" , 
        };
    }

    onChangeNombre(e) {
        console.log("nombre :",e.target.value);
        this.setState({ nombre: e.target.value });
    }

    agregar() {
        this.props.agregar({nombre:this.state.nombre});
    }

    render() {
        return (
            <div className="container"> Nuevo Profesor
            <hr/>
             <div className="row" style={{textAlign: 'left'}}>
              <div className="col-sm-3" >Nombre :</div>
              <div className="col-sm-6">
                 <input value={this.state.nombre} onChange={this.onChangeNombre.bind(this)}/>
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