import React from 'react';
import './Input.css';

export default function Input(props) {

    return (
	    <input 
	      id = {props.source} 
	      type = {props.source} 
	      name = {props.source} 
	      placeholder = {props.source.charAt(0).toUpperCase() + props.source.slice(1)} 
	      onChange={e => props.onChangeProp(e)}
	    required/>
	);

}