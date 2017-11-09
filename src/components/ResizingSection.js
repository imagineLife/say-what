import React from 'react';
import '../float-grid.css';
import './ResizingSection.css';
import Title from './Title';
import Para from './Para';
import Li from './li';
import BeginForm from './BeginForm';
import HorizontalBarChart from './d3/horzBarChar';
import BottomSpacer from './BottomSpacer';

export default function ResizingSection(props) {
	console.log(props);

	let listOWords;
	let singleStat;

	//WORD LIST SECTION
	if(props.WordList){
	// build the looping word-list to output a list item,
	// a single Li compoent for each word in the wordList
		
		listOWords = props.WordList.map((word, ind) =>
			<Li key={ind} word={word} />
		)
	}

	//QUICK-STATS SECTION
	if(props.introInfo){
		singleStat = Object.keys(props.introInfo).map(key => {
			return <Li key={key} word={props.introInfo[key]} boldWord={key} />
		})
	}


	return (
		<section className="col-6">
			<Title title={props.title}/>
	        {props.img ? props.img : ''}
	        {listOWords ? listOWords : ''}
	        {singleStat ? singleStat : ''}
	        {props.includeBeginForm ? <BeginForm /> : ''}
	        <Para text={props.text}/>
	        {props.includeHorizontalChart ? <HorizontalBarChart attach={this} dataKey={props.mostUsedWords}/> : null}
	        {props.includeBottomSpace ? <BottomSpacer /> : null}
	    </section>
	);
}
