import React from 'react';
import '../Forms.css';
import {Link} from 'react-router-dom';

export default function SpeechTextForm(props) {
  return (
		<form className='begin-form'>
      <div>
        <label htmlFor="speechText">Read through the entire speech</label>
        <button type='butoon' id="speechText">
          <Link to={`/speechText/${props.speechID}`}>
              Here!
          </Link>
        </button>
      </div>
      <div>
      </div>
    </form>
  );
}
