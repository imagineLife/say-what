import React from 'react';
import './li.css';

export default function Li(props) {
    return (
		<li className="li">
			<span className="boldWord">{props.boldWord}</span>
			<br />
			<p> {props.word} </p>
		</li>
	);
}
