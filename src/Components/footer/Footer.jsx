import React, { Component } from "react";
import "./Footer.css";
// import Phone from "../../Loaders/phone.png";

export class Footer extends Component {
  render() {
    return (
      <div className="footer-section">
        <div
          style={{ marginLeft: "0px", width: "99%", marginBottom: "10px" }}
          className="row"
        >
          <div className="col-lg-3 col-md-6">
            <div style={{ display: "flex" }}>
              <img
                style={{ width: "40px ", objectFit: "contain" }}
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
            <div>
              <i class="foo-icon fab fa-github-square"></i>
              <i class="foo-icon fas fa-envelope-square"></i>
              <i class="foo-icon fab fa-twitter-square"></i>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div style={{ display: "inline-block" }}>
              <h4 className="footer-center-header">
                {" "}
                <span style={{ color: "#020BE9" }}>FOR </span>BUSINESS
              </h4>
              <p className="footer-center-content">Merchant Home</p>
              <p className="footer-center-content">Register as LSP</p>
              <p className="footer-center-content">UPI Autoplay</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div style={{ display: "inline-block" }}>
              <h4 className="footer-center-header">
                <span style={{ color: "#020BE9" }}>COM</span>PANY
              </h4>
              <p className="footer-center-content">Tech</p>
              <p className="footer-center-content">Careers</p>
              <p className="footer-center-content">Privacy Policy</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div style={{ display: "inline-block" }}>
              <h4 className="footer-center-header">
                <span style={{ color: "#020BE9" }}>INTEGRATION </span>DOCS
              </h4>
              <p className="footer-center-content">Justpay safe Android</p>
              <p className="footer-center-content">Juspay safe IOS</p>
              <p className="footer-center-content">Express Checkout</p>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}

export default Footer;
