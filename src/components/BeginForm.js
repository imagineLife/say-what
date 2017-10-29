import React from 'react';
import './BeginForm.css';
import {Link} from 'react-router-dom';

export default function BeginForm(props) {

    return (
		<form className='begin-form'>
            <div>
              <label htmlFor="getStarted">See the details of <em>a random speech </em></label>
              <button type='button' id="getStarted">
                <Link to={`/speechData`}>
                    Here!
                </Link>
              </button>
            </div>
            <div>
              <label htmlFor="pickFromList">Choose a speech from a variety of options </label>
              <button type='button' id ="pickFromList">
                <Link to={`/speechPicker`}>
                    Here!
                </Link>
              </button>
            </div>
        </form>
    );
}
