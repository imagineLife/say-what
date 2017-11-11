import React from 'react';
import './Login.css';
import Header from '../components/Header';
import LoginSection from '../components/LoginSection';

export default function Login(props) {

		const pageHeader = {
			title: `Sign In`,
			text: `or Sign Up!`
		}

		const sectionsArray =[
			{
				title: `Login`,
				includesLoginForm: true
			}
		];

		const sections = sectionsArray.map((sec,ind) => {
	      	return <LoginSection key={ind} {...sec}/>;
		})

    return (
		<main role="main">
		  <Header title={pageHeader.title} subTitle={pageHeader.text}/>
	      
	      {sections}

	    </main>
    );
}
