import React from 'react';
import ReactDOM from 'react-dom';
import { Splash } from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Splash.js', () => {
	
	it('renders without crashing', () => {
		shallow(<Splash />);
	});	

	it('Renders the Header component', () => {
		const test = shallow(<Splash />);
		const instance = test.instance();
		const mockHeader = test.find('HeaderSplash');
		expect(mockHeader.length).toEqual(1);
	})

	it('Renders 3 <Section />s', () => {
		const test = shallow(<Splash />);
		const instance = test.instance();
		const mockSection = test.find('Section');
		expect(mockSection.length).toEqual(3);
	})
})