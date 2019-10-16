import React, { Component } from "react";

export default class NavBarItem extends Component {
  formatClassName = () => {
    return this.props.link
      .split(" ")
      .join("-")
      .toLowerCase();
  };

  render() {
    return (
      <li className="nav-item">
        <a href={this.formatClassName()} className="nav-link">
          <span>{this.props.link}</span>
        </a>
      </li>
    );
  }
}
