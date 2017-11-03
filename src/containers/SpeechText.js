import React from 'react';
import './SpeechText.css';
import Section from '../components/Section';

export default function SpeechText(props) {

		const sectionsArray =[
			{
				title: `Speech Title`,
				img: `[ Image of Orator behind Title ]`,
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
	      
	      {sections}

	    </main>
    );
}
