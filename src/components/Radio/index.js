import type { PropsType } from './flow'
import React from 'react';
import './radio.css';

export default function Radio({
	val, 
	labelText, 
	onChangeProp
}: PropsType) {
	
    return (
		<label htmlFor={val}>{labelText}
			<input 
				id={val} 
				type="radio" 
				name="requestType"
				value={val} 
				onChange={e => onChangeProp(e)}
			required />
		</label>
	);

}
