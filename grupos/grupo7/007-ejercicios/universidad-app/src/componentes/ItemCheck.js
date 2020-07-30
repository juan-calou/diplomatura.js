import React from 'react';

export default function ItemCheck(props) {
    return (
        <li>
            <input key={props.id}  type="checkbox" 
            checked={props.isChecked} value={props.value} 
            onChange={props.checkItemCheched}/> {props.value}
        </li>  //onClick={props.checkItemCheched}
    )
}