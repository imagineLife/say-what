import React from 'react';
import './Splash.css';
import Header from '../components/Header';
import Section from '../components/Section';

export default function Login(props) {

		const pageHeader = {
			title: `Sign In`,
			text: `or Sign Up!`
		}

		const sectionsArray =[
			{
				title: `Login`,
				includesLoginForm: true
			},
			{
				title: `Register`,
				includesRegisterForm:true
			}
		];

		const sections = sectionsArray.map((sec,ind) => {
	      	return <Section key={ind} {...sec}/>;
		})




    return (
		<main role="main">
		  <Header title={pageHeader.title} subTitle={pageHeader.text}/>
	      
	      {sections}

	    </main>
    );
}
