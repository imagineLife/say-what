import React from 'react';
import './float-grid.css';
import './Splash.css';
import ResizingSection from './components/ResizingSection';

export default function App(props) {

		const pageHeader = {
			title: `Speech Title`,
			text: `[ Image of Orator behind Title ]`
		}

		// const quickStats = {
		// 	Orator : `Someone`,
		// 	Date : `Sometime`,
		// 	Audience : `People`,
		// 	eventOverview : `Twas the night before (politically-correct-celebratory-event)`
		// }3

		const sectionsArray =[
			{
				title: `Common Words`,
				WordList: [`Bigly`, `'Merica`,`Yeudge`]
			},
			{
				title: `Largest Words`,
				text: `Interested in the details of what Trump said? Maybe Hillary? MLK Jr? Perhaps JFK or Abraham Lincoln?
				Get insight into the words of a variety of speeches.`,
				img: 'IMAGE OF SPEAKER'
			},
			{
				title: `Words Per Minute`,
				text: `Interested in the details of what Trump said? Maybe Hillary? MLK Jr? Perhaps JFK or Abraham Lincoln?
				Get insight into the words of a variety of speeches.`,
				img: 'IMAGE OF SPEAKER'
			},			{
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
	      	return <ResizingSection key={ind} {...sec}/>;
		})




    return (
		<main role="main">
	      <header role="banner">
	        <h1>{pageHeader.title}</h1>
	        <h2>{pageHeader.subTitle}</h2>
	      </header>
	      
	      {sections} 

	    </main>
    );
}
