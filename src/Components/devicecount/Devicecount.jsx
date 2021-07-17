import React, { Component } from "react";
import "./devicecount.css";
export class Devicecount extends Component {
  render() {
    return (
      <div className="device-main row">
        <div className="device-left col-lg-4 col-md-12 col-sm-12">
          <div>
            <p className="device-pre">We acheive some more.</p>
            <h3 className="device-text">
              BULK OF INDIA'S <br />
              <span style={{ color: "#020BE9" }}>
                MOBILE PAYMENTS
              </span> TRAFFIC <br />
              PASSES THROUGH JUSPAY.
            </h3>
          </div>
        </div>
        <div
          style={{ margin: "0px", padding: "0px" }}
          className="device-right row col-lg-7 col-md-12 col-sm-12"
        >
          <div className="count col-md-6 col-sm-6">
            <h2 data-aos="fade-down" className="num v1">
              10,000,000
            </h2>
            <p className="abt">INR transactions processed every day</p>
            <span className="triangle"></span>
          </div>
          <div className="count col-md-6 col-sm-6">
            <h2 data-aos="fade-down" className="num v2">
              120,000,000
            </h2>
            <span className="triangle"></span>
            <p className="abt">mobile devices our SDKs installed</p>
          </div>
          <div className="count col-md-6 col-sm-6">
            <h2 data-aos="fade-down" className="num v3">
              4,000,000
            </h2>
            <p className="abt">transaction volume processed per day</p>
            <span className="triangle"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Devicecount;
