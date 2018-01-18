import React from 'react';
import './Login.css';
import HeaderSplash from '../../components/HeaderSplash';
import LoginSection from '../../components/LoginSection';
import {Redirect} from 'react-router-dom';

export default function Login(props) {

		const pageHeader = {
			title: `Sign In`,
			text: `or Sign Up!`
		}

		const sectionsArray =[
			{
				title: `Login`,
				text: 'With an account you can see stats on many speeches & request a speech to be added! You can also receive emails when speeches & data gets updated!',
				includesLoginForm: true,
				includeBottomSpacer: true
			}
		];

		const sections = sectionsArray.map((sec,ind) => {
	      	return <LoginSection key={ind} {...sec}/>;
		})

		if(localStorage.getItem('localStorageAuthToken')){
	      return (
	        <Redirect to="/speechPicker" />
	      );
	    }
	    
    return (
		<main role="main" className="splashBack">
		  <HeaderSplash title={pageHeader.title} subTitle={pageHeader.text}/>
	      
	      {sections}

	    </main>
    );
}
