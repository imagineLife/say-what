import React from 'react';
import './RegisterForm.css';
import {connect} from 'react-redux';
import {loginAction} from '../Login/state/actions';
import {Redirect} from 'react-router-dom';
import Input from '../../Input'

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

    const handleTextChange = (e) => {
      this.setText(e.currentTarget.value, e.currentTarget.id)
    }

    let formInputArr = [
      {
        source: "firstName",
        type : "text",
        onChangeProp : handleTextChange
        // onChangeProp : this.setText
      },
      {
        source: "lastName",
        type : "text",
        onChangeProp : handleTextChange
        // onChangeProp : this.setText
      },
      {
        source: "email",
        type : "email",
        onChangeProp : handleTextChange
        // onChangeProp : this.setText
      },       
      {
        source: "username",
        type : "text",
        onChangeProp : handleTextChange
        // onChangeProp : this.setText
      },
      {
        source: "password",
        type : "password",
        onChangeProp : handleTextChange
        // onChangeProp : this.setText
      }
    ];

    const inputs = formInputArr.map((input, index) => {
      return <Input key={index} {...input} onAdd={text => this.setText(text)}/>;
    })

    return (
      <form className='register-form' onSubmit={e => this.getResFromAPI(e)}>
        <fieldset>
          <legend>Register</legend>
          {inputs}
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
