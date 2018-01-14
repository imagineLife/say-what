import React from 'react';
import './ResizingSection.css';
import Title from '../Title';
import Para from '../Para';
import Li from '../li';
import Ul from '../ul';
import BeginForm from '../Forms/Begin';
import SpeechTextForm from '../Forms/SpeechText';
import BarChart from '../d3/BarChart/Chart';
import BubbleChart from '../d3/bubbleChart/Chart';
import GaugeChart from '../d3/gauge';
import BottomSpacer from '../BottomSpacer';

export default function ResizingSection(props) {
	console.log('calcHeight', props.calcHeight);

	let singleStat;

	// const setHeight = () => {
	// 	console.log('setHeight...',props.canLoadHeight, props.calcHeight);
	// 	return (props.canLoadHeight) 
	// 	? {height: `${props.calcHeight}px`}
	// 	:  {visibility: 'visible'};		
	// }

//QUICK-STATS SECTION
	if(props.introInfo){
		singleStat = Object.keys(props.introInfo).map(key => {
			if(key !== 'Title'){
				return <Li key={key} boldWord={key} word={props.introInfo[key]} />
			}
			return null;
		})
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
		<section className={"col-"+props.colSize} /*style= { setHeight() }*/>
			<Title title={(props.Title || props.introInfo.Title)}/>
	        {props.img ? props.img : null}
	        {props.bigWords ? <Ul list={props.bigWords} /> : null}
	       	{props.numberOfWords ? <GaugeChart sectionKey='numberOfWords' dataKey={props.numberOfWords}/> : null}
	        {singleStat ? singleStat : ''}
	        {props.includeBeginForm ? <BeginForm /> : null}
	        {props.includeSpeechTextForm ? <SpeechTextForm speechID={props.speechID} speechTitle = {props.speechTitle}/> : null}
	        {props.text ? <Para text={props.text} /> : null }
	        {props.wordsBySize ? <BubbleChart sectionKey='wordsBySize' dataKey={props.wordsBySize} /> : null}	        
	        {props.includeBarChart ? <BarChart sectionKey='mostUsedWords' dataKey={props.mostUsedWords}/> : null}
	        {props.includeBottomSpace ? <BottomSpacer /> : null}
	    </section>
	);
}
