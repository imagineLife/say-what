import React from 'react';
import './Splash.css';
import Header from './components/Header';
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
						title : 'Wordy Speech Title'
					},
					{
						Orator : 'theHeart',
						title : 'Heartfelt compassionate speech title'
					},
					{
						Orator : 'theSoul',
						title : 'Deep, convicting, and moving speech title'
					}
				]
			}
		];

		const sections = sectionsArray.map((sec,ind) => {
	      	return <Section key={ind} {...sec}/>;
		})




    return (
		<main role="main">
		  <Header title={pageHeader.title}/>
	      
	      {sections}

	    </main>
    );
}
