import type { Props } from './flow'

import React from 'react'
import './index.css'

export default function DropDownWord({word, wordsByOrator} : Props){

	let [arrowDirection, setArrowDirection] = React.useState("right")
	
	return(
		<React.Fragment>
			<li className="comparison-list" 
				onClick={() => setArrowDirection((arrowDirection == 'right') ? "down" : "right")}>
				<span className="value">{word.word}</span>
				<span className="count">{word.occurances}<sub>x</sub></span>
				<i className={`arrow ${arrowDirection}`}></i>
			</li>
			{arrowDirection == "down" && wordsByOrator.map(wbo => {
				return (<li key={`${word.word}${wbo.orator}`} className="list-by-orator">
					<span className="value">{wbo.orator}</span>
					<span className="count">{wbo.occurances}<sub>x</sub></span>
				</li>)
			})}
		</React.Fragment>)
}