import React from 'react';
import './App.css';
import datos from './datos';
import ListaAlumnos from './componentes/ListaAlumnos'
import DetalleAlumno from './componentes/DetalleAlumno'
import ListaProfesores from './componentes/ListaProfesores'
import DetalleProfesor from './componentes/DetalleProfesor'
import ListaMaterias from './componentes/ListaMaterias'
import DetalleMateria from './componentes/DetalleMateria'
import ListaCalificaciones from './componentes/ListaCalificaciones'
import DetalleCalificacion from './componentes/DetalleCalificacion'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vistaActual: 'alumnos',
      idDetalleSeleccionado: -1,
      item:"",
      alumnos: datos.alumnos,
      profesores: datos.profesores,
      materias: datos.materias,
      calificaciones: datos.calificaciones,
    };
  }
  /**
   * Se utiliza para disparar el cambio de vista.
   * Si viene un id seleccionado, se setea como el detalle actual.
   * @param {*} vista
   * @param {*} idSeleccionado
   */
  setVistaActual(vista, item) {
    let newState = { vistaActual: vista };
    if (item.id) {
      newState= {idDetalleSeleccionado:item.id, item:item};
      console.log (`Vista ${vista} Nuevo idSeleccionado :${item.id} `);
    } else {
      newState.idDetalleSeleccionado = -1;
    }
    console.log(newState);
    this.setState(newState);
  }
  render() {
    let vistaActual = <div>ToDo</div>;
    if (this.state.vistaActual==="Alumnos")
    {
      vistaActual=this.state.idDetalleSeleccionado!==-1?<DetalleAlumno item={this.state.item}/>:<ListaAlumnos lista={this.state.alumnos} borrar={this.borrar} detalle={this.detalle} agregar={this.agregar}/>;
    }
    if (this.state.vistaActual==="Profesores")
    {
      vistaActual=this.state.idDetalleSeleccionado!==-1?<DetalleProfesor item={this.state.item}/>:<ListaProfesores lista={this.state.profesores} borrar={this.borrar} detalle={this.detalle} agregar={this.agregar}/>;
    }
    if (this.state.vistaActual==="Materias")
    {
      vistaActual=this.state.idDetalleSeleccionado!==-1?<DetalleMateria item={this.state.item} profesores={this.state.profesores}/>:<ListaMaterias lista={this.state.materias} profesores={this.state.profesores} borrar={this.borrar} detalle={this.detalle} agregar={this.agregar}/>;
    }
    if (this.state.vistaActual==="Calificaciones")
    {
      vistaActual=this.state.idDetalleSeleccionado!==-1?<DetalleCalificacion item={this.state.item}/>:<ListaCalificaciones lista={this.state.calificaciones} alumnos={this.state.alumnos} materias={this.state.materias} borrar={this.borrar} detalle={this.detalle} agregar={this.agregar}/>;
    }

    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button onClick={()=>{this.setVistaActual("Alumnos",-1);}} className="btn btn-outline-info" >Alumnos</button> 
          <button onClick={()=>{this.setVistaActual("Profesores",-1);}} className="btn btn-outline-info">Profesores</button>
          <button onClick={()=>{this.setVistaActual("Materias",-1);}} className="btn btn-outline-info">Materias</button>
          <button onClick={()=>{this.setVistaActual("Calificaciones",-1);}} className="btn btn-outline-info">Calificaciones</button>
        </div>
        <div className="mainView">{this.state.vistaActual}</div>
        <div className="mainView">{vistaActual}</div>
      </div>
    );
  }

  borrar=(item) =>{
    console.log(item);
    let listaAlumnos,listaProfesores,listaMaterias,listaCalificaciones;

    if (this.state.vistaActual==="Alumnos") {
      listaAlumnos= this.state.alumnos.filter(a => a.id!==item.id);
      this.setState({ alumnos: listaAlumnos  });
    }
    if (this.state.vistaActual==="Profesor") {
      listaProfesores= this.state.profesores.filter(a => a.id!==item.id);
      this.setState({ profesores: listaProfesores  });
    }
    if (this.state.vistaActual==="Materia") {
      listaMaterias= this.state.materias.filter(a => a.id!==item.id);
      this.setState({ materias: listaMaterias  });
    }
    if (this.state.vistaActual==="Calificacion") {
      listaCalificaciones= this.state.calificaciones.filter(c => c.alumno!==item.alumno || c.materia!==item.materia || c.nota!==item.nota);
      this.setState({ calificaciones: listaCalificaciones  });
    }
  }

  detalle=(item) =>{
    console.log(item);
    this.setVistaActual(this.state.vistaActual,item);
  }

  agregar=(item)=> {
    console.log(item);
    let id,listaAlumnos,listaProfesores,listaMaterias,listaCalificaciones;
    if (this.state.vistaActual==="Alumnos") {
      id=(Math.max.apply(null, this.state.alumnos.map(a => a.id))+1);
      listaAlumnos= this.state.alumnos.concat({id:id ,nombre:item.nombre,edad:item.edad});
      this.setState({ alumnos: listaAlumnos  });
      
    }
    if (this.state.vistaActual==="Profesores") {
      id=(Math.max.apply(null, this.state.profesores.map(p => p.id))+1);
      listaProfesores= this.state.profesores.concat({id:id ,nombre:item.nombre});
      this.setState({ profesores: listaProfesores  });
    }
    if (this.state.vistaActual==="Materias") {
      id=(Math.max.apply(null, this.state.materias.map(m => m.id))+1);
      listaMaterias= this.state.materias.concat({id:id ,nombre:item.nombre,profesores:item.profesores}); 
      this.setState({ materias: listaMaterias  });
    }
    if (this.state.vistaActual==="Calificaciones") {  
      listaCalificaciones= this.state.calificaciones.concat(item);
      this.setState({ calificaciones: listaCalificaciones  });
    }
  }
}

export default App;
