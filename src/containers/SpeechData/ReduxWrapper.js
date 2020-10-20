import SpeechData from "./";

const mapStateToProps = state => ({
  mappedSpeechID: state._root.entries["0"][1]
});

//$FlowReduxBug
export default connect(mapStateToProps)(SpeechData);
