import React, { Component } from "react";
import NavBarItem from "./NavBarItem";

export default class NavBar extends Component {
  render() {
    const linkNames = this.props.links.map(link => <NavBarItem link={link} />);

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <span>H</span>anaa
          </a>
          <button
            className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">{linkNames}</ul>
          </div>
        </div>
      </nav>
    );
  }
}
