export type PropsType = { introInfo: {
		Title: string,
		Orator: string,
		Date: string,
		Audience: string
	}, 
	numberOfWords: {
		uniqueWords: number,
		wordCount: number
	},
	colSize: number,
	title: string, 
	bigWords: Array<string>,
	includeBeginForm: boolean,
	includeBarChart: boolean,
	includeBottomSpace: boolean,
	includeSpeechTextForm: boolean,
	speechID: string,
	speechTitle: string,
	text: string,
	wordsBySize: Array<{size: number, occurances: number}>,
	mostUsedWords: Array<{word: string, occurances: number}>,
	sentences: Array<{text: string, wordCount: number}>,
	chart: string}