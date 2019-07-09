import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, getRobotFriends } from "../actions";

import MainPage from "../components/MainPage/MainPage";

// What state do I need to listen from the store and send it down as props
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error
  };
};

// Tell me what props that I will need to listen to get it dispatch to reducers > store
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(getRobotFriends())
  };
};
class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
