import React from 'react';
import '../float-grid.css';
import './SpeechData.css';
import Header from '../components/Header';
import ResizingSection from '../components/ResizingSection';
import HorizontalBarChart from '../components/d3/horzBarChar';

export default function App(props) {

		const pageHeader = {
			title: `Speech Title`,
			text: `[ Image of Orator behind Title ]`
		}

		const sectionsArray =[
			{
				title: `Quick Stats`,
				qStats : {
					Orator : 'someone',
					Date : 'someTime',
					Audience : 'Humans, potentially',
					'Event Overview' : 'once upon a galaxy far far away & over the rainbow, over the river and through the dark and stormy night'
				}
			},
			{
				title: `Common Words`,
				WordList: [`Bigly`, `'Merica`,`Yeudge`],
				mostUsedWords: [
					{'our' : 49},
					{'we': 48},
					{'will': 43},
					{'America': 19},
					{'you': 15},
					{'all': 14},
					{'but': 13},
					{'are': 12},
					{'their': 11},
					{'American': 11}
				],
				includeHorizontalChart:true
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
				img: 'IMAGE OF SPEAKER',
				includeBottomSpace:true
			}
		];
		
		const sections = sectionsArray.map((sec,ind) => {
			//figure out if theres an img in the sectionsArray
			sec.img = (sec.img)? sec.img : '';

			//figure out if theres an wordList in the sectionsArray
			sec.mostUsedWords = (sec.mostUsedWords)? sec.mostUsedWords : '';
	      	return <ResizingSection key={ind} {...sec}/>;
		})

		console.log('mostUsedWords in SPeechData is ...',sectionsArray[1].mostUsedWords);

    return (
		<main role="main">

	      <Header title={pageHeader.title} subTitle={pageHeader.text}/>
	      
	      {sections}

	    </main>
    );
}
