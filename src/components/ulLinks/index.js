import React from 'react';
import './ulLinks.css';
import Li from '../li';
import {Link} from 'react-router-dom'

export default function Ul(props) {

	const speechLinks = props.speechParts.map((speech, ind) => 
		<Link className="ulLink" key={ind} to={`speechData/${speech._id}`} >
			<Li word={speech.title} boldWord={speech.Orator} />
		</Link>
	)

    return (
		<ul>
			{speechLinks}
		</ul>
    );

}