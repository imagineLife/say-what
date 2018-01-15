import React from 'react';
import ReactDOM from 'react-dom';
import BeginForm from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('BeginForm.js', () => {

	it('renders without crashing', () => {
		shallow(<BeginForm />);
	});	

	it('does something when clicked GetStarted', () => {
		let testRender = shallow(<BeginForm />);
		let getStarted = testRender.find('#getStartedDiv');
		// expect(getStarted.length).toEqual(1);
		console.log('LINK should be ->',getStarted);
	});	
})