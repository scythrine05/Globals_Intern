import React from "react";

import "./section1.css";

export default function Section1() {
  return (
    <div className="section1_container">
      <div>
        <p className="section1_p1">The First Complete</p>
        <h1 className="section1_h1">CRYPTO DERIVATIVES EXCHANGE</h1>
        <p className="section1_p2">
          Trade Perpetuals, Futures and Exchange-quoted Spreads
        </p>
      </div>
      <div>
        <button className="section1_btn">VIEW TRADE</button>
      </div>
    </div>
  );
}
