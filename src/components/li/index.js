import React from 'react';
import './li.css';

export default function Li(props) {
    return (
		<li className="li">
			<p> {props.word} </p>
			<span className="boldWord quick-stats-sub-title">{props.boldWord}</span>
		</li>
	);
}
