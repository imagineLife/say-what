import React from 'react';
import './Para.css';

export default function Para(props) {

    return (
		<form className='signup-form'>
            <div>
              <label htmlFor="getStarted">See the details of <em>[a random speech]</em></label>
              <button type='button' id="getStarted">Here!</button>
            </div>
            <div>
              <label htmlFor="pickFromList">Choose a speech from a variety of options</label>
              <button type='button' id ="pickFromList">Here!</button>
            </div>
        </form>
    );
}
