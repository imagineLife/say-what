import React from 'react';
import '../float-grid.css';
import './ResizingSection.css';
import Title from './Title';
import Para from './Para';
import Li from './li';
import BeginForm from './BeginForm';

export default function ResizingSection(props) {

	//WORD LIST SECTION
	let listOWords;
	let singleStat;

	if(props.WordList){
	//build the looping word-list to output a list item
		listOWords = props.WordList.map((word, ind) =>
			<Li key={ind} word={word} />
		)
	}

	//QUICK-STATS SECTION
	// If the section contains the quick-stats, render that component with the word-list
	if(props.qStats){
		singleStat = Object.keys(props.qStats).map(key => {
			return <Li key={key} word={props.qStats[key]} boldWord={key} />
		})
	}


	//Plain-Jane section return
	return (
		<section className="col-6">
			<Title title={props.title}/>
	        {props.img ? props.img : ''}
	        {listOWords ? listOWords : ''}
	        {singleStat ? singleStat : ''}
	        {props.includeBeginForm ? <BeginForm /> : ''}
	        <Para text={props.text}/>
	    </section>
	);
}
