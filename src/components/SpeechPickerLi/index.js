import React from 'react';
import './speechPickerLi.css';

export default function SpeechPickerLi(props) {
    return (
		<li className="SpeechPickerLi">
			<span className="boldWord">{props.boldWord} : </span>
			<br />
			{props.word}
		</li>
    );
}
