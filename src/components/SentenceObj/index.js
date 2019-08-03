import React from 'react'
  
let SentenceObj = ({text , dims, margins}: {text: {text: string}, dims: {width: number}, margins: {top: number}}) =>{
  return(
	<text
	  transform={`translate(${dims.width / 2}, ${margins.top})`}
	  textAnchor={'middle'}
	  fontSize={'12px'}
	  fill={'white'}
	  stroke={'none'}>
	    {text.text}
	</text>
  )
}

export default SentenceObj