import React from 'react';
import './Splash.css';
import Section from './components/Section';

export default function SpeechPicker(props) {

		const pageHeader = {
			title: `Pick a Speech`,
			text: ``
		}

		const sectionsArray =[
			{
				title: `Choose from a list of options`,
				text: ``,
				speechPicker: true,
				speechesArray : [
					{
						Orator : 'theMouth',
						title : 'Speech Title 1'
					},
					{
						Orator : 'theHeart',
						title : 'Speech Title 2'
					},
					{
						Orator : 'theSoul',
						title : 'Speech Title 3'
					}
				]
			}
		];

		const sections = sectionsArray.map((sec,ind) => {
	      	return <Section key={ind} {...sec}/>;
		})




    return (
		<main role="main">
	      <header role="banner">
	        <h1>{pageHeader.title}</h1>
	        <h2>{pageHeader.text}</h2>
	      </header>
	      
	      {sections}

	    </main>
    );
}
