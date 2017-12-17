import React from 'react';
import './RegisterForm.css';

export default class Register extends React.Component {
  submitFn(ev){
    ev.preventDefault();
    console.log('submitted');
  }

  render(){
    return (
      <form className='register-form' onSubmit={e => this.submitFn(e)}>
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
}
