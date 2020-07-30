import React from "react";

export default function DetalleCalificacion(props) {
    return (
       <div className="container"> Calificacion
       <hr/>
        <div className="row" style={{textAlign: 'left'}}>
         <div className="col-sm-3" >Alumno :</div>
         <div className="col-sm-6">{props.item.alumno}</div>
        </div>
        <div className="row" style={{textAlign: 'left'}}>
         <div className="col-sm-3" >Materia :</div>
         <div className="col-sm-6">{props.item.materia}</div>
        </div>
        <div className="row" style={{textAlign: 'left'}}>
         <div className="col-sm-3" >Nota :</div>
         <div className="col-sm-6">{props.item.nota}</div>
        </div>
      </div>
    );
  }