import React from 'react';
import './index.css';
import HeaderSplash from '../../components/HeaderSplash';

export default function Comparison() {
	let [mostUsedWords, setMostUsedWords] = React.useState()

	React.useEffect(() => {

		//fetch most-used-words here
		fetch('http://localhost:8080/api/speeches/compare').then(res => {
			let jsonResult = res.json().then(jsonRes => {
				let wordsArr = []
				jsonRes.forEach(wordSet => {
					let theseWords = wordSet.wordsByCount;
					theseWords.forEach(thisWord => {
						let isAlreadyInWordsArr = wordsArr.filter(w => w.word == thisWord.word)
						if(isAlreadyInWordsArr.length < 1){
							let thisArr = [thisWord]
							wordsArr = [...wordsArr, ...thisArr]
						}else{
							let thisWordInd = wordsArr.findIndex(existingWord => existingWord.word == thisWord.word)
							wordsArr[thisWordInd] = {
								word: thisWord.word,
								occurances: wordsArr[thisWordInd].occurances + thisWord.occurances
							}
						}
						
					})
				})

				return wordsArr
			}).then(newArr => {
				setMostUsedWords(newArr)		
			})
			
		})
	}, [])
    return (
		<main role="main" className="splashBack">
		  <HeaderSplash title={"Comparing Words"} subTitle={"Most-Used Words Across Speeches"}/>
		  {mostUsedWords && <React.Fragment>
		  	<p>Most-Used-Words are loaded</p>
		  	<ul>
		  	{mostUsedWords.map(word => {
		  		return <li key={word.word} className="comparison-list">
		  			<span className="value">{word.word}</span>
		  			<span className="count">{word.occurances}<sub>x</sub></span>
		  		</li>
		  	})}
		  	</ul>
		  	</React.Fragment>}
		  {!mostUsedWords && <p>Not loaded yet...</p>}
	    </main>
    );
}
