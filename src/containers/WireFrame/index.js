import React from 'react'

const WireFrame = () => {
	return (<React.Fragment>
	  <main id="wireFrame" role="main" className="splashBack">
		<h2>Compare Statistics</h2>
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