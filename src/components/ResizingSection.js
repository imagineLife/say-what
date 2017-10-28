import React from 'react';
import '../float-grid.css';
import './ResizingSection.css';
import Title from './Title';
import Para from './Para';
import Li from './li';

export default function ResizingSection(props) {
	//If the component contains a word-list,
	//render that component with the word-list
		if(props.WordList){
		//build the looping word-list to output a list item
			const listOWords = props.WordList.map((word, ind) =>
				<Li key={ind} word={word} />
			)

			return (
				<section className="col-6">
					<Title title={props.title}/>
			        {props.img}
			        <Para text={props.text}/>
			        <ul>
			        	{listOWords}
			        </ul>
			    </section>
		    );
		}

	    return (
			<section className="col-6">
				<Title title={props.title}/>
		        {props.img}
		        <Para text={props.text}/>
		        {props.form}
		    </section>
	    );
}
