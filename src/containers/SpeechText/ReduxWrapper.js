import React from "react";
import SpeechText from "./SpeechText";
import { connect } from "react-redux";
// State
import { getSpeechTextAxn } from "./state/actions";

const mapDispatchToProps = dispatch => ({
  runSpeechTextAction: speechId => {
    getSpeechTextAxn(speechId, dispatch);
  }
});

const mapStateToProps = state => ({
  speechID: state._root.entries["0"][1]
});

//$FlowReduxBug
export default connect(mapStateToProps, mapDispatchToProps)(SpeechText);
