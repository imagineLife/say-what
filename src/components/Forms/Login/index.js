import React from 'react';
import './LoginForm.css';
import {connect} from 'react-redux';
import {login} from './state/actions';

class LoginForm extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
      username: '',
      password: ''
    }
  }

  getResFromAPI(ev){
    ev.preventDefault();
    this.props.componentLogin(this.state); 
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

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentLogin: (obj) => login(obj,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);