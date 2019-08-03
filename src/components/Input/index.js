import type { PropsTypes} from './flow'
import React from 'react';
import './Input.css';

export default function Input({
	source,
	type,
	minInputLength,
	placeholder,
	onChangeProp
}: PropsTypes) {
	
    return (
	    <input 
	      id = {source} 
	      type = {type} 
	      name = {source}
	      minLength = {minInputLength ? minInputLength : null}
	      placeholder = {placeholder ? placeholder : source.charAt(0).toUpperCase() + source.slice(1)} 
	      onChange={e => onChangeProp(e)}
	    required/>
	);

}
