import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechText} from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('isomorphic-fetch')

describe('SpeechText.js', () => {
	it('renders without crashing', () => {
	  shallow(<SpeechText />);
	});

	// it('Renders 1 <Section />s', () => {
	// 	const test = shallow(<SpeechText />);
	// 	const instance = test.instance();
	// 	const mockSection = test.find('Section');
	// 	expect(mockSection.length).toEqual(1);
	// })
})