import React from "react";
import { RiUser3Fill } from "react-icons/ri";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Popover from "react-awesome-popover";

import "./navbar.css";

export default function Navbar() {
  const Register = () => {
    return (
      <div className="form_container">
        <form className="form_main">
          <div>
            <p className="form_p">Email</p>
            <input className="form_text" type="email" />
          </div>
          <div>
            <p className="form_p">Password</p>
            <input className="form_text" type="password" />
          </div>
          <div>
            <p className="form_p">Confirm</p>
            <input className="form_text" type="password" />
          </div>
          <div>
            <button type="submit" className="submit_btn">
              <BsFillArrowRightCircleFill
                className="submit_btn_icon"
                size={20}
              />
            </button>
          </div>
          <div>
            <p className="form_p form_p_new">already a user</p>
          </div>
        </form>
      </div>
    );
  };
  const Login = () => {
    return (
      <div className="form_container">
        <form className="form_main">
          <div>
            <p className="form_p">Email</p>
            <input className="form_text" type="email" />
          </div>
          <div>
            <p className="form_p">Password</p>
            <input className="form_text" type="password" />
          </div>
          <div>
            <button type="submit" className="submit_btn">
              <BsFillArrowRightCircleFill
                className="submit_btn_icon"
                size={20}
              />
            </button>
          </div>
          <div>
            <p className="form_p form_p_new">new user</p>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
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
            <Popover
              placement="bottom-center"
              overlayColor="transparent"
              arrow={false}
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
              <Register />
            </Popover>
          </div>
          <div className="navbar_each_options">
            <Popover
              placement="bottom-center"
              overlayColor="transparent"
              arrow={false}
            >
              <p
                className="navbar_each_options_text"
                style={{
                  fontWeight: "bold",
                  padding: "10px 0px",
                }}
              >
                Login
              </p>
              <Login />
            </Popover>
          </div>
        </div>
        <div className="navbar_options2">
          <div className="navbar_options2_user">
            <RiUser3Fill size={19} />
          </div>
          <div>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
