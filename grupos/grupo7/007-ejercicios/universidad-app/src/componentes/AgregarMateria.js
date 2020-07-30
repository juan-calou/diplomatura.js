import React from 'react';
import ItemCheck from './ItemCheck';

export default class AgregarMateria extends React.Component {
    constructor(props) {
        super(props);
        let checkProfesores=this.props.profesores.map((p)=> { return ({id:p.id,value:p.nombre,isChecked:false})});
        console.log(checkProfesores);
        this.state = {
            nombre:"Nombre Materia" , 
            profesores:checkProfesores,
        };
    }

    onChangeNombre(e) {
        console.log("nombre :",e.target.value);
        this.setState({ nombre: e.target.value });
    }
    onChangeProfesor(e) {
        console.log("edad :",e.target.value);
        this.setState({ edad: e.target.value });
    }

    checkItemCheched(e) {
        console.log(e.target);
        let profesores = this.state.profesores
        profesores.forEach(prof => {
        if (prof.id === e.target.key)
            prof.isChecked =  e.target.checked
        })
        this.setState({profesores: profesores})
     }

    agregar() {
        console.log(this.state.profesores);
        let profeSel=this.state.profesores.filter(p => p.isChecked); //   .map(p => p.id);
        this.props.agregar({nombre:this.state.nombre,profesores:profeSel});
    }

    render() {
        return (
            <div className="container"> Nueva Materia
            <hr/>
             <div className="row" style={{textAlign: 'left'}}>
              <div className="col-sm-3" >Nombre :</div>
              <div className="col-sm-6">
                 <input value={this.state.nombre} onChange={this.onChangeNombre.bind(this)}/>
              </div>
             </div>
             <div className="row" style={{textAlign: 'left'}}>
              <div className="col-sm-3" >Profesores :</div>
              <div className="col-sm-6">
              <ul>
                {this.state.profesores.map(e => {
                    return (
                    <ItemCheck  checkItemCheched={this.checkItemCheched.bind(this)}
                        key={e.id} value={e.value} isChecked={e.isChecked} 
                    />
                    // <CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />
                    );
                })}
                </ul>
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