import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechData } from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import localStorage from 'mock-local-storage';

Enzyme.configure({ adapter: new Adapter() });

global.window = {};
window.localStorage = global.localStorage;

describe('SpeechData.js', () => {
	it('renders without crashing', () => {
	  shallow(<SpeechData />);
	});

	it('Renders <Redirect/> when not logged in', () => {
		const test = shallow(<SpeechData />);
		const instance = test.instance();
		const mockRedirect = test.find('Redirect');
		expect(mockRedirect.length).toEqual(1);
	})
})