import React from 'react';
import '../Forms.css';
import {Link} from 'react-router-dom';

export default function SpeechTextForm(props) {
  return (
		<form className='begin-form'>
      <div>
        <label htmlFor="speechText">Read through the entire speech</label>
          <Link to={`/speechText/${props.speechID}`}>
            <button type='button' id="speechText">
              Here!
            </button>
          </Link>
      </div>
      <div>
      </div>
    </form>
  );
}
