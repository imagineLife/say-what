import React from 'react';
import '../../float-grid.css';
import './SpeechData.css';
import Header from '../../components/Header';
import ResizingSection from '../../components/ResizingSection';
import Image from '../../imgs/trump.jpg';

export default function App(props) {

		const pageHeader = {
			Title: `Trump 2017 Inaugural Address`,
			image: Image
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
				Title: 'How Many Words',
				numberOfWords:{
					wordCount : 1463,
					uniqueWords : 538					
				}
			},
			{
				Title: `Common Words`,
				mostUsedWords: [
					{'word': 'our', 'occurances': 49},
					{'word': 'we', 'occurances': 48},
					{'word': 'will', 'occurances': 43},
					{'word': 'America', 'occurances': 19},
					{'word': 'you', 'occurances': 15},
					{'word': 'all', 'occurances': 14},
					{'word': 'but', 'occurances': 13},
					{'word': 'are', 'occurances': 12},
					{'word': 'their', 'occurances': 11},
					{'word': 'American', 'occurances': 11}
				],
				includeBarChart:true
			},
			{
				Title: `Words By Size`,
				wordsBySize :[
					{'size': 3, 'occurances' : 351},
					{'size': 4, 'occurances' : 242},
					{'size': 2, 'occurances' : 235},
					{'size': 5, 'occurances' : 187},
					{'size': 7, 'occurances' : 118}
				],
				includeWordBubble: true
			},
			{
				Title: `12 Longest Words`,
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
			},
			{
				Title: `Read the Speech Text`,
				includeSpeechTextForm: true,
				includeBottomSpace:true

			}
		];

	//set each resizing section to the 'section' variable,
	// looping through each section in the above array		
		const sections = sectionsArray.map((sec,ind) => {
	      	return <ResizingSection key={ind} {...sec}/>;
		})

    return (
		<main role="main">

	      <Header title={pageHeader.Title} subTitle={pageHeader.text} imagePr={pageHeader.image}/>
	      
	      {sections}

	    </main>
    );
}