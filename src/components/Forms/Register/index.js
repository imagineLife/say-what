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

  getResFromAPI(ev){
    ev.preventDefault();
    let tempState = this.state;
    // console.log(tempState);
    return (
        fetch(`http://localhost:8080/api/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tempState)
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => res.json())
            // .then(({authToken}) => storeAuthInfo(authToken, dispatch))
            .catch(err => {
                const {code} = err;
                if (code === 401) {
                  console.log(code);
                    // Could not authenticate, so return a SubmissionError for Redux Form
                    // return Promise.reject(
                    //     new SubmissionError({
                    //         _error: 'Incorrect username or password'
                    //     })
                    // );
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
      default:
        this.setState({
          password: text
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
              id="username" 
              type="text" 
              name="username" 
              placeholder="username"
              value={this.state.username}
              onChange={e => this.setText(e.target.value, e.target.id)}
            required/>
            <input 
              id="password" 
              type="text" 
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
