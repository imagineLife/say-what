import React from 'react';
import './radio.css';

export default function Radio(props) {
	
    return (
		<label htmlFor="speech">{props.labelText}
			<input 
				id={props.val} 
				type="radio" 
				name="speech"
				value={props.val} 
				onChange={e => props.onChangeProp(e)}
			required />
		</label>
	);

}
