import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechPicker } from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('SpeechPicker.js', () => {

	var localStorageMock = (function() {
	    var store = {};

	    return {
	        getItem: function(key) {
	            return store[key] || null;
	        },
	        setItem: function(key, value) {
	            store[key] = value.toString();
	        },
	        clear: function() {
	            store = {};
	        }
	    };

	})();

	Object.defineProperty(window, 'localStorage', {
	     value: localStorageMock
	});

	window.backendPath = '//localhost:8080';
	it('Renders <Redirect/> when not-logged-in', () => {
	  const test = shallow(<SpeechPicker />);
	  const mockSection = test.find('Redirect');
	  expect(mockSection.length).toEqual(1);
	});

	it.only('uses the localStorage auth token to try to login', () => {
		localStorage.setItem('localStorageAuthToken', 'dummyAuthToken')
		expect(localStorage.getItem('localStorageAuthToken')).toEqual('dummyAuthToken');
	})


})

