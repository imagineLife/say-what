import React from 'react';
import './BeginForm.css';
import {Link} from 'react-router-dom';

export default function BeginForm(props) {
  console.log('BeginForm props->',props);

  return (
		<form className='begin-form'>
      <div>
        <label htmlFor="getStarted">See Trumps Inauguration Speech</label>
        <button type='button' id="getStarted">
          <Link to={`/speechData/5a1ad99f978ca2681f42df12`}>
              Here!
          </Link>
        </button>
      </div>
      <div>
        <label htmlFor="pickFromList">Choose a speech </label>
        <button type='button' id ="pickFromList">
          <Link to={`/speechPicker`}>
              Here!
          </Link>
        </button>
      </div>
    </form>
  );
}
