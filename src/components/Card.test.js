import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("render the Card Component", () => {
  expect(shallow(<Card />).debug()).toMatchSnapshot();
});
