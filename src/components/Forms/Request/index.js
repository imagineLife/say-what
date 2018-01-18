import React from 'react';
import '../Forms.css';
import './RequestForm.css';
import '../../../float-grid.css';
import {connect} from 'react-redux';
import {requestAction} from './state/actions';
import Input from '../../Input'
import Radio from '../../Radio'
class RequestForm extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
      text: '',
      type: 0
    }

    //COULD USE THIS!
    //this.setText = this.setText.bind(this)
    //onChangeProp would change back to this.setText
    // and the input component would need to pass 2 params, the currentTarget & currentVal (as prior) 

  }

  getResFromAPI(ev){
    ev.preventDefault();
    this.props.myRunRequestKey(this.state);
  }

  setText(text, id) {
      this.setState({
        text: text
      })
    }

  setType(typeVal){
    this.setState({
      type: typeVal
    })
  }

  render(){

    const handleTextChange = (e) => {
      this.setText(e.currentTarget.value, e.currentTarget.id)
    }

    const handleRadioChange = (e) => {
      this.setType(e.currentTarget.value)
    }


// Array of Form-Input Objects
// Declaring props of inputs

    let reqInputArr = [
      {
        source : "speech",
        type : "radio",
        labelText: "Speech",
        val : 0,
        onChangeProp : handleRadioChange
        // onChangeProp : this.setText
      },
      {
        source : "speech",
        type : "radio",
        labelText: "Analytic",
        val : 1,
        onChangeProp : handleRadioChange
        // onChangeProp : this.setText
      },
      {
        source: "text",
        type : "text",
        placeholder: "I'd like to see ...",
        onChangeProp : handleTextChange
        // onChangeProp : this.setText
      }
    ];


// Extracts Input components from
// array of objects above

    const reqInputs = reqInputArr.map((input, index) => {
      if (input.source === 'text'){
        return <Input key={index} {...input} onAdd={text => this.setText(text)}/>;
      }
      else return null;
    })

// Extracts Radio components from
// array of objects above

    const reqRadio = reqInputArr.map((input, index) => {
      if (input.source === 'speech'){
        return <Radio key={index} {...input} onAdd={text => this.setType(text)}/>;
      }
      else return null;
    })

//Return the form with input components
    return (
    	<form className='request-form maxWidthWrapper' onSubmit={e => this.getResFromAPI(e)}>
       
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
            onClick={this.props.toggleForm}
          />

      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    myRunRequestKey: (obj) => requestAction(obj,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);