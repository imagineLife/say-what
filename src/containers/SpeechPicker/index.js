import React from 'react';
import './SpeechPicker.css';
import Header from '../../components/Header';
import Section from '../../components/Section';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const SpeechPicker = (props) => {

	let [speeches, setSpeeches] = React.useState([]);
	let [error, setError] = React.useState(null);
	let [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		if( localStorage.getItem('localStorageAuthToken') ){
			loadSpeeches()
		}
	}, [])
	
	const loadSpeeches = () => {
		setLoading(true)

		return fetch(`${window.backendPath}/api/speeches/speechList`, {
	        method: 'GET',
	        headers: {
	            'Content-Type': 'application/json',
	            'Authorization': 'Bearer ' + localStorage.getItem('localStorageAuthToken')
	        }
	    })
        .then(res => {

			//If not-logged in,
			// send user to /login        	

        	if(res.status === 401){
        		delete localStorage.localStorageAuthToken;

        		window.location.href = '/login';
        		//return?
        	}

            if (!res.ok) {
                return Promise.reject(res.statusText);
            }

            return res.json();
        })
        .then(resSpeeches => {
    		setSpeeches(resSpeeches),
    		setLoading(false)
        })
        .catch(err =>
            setError('Could not load SpeechText'),
            setLoading(false)
        );
	}	
    
    //if there's no authToken, redirect user to the Login page
	if(!localStorage.getItem('localStorageAuthToken')){
	      return (
	        <Redirect to="/login" />
	      );
	}else{

		//WHEN loading...
		if (loading) {
	    	return (
				<main role="main" className="splashBack">
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
					speechesFromAPI: speeches
				},
				{
					title: `Make A Request`,
					text: ``,
					includeRequestForm: true,
					requested: props.mappedUserRequest
				},
				{
					title: 'Logout',
					includeLogoutForm: true,
					includeBottomSpace: true
				}
			];

			const sections = sectionsArray.map((sec,ind) => {
		      	return <Section key={ind} {...sec}/>;
			})


		    return (
				<main role="main" className="splashBack">
				  <Header title={pageHeader.title}/>
			      
			      <div className="row">
			      	{sections}
			      </div>
			    </main>
		    );
		}
	}
}

const mapStateToProps = (state) =>
({ 
	mappedAuthToken: state._root.entries["0"][1],
	mappedUserRequest: state._root.entries[1][1].userSubmittedRequest,
	...state
})

//$FlowReduxBug
export default connect(mapStateToProps)(SpeechPicker);