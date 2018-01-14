import React from 'react';
import ReactDOM from 'react-dom';
import Login from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import localStorage from 'mock-local-storage';

Enzyme.configure({ adapter: new Adapter() });



describe('Login.js', () => {
	
	it('renders without crashing', () => {
		global.window = {};
		window.localStorage = global.localStorage;
		shallow(<Login />);
	});

	it('Renders the Header component', () => {
		const test = shallow(< Login />);
		const instance = test.instance();
		const mockHeader = test.find('HeaderSplash');
		expect(mockHeader.length).toEqual(1);
	})

})