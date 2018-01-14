import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechPicker } from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import localStorage from 'mock-local-storage';

Enzyme.configure({ adapter: new Adapter() });

global.window = {};
window.localStorage = global.localStorage;


describe('SpeechPicker.js', () => {
	window.backendPath = '//localhost:8080';
	it('renders without crashing', () => {
	  const test = shallow(<SpeechPicker />);
	  expect(test.length).toEqual(1);
	});

	it('Renders <Redirect/> when not-logged-in', () => {
		const test = shallow(<SpeechPicker />);
		const instance = test.instance();
		const mockSection = test.find('Redirect');
		expect(mockSection.length).toEqual(1);
	})
})

