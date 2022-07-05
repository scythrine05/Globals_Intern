import React from "react";

import "./section2.css";

export default function Section2() {
  return (
    <div className="section2_container">
      <div>
        <h1 className="section2_h1">Start Trading in 3 easy steps</h1>
      </div>
      <div className="section2_content">
        <div className="section2_content_each">
          <div>
            <img src="./assets/1.png" alt="one" height={65} width={30} />
            <img
              src="./assets/dot.png"
              alt="dot"
              className="section2_img_dot section2_img_dot1"
            />
          </div>
          <div className="section2_content_content section2_content_content1">
            <h3 className="section2_content_h3">REGISTER</h3>
            <p className="section2_content_p">
              Sign-up for your free account in less than a minute.
            </p>
          </div>
        </div>
        <div className="section2_content_each">
          <div>
            <img src="./assets/2.png" alt="two" height={65} width={45} />
            <img
              src="./assets/dot.png"
              alt="dot"
              className="section2_img_dot"
            />
          </div>
          <div className="section2_content_content">
            <h3 className="section2_content_h3">DEPOSIT</h3>
            <p className="section2_content_p">
              Fund your account by depositing USDT.
            </p>
          </div>
        </div>
        <div className="section2_content_each">
          <div>
            <img src="./assets/3.png" alt="three" height={65} width={45} />
            <img
              src="./assets/dot.png"
              alt="dot"
              className="section2_img_dot"
            />
          </div>
          <div className="section2_content_content">
            <h3 className="section2_content_h3">TRADE</h3>
            <p className="section2_content_p">Make your first trade.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
