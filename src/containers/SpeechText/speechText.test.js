import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import SpeechText from "./SpeechText";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
require("isomorphic-fetch");

describe("<SpeechText />", () => {
  it("renders without crashing", () => {
    const comp = shallow(<SpeechText />);
    expect(comp.length).toBe(1);
  });
});
