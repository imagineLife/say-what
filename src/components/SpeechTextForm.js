import React from 'react';
import './SpeechTextForm.css';
import {Link} from 'react-router-dom';

export default function SpeechTextForm(props) {

  return (
		<form className='begin-form'>
      <div>
        <label htmlFor="speechText">Read through the entire speech</label>
        <button type='button' id="speechText">
          <Link to={`/speechText/alpha`}>
              Here!
          </Link>
        </button>
      </div>
      <div>
      </div>
    </form>
  );
}
