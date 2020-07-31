import React from 'react';

export default function ItemMateria(props) {
    return (
       <div className="container"> 
         <div className="row" style={{textAlign: 'left'}}>
          <div 
            onClick={() => {
                props.Detalle(props.item);
                }}
            className="col-sm-9">{props.item.nombre}</div>
          <div className="col-sm-3">
            <button
                onClick={() => {
                props.Borrar(props.item);
                }}
                className="btn btn-outline-dark"
            >
                Borrar
            </button>
          </div>
        </div>
      </div>
    );
  }