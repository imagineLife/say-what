//individual prop description
type wordsByOratorType = {
	orator: string,
	occurances: number
}

//flow props description
export type Props = { 
	word : { 
		word: string, 
		occurances: number,
		optionalKey? : string, //...an optional key 
		// allowForUndefined : ?string
	}, 

	//NOTE: wordsByOratorType is defined above
	wordsByOrator : Array<wordsByOratorType> 
}