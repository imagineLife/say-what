import React from 'react';
import ReactDOM from 'react-dom';
import Ul from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Ul.js', () => {
	let dummyList = [
		'apple',
		'banana',
		'carbonMonoxide'
	]

	it('renders without crashing', () => {
		shallow(<Ul list={dummyList}/>);
	});	
})