import React from "react";

import "./section3.css";

export default function Section3() {
  return (
    <div className="section3_container">
      <div>
        <h1 className="section3_h1">Why BetconX</h1>
      </div>
      <div>
        <p className="section3_p1">
          Betconx is a P2P crypto-products trading platform, providing traders a
          diverse range of crypto contracts and a highly secure & intuitive
          trading interface, powered by institutional-grade infrastructure.
          Built by veteran traders and supported by a diverse community of VCs,
          Traders and Investors from both traditional and crypto space.
        </p>
      </div>
      <div className="section3_content">
        <div className="section3_content_section">
          <div className="section3_content_each">
            <div>
              <img src="./assets/Y1.png" alt="one" width={60} height={60} />
            </div>
            <div className="section3_content_content">
              <h4>Unique Trading Products</h4>
              <p className="section3_content_p">
                First to launch Exchange Quoted Spreads which dramatically
                reduce execution risk in volatile markets.
              </p>
            </div>
          </div>
          <div className="section3_content_each section3_content_ms">
            <div>
              <img src="./assets/Y3.png" alt="one" width={60} height={60} />
            </div>
            <div className="section3_content_content">
              <h4>Maximum Security</h4>
              <p className="section3_content_p">
                Funds stored in multi-signature deep cold storage. Insurance
                Fund from Day 1.
              </p>
            </div>
          </div>
        </div>
        <div className="section3_content_section">
          <div className="section3_content_each">
            <div>
              <img src="./assets/Y2.png" alt="one" width={60} height={60} />
            </div>
            <div className="section3_content_content">
              <h4>Trade Mining</h4>
              <p className="section3_content_p">
                Earn rewards on the fees you pay as per trade volume.
              </p>
            </div>
          </div>
          <div className="section3_content_each section3_content_ii">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="./assets/Y4.png" alt="one" width={38} height={60} />
            </div>
            <div className="section3_content_content section3_content_content4">
              <h4>Intuitive Interface</h4>
              <p className="section3_content_p">
                Easy-to-use, highly customisable and trader-friendly platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
