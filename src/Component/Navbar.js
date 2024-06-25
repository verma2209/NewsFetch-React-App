import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isColorChanged: false, // Initial state to track color change
  //   };
  // }

  // changeBodyColor = () => {
  //   // Change to a different background color
  //   if (this.state.isColorChanged) {
  //     document.body.style.backgroundColor = "white"; // Revert to original color
  //     document.body.style.color = "black"; // Revert to original color
  //     const headElement = document.body.querySelector(".head");
  //     if (headElement) {
  //       headElement.style.borderBottomColor = "black"; // Original border bottom color
  //     }
  //   } else {
  //     document.body.style.backgroundColor = "#042743"; // Change to new color
  //     document.body.style.color = "white"; // Change to new color
  //     const headElement = document.body.querySelector(".head");
  //     if (headElement) {
  //       headElement.style.borderBottomColor = "white"; // New border bottom color
  //     }
  //   }
  //   // Toggle the color change state
  //   this.setState((prevState) => ({
  //     isColorChanged: !prevState.isColorChanged,
  //   }));
  // };
  render() {
    // const { isColorChanged } = this.props;
    return (
      <>
        <div className="wrapper">
          <nav>
            <div className="content">
              <div className="logo">
                <Link to="/">NewsFetch</Link>
              </div>
              <ul className="links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/science">Science</Link>
                </li>
                <li>
                  <Link to="/sports">Sports</Link>
                </li>
                <li>
                  <Link to="/entertainment">Entertainment</Link>
                </li>
                <li>
                  <Link to="/health">Health</Link>
                </li>
                <li>
                  <Link to="/technology">Technology</Link>
                </li>
                <li>
                  <Link to="/business">Business</Link>
                </li>
              </ul>
              {/* <button type="button" class="btn btn-success">
                Enable Dark Mode
              </button> */}
            </div>
          </nav>
          <div className="form-check form-switch">
            <img
              src={this.props.isColorChanged ? "download.png" : "day.png"} //
              alt="/"
              onClick={this.props.changeBodyStyles} //
            />

            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {this.props.isColorChanged ? "light" : "dark"} Mode
            </label>
          </div>
        </div>
      </>
    );
  }
}
