import React from 'react';
import './RegisterForm.css';

export default function Register(props) {

  return (
    <form className='register-form'>
      <fieldset>
        <legend>Register</legend>
          <input id="firstName" type="text" name="firstName" placeholder="firstName" required/>
          <input id="lastName" type="text" name="lastName" placeholder="lastName" required/>
          <input id="userName" type="text" name="userName" placeholder="userName" required/>
          <input id="passWord" type="text" name="passWord"  placeholder="PassWord" required/>
      </fieldset>
          <input type="submit" name="submit" value="Register" />
    </form>
  );
}
