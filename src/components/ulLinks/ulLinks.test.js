import React from 'react';
import ReactDOM from 'react-dom';
import Ul from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ulLinks.js', () => {
	let dummyProp = [
		"_id" :1234,
		"Date":'January',
		"title":'AmazingSpeech'
	]

	it('renders without crashing', () => {
		shallow(<Ul speechParts={dummyProp}/>);
	});	
})