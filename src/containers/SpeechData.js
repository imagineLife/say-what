import React from 'react';
import '../float-grid.css';
import './SpeechData.css';
import Header from '../components/Header';
import ResizingSection from '../components/ResizingSection';

export default function App(props) {

		const pageHeader = {
			Title: `Trump 2017 Inaugural Address`,
			text: `[ Image of Orator behind Title ]`
		}

		const sectionsArray =[
			{
				introInfo:{
					Title : 'Quick Stats',
					Orator : 'Donald J. Trump',
					Date : 'Friday January 20, 2017',
					Audience : 'Public, at the Capitol Building in Washington D.C.',
					'Event Overview' : 'Donald Trump marks the commencement of a new four-year term as the President of the United States'
				}
			},
			{
				Title: `Common Words`,
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
				Title: `Largest Words`,
				text: `Interested in the details of what Trump said? Maybe Hillary? MLK Jr? Perhaps JFK or Abraham Lincoln?
				Get insight into the words of a variety of speeches.`,
			},
			{
				Title: `Words Per Minute`,
				text: `Interested in the details of what Trump said? Maybe Hillary? MLK Jr? Perhaps JFK or Abraham Lincoln?
				Get insight into the words of a variety of speeches.`,
				includeBottomSpace:true
			},
			{
				Title: `Words By Size`,
				wordsBySize :[
					{3 : 351},
					{4: 242},
					{2: 235},
					{5: 187},
					{7: 118}
				]
			},
			{
				Title: `Top 12 Largest Words`,
				bigWords: [
					"infrastructure",
					"administration",
					"understanding",
					"disagreements",
					"establishment",
					"redistributed",
					"neighborhoods",
					"transferring",
					"technologies",
					"importantly",
					"immigration",
					"magnificent"
				]
			}
		];
		
		const sections = sectionsArray.map((sec,ind) => {

			//figure out if mostUsedWords is in the section
			sec.mostUsedWords = (sec.mostUsedWords)? sec.mostUsedWords : '';
	      	return <ResizingSection key={ind} {...sec}/>;
		})

    return (
		<main role="main">

	      <Header title={pageHeader.Title} subTitle={pageHeader.text}/>
	      
	      {sections}

	    </main>
    );
}
