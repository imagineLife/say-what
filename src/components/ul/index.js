import React from 'react';
import './ul.css';
import Li from '../li';
import LiNoBold from '../liNoBold';

export default function Ul({list}) {
	let listOWords = [];
	let capd = '';
	let capdWords = [];
	let singleWord = list;

//capitalize words fn
	let capitalize = (word) => {
		capd = word.charAt(0).toUpperCase() + word.slice(1);
		capdWords.push(capd);
		return capd;

	}

//capitalize each word
	for(let i=0; i < singleWord.length; i++){
		capitalize(singleWord[i]);
	}

	if(list.title){
		listOWords = list.map((list, ind) =>
			<Li key={ind} word={list.title} boldWord={list.Orator}/>
		)
	}else{
		listOWords = capdWords.map((list, ind) =>
			<LiNoBold key={ind} word={list}/>
		)
	}

    return (
		<ul className="centeredList">
			{listOWords}
		</ul>
    );

}