import type { SpeechPartsType } from './flow';
import React from 'react';
import './ulLinks.css';
import SpeechPickerLi from '../SpeechPickerLi';
import {Link} from 'react-router-dom'

export default function UlLink({speechParts}: SpeechPartsType) {
     let parseDateToYear = (dateToParse) => {
	    let usableDate = new Date(dateToParse);
		let year = (usableDate.getFullYear() < 10 ? ('0'+usableDate.getFullYear()) : usableDate.getFullYear());
		return year;	
     }

	const speechLinks = speechParts.map((speech, ind) =>

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