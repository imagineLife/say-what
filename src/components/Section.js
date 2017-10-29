import React from 'react';
import './Section.css';
import Title from './Title';
import Para from './Para';
import Ul from './ul';
import BeginForm from './BeginForm';

export default function Section(props) {

	//If the section contains a form
	//render that component with form
	if(props.includeBeginForm){
	    return (
			<section>
				<Title title={props.title}/>
		        {props.img}
		        <Para text={props.text}/>
		        <BeginForm />
		    </section>
	    );			
	}

	else if(props.speechPicker){
	    return (
			<section>
				<Title title={props.title} />
				<Ul list={props.speechesArray}/>
		    </section>
	    );			
	}

	else {
		return (
			<section>
				<Title title={props.title}/>
		        {props.img}
		        <Para text={props.text}/>
		        {props.form}
		    </section>
    	);
    }
}
