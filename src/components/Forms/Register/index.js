import React from 'react';
import './RegisterForm.css';
import {connect} from 'react-redux';
import {loginAction} from './state/actions';
import {Redirect} from 'react-router-dom';

class Register extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: ''
    }
  }

  getResFromAPI(ev){
    ev.preventDefault();
    let tempState = this.state;
    // let encodedStr = btoa(`${this.state.username}:${this.state.password}`);

    return (
  //Register
        fetch(`http://localhost:8080/api/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tempState)
        })
        .then(() => {
              this.props.myRunLoginKey(this.state);
  //Login after register 
  //TRYING the loginAction
          // fetch(`http://localhost:8080/api/auth/login`, {
          //   method: 'POST',
          //   headers: {
          //       'Content-Type': 'application/json',
          //       'Authorization': 'Basic ' + encodedStr
          //   },
          //   body: JSON.stringify({
          //     username: this.state.username,
          //     password: this.state.password
          //   })
          // })
        })
        .then(res => res.json())
        .catch(err => {
            const {code} = err;
            if (code === 401) {
              console.log(code);
            }
        })
    );


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
      case 'username' :
        this.setState({
          username: text
        })
        break; 
      case 'email' :
        this.setState({
          email: text
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
    console.log(this.state);

    if(localStorage.getItem('localStorageAuthToken')){
      return (
        <Redirect to="/speechPicker" />
      );
    }

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
              id="email" 
              type="text" 
              name="email" 
              placeholder="email"
              value={this.state.email}
              onChange={e => this.setText(e.target.value, e.target.id)}
            required/>
            <input 
              id="username" 
              type="text" 
              name="username" 
              placeholder="username"
              value={this.state.username}
              onChange={e => this.setText(e.target.value, e.target.id)}
            required/>
            <input 
              id="password" 
              type="password" 
              name="password" 
              placeholder="password"
              value={this.state.password}
              onChange={e => this.setText(e.target.value, e.target.id)}
            required/>
            </fieldset>
            <input type="submit" name="submit" value="Register" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
