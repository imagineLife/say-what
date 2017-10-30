import React from 'react';
import './Section.css';
import Title from './Title';
import Para from './Para';
import Ul from './ul';
import BeginForm from './BeginForm';

export default function Section(props) {

	return (
		<section>
			<Title title={props.title}/>
	        {props.img}
	        <Para text={props.text}/>
	        {props.speechPicker ? <Ul list={props.speechesArray} /> : ''}
	        {props.form}
	        {props.includeBeginForm ? <BeginForm /> : ''}
	    </section>
	);
}
