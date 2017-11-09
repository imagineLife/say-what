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

	let listOWords;
	let singleStat;
	let wordsBySizeList;

	//WORD LIST SECTION
	if(props.WordList || props.bigWords){

		switch(props){
			case (props.WordList) :
				// build a looping word-list,
				// outputting a single Li compoent for each word in the wordList
				listOWords = props.WordList.map((word, ind) =>
					<Li key={ind} word={word} />
				);
				break;

			default:
				listOWords = props.bigWords.map((word, ind) =>
					<Li key={ind} word={word} />
				);
				break;
		}

	}

	//QUICK-STATS SECTION
	if(props.introInfo){
		singleStat = Object.keys(props.introInfo).map(key => {
			if(key !== 'Title'){
				return <Li key={key} boldWord={key} word={props.introInfo[key]} />
			}
			return null;
		})
	}

	//Words-By-Size section
	if(props.wordsBySize){		
		wordsBySizeList = props.wordsBySize.map(function(obj) { 
			let keyToStr = Object.keys(obj).toString();
			let valToStr = Object.values(obj).toString();			
			return <Li key={keyToStr} boldWord={keyToStr} word={valToStr} />
		});
	}

	return (
		<section className="col-6">
			<Title title={(props.Title || props.introInfo.Title)}/>
	        {props.img ? props.img : ''}
	        {listOWords ? listOWords : ''}
	        {singleStat ? singleStat : ''}
	        {props.includeBeginForm ? <BeginForm /> : ''}
	        <Para text={props.text}/>
	        {props.wordsBySize ? wordsBySizeList : null}
	        {props.includeHorizontalChart ? <HorizontalBarChart attach={this} dataKey={props.mostUsedWords}/> : null}
	        {props.includeBottomSpace ? <BottomSpacer /> : null}
	    </section>
	);
}
