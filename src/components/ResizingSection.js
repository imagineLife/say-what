import React from 'react';
import '../float-grid.css';
import './ResizingSection.css';
import Title from './Title';
import Para from './Para';
import Li from './li';
import BeginForm from './BeginForm';

export default function ResizingSection(props) {
	
	//If the section contains a word-list,
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
			        <ul>
			        	{listOWords}
			        </ul>
			    </section>
		    );
		}

		if(props.qStats){
{/* If the section contains the quick-stats,
render that component with the word-list */}
			const singleStat = Object.keys(props.qStats).map(key => {
				return <Li key={key} word={props.qStats[key]} boldWord={key} />
			})

			return (
				<section className="col-6">
					<Title title={props.title}/>
				    {props.img}
				    <ul>
				    	{singleStat}
				    </ul>
				</section>
			);
		}

		else if(props.includeBeginForm){
{/*If the section contains a form
render that component with form*/}

			return (
				<section className="col-6">
					<Title title={props.title}/>
			        {props.img}
			        <BeginForm />
			    </section>
		    );			
		}

	//plane-Jane section
	    return (
			<section className="col-6">
				<Title title={props.title}/>
		        {props.img}
		        <Para text={props.text}/>
		    </section>
	    );
}
