import React, { Component } from "react";
import "./Partner.css";
export class Partner extends Component {
  render() {
    return (
      <div className="partner-main">
        <h2 className="partner-head">Trusted by the world's best</h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="row"
        >
          <div className="tt">
            <img
              className="iuo"
              src="https://www.juspay.in/customers/logo_amazon.svg"
              alt=""
            />
            <h2 className="pname">amazon</h2>
          </div>
          <div className="tt">
            <img
              className="iuo"
              src="https://www.juspay.in/customers/logo_airtel.svg"
              alt=""
            />
            <h2 className="pname">airtel</h2>
          </div>
          <div className="tt">
            <img
              className="iuo"
              src="https://www.juspay.in/customers/logo_flipkart.svg"
              alt=""
            />
            <h2 className="pname">flipkart</h2>
          </div>
          <div className="tt">
            <img
              style={{ width: "18px" }}
              className="iuo"
              src="https://www.juspay.in/customers/logo_swiggy.svg"
              alt=""
            />
            <h2 className="pname">swiggy</h2>
          </div>
          <div className="tt">
            <img
              className="iuo"
              src="https://www.juspay.in/customers/logo_bms.svg"
              alt=""
            />
            <h2 className="pname">bookmyshow</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
