import React from 'react';
import './LoginForm.css';
import {connect} from 'react-redux';
import {loginAction} from './state/actions';
import {Redirect} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
      username: '',
      password: ''
    }
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
    /*
      if there's an authToken,
      redirect user to the speechPicker page
    */
    if(this.props._root.entries["0"][1].authToken.length > 1){
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
              placeholder="Username" 
              onChange={e => this.setText(e.target.value, e.target.id)}
            required/>
            <input 
              id="password" 
              type="text" 
              name="password" 
              onChange={e => this.setText(e.target.value, e.target.id)}
              placeholder="Password" 
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