import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechData } from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.window = {};
import localStorage from 'mock-local-storage';
window.localStorage = global.localStorage;

describe('SpeechData.js', () => {
	it('renders without crashing', () => {
	  shallow(<SpeechData />);
	});	
})

