import React from 'react';
import './ul.css';
import Li from './li';

export default function Ul(props) {
	console.log(props.list);

	const listOWords = props.list.map((list, ind) =>
		<Li key={ind} word={list.title} boldWord={list.Orator}/>
	)

    return (
		<ul>
			{listOWords}
		</ul>
    );

}