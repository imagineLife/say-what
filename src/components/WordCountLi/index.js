import React from 'react';
import './WordCountLi.css';

export default function WordCountLi({boldWord, word}: {boldWord: string, word: string}) {
    return (
		<li className="WordCountLi">
			<span className="boldWord">{boldWord}</span>
			<br />
			<p> {word} </p>
		</li>
	);
}
