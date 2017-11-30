export const GET_SPEECH_TEXT = 'GET_SPEECH_TEXT';
export const getSpeechText = (speechID, dispatch) => {
	fetch(`http://localhost:8080/api/speeches/text/${speechID}`)
	.then((obj) => console.log(obj.json()));
};