import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import myConfigureStore from './store';
import './index.css';

//copied from serviceWorker
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

window.backendPath = isLocalhost ? '//localhost:8080' : '//thinkful-saywhat-api.herokuapp.com';

const initialState = {};

const store = myConfigureStore(initialState);

console.log('store')
console.log(store)

ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>
		, document.getElementById('app'));
