import React from 'react';
import '../Forms.css';
// import {Redirect} from 'react-router-dom';

export default function LogoutForm(props) {
  
  let onSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem('localStorageAuthToken');
    window.location.href = '/';
  }

  return (
		<form className='logout-form' onSubmit={(e) => onSubmit(e)}>
        <button type='submit' id="logout" >
          Here!
        </button>
    </form>
  );
}