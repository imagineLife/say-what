import type { propsType, TempStateType } from './flow'
import React from 'react';
import './RegisterForm.css';
import {connect} from 'react-redux';
import {loginAction} from '../Login/state/actions';
import {Redirect} from 'react-router-dom';
import Input from '../../Input'

const Register = (props: propsType) => {
  
  let [ firstName, setFirstname ] = React.useState('')
  let [ lastName, setLastname ] = React.useState('')
  let [ username, setUsername ] = React.useState('')
  let [ password, setPassword ] = React.useState('')
  let [ email, setEmail ] = React.useState('')

  const getResFromAPI = (ev) => {
    ev.preventDefault();

    let tempState: TempStateType = {
      firstName,
      lastName,
      username,
      password,
      email
    };

    return (
  //Register
        fetch(`${window.backendPath}/api/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tempState)
        })
        .then(() => {
          props.myRunLoginKey(tempState);
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

  const setText = (text, id) => {
    switch(id) {
      case 'firstName' :
        setFirstname(text)
        break;
      case 'lastName' :
        setLastname(text)
        break;
      case 'username' :
        setUsername(text)
        break; 
      case 'email' :
        setEmail(text)
        break;
      default:
        setPassword(text)
        break;
    }
  }

  if(localStorage.getItem('localStorageAuthToken')){
    return (
      <Redirect to="/speechPicker" />
    );
  }

  const handleTextChange = (e) => {
    setText(e.currentTarget.value, e.currentTarget.id)
  }

  let formInputArr = [
    {
      source: "firstName",
      type : "text",
      onChangeProp : handleTextChange
    },
    {
      source: "lastName",
      type : "text",
      onChangeProp : handleTextChange
    },
    {
      source: "email",
      type : "email",
      onChangeProp : handleTextChange
    },       
    {
      source: "username",
      type : "text",
      onChangeProp : handleTextChange
    },
    {
      source: "password",
      type : "password",
      minInputLength: 8,
      onChangeProp : handleTextChange
    }
  ];

  const inputs = formInputArr.map((input, index) => {
    return <Input key={index} {...input} onAdd={text => setText(text)}/>;
  })

  return (
    <form className='register-form' onSubmit={e => getResFromAPI(e)}>
      <fieldset>
        <legend>Register</legend>
        {inputs}
      </fieldset>
      <input type="submit" name="submit" value="Register" />
    </form>
  );

}

const mapStateToProps = (state)=> {
  return {...state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    myRunLoginKey: (obj) => loginAction(obj,dispatch)
  };
}
//$FlowReduxBug
export default connect(mapStateToProps, mapDispatchToProps)(Register);
