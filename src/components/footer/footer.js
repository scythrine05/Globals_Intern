import React from "react";

import "./footer.css";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_container_sub">
        <div className="footer_content_each">
          <div>
            <h3 style={{ width: 50 }} className="footer_h3">
              ABOUT
            </h3>
          </div>
          <div>
            <p className="footer_content_p1">About Us</p>
            <p className="footer_content_p1">Privacy Policy</p>
            <p className="footer_content_p1">Term of Use</p>
          </div>
        </div>
        <div className="footer_content_each">
          <div>
            <h3 className="footer_h3">CONTACT US</h3>
          </div>
          <div>
            <div>
              <p className="footer_content_p1">Support:</p>
              <p className="footer_content_p2">support@betconx.com</p>
            </div>
            <div>
              <p className="footer_content_p1">Queries</p>
              <p className="footer_content_p2">info@betconx.com</p>
            </div>
          </div>
        </div>
        <div className="footer_content_each">
          <div>
            <h3 className="footer_h3">SOCIAL</h3>
          </div>
          <div className="footer_content_icons">
            <div className="footer_content_icons_sub">
              <img
                src="./assets/Social1.png"
                alt="one"
                className="footer_content_icon"
                width={20}
                style={{ marginLeft: 0 }}
                height={20}
              />
              <img
                src="./assets/Social4.png"
                alt="one"
                className="footer_content_icon"
                width={11}
                height={20}
              />
            </div>
            <div className="footer_content_icons_sub">
              <img
                src="./assets/Social2.png"
                alt="one"
                className="footer_content_icon"
                width={25}
                height={20}
              />

              <img
                src="./assets/Social5.png"
                alt="one"
                className="footer_content_icon"
                width={20}
                height={20}
              />
            </div>
            <div className="footer_content_icons_sub">
              <img
                src="./assets/Social3.png"
                alt="one"
                className="footer_content_icon"
                width={20}
                height={20}
              />
              <img
                src="./assets/Social6.png"
                alt="one"
                className="footer_content_icon"
                width={28}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_content_cr">
        <p className="footer_content_cr_p">
          Copyright © 2022 Betconx, All Right Reserved
        </p>
      </div>
    </div>
  );
}
