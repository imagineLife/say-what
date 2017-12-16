export const GET_SPEECH_TEXT = 'GET_SPEECH_TEXT';
export const getSpeechTextAxn = (speechID, dispatch) => {
	// console.log('getSpeechText speechID ->',speechID);
	const defaultTextURL = `http://localhost:8080/api/speeches/text/default`;
	let IDBasedURL = `http://localhost:8080/api/speeches/text/${speechID}`
	
	if(speechID === '5a1ad99f978ca2681f42df12'){	
		fetch(defaultTextURL)
		.then((obj) => {
			let jsonified = obj.json();
			console.log('Get Speech Text action object->',jsonified);
			return jsonified;
		})		
	}else{
		fetch(IDBasedURL)
		.then((obj) => { return obj.json() })
		// .then((obj) => console.log('Get Speech Text action object->',obj.json()));
	}
};