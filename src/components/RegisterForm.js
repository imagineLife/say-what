import React from 'react';
import './RegisterForm.css';
// import {Link} from 'react-router-dom';

export default function Register(props) {
  // componentDidMount(){
  //   this.userName.focus();
  // } 

  return (
    <form className='register-form'>
      <fieldset>
        <legend>Register</legend>
          <input id="userName" type="text" name="userName" placeholder="Register" required/>
          <input id="passWord" type="text" name="passWord"  placeholder="PassWord" required/>
      </fieldset>
          <input type="submit" name="submit" value="Register" />
          <label htmlFor="register">Don't have an account?</label>
          <input type="button" name="register" id="register" value="Register" onClick={props.toggleForm}/>
    </form>
  );
}
