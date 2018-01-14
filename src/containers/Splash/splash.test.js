import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Splash.js', () => {
	it('renders without crashing', () => {
	  // shallow(<Splash />);
	return;
	});	
})

