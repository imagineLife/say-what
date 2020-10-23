import type { PropsType } from "./flow";
import React from "react";
import "../Forms.css";
import "./RequestForm.css";
import "../../../float-grid.css";
import { connect } from "react-redux";
import { requestAction } from "./state/actions";
import Input from "../../Input";
import Radio from "../../Radio";

const RequestForm = (props: PropsType) => {
  let [text, setText] = React.useState("");
  let [type, setType] = React.useState(0);

  const getResFromAPI = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    ev.preventDefault();
    props.myRunRequestKey({ text, type });
  };

  const textSetter = (text: string, id?: string) => setText(text);

  const handleTextChange = e => {
    textSetter(e.currentTarget.value, e.currentTarget.id);
  };

  const handleRadioChange = e => {
    textSetter(e.currentTarget.value);
  };

  // Array of Form-Input Objects

  let reqInputArr = [
    {
      source: "speech",
      type: "radio",
      labelText: "Speech",
      val: 0,
      onChangeProp: handleRadioChange
    },
    {
      source: "speech",
      type: "radio",
      labelText: "Analytic",
      val: 1,
      onChangeProp: handleRadioChange
    },
    {
      source: "text",
      type: "text",
      placeholder: "I'd like to see ...",
      onChangeProp: handleTextChange
    }
  ];

  // Extracts Input components from
  // array of objects above

  const reqInputs = reqInputArr.map((input, index) => {
    if (input.source === "text") {
      return <Input key={index} {...input} onAdd={text => textSetter(text)} />;
    } else return null;
  });

  // Extracts Radio components from
  // array of objects above

  const reqRadio = reqInputArr.map((input, index) => {
    if (input.source === "speech") {
      return <Radio key={index} {...input} onAdd={text => textSetter(text)} />;
    } else return null;
  });

  return (
    <form
      className="request-form maxWidthWrapper"
      onSubmit={e => getResFromAPI(e)}
    >
      <fieldset>
        <legend>Request a...</legend>
        {reqRadio}
      </fieldset>

      {reqInputs}

      <input
        type="submit"
        name="submit"
        id="submit"
        value="Submit Request"
        onClick={props.toggleForm}
      />
    </form>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    myRunRequestKey: obj => requestAction(obj, dispatch)
  };
};

//$FlowReduxBug
export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);
