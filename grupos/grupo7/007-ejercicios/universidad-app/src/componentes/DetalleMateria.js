import React from "react";

export default function DetalleMateria(props) {
    return (
       <div className="container"> Materia
       <hr/>
        <div className="row" style={{textAlign: 'left'}}>
         <div className="col-sm-3" >Id :</div>
         <div className="col-sm-6">{props.item.id}</div>
        </div>
        <div className="row" style={{textAlign: 'left'}}>
         <div className="col-sm-3" >Nombre :</div>
         <div className="col-sm-6">{props.item.nombre}</div>
        </div>
        {console.log(props.item)}
        {props.item.profesores.map(p  => {
                    let profe=props.profesores.find(pr => pr.id===p)
                    console.log(profe);
                    return (
                        <div key={profe.id} className="row" style={{textAlign: 'left'}}>
                        <div className="col-sm-3" >Profesor :</div>
                        <div className="col-sm-6">{profe.nombre}</div>
                        </div>
                    );
                })}
      </div>
    );
  }