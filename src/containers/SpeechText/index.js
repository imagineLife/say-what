import React from 'react';
import './SpeechText.css';
import Section from '../../components/Section';
import {getSpeechTextAxn} from './state/actions';
import {connect} from 'react-redux';

export class SpeechText extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			error: null,
			loading : false
		};
	}

	componentDidMount(){
		this.loadSpeechText();
	}

	loadSpeechText(){
		this.setState({
			error: null,
			loading: true
			// speechText : this.props.runSpeechTextAction(this.props.speechID)
		});

    //	Parsing the speechID from URL
    
        let fetchURL, urlText, lastPartOfURL;
        urlText = window.location.href;
        lastPartOfURL = urlText.split("/").pop();

	// setting up the fetch url
    
    	lastPartOfURL === '5a1ad99f978ca2681f42df12' ? fetchURL = `${window.backendPath}/api/speeches/text/default` :fetchURL = `${window.backendPath}/api/speeches/text/${lastPartOfURL}`;

    //	send & return speechText
    //	set speechText to container's state

        return fetch(fetchURL, {
		        method: 'GET',
		        headers: {
		            'Content-Type': 'application/json',
		            'Authorization': 'Bearer ' + localStorage.getItem('localStorageAuthToken')
		        }
		    })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(resText =>
                this.setState({
					speechText: resText.text,
					speechTitle: resText.title,
					loading: false
                })
            )
            .catch(err =>
                this.setState({
                    error: 'Could not load SpeechText',
                    loading: false
                })
            );
	}

	render(){
    
    //WHEN loading...
		if (this.state.loading) {
	    	return (
				<main role="main" className="splashBack">
			      <p>Processing Speech Text...</p>
			    </main>
	    	);
        
	//WHEN not loading
        } else {

        	const sectionsArray =[
				{
					title: this.state.speechTitle,
					sectionSpeechID: this.state.speechID,
					// img: `[ Image of Orator behind Title ]`,
					text: this.state.speechText,
					includeBottomSpace:true

				}
			];

			const sections = sectionsArray.map((sec,ind) => {
		      	return <Section key={ind} {...sec}/>;
			})

		    return (
				<main role="main" className="splashBack">
			      
			      {sections}

			    </main>
		    );
		}
	}
}

const mapDispatchToProps = (dispatch) =>
  ({
    runSpeechTextAction: (speechId) => { getSpeechTextAxn(speechId, dispatch); }
  });

const mapStateToProps = (state) =>
({ 
	speechID: state._root.entries["0"][1]
})

//$FlowReduxBug
export default connect(mapStateToProps, mapDispatchToProps)(SpeechText);