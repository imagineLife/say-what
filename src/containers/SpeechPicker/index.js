import React from 'react';
import './SpeechPicker.css';
import Header from '../../components/Header';
import Section from '../../components/Section';
import {connect} from 'react-redux';

class SpeechPicker extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			speeches: [],
			error: null,
			loading: false
		};
	}


	componentDidMount(){
		this.loadSpeeches();
	}
	
	loadSpeeches(){
		this.setState({
			error: null,
			loading:true
		})

		// console.log('loadSpeeches mappedAuthToken->',this.props.mappedAuthToken.authToken);
		return fetch(`http://localhost:8080/api/speeches/speechList`, {
		        method: 'GET',
		        headers: {
		            'Content-Type': 'application/json',
		            'Authorization': 'Bearer ' + this.props.mappedAuthToken.authToken
		        }
		    })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(resSpeeches => {
            	this.setState({ 
            		speeches: resSpeeches,
            		loading: false
            	})
            })
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
			      <p>Processing Speech Stats...</p>
			    </main>
	    	);
        
	//WHEN not loading
        } else {
	
			const pageHeader = {
				title: `Pick a Speech`,
				text: ``
			}
			
			const sectionsArray =[
				{
					title: `Choose from a list of options`,
					text: ``,
					speechPicker: true,
					speechesFromAPI: this.state.speeches
				}
			];

			const sections = sectionsArray.map((sec,ind) => {
		      	return <Section key={ind} {...sec}/>;
			})




		    return (
				<main role="main">
				  <Header title={pageHeader.title}/>
			      
			      {sections}

			    </main>
		    );
		}
	}
}

const mapStateToProps = (state) =>
({ 
	mappedAuthToken: state._root.entries["0"][1]
})

export default connect(mapStateToProps)(SpeechPicker);