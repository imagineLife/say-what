import React from 'react';
import './RequestForm.css';
import {connect} from 'react-redux';
import {requestAction} from './state/actions';
import Input from '../../Input'
class RequestForm extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
      username: '',
      password: ''
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
    switch(id) {
      case 'username' :
        this.setState({
          username: text
        })
        break; 
      default:
        this.setState({
          password: text
        })
        break;
    }
  }

  render(){
    console.log('in Request form Render!');

    const handleTextChange = (e) => {
      this.setText(e.currentTarget.value, e.currentTarget.id)
    }

    let reqInputArr = [
      {
        source: "text",
        type : "text",
        placeholder: "I'd like to see ...",
        onChangeProp : handleTextChange
        // onChangeProp : this.setText
      }
    ];

    const reqInputs = reqInputArr.map((input, index) => {
      return <Input key={index} {...input} onAdd={text => this.setText(text)}/>;
    })

    return (
    	<form className='request-form' onSubmit={e => this.getResFromAPI(e)}>
       
        <fieldset>
            
        </fieldset>

          <legend>Request a...</legend>
          
          <label htmlFor="speech">Speech
            <input id="speech" type="radio" name="speech" value="0" />
          </label>

          <label htmlFor="analytic">Analytic
            <input id="analytic" type="radio" name="speech" value="1" />
          </label>
          
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