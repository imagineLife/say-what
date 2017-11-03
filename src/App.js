import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    // Redirect,
    Switch
} from 'react-router-dom';
import Nav from './components/Nav';
import Splash from './containers/Splash';
import SpeechData from './containers/SpeechData';
import SpeechPicker from './containers/SpeechPicker';
import SpeechText from './containers/SpeechText';
import Login from './containers/Login';
import './App.css';

class App extends Component {
  render() {
      return (
		<Router>
		      <div className="App">
		        <Nav />
		        <Switch>
			        <Route exact path="/" component={Splash} />
			        <Route exact path="/speechData/:id" component={SpeechData} />
			        <Route exact path="/speechData/:id/text" component={SpeechText} />
			        <Route exact path="/speechPicker" component={SpeechPicker} />
			        <Route exact path="/login" component={Login} />
			    </Switch>
		      </div>
		</Router>
	  );
  }
}

export default App;
