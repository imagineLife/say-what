import React from 'react';
import './Section.css';
import Title from './Title';
import Para from './Para';

export default function Section(props) {

	    return (
			<section>
				<Title title={props.title}/>
		        {props.img}
		        <Para text={props.text}/>
		        {props.form}
		    </section>
	    );
}
