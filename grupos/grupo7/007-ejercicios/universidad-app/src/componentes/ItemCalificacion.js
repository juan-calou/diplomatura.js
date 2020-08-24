import React from 'react';

export default function ItemCalificacion(props) {
    return (
       <div className="container"> 
         <div className="row" style={{textAlign: 'left'}}>
          <div onClick={()=>{props.detalle({alumno:props.Alumno.nombre,materia:props.Materia.nombre,nota:props.Nota});}} className="col-sm-3">{props.Alumno.nombre}</div>
          <div onClick={()=>{props.detalle({alumno:props.Alumno.nombre,materia:props.Materia.nombre,nota:props.Nota});}} className="col-sm-3">{props.Materia.nombre}</div>
          <div onClick={()=>{props.detalle({alumno:props.Alumno.nombre,materia:props.Materia.nombre,nota:props.Nota});}} className="col-sm-3">Nota: {props.Nota}</div>
          <div className="col-sm-3">
            <button onClick={()=>{props.borrar(props.Item);}} className="btn btn-outline-dark">Borrar</button>
          </div>
        </div>
      </div>
    );
  }