import React from 'react';
import './li.css';

export default function Li(props) {
	let objSize = Object.keys(props.boldWord).length;
	console.log('li props =>',props,'objSize =>',objSize);
	switch(objSize) {
		case 1 :
		    return (
				<li className="li"><span className="boldWord">{props.boldWord}-Letter Words : </span> {props.word}</li>
			);

		default :
		    return (
				<li className="li"><span className="boldWord">{props.boldWord} : </span> {props.word}</li>
		    );
	}
}
