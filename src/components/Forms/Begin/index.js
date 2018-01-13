import React from 'react';
import '../Forms.css';
import './BeginForm.css';
import {Link} from 'react-router-dom';

export default function BeginForm(props) {
  return (
    <div className="maxWidthWrapper">
  		<form className='begin-form'>
        <div>
          <label htmlFor="getStarted">See Trumps Inauguration Speech</label>
            <Link to={`/speechData/default`}>
              <button type='button' id="getStarted">
                Here!
              </button>
            </Link>
        </div>
        <div>
          <label htmlFor="pickFromList">Choose a speech </label>
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
