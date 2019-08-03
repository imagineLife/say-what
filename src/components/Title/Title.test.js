import React from 'react';
import ReactDOM from 'react-dom';
import Title from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Title.js', () => {
	
	it('renders without crashing', () => {
		shallow(<Title title="dummytitle"/>);
	});	
})