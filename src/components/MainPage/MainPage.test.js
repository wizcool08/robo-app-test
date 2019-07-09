import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("expect to render MainPage", () => {
  expect(wrapper.debug()).toMatchSnapshot();
});

it("filters robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "Peter",
        email: "peter@gmail.com"
      }
    ],
    searchField: "peter",
    isPending: false
  };

  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      email: "peter@gmail.com",
      id: 3,
      name: "Peter"
    }
  ]);
});
