import React from 'react'
import './index.css';

const WireFrame = () => {
	
	let speeches = [
		{
			title: "speech one",
			id: "1234"
		},
		{
			title: "speech two",
			id: "2345"
		},
		{
			title: "speech three",
			id: "3456"
		},
		{
			title: "speech four",
			id: "4567"
		},
		{
			title: "speech five",
			id: "5678"
		},
		{
			title: "speech six",
			id: "6789"
		},
		{
			title: "speech seven",
			id: "7890"
		}
	]

	const updateVisibleSpeeches = (e) => {
		e.preventDefault()
		console.log('Changed input here!!');
	}
	
	return (<React.Fragment>
	  <main id="wire-frame" role="main" className="splashBack">
		<h2>Compare Statistics</h2>
		<section id="compare-speeches">
			<h2>Compare Speeches</h2>
			<input onChange={(e) => updateVisibleSpeeches(e)} placeholder=" Search..."/>
			<p>Choose two speeches to compare analysis:</p>
			<ul>
				{speeches && speeches.map((s,ind) =>( 
					<li key={`${ind}${s.id}`}>{s.title}</li>)
				)}
			</ul>
		</section>
		<section id="common-words">
			<h2>Most-Used Words</h2>
			<p>Across Party lines &&  throughout time, the most used words thoughout these texts.**</p>
		</section>
		<section id="longest-sentences">
			<h2>Longest Sentences</h2>
			<p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1761115/">Several Studies ***</a> have dug in to the details meaning of sentence structure, length etc.</p>
		</section>
		<section id="longest-sentences">
			<h2>Longest Sentences</h2>
			<p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1761115/">Several Studies ***</a> have dug in to the details meaning of sentence structure, length etc.</p>
		</section>
	  </main>
	  <footer>
		<p>** - The <a href="https://en.wikipedia.org/wiki/Most_common_words_in_English">30 Most Common words</a> in the english language have been omitted.</p>
	  </footer>
	</React.Fragment>)
}

export default WireFrame