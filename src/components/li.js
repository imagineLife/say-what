import React from 'react';
import './li.css';

export default function Li(props) {
	console.log('LI props =>',props);
	let objSize = Object.keys(props).length;

	switch(objSize) {
		case 2 :
		    return (
				<li className="li"><span className="boldWord">{props.boldWord} : </span> {props.word}</li>
			);

		default :
		    return (
				<li>{props.word}</li>
		    );
	}
}
