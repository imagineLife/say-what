import React, { Component } from "react";
import { connect } from "react-redux";
import Splash from "./Splash";

const mapStateToProps = state => ({
  mappedSpeechID: state._root.entries["0"][1]
});

//$FlowReduxBug
export default connect(mapStateToProps)(Splash);
