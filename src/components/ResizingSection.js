import React from 'react';
import '../float-grid.css';
import './ResizingSection.css';
import Title from './Title';
import Para from './Para';
import Li from './li';
import LiNoBold from './liNoBold';
import BeginForm from './BeginForm';
import HorizontalBarChart from './d3/horzBarChar';
// import BubbleChart from './d3/bubble';
import GaugeChart from './d3/gauge';
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
					<LiNoBold key={ind} word={(word.charAt(0).toUpperCase() + word.slice(1))} />
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
			let keyStr = Object.keys(obj).toString();
			let valStr = Object.values(obj).toString();			
			return <Li key={keyStr} boldWord={keyStr} word={valStr} />
		});
	}

//Unique-Words section
	if(props.numberOfWords){
		singleStat = Object.keys(props.numberOfWords).map(key => {
			if(key !== 'Title'){
				if(key === 'wordCount'){
					return <Li key={key} boldWord='Total' word={props.numberOfWords[key]} />
				}
				if(key === 'uniqueWords'){
					return <Li key={key} boldWord='Unique Words' word={props.numberOfWords[key]} />
				}
			}
			return null;
		})
	}

	return (
		<section className="col-6">
			<Title title={(props.Title || props.introInfo.Title)}/>
	        {props.img ? props.img : null}
	        {listOWords ? listOWords : null}
	       	{props.numberOfWords ? <GaugeChart sectionKey='numberOfWords' dataKey={props.numberOfWords}/> : null}
	        {singleStat ? singleStat : ''}
	        {props.includeBeginForm ? <BeginForm /> : null}
	        <Para text={props.text}/>
	        {props.wordsBySize ? wordsBySizeList : null}
	        {/*props.wordsBySize ? <BubbleChart sectionKey='wordsBySize' dataKey={props.wordsBySize} /> : null*/}	        
	        {props.includeHorizontalChart ? <HorizontalBarChart sectionKey='mostUsedWords' dataKey={props.mostUsedWords}/> : null}
	        {props.includeBottomSpace ? <BottomSpacer /> : null}
	    </section>
	);
}
