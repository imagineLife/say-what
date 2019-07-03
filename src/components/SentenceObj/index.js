import React from 'react'
  
let SentenceObj = ({text , dims, margins}) =>{
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