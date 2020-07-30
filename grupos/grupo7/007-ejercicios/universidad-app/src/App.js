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
  setVistaActual(vista, idSeleccionado) {
    const newState = { vistaActual: vista };
    if (idSeleccionado) {
      newState.idDetalleSeleccionado = idSeleccionado;
    } else {
      newState.idDetalleSeleccionado = -1;
    }
    this.setState(newState);
  }
  render() {
    let vistaActual = <div>ToDo</div>;
    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button onClick={() => {
              this.setVistaActual(<ListaAlumnos lista={this.state.alumnos} 
                borrar={this.borrar.bind(this)}
                detalle={this.detalle.bind(this)}
                agregar={this.agregar.bind(this)}/>,-1);
            }
          } className="btn btn-outline-info" >Alumnos  </button> 
          {/*  */}
          <button onClick={() => {
              this.setVistaActual(<ListaProfesores lista={this.state.profesores} 
                borrar={this.borrar.bind(this)}
                detalle={this.detalle.bind(this)}
                agregar={this.agregar.bind(this)}/>,-1);
            }
            }  className="btn btn-outline-info">Profesores</button>
          <button onClick={() => {
              this.setVistaActual(<ListaMaterias lista={this.state.materias} 
                profesores={this.state.profesores}
                borrar={this.borrar.bind(this)}
                detalle={this.detalle.bind(this)}
                agregar={this.agregar.bind(this)}/>,-1);
            }
          } className="btn btn-outline-info">Materias</button>
          <button onClick={() => {
              this.setVistaActual(<ListaCalificaciones lista={this.state.calificaciones} 
                alumnos={this.state.alumnos}
                materias={this.state.materias}
                borrar={this.borrar.bind(this)}
                detalle={this.detalle.bind(this)}
                agregar={this.agregar.bind(this)}/>,-1);
            }
          } className="btn btn-outline-info">Calificaciones</button>
        </div>
        <div className="mainView">{this.state.vistaActual}</div>
        <div className="mainView">{vistaActual}</div>
      </div>
    );
  }

  borrar(tipo,item) {
    console.log(item);
    let vista,listaAlumnos,listaProfesores,listaMaterias,listaCalificaciones;

    if (tipo==="Alumno") {
      listaAlumnos= this.state.alumnos.filter(a => a.id!==item.id);
      this.setState({ alumnos: listaAlumnos  });
      vista=<ListaAlumnos lista={listaAlumnos} borrar={this.borrar.bind(this)} detalle={this.detalle.bind(this)}
          agregar={this.agregar.bind(this)}/>;
    }
    if (tipo==="Profesor") {
      listaProfesores= this.state.profesores.filter(a => a.id!==item.id);
      this.setState({ profesores: listaProfesores  });
      vista=<ListaProfesores lista={listaProfesores} borrar={this.borrar.bind(this)} detalle={this.detalle.bind(this)}
          agregar={this.agregar.bind(this)}/>;
    }
    if (tipo==="Materia") {
      listaMaterias= this.state.materias.filter(a => a.id!==item.id);
      this.setState({ materias: listaMaterias  });
      vista=<ListaMaterias lista={listaMaterias} profesores={this.state.profesores}
          borrar={this.borrar.bind(this)} detalle={this.detalle.bind(this)}
          agregar={this.agregar.bind(this)}/>;
    }
    if (tipo==="Calificacion") {
      listaCalificaciones= this.state.calificaciones.filter(a => a.alumno!==item.alumno && a.materia!==item.materia);
      this.setState({ calificaciones: listaCalificaciones  });
      vista=<ListaCalificaciones lista={listaCalificaciones} alumnos={this.state.alumnos}
          materias={this.state.materias}
          borrar={this.borrar.bind(this)} detalle={this.detalle.bind(this)}
          agregar={this.agregar.bind(this)}/>;
    }
    this.setVistaActual(vista,-1);
  }

  detalle(tipo,item) {
    console.log(item);
    let vista;
    if (tipo==="Alumno") vista= <DetalleAlumno item={item}/>;
    if (tipo==="Profesor") vista= <DetalleProfesor item={item}/>;
    if (tipo==="Materia") vista= <DetalleMateria item={item} profesores={this.state.profesores}/>;
    if (tipo==="Calificacion") vista= <DetalleCalificacion item={item} />;
    
    this.setVistaActual(vista,item.id);
  }

  agregar(tipo,item) {
    console.log(item);
    let vista,id,listaAlumnos,listaProfesores,listaMaterias,listaCalificaciones;
    if (tipo==="Alumno") {
      id=(Math.max.apply(null, this.state.alumnos.map(a => a.id))+1);
      listaAlumnos= this.state.alumnos.concat({id:id ,nombre:item.nombre,edad:item.edad});
      this.setState({ alumnos: listaAlumnos  });
      vista= <ListaAlumnos 
      lista={listaAlumnos} borrar={this.borrar.bind(this)} detalle={this.detalle.bind(this)}
      agregar={this.agregar.bind(this)}/>;
    }
    if (tipo==="Profesor") {
      id=(Math.max.apply(null, this.state.profesores.map(p => p.id))+1);
      listaProfesores= this.state.profesores.concat({id:id ,nombre:item.nombre});
      this.setState({ profesores: listaProfesores  });
      vista= <ListaProfesores 
      lista={listaProfesores} borrar={this.borrar.bind(this)} detalle={this.detalle.bind(this)}
      agregar={this.agregar.bind(this)}/>;
    }
    if (tipo==="Materia") {
      id=(Math.max.apply(null, this.state.materias.map(m => m.id))+1);
      listaMaterias= this.state.materias.concat({id:id ,nombre:item.nombre}); //falta revisar
      this.setState({ materias: listaMaterias  });
      vista=<ListaMaterias lista={listaMaterias} 
          profesores={this.state.profesores}
          borrar={this.borrar.bind(this)} detalle={this.detalle.bind(this)}
          agregar={this.agregar.bind(this)}/>;
    }
    if (tipo==="Calificacion") {  //hacer completo
      listaCalificaciones= this.state.calificaciones.filter(a => a.id!==item.id);
      this.setState({ materias: listaMaterias  });
      vista=<ListaMaterias lista={listaCalificaciones} 
          profesores={this.state.profesores}
          borrar={this.borrar.bind(this)} detalle={this.detalle.bind(this)}
          agregar={this.agregar.bind(this)}/>;
    }
    this.setVistaActual(vista,-1);
  }
}

export default App;
