import type { Props, state, loginObjType, EventType} from './flow'
import React from 'react';
import '../Forms.css';
import './LoginForm.css';
import {connect} from 'react-redux';
import {loginAction} from './state/actions';
import {Redirect} from 'react-router-dom';
import Input from '../../Input'

const LoginForm = (props: Props) =>{

  let[username, setUsername] = React.useState('');
  let[password, setPassword] = React.useState('');
  let [loading, setLoading] = React.useState(false)
  const getResFromAPI = (ev: EventType ) => {
    ev.preventDefault();
    
    let loginObj : loginObjType = {
      username : username,
      password : password,
      loading: false
    }

    props.myRunLoginKey(loginObj);
  }

  const setText = (text : string, id?: string) => {
    switch(id) {
      case 'username' :
        setUsername(text)
        break; 
      default:
        setPassword(text)
        break;
    }
  }

  let body;

  if(loading){
    
    console.log('loading props', props);
    body = (
        <div className="message message-default">Logging in...</div>
    );

  }else{

    const handleTextChange = (e) => {
      setText(e.currentTarget.value, e.currentTarget.id)
    }

    let formInputArr = [
      {
        source: "username",
        type : "text",
        onChangeProp : handleTextChange
      },
      {
        source: "password",
        type : "password",
        onChangeProp : handleTextChange
      }
    ];

    const inputs = formInputArr.map((input, index) => {
      return <Input key={index} {...input} onAdd={text => setText(text)}/>;
    })

    /*
      if there's an authToken,
      redirect user to the speechPicker page
    */
    if(localStorage.getItem('localStorageAuthToken')){
      
      return (
        <Redirect to="/speechPicker" />
      );
    }

    body = (
      <form className='login-form' onSubmit={e => getResFromAPI(e)}>
        <fieldset>
          <legend>Log in</legend>
            {inputs}
        </fieldset>
            <input 
              type="submit" 
              name="submit" 
              value="Log in"
              onChange={e => setText(e.target.value, e.target.id)}
            required/>
            <label htmlFor="register">Don't have an account?</label>
            <input type="button" name="register" id="register" value="Sign up" onClick={props.toggleForm}/>
      </form>
    );

  }

  console.log('RENDER LOGIN!!');

  return (
    <div>{body}</div>
  );
}

const mapStateToProps = (state) => {
  return {...state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    myRunLoginKey: (obj) => loginAction(obj,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);