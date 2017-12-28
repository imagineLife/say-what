import React from 'react';
import './ulLinks.css';
import Li from '../li';
import {Link} from 'react-router-dom'

export default function Ul(props) {

	const listOWords = props.list.map((list, ind) =>
			<Link className="ulLink" key={ind}to={`speechData/alpha`}>
				<Li word={list.title} boldWord={list.Orator}/>
			</Link>			
	)

    return (
		<ul>
			{listOWords}
		</ul>
    );

}