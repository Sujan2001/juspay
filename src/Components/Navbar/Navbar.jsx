/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export class TopNavbar extends Component {
  state={
    p:null,
    yes:false
  }
  handleClick = () => {
    const hamburger = document.getElementById("ham");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
  };
  render() {
    return (
      <nav id="nav">
        <div class="logo">
          <Link style={{ textDecoration: "none" }} to="/">
            <div style={{ display: "flex" }}>
              <img
                style={{ width: "33px ", objectFit: "contain" }}
                src="https://avatars.githubusercontent.com/u/11497632?s=200&v=4"
                alt=""
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2
                  style={{
                    display: "inline-block",
                    marginTop: "6px",
                    marginLeft: "7px",
                  }}
                  className="heading"
                >
                  {" "}
                  <span style={{ color: "#020BE9" }}>Jus</span>pay
                </h2>
              </div>
            </div>
          </Link>
        </div>

        <div id="ham" onClick={this.handleClick} className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/pricing">Product</Link>
          </li>
          <li>
            <Link to="/book-a-demo">About</Link>
          </li>
          <li>
            <Link to="/book-a-demo">Careers</Link>
          </li>
          <li>
            <button className="login-button" href="#">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopNavbar;
