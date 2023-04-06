import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const titlefont = {
      fontFamily: "dancing script",
    };
    return (
      <nav
        className="navbar is-fixed-top is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            className="navbar-item has-text-white is-family-dancing-script"
            to="/"
            style={titlefont}
          >
            Only Tomeia
          </Link>

          <button
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu ">
          <div className="navbar-start">
            <Link className="navbar-item has-text-white" to="/">
              Home
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-item has-text-white " to="/products">
                Categories
              </Link>
              <div className="navbar-dropdown">
                <Link className="navbar-item " to="/products/tshirts">
                  T-shirts
                </Link>
                <Link className="navbar-item" to="/products/sweaters">
                  Sweaters
                </Link>
                <Link className="navbar-item" to="/products/hats">
                  Hats
                </Link>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link has-text-white" to="/about">
                About
              </Link>

              <div className="navbar-dropdown">
                <Link className="navbar-item " to="/about/company"></Link>
                <Link className="navbar-item" to="/about/team">
                  Team
                </Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" to="/about/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <span class="icon has-text-success is-medium">
            <i class="fa-solid fa-bag-shopping"></i>
            </span>
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-info" to="/signup">
                  <strong>Sign up</strong>
                </Link>
                <Link className="button is-light" to="/login">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
