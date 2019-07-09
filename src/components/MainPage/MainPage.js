import React, { Component } from "react";

import Header from "../Header";
import CardList from "../CardList";
import SearchBox from "../SearchBox";
import Scroll from "../Scroll";
import ErrorBoundary from "../ErrorBoundary";

import "./MainPage.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <Header />
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading..</h1>
          ) : (
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
