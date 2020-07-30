import React from 'react';

export default function ItemCheck(props) {
    return (
        <div>
            <input key={props.id}  type="checkbox" 
             value={props.value} checked={props.isChecked}
            onChange={props.checkItemCheched}/> {props.value}
        </div>  //onClick={props.checkItemCheched} 
    )
}