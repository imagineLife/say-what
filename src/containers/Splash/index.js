import React from 'react';
import './Splash.css';
import HeaderSplash from '../../components/HeaderSplash';
import Section from '../../components/Section';

export default function App(props) {

		const pageHeader = {
			Title: `Say What?!`,
			subTitle: `See data within speeches`
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
				includeBeginForm: true,
				includeBottomSpace:true
			}
		];
		
		const sections = sectionsArray.map((sec,ind) => {
	      	return <Section key={ind} {...sec}/>;
		})


    return (
		<main role="main">
		  <HeaderSplash title={pageHeader.Title} subTitle={pageHeader.subTitle} />
	      
	      {sections} 

	    </main>
    );
}
