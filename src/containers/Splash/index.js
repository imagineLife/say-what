import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Splash.css';
import HeaderSplash from '../../components/HeaderSplash';
import Section from '../../components/Section';

class Splash extends Component {
		// constructor(props){
		// 	super(props);
		// }

		render(){
			const pageHeader = {
				Title: `Say What?!`,
				subTitle: `See data within speeches`
			}

			const sectionsArray =[
				{
					title: `Notice what they're saying`,
					text: `SayWhay looks at a speech and its text content as a dataset, illuminating the largest words spoken, the most common words of the speech, and more!`
				},
				{
					title: `Pick from a list of Speeches`,
					text: `Interested in the details of what Trump said at his inauguration speech? Perhaps JFK or Abraham Lincoln?
					Get insight into the words of a variety of speeches.`
				},
				{
					title: 'Check it out!',
					includeBeginForm: true,
					// includeBottomSpace:true,
					speechID: this.props.mappedSpeechID
				}
			];
			
			const sections = sectionsArray.map((sec,ind) => {
		      	return <Section key={ind} {...sec}/>;
			})


		    return (
				<main role="main">
				  <HeaderSplash title={pageHeader.Title} subTitle={pageHeader.subTitle} />
			      <div className="row">
			      	{sections} 
			      </div>
			    </main>
		    );
		}
}

const mapStateToProps = (state) => ({ 
	mappedSpeechID: state._root.entries["0"][1]
})

export default connect(mapStateToProps)(Splash);