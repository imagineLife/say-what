import React from "react";
import ReactDOM from "react-dom";
import SpeechData from "./SpeechData";
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
require("isomorphic-fetch");

// Enzyme.configure({ adapter: new Adapter() });

describe("<SpeechData />", () => {
  it("matches snampshot", () => {
    const component = shallow(<SpeechData />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
