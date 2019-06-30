import React from 'react';
import './index.css';
import HeaderSplash from '../../components/HeaderSplash';
import DropDownWord from '../../components/DropDownWord';

export default function Comparison() {
	let [mostUsedWords, setMostUsedWords] = React.useState({})

	//fetch stats
	const fetchStatsEffect = (setMostUsedWords) => {
		//fetch most-used-words here
		fetch('http://localhost:8080/api/speeches/compare').then(res => {
			let jsonResult = res.json().then(jsonRes => {
				let wordsArr = []
				let wordCountByOrator = {}

				jsonRes.forEach(thisResult => {
					
					let theseWords = thisResult.comparison;
					theseWords.forEach(thisWord => {
						
						if(thisWord.word == ""){
							return
						}
						let isAlreadyInWordsArr = wordsArr.filter(w => w.word == thisWord.word)
						
						//not in array yet
						if(isAlreadyInWordsArr.length < 1){
							let thisArr = [thisWord]
							let thisWordBySpeaker = {orator: thisResult.orator, count: thisWord.occurances}
						
							wordsArr = [...wordsArr, ...thisArr]
							wordCountByOrator[thisWord.word] = [{orator: thisResult.orator, occurances: thisWord.occurances}]
						//in array already
						}else{
							let thisWordInd = wordsArr.findIndex(existingWord => existingWord.word == thisWord.word)
							wordsArr[thisWordInd] = {
								word: thisWord.word,
								occurances: wordsArr[thisWordInd].occurances + thisWord.occurances
							}
							let newWorCountArr = [{orator: thisResult.orator, occurances: thisWord.occurances}]
							wordCountByOrator[thisWord.word] = [...wordCountByOrator[thisWord.word], ...newWorCountArr]
						}		
					})
				})

				setMostUsedWords({
					words: wordsArr.sort((a,b) => b.occurances - a.occurances),
					wordCountByOrator: wordCountByOrator
				})
			})
			
		})
	} 

	React.useEffect(() => fetchStatsEffect(setMostUsedWords), [])
	
    return (
		<main role="main" className="splashBack">
		  <HeaderSplash title={"Comparing Words"} subTitle={"Most-Used Words Across Speeches"}/>
		  {mostUsedWords.words && <React.Fragment>
		  	<ul>
		  	{mostUsedWords.words.map(word => {
		  		return <DropDownWord 
		  			key={word.word} 
		  			word={word} 
		  			wordsByOrator={mostUsedWords.wordCountByOrator[word.word].sort((a,b) => b.occurances - a.occurances)} />
		  	})}
		  	</ul>
		  	</React.Fragment>}
		  {!mostUsedWords.words && <p>Loading...</p>}
	    </main>
    );
}
