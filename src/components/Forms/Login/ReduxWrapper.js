import type { dispatchType } from "./flow";
import React from "react";
import { connect } from "react-redux";
import { loginAction } from "./state/actions";
import LoginForm from "./LoginForm";

//$FlowReduxBug
const mapStateToProps = state => {
  return { ...state };
};

//$FlowReduxBug
const mapDispatchToProps = (dispatch): dispatchType => {
  return {
    myRunLoginKey: obj => loginAction(obj, dispatch)
  };
};
//$FlowReduxBug
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
