import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechData } from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('isomorphic-fetch')

// Enzyme.configure({ adapter: new Adapter() });

describe('SpeechData', () => {
	
	it('Calls CDM && MOCK loadStats', () => {
	  jest.spyOn(SpeechData.prototype, 'componentDidMount')
	  jest.spyOn(SpeechData.prototype, 'loadStats')
      
      const component = shallow(<SpeechData/>)
      expect(SpeechData.prototype.componentDidMount.mock.calls.length).toBe(1)
      expect(SpeechData.prototype.loadStats.mock.calls.length).toBe(1)
	});
})