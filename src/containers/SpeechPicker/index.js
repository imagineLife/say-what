import React from 'react';
import './SpeechPicker.css';
import Header from '../../components/Header';
import Section from '../../components/Section';

export default function SpeechPicker(props) {
		console.log('speechPicker props ->',props);
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
						Orator : 'Donald Trump',
						title : '2017 Inaugural Address'
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