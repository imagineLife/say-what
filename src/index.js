import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// const initialState = {};

// const store = createStore(state => state, initialState);

ReactDOM.render(
	// <Provider providerStore={store}>
		<App />
	// </Provider>
		, document.getElementById('root'));
// registerServiceWorker();
