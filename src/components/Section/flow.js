export type SpeechItemType = {

}

export type PropsTypes = {
	title?: string, 
	img?: () => void, 
	text?: ?string, 
	speechPicker?: boolean, 
	speechesFromAPI?: Array<SpeechItemType>, 
	form?: boolean, 
	includeBeginForm?: boolean,
	includeRequestForm?: boolean,
	requested?: boolean,
	includeLogoutForm?: boolean,
	includeBottomSpace?: boolean 
}