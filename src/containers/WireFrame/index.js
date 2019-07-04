import React from 'react'

const WireFrame = () => {
	return (<React.Fragment>
	  <main id="wireFrame">
		<section id="compare-picker">
			<h2>Compare Statistics</h2>
		</section>
		<section id="common-words">
			<h2>Most-Used Words</h2>
			<p>Review the words that are most used across speeches.**</p>
		</section>
	  </main>
	  <footer>
		<p>** - The <a href="https://en.wikipedia.org/wiki/Most_common_words_in_English">30 Most Common words</a> in the english language have been omitted.</p>
	  </footer>
	</React.Fragment>)
}

export default WireFrame