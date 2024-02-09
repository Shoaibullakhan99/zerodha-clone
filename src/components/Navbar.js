import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="m-5">
        <nav className="navbar navbar-expand-ig navbar-light bg-white fixed-top border-bottom">
          <Link className="navbar-brand" to="/">
            <img
              src="https://zerodha.com/static/images/logo.svg"
              style={{ height: "25px", width: "250px" }}
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item m-2">
                <Link></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
