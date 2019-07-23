import type { PropsType } from './flow'
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
import LineChart from '../d3/LineChart/';
import BubbleChart from '../d3/bubbleChart/Chart';
import NestedBubble from '../d3/NestedBubble/Chart';
import GaugeChart from '../d3/gauge';
import BottomSpacer from '../BottomSpacer';
import * as d3 from 'd3'

export default function ResizingSection({introInfo,
	numberOfWords,
	colSize,
	title,
	bigWords,
	includeBeginForm,
	includeBarChart,
	includeBottomSpace,
	includeSpeechTextForm,
	speechID,
	speechTitle,
	text,
	wordsBySize,
	mostUsedWords,
	sentences,
	chart }: PropsType) {

	function nestData(srcData){

		srcData.forEach(d => {
			let thisNestedData;
			let d.parent;
			if([2,3,4].includes(d.size)){
				d.parent = 'small'
			}else if([5,6,7].includes(d.size)){
				d.parent = 'medium'
			}else{
				d.parent = 'large'
			}
		})

		let newObjs = [
			{
				size: "small",
				occurances: 0,
				parent: "wordCount"
			},
			{
				size: "medium",
				occurances: 0,
				parent: "wordCount"
			},
			{
				size: "large",
				occurances: 0,
				parent: "wordCount"
			},
			{
				size: "wordCount",
				occurances: 0,
				parent: ""
			}
		]

		let finalArr = [...srcData, ...newObjs]

		let hierarchical = d3.stratify()
	    .id(d => d.size)
	    .parentId(d => d.parent)
	    (finalArr)

	    hierarchical.sum(d => d.occurances)

	    var root = d3.hierarchy(hierarchical);

		  return root
	}

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

	let nestedData;
	if(wordsBySize){
		nestedData = nestData(wordsBySize)
	}

	return (
		<section className={"col-"+colSize} /*style= { setHeight() }*/>
			<Title title={(title || introInfo.Title)}/>
	        {bigWords ? <Ul list={bigWords} /> : null}
	       	{numberOfWords ? <GaugeChart sectionKey='numberOfWords' dataKey={numberOfWords}/> : null}
	        {singleStat ? singleStat : ''}
	        {includeBeginForm ? <BeginForm /> : null}
	        {includeSpeechTextForm ? <SpeechTextForm speechID={speechID} speechTitle = {speechTitle}/> : null}
	        {text ? <Para text={text} /> : null }
	        {/*
	        	{wordsBySize ? <BubbleChart sectionKey='wordsBySize' data={wordsBySize} radiusKey={`occurances`} categoryKey={`size`} /> : null}
	        */}
	        {wordsBySize ? <NestedBubble sectionKey='wordsBySize' data={nestedData} radiusKey={`value`} categoryKey={`id`} /> : null}
	        {includeBarChart ? <BarChart 
	        	sectionKey='mostUsedWords'
	        	xKey={'word'}
	        	yKey={'occurances'}
	        	data={mostUsedWords}/> : null}
	        {chart == 'line' ? <LineChart 
	        	sectionKey='wordsPerSentence'
	        	xKey={'index'}
	        	yKey={'wordCount'}
	        	data={sentences}
	        	labels={{
	        		xAxis: "Sentence Number",
	        		yAxis: "Word Count"
	        	}}
	        	hoverLine/> : null}
	        {includeBottomSpace ? <BottomSpacer /> : null}
	    </section>
	);
}
