import React from 'react';
import '../../float-grid.css';
import './SpeechData.css';
import Header from '../../components/Header';
import ResizingSection from '../../components/ResizingSection';
import Image from '../../imgs/trump.jpg';

export default class SpeechData extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			loading: false
		};
	}

	componentWillMount(){
		this.loadStats();
	}

	loadStats(){
        this.setState({
            error: null,
            loading: true
        });
        return fetch('http://localhost:8080/api/speeches/default')
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(stats =>
                this.setState({
					Audience:stats.Audience,
					Date: stats.Date,
					Orator:stats.Orator,
					bigWords:stats.bigWords,
					id:stats.id,
					mostUsedWords:stats.mostUsedWords,
					numberOfWords: stats.numberOfWords,
					speechTextLink: stats.speechTextLink,
					title: stats.title,
					wordsBySize: stats.wordsBySize,
					loading: false
                })
            )
            .catch(err =>
                this.setState({
                    error: 'Could not load board',
                    loading: false
                })
            );

    }

    render(){
		
		if (this.state.loading) {
	    	return (
				<main role="main">
			      <p>Loading...</p>
			    </main>
	    	);
        } else {

	    	const pageHeader = {
				Title: this.state.title,
				image: Image
			}

			const sectionsArray =[
				{
					introInfo:{
						Title : 'Quick Stats',
						Orator : this.state.Orator,
						Date : this.state.Date.substring(0,10),
						Audience : this.state.Audience,
						'Event Overview' : 'Donald Trump marks the commencement of a new four-year term as the President of the United States'
					}
				},
				{
					Title: 'How Many Words',
					numberOfWords:this.state.numberOfWords,

				},
				{
					Title: `Common Words`,
					mostUsedWords: this.state.mostUsedWords,
					includeBarChart:true
				},
				{
					Title: `Words By Size`,
					wordsBySize :this.state.wordsBySize,
					includeWordBubble: true
				},
				{
					Title: `12 Longest Words`,
					bigWords: this.state.bigWords
				},
				{
					Title: `Read the Speech Text`,
					includeSpeechTextForm: true,
					includeBottomSpace:true,
					speechID: this.state.id,
					title: this.state.title
				}
			];

		//converts the above sectionsArray into a 'sections' var for returning		
			const sections = sectionsArray.map((sec,ind) => {
		      	return <ResizingSection key={ind} {...sec}/>;
			})

	    	return (
				<main role="main">

			      <Header title={pageHeader.Title} subTitle={pageHeader.text} imagePr={pageHeader.image}/>
			      
			      {sections}

			    </main>
	    	);
	    }
    }
}
