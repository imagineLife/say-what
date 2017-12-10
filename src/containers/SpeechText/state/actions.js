export const GET_SPEECH_TEXT = 'GET_SPEECH_TEXT';
export const xNgetSpeechText = (speechID, dispatch) => {
	//This action pulls the URL string of the speech rom the DB
	fetch(`http://localhost:8080/api/speeches/text/${speechID}`)
	.then((obj) => console.log('action object->',obj.json()));
};