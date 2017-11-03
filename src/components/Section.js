import React from 'react';
import './Section.css';
import Title from './Title';
import Para from './Para';
import UlLinks from './ulLinks';
import BottomSpacer from './BottomSpacer';
import BeginForm from './BeginForm';

export default function Section (props) {

	return (
		<section>
			<Title title={props.title}/>
	        {props.img ? props.img : null}
	        <Para text={props.text}/>
	        {props.speechPicker ? <UlLinks list={props.speechesArray} /> : null}
	        {props.form ? props.form : null}
	        {props.includeBeginForm ? <BeginForm /> : null}
	        {props.includeBottomSpace ? <BottomSpacer /> : null}
	    </section>
	)

}
