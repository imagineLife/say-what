import React from 'react';
import './RegisterForm.css';

export default class Register extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      passWord: ''
    }
  }

  getResFromAPI(ev, values){
    ev.preventDefault();
    console.log('state->',this.state);
  }

  setText(text, id) {
    switch(id) {
      case 'firstName' :
        this.setState({
          firstName: text
        })
        break;
      case 'lastName' :
        this.setState({
          lastName: text
        })
        break;
      case 'userName' :
        this.setState({
          userName: text
        })
        break; 
      default:
        this.setState({
          passWord: text
        })
        break;
    }

  }

  render(){
    return (
      <form className='register-form' onSubmit={e => this.getResFromAPI(e)}>
        <fieldset>
          <legend>Register</legend>
            <input 
              id="firstName" 
              type="text" 
              name="firstName" 
              placeholder="firstName"
              value={this.state.firstName}
              onChange={e => this.setText(e.target.value, e.target.id)}
            required/>
            <input 
              id="lastName" 
              type="text" 
              name="lastName" 
              placeholder="lastName"
              value={this.state.lastName}
              onChange={e => this.setText(e.target.value, e.target.id)}
            required/>
            <input 
              id="userName" 
              type="text" 
              name="userName" 
              placeholder="userName"
              value={this.state.userName}
              onChange={e => this.setText(e.target.value, e.target.id)}
            required/>
            <input 
              id="passWord" 
              type="text" 
              name="passWord" 
              placeholder="passWord"
              value={this.state.passWord}
              onChange={e => this.setText(e.target.value, e.target.id)}
            required/>
            </fieldset>
            <input type="submit" name="submit" value="Register" />
      </form>
    );
  }
}
