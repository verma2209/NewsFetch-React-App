import "./App.css";
import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isColorChanged: false, // Initial state to track color change
    };
  }

  changeBodyStyles = () => {
    // Check the current state and toggle styles accordingly
    if (this.state.isColorChanged) {
      document.body.style.backgroundColor = "white"; // Original background color
      document.body.style.color = "black"; // Original text color
    } else {
      document.body.style.backgroundColor = "#042743"; // New background color
      document.body.style.color = "white"; // New text color
    }
    // Toggle the color change state
    this.setState((prevState) => ({
      isColorChanged: !prevState.isColorChanged,
    }));
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar
            changeBodyStyles={this.changeBodyStyles}
            isColorChanged={this.state.isColorChanged}
          />
          <Switch>
            <Route exact path="/">
              <News
                isColorChanged={this.state.isColorChanged}
                pageSize={16}
                country="in"
                category="general"
                key="general"
              />
            </Route>

            <Route exact path="/science">
              <News
                isColorChanged={this.state.isColorChanged}
                pageSize={16}
                country="in"
                category="science"
                key="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                isColorChanged={this.state.isColorChanged}
                pageSize={16}
                country="in"
                category="sports"
                key="sports"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                isColorChanged={this.state.isColorChanged}
                pageSize={16}
                country="in"
                category="entertainment"
                key="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                isColorChanged={this.state.isColorChanged}
                pageSize={16}
                country="in"
                category="health"
                key="health"
              />
            </Route>
            <Route exact path="/technology">
              <News
                isColorChanged={this.state.isColorChanged}
                pageSize={16}
                country="in"
                category="technology"
                key="technology"
              />
            </Route>
            <Route exact path="/business">
              <News
                isColorChanged={this.state.isColorChanged}
                pageSize={16}
                country="in"
                category="business"
                key="business"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
