import React from 'react';
import './ResizingSection.css';
import Title from '../Title';
import Para from '../Para';
import WordCountLi from '../WordCountLi';
import Li from '../li';
import Ul from '../ul';
import BeginForm from '../Forms/Begin';
import SpeechTextForm from '../Forms/SpeechText';
import BarChart from '../d3/BarChart/Chart';
import BubbleChart from '../d3/bubbleChart/Chart';
import GaugeChart from '../d3/gauge';
import BottomSpacer from '../BottomSpacer';

export default function ResizingSection({
	introInfo, 
	numberOfWords,
	colSize,
	title,
	img, 
	bigWords,
	includeBeginForm,
	includeBarChart,
	includeBottomSpace,
	includeSpeechTextForm,
	speechID,
	speechTitle,
	text,
	wordsBySize,
	mostUsedWords
}) {

	let singleStat;

//QUICK-STATS SECTION
	if(introInfo){
		singleStat = Object.keys(introInfo).map(key => {
			if(key !== 'Title'){
				return <Li key={key} boldWord={key} word={introInfo[key]} />
			}
			return null;
		})
	}

//Unique-Words section
	if(numberOfWords){
		singleStat = Object.keys(numberOfWords).map(key => {
			if(key !== 'Title'){
				if(key === 'wordCount'){
					return <WordCountLi key={key} boldWord='Total' word={numberOfWords[key]} />
				}
				if(key === 'uniqueWords'){
					return <WordCountLi key={key} boldWord='Unique Words' word={numberOfWords[key]} />
				}
			}
			return null;
		})
	}

	return (
		<section className={"col-"+colSize} /*style= { setHeight() }*/>
			<Title title={(title || introInfo.Title)}/>
	        {img ? img : null}
	        {bigWords ? <Ul list={bigWords} /> : null}
	       	{ numberOfWords ? <GaugeChart sectionKey='numberOfWords' dataKey={numberOfWords}/> : null}
	        {singleStat ? singleStat : ''}
	        {includeBeginForm ? <BeginForm /> : null}
	        {includeSpeechTextForm ? <SpeechTextForm speechID={speechID} speechTitle = {speechTitle}/> : null}
	        {text ? <Para text={text} /> : null }
	        {wordsBySize ? <BubbleChart sectionKey='wordsBySize' dataKey={wordsBySize} /> : null}
	        {includeBarChart ? <BarChart 
	        	sectionKey='mostUsedWords'
	        	xKey={'word'}
	        	yKey={'occurances'}
	        	data={mostUsedWords}/> : null}
	        {includeBottomSpace ? <BottomSpacer /> : null}
	    </section>
	);
}
