import React from "react";

import "./section4.css";

export default function Section4() {
  return (
    <div className="section4_container">
      <div>
        <h1 className="section4_h1">Services</h1>
      </div>
      <div className="section4_content">
        <div className="section4_content_each">
          <div>
            <img src="./assets/S1.png" alt="one" height={100} width={130} />
          </div>
          <div className="section4_content_content">
            <h4>PERPETUAL</h4>
            <p className="section4_content_p">
              Easy-to-trade, non-expiring crypto derivatives contracts.
            </p>
            <p className="section4_content_more">Read More</p>
          </div>
        </div>
        <div className="section4_content_each">
          <div>
            <img src="./assets/S2.png" alt="one" height={80} width={90} />
          </div>
          <div className="section4_content_content">
            <h4>FUTURES</h4>
            <p className="section4_content_p">
              Cash-settled derivatives contracts for going long or short on
              future cryptocurrency prices.
            </p>
            <p className="section4_content_more">Read More</p>
          </div>
        </div>
        <div className="section4_content_each">
          <div>
            <img src="./assets/S3.png" alt="one" height={80} width={90} />
          </div>
          <div className="section4_content_content">
            <h4>EXCHANGE-QUOTED SPREADS</h4>
            <p className="section4_content_p">
              Low-risk trading instruments to easily trade the price difference
              of underlying futures and perpetual contracts.
            </p>
            <p className="section4_content_more">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
}
