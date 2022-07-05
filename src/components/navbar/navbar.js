import React from "react";

import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="sub_navbar">
        <div>
          <img src="./assets/logo.png" alt="logo" className="logo" />
        </div>
        <div className="navbar_options">
          <div className="navbar_each_options">
            <p className="navbar_each_options_text">Documentation</p>
          </div>
          <div className="navbar_each_options">
            <p className="navbar_each_options_text">API</p>
          </div>
          <div
            className="navbar_each_options"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              className="navbar_each_options_text"
              style={{
                fontWeight: "bold",
                border: "1px solid #faf8f8",
                borderRadius: "10px",
                padding: "10px 25px",
              }}
            >
              Register
            </p>
          </div>
          <div className="navbar_each_options">
            <p
              className="navbar_each_options_text"
              style={{ fontWeight: "bold" }}
            >
              Login
            </p>
          </div>
        </div>
        <div className="navbar_options2">
          <input type="checkbox" id="active" />
          <label for="active" class="menu-btn">
            <span></span>
          </label>
          <label for="active" class="close"></label>
          <div className="wrapper">
            <ul>
              <li>
                <a href="/#">Documentation</a>
              </li>
              <li>
                <a href="/#">API</a>
              </li>
              <li>
                <a href="/#">Register</a>
              </li>
              <li>
                <a href="/#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
