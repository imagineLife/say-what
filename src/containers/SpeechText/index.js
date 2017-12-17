import React from 'react';
import './SpeechText.css';
import Section from '../../components/Section';
import {getSpeechTextAxn} from './state/actions';
import {connect} from 'react-redux';

class SpeechText extends React.Component{
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

	//	Set speechID, for fetch url, to either default or speechID
        let propsSpeechID = this.props.speechID;
		let tempSpeechID = '';
        propsSpeechID === '5a1ad99f978ca2681f42df12' ? tempSpeechID = 'default' : tempSpeechID = this.props.speechID;
    	
    //	send & return speechText
    //	set speechText to container's state
    /*
    	actions are useful when updating GLOBAL state,
    	not 'necessary' when dealing with THIS state
    	ex. when user can manipulate & update info
    		I.E -> a user can HIGHLIGHT favorite parts, sharing
    			ACTION for highlighting,
    				saving the highlight
    				return something to the state that shows the highlight
    			
    */
        return fetch(`http://localhost:8080/api/speeches/text/${tempSpeechID}`)
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
				<main role="main">
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
				<main role="main">
			      
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

export default connect(mapStateToProps, mapDispatchToProps)(SpeechText);