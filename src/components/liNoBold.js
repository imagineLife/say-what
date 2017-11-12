import React from 'react';
import './liNoBold.css';

export default function LiNoBold(props) {
	let objSize = Object.keys(props).length;
	return (
		<li>{props.word}</li>
	);
}
