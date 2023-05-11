import React from "react";
import { Link } from "react-router-dom";
import Config from "../utils/Config";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
          <a href="#" className="bars" onClick={this.props.onBarClick}>
            </a>
            <Link to={Config.homeUrl} className="navbar-brand">
            S<span>ales</span>&nbsp;
            I<span>nsight</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
