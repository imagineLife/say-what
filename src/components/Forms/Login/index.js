import React from 'react';
import './LoginForm.css';
import {connect} from 'react-redux';
import {loginAction} from './state/actions';
import {Redirect} from 'react-router-dom';
import Input from '../../Input'
class LoginForm extends React.Component {
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
    this.props.myRunLoginKey(this.state);
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

    const handleTextChange = (e) => {
      this.setText(e.currentTarget.value, e.currentTarget.id)
    }

    let formInputArr = [
      {
        source: "username",
        type : "text",
        onChangeProp : handleTextChange
        // onChangeProp : this.setText
      },
      {
        source: "password",
        type : "password",
        onChangeProp : handleTextChange
        // onChangeProp : this.setText
      }
    ];

    const inputs = formInputArr.map((input, index) => {
      return <Input key={index} {...input} onAdd={text => this.setText(text)}/>;
    })

    /*
      if there's an authToken,
      redirect user to the speechPicker page
    */
    if(localStorage.getItem('localStorageAuthToken')){
      return (
        <Redirect to="/speechPicker" />
      );
    }
    return (
    	<form className='login-form' onSubmit={e => this.getResFromAPI(e)}>
        <fieldset>
          <legend>Log in</legend>
            <input 
              id="username" 
              type="text" 
              name="username" 
              placeholder="UsernameOLD" 
              onChange={e => this.setText(e.target.value, e.target.id)}
            required/>
            <input 
              id="password" 
              type="text" 
              name="password" 
              onChange={e => this.setText(e.target.value, e.target.id)}
              placeholder="PasswordOLD" 
            required/>
        </fieldset>
            <input 
              type="submit" 
              name="submit" 
              value="Log in"
              onChange={e => this.setText(e.target.value, e.target.id)}
            required/>
            <label htmlFor="register">Don't have an account?</label>
            <input type="button" name="register" id="register" value="Sign up" onClick={this.props.toggleForm}/>

      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    myRunLoginKey: (obj) => loginAction(obj,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);