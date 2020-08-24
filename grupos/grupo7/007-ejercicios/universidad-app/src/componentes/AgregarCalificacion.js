import React from 'react';
import '../App.scss';
import Dropdown from './Dropdown';

export default class AgregarCalificacion extends React.Component {
    constructor(props) {
        super(props);
        let alumnos=this.props.alumnos.map((a)=> { return ({id:a.id,value:a.nombre})});
        let materias=this.props.materias.map((m)=> { return ({id:m.id,value:m.nombre})});
        console.log(alumnos);
        console.log(materias);
        this.state = {
            alumno: 0 , 
            materia: 0,
            nota: 0,
            alumnos,
            materias, 

        };
    }

    onChangeAlumno(e) {
        console.log("nombre Alumno:",e.value);
        this.setState({ alumno: e.id });
    }
    onChangeMateria(e) {
        console.log("nombre Materia:",e.value);
        this.setState({ materia: e.id });
    }
    onChangeNota(e) {
        console.log("nota :",e.target.value);
        this.setState({ nota: e.target.value });
    }

    agregar() {
        this.props.agregar({alumno:this.state.alumno,materia:this.state.materia,nota:this.state.nota});
    }

    render() {
        return (
            <div className="container"> Nueva Calificación
            <hr/>
             <div className="row" style={{textAlign: 'left'}}>
              <div className="col-sm-3" >Alumno :</div>
              <div className="col-sm-6">
                <Dropdown title="Seleccione Alumno" items={this.state.alumnos} onChange={this.onChangeAlumno.bind(this)} />
              </div>
             </div>
             <div className="row" style={{textAlign: 'left'}}>
              <div className="col-sm-3" >Materia :</div>
              <div className="col-sm-6">
                <Dropdown title="Seleccione Materia" items={this.state.materias} onChange={this.onChangeMateria.bind(this)} />
              </div>
             </div>
             <div className="row" style={{textAlign: 'left'}}>
              <div className="col-sm-3" >Nota :</div>
              <div className="col-sm-6">
                 <input value={this.state.nota} onChange={this.onChangeNota.bind(this)}/>
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