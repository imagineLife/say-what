import React from 'react';
import './speechPickerLi.css';
import '../../float-grid.css';

export default function SpeechPickerLi({boldWord, word}: {boldWord: string, word: string}) {
    return (
		<li className="SpeechPickerLi col-6">
			<span className="boldWord">{boldWord}</span>
			<br />
			{word}
		</li>
    );
}
