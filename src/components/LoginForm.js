import React from 'react';
import './LoginForm.css';
// import {Link} from 'react-router-dom';

export default function BeginForm(props) {
  // componentDidMount(){
  //   this.userName.focus();
  // }

  return (
  	<form className='login-form'>
      <fieldset>
        <legend>Log in</legend>
          <input id="userName" type="text" name="userName" placeholder="UserName" required/>
          <input id="passWord" type="text" name="passWord"  placeholder="PassWord" required/>
      </fieldset>
          <input type="submit" name="submit" value="Log in" />
          <label htmlFor="register">Don't have an account?</label>
          <input type="button" name="register" id="register" value="Sign up" onClick={props.toggleForm}/>
    </form>
  );
}
