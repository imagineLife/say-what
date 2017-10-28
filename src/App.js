import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    // Redirect,
    Switch
} from 'react-router-dom';
import Nav from './Nav';
import Splash from './Splash';
import SpeechData from './SpeechData';
import './App.css';

class App extends Component {
  render() {
      return (
		<Router>
		      <div className="App">
		        <Nav />
		        <Switch>
			        <Route exact path="/" component={Splash} />
			        <Route exact path="/speechData" component={SpeechData} />
			    </Switch>
		      </div>
		</Router>
	  );
  }
}

export default App;
