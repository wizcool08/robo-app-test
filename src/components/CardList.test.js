import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("render the CardList Component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "Johnny Walker",
      email: "john@gmail.com"
    },
    {
      id: 2,
      name: "Snow White",
      username: "SkyWalker",
      email: "snow@gmail.com"
    }
  ];

  const wrapper = shallow(<CardList robots={mockRobots} />);
  expect(wrapper.debug()).toMatchSnapshot();
});
