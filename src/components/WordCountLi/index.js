import React from 'react';
import './WordCountLi.css';

export default function WordCountLi(props) {
    return (
		<li className="WordCountLi">
			<span className="boldWord">{props.boldWord}</span>
			<br />
			<p> {props.word} </p>
		</li>
	);
}
