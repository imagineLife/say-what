import React from 'react';
import './ulLinks.css';
import SpeechPickerLi from '../SpeechPickerLi';
import {Link} from 'react-router-dom'

export default function Ul(props) {
     let parseDateToYear = (dateToParse) => {
	    let usableDate = new Date(dateToParse);
		let year = (usableDate.getFullYear() < 10 ? ('0'+usableDate.getFullYear()) : usableDate.getFullYear());
		return year;	
     }

	const speechLinks = props.speechParts.map((speech, ind) =>

		<Link className="ulLink" key={ind} to={`speechData/${speech._id}`} >
			<SpeechPickerLi word={`${parseDateToYear(speech.Date)} ${speech.title}`} boldWord={speech.Orator} />
		</Link>
	)

    return (

		<ul>
			{speechLinks}
		</ul>
    );

}