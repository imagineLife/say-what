import React from 'react';
import './LoginForm.css';

export default class LoginForm extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
      username: '',
      password: ''
    }
  }

  getResFromAPI(ev){
    ev.preventDefault();
    let tempState = this.state;
    let encodedStr = btoa(`${this.state.username}:${this.state.password}`);
    // console.log(tempState);
    return (
        fetch(`http://localhost:8080/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + encodedStr
            },
            body: JSON.stringify(tempState)
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
    console.log(this.state);

  }

  render(){
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
