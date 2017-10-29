import React from 'react';
import './li.css';

export default function Li(props) {
	let objSize = Object.keys(props).length;
	
	switch(objSize) {
		case (objSize = 2) :
		    return (
				<li><span className="boldWord">{props.boldWord} : </span> {props.word}</li>
			);

		default :
		    return (
				<li>{props.word}</li>
		    );
	}
}
