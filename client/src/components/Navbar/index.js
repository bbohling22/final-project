import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  });

  return (
    <nav
      className="navbar is-fixed-top is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
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
          <Link className="navbar-item" to="/">
            Home
          </Link>
          
          <Link className="navbar-item " to="/Create">
              Create
          </Link>
          

          <div className="navbar-item has-dropdown is-hoverable">
            <h1 className="navbar-link" to="/about">
              About
            </h1>

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
          <span className="icon has-text-success is-medium">
            <i className="fa-solid fa-bag-shopping"></i>
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
};

export default Navbar;
