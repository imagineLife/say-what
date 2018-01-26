import React from 'react';
import '../Forms.css';
import './BeginForm.css';
import {Link} from 'react-router-dom';

export default function BeginForm(props) {
  return (
    <div className="maxWidthWrapper">
  		<form className='begin-form'>
        <div id='getStartedDiv'>
          <label htmlFor="getStarted">See President Trump's</label>
            <Link to={`/speechData/default`}>
              <button type='button' id="getStarted">
                Inauguration Speech
              </button>
            </Link>
            <label htmlFor="getStarted" className="subLabel"><small>(without an account)</small></label>
        </div>
        <div id='pickFromListDiv'>
          <label htmlFor="pickFromList">To see more speeches, sign up for an account or login! </label>
            <Link to={`/speechPicker`}>
              <button type='button' id ="pickFromList">
                Here!
              </button>
            </Link>
        </div>
      </form>
    </div>
  );
}
