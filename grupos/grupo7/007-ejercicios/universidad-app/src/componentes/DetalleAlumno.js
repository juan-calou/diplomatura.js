import React from "react";

export default function DetalleAlumno(props) {
    return (
       <div className="container"> Alumno
       <hr/>
        <div className="row" style={{textAlign: 'left'}}>
         <div className="col-sm-3" >Id :</div>
         <div className="col-sm-6">{props.item.id}</div>
        </div>
        <div className="row" style={{textAlign: 'left'}}>
         <div className="col-sm-3" >Nombre :</div>
         <div className="col-sm-6">{props.item.nombre}</div>
        </div>
        <div className="row" style={{textAlign: 'left'}}>
         <div className="col-sm-3" >Edad :</div>
         <div className="col-sm-6">{props.item.edad}</div>
        </div>
      </div>
    );
  }