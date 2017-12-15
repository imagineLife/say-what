import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import myConfigureStore from './store';
import './index.css';

const initialState = {
	speechID : '5a1ad99f978ca2681f42df12'
};

const store = myConfigureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
		, document.getElementById('root'));
