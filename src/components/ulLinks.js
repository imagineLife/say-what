import React from 'react';
import './ulLinks.css';
import Li from './li';
import {Link} from 'react-router-dom'

export default function Ul(props) {
	console.log(props.list);

	const listOWords = props.list.map((list, ind) =>
			<Link className="ulLink" key={ind} to={`/${list.title}/${ind}`}>
				<Li word={list.title} boldWord={list.Orator}/>
			</Link>
			
	)

    return (
		<ul>
			{listOWords}
		</ul>
    );

}