import React from 'react';
import './radio.css';

export default function Radio(props) {
	
    return (
		<label htmlFor={props.val}>{props.labelText}
			<input 
				id={props.val} 
				type="radio" 
				name="requestType"
				value={props.val} 
				onChange={e => props.onChangeProp(e)}
			required />
		</label>
	);

}
