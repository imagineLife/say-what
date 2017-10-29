import React from 'react';
import './Splash.css';
import Section from './components/Section';

export default function SpeechPicker(props) {

		const pageHeader = {
			title: `Say What?!`,
			text: `See data within speeches`
		}

		const sectionsArray =[
			{
				title: `Notice what they're saying`,
				text: `SayWhay looks at a speech and its text content as a dataset, illuminating the largest words spoken, the most common words of the speech, and more!`
			},
			{
				title: `Pick from a variety of Speeches`,
				text: `Interested in the details of what Trump said? Maybe Hillary? MLK Jr? Perhaps JFK or Abraham Lincoln?
				Get insight into the words of a variety of speeches.`,
				img: 'IMAGE OF SPEAKER'
			},
			{
				title: 'Check it out!',
				includeBeginForm: true
			}
		];
		
		const sections = sectionsArray.map((sec,ind) => {
			//figure out if theres an img in the sectionsArray
			//the image will either equal itself, or set it to an empty string
			sec.img = (sec.img)? sec.img : '';

	      	//figure out if theres an wordList in the sectionsArray
			//the wordList will either equal itself, or set it to an empty string
			sec.WordList = (sec.WordList)? sec.WordList : '';
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
