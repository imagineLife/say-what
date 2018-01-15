import React from 'react';
import './Input.css';

export default function Input(props) {
	
    return (
	    <input 
	      id = {props.source} 
	      type = {props.type} 
	      name = {props.source}
	      minLength = {props.minInputLength ? props.minInputLength : null}
	      placeholder = {props.placeholder ? props.placeholder : props.source.charAt(0).toUpperCase() + props.source.slice(1)} 
	      onChange={e => props.onChangeProp(e)}
	    required/>
	);

}
