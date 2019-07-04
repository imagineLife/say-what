// @flow
import React, { Component, Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Splash from './containers/Splash';
import SpeechData from './containers/SpeechData';
const SpeechPicker = lazy(() => import('./containers/SpeechPicker'))
const SpeechText = lazy(() => import('./containers/SpeechText'))
const Comparison = lazy(() => import('./containers/Comparison'))
const WireFrame = lazy(() => import('./containers/WireFrame'))
import Login from './containers/Login';

function AppRouter(){
  return (
	<Router>
	      <div className="App">
	        <Nav />
	        <Suspense fallback={<div>Loading...</div>}>
		        <Switch>
			        <Route exact path="/" component={Splash} />
			        <Route exact path="/speechData/:id" component={SpeechData} />
			        <Route exact path="/speechText/:id" component={SpeechText} />
			        <Route exact path="/speechPicker" component={SpeechPicker} />
			        <Route exact path="/compare" component={Comparison} />
			        <Route exact path="/wireframe" component={WireFrame} />
			        <Route exact path="/login" component={Login} />
			        <Redirect from='/*' to="/speechData/default" />
			    </Switch>
			</Suspense>    
	      </div>
	</Router>
  );
}

export default AppRouter;