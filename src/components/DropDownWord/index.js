import React from 'react'
import './index.css'

export default function DropDownWord({word, wordsByOrator}){
	let [arrowDirection, setArrowDirection] = React.useState("right")
	return(
		<li className="comparison-list">
			<span className="value">{word.word}</span>
			<span className="count">{word.occurances}<sub>x</sub></span>
			<i 
				className={`arrow ${arrowDirection}`} 
				onClick={() => setArrowDirection((arrowDirection == 'right') ? 'down' : 'right')}></i>
		</li>)
}