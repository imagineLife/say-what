import React from 'react';
import './index.css';
import HeaderSplash from '../../components/HeaderSplash';

export default function Comparison() {
	let [mostUsedWords, setMostUsedWords] = React.useState({})

	React.useEffect(() => {

		//fetch most-used-words here
		fetch('http://localhost:8080/api/speeches/compare').then(res => {
			let jsonResult = res.json().then(jsonRes => {
				let wordsArr = []

				jsonRes.forEach(wordsByOrator => {
					let theseWords = wordsByOrator.wordsByCount;
					theseWords.forEach(thisWord => {
						
						if(thisWord.word == ""){
							return
						}
						let isAlreadyInWordsArr = wordsArr.filter(w => w.word == thisWord.word)
						
						//not in array yet
						if(isAlreadyInWordsArr.length < 1){
							let thisArr = [thisWord]
							let thisWordBySpeaker = {orator: wordsByOrator.orator, count: thisWord.occurances}
							wordsArr = [...wordsArr, ...thisArr]

						//in array already
						}else{
							let thisWordInd = wordsArr.findIndex(existingWord => existingWord.word == thisWord.word)
							wordsArr[thisWordInd] = {
								word: thisWord.word,
								occurances: wordsArr[thisWordInd].occurances + thisWord.occurances
							}
						}
						
					})
				})
				setMostUsedWords({
					words: wordsArr.sort((a,b) => b.occurances - a.occurances)
				})
			})
			
		})
	}, [])
    return (
		<main role="main" className="splashBack">
		  <HeaderSplash title={"Comparing Words"} subTitle={"Most-Used Words Across Speeches"}/>
		  {mostUsedWords.words && <React.Fragment>
		  	<p>Most-Used-Words are loaded</p>
		  	<ul>
		  	{mostUsedWords.words.map(word => {
		  		return <li key={word.word} className="comparison-list">
		  			<span className="value">{word.word}</span>
		  			<span className="count">{word.occurances}<sub>x</sub></span>
		  		</li>
		  	})}
		  	</ul>
		  	</React.Fragment>}
		  {!mostUsedWords.words && <p>Not loaded yet...</p>}
	    </main>
    );
}
