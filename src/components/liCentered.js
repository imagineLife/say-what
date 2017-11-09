import React from 'react';
import './liCentered.css';

export default function LiCentered(props) {
	let objSize = Object.keys(props).length;

	switch(objSize) {
		case 2 :
		    return (
				<li><span className="boldWord">{props.boldWord} : </span> {props.word}</li>
			);

		default :
		    return (
				<li>{props.word}</li>
		    );
	}
}
