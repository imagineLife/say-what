import React from 'react';
import './LoginForm.css';

export default class LoginForm extends React.Component {
  constructor(props){
    console.log(props);
    super(props);
    
    this.state = {
      username: '',
      password: ''
    }
  }

  render(){
    return (
    	<form className='login-form'>
        <fieldset>
          <legend>Log in</legend>
            <input id="userame" type="text" name="username" placeholder="Username" required/>
            <input id="passeord" type="text" name="password"  placeholder="Password" required/>
        </fieldset>
            <input type="submit" name="submit" value="Log in" />
            <label htmlFor="register">Don't have an account?</label>
            <input type="button" name="register" id="register" value="Sign up" onClick={this.props.toggleForm}/>
      </form>
    );
  }
}
