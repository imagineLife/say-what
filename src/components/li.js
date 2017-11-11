import React from 'react';
import './li.css';

export default function Li(props) {
	let objSize = Object.keys(props).length;

	switch(objSize) {
		case 2 :
		    return (
				<li className="li"><span className="boldWord">{props.boldWord}-Letter Words : </span> {props.word}</li>
			);

		default :
		    return (
				<li>{props.word}</li>
		    );
	}
}
