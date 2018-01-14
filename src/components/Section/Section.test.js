import React from 'react';
import ReactDOM from 'react-dom';
import Section from './index';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Section.js', () => {
	it('renders without crashing', () => {
	  shallow(<Section />);
	});	

	it('handles the passed title prop', () => {
		let dummyTitle = "vanillaIce";
	  let testComp = shallow(<Section title={dummyTitle} />);
	  const mockTitle = testComp.find('Title');
	  console.log('mockTitle',mockTitle.prop('title'));
	  expect(mockTitle.prop('title')).toEqual(dummyTitle);
	});	

})

