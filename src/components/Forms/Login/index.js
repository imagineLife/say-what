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

  getResFromAPI(ev){
    ev.preventDefault();
    let tempState = this.state;
    // console.log(tempState);
    return (
        fetch(`http://localhost:8080/api/users/login`, {
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

  render(){
    return (
    	<form className='login-form' onSubmit={e => this.getResFromAPI(e)}>
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
