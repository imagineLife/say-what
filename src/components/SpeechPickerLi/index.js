import React from 'react';
import './speechPickerLi.css';
import '../../float-grid.css';

export default function SpeechPickerLi(props) {
    return (
		<li className="SpeechPickerLi col-6">
			<span className="boldWord">{props.boldWord}</span>
			<br />
			{props.word}
		</li>
    );
}
