import React from 'react';
import '../../float-grid.css';
import './SpeechData.css';
import Header from '../../components/Header';
import ResizingSection from '../../components/ResizingSection';
// const Image = require('../../imgs/trump.jpg');
import {Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

export class SpeechData extends React.Component {
	constructor(props){
		super(props)

		let urlSpeechID = window.location.href.split('/'); 
		urlSpeechID = urlSpeechID[ urlSpeechID.length - 1 ];

		this.state = {
			loading: true,
			urlSpeechID : urlSpeechID,
			sectionHeight: 0
		};
	}

	componentDidMount(){
		// setTimeout(() => {
			this.loadStats();
		// }, 1500)

		let myH = 0;
		document.querySelectorAll('section[ class *= "col-" ]').forEach((itm) => {
		    myH = Math.max(myH, itm.offsetHeight)
		})

		this.setState({
			sectionHeight : myH
		})
	}

	loadStats(){
        this.setState({
            error: null,
            loading: true
        });
        
    //	send & return speechstats
    //	set speechstats to containers state
        return fetch(`${window.backendPath}/api/speeches/${(this.state.urlSpeechID !== 'default' ? this.state.urlSpeechID : '')}`, {
		        method: 'GET',
		        headers: {
		            'Content-Type': 'application/json',
		            'Authorization': 'Bearer ' + localStorage.getItem('localStorageAuthToken')
		        }
		    }).then(res => {
            	// console.log(`${window.backendPath}/api/speeches/${this.state.urlSpeechID} RES:`)
            	// console.log(res)
            	
                if (!res.ok) {
                	return <Redirect to="/login" />;
                }
                
                res.json().then(stats => {
                	this.setState({
						Audience:stats.Audience,
						Date: stats.Date,
						Orator:stats.Orator,
						bigWords:stats.bigWords,
						id:stats.id,
						mostUsedWords:stats.mostUsedWords,
						numberOfWords: stats.numberOfWords,
						speechTextLink: stats.speechTextLink,
						imageLink: stats.imageLink,
						eventOverview: stats.eventOverview,
						title: stats.title,
						wordsBySize: stats.wordsBySize,
						loading: false
	                })
                })    	
            }).catch(err =>
                this.setState({
                    error: 'Could not load board',
                    loading: false
                })
            );

    }

     parseDate(dateToParse){
	    let usableDate = new Date(dateToParse);
		
		var monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"];

		let day = (usableDate.getDate() < 10 ? ('0'+usableDate.getDate()) : usableDate.getDate());
		let month = ( (usableDate.getMonth() + 1) < 10 ? ( monthNames[usableDate.getMonth() + 1] ) : (monthNames[usableDate.getMonth() + 1]) );
		let year = (usableDate.getFullYear() < 10 ? ('0'+usableDate.getFullYear()) : usableDate.getFullYear());
		return month +' ' + day + ', ' + year;	
     }
    
    render(){
    // IF Non-default speech,
    // Requre logged-in via localStorage
    // Otherwise, Redirect to login

    	if(localStorage.getItem('localStorageAuthToken') === null && this.state.urlSpeechID !== 'default'){
    	//no authToken & urlSpeechID is not-default
    		return <Redirect to="/login" />;
    	}else{

	    //WHEN loading...
			if (this.state.loading) {
		    	return (
					<main role="main" className="splashBack">
				      <p>Processing Speech Stats...</p>
				    </main>
		    	);
	        
		//WHEN not loading
	        } else {

		    	const pageHeader = {
					Title: this.state.title,
					image: Image,
					imageLink: this.state.imageLink
				}

				const sectionsArray =[
					{
						introInfo:{
							Title : 'Quick Stats',
							Orator : this.state.Orator,
							Date : this.parseDate(this.state.Date),
							Audience : this.state.Audience,
							'Event Overview' : this.state.eventOverview
						},
						colSize:4
					},
					{
						title: `Words By Size`,
						wordsBySize :this.state.wordsBySize,
						includeWordBubble: true,
						colSize:8
					},
					{
						title: 'How Many Words',
						numberOfWords:this.state.numberOfWords,
						colSize:8

					},
					{
						title: `12 Longest Words`,
						bigWords: this.state.bigWords,
						colSize:4
					},
					{
						title: `Speech Text`,
						includeSpeechTextForm: true,
						includeBottomSpace:true,
						speechID: this.state.id,
						speechTitle: this.state.title,
						colSize:3
					},
					{
						title: `Common Words`,
						mostUsedWords: this.state.mostUsedWords,
						includeBarChart:true,
						colSize:9
					}
				];

			//converts the above sectionsArray into a 'sections' var for returning		
				const sections = sectionsArray.map((sec,ind) => {
					sec.calcHeight = this.state.sectionHeight;
					// sec.canLoadHeight = this.state.canLoadHeight;
					return <ResizingSection key={ind} {...sec}  />;
				})

		    	return (
					<main role="main" className="splashBack">

				      <Header 
				      	title={pageHeader.Title} 
				      	subTitle={pageHeader.text} 
				      	imageLinkProp={pageHeader.imageLink}/>
				      
				      <div className="row">
					      {sections[0]}{sections[1]}
					  </div>

				      <div className="row">
					      {sections[2]}{sections[3]}
					  </div>

				      <div className="row">
					      {sections[4]}{sections[5]}
					  </div>
					  
					</main>
		    	);
		    }
		}
    }
}

const mapStateToProps = (state) => ({ 
	mappedSpeechID: state._root.entries["0"][1]
})

export default connect(mapStateToProps)(SpeechData);
