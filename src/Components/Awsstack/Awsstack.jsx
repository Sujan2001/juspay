import React, { Component } from "react";
import "./Awstack.css";
import bhim from "../../Images/bhim.png";

export class Awsstack extends Component {
  render() {
    return (
      <div className="awstack-main">
        <h2 className="aws-head">Juspay Stack</h2>
        <h6 className="aws-subhead">The AWS of Payments.</h6>
        <p className="aws-abt">
          A suite of customized, end-to-end solutions to take care of all your
          payment needs.We provide the building blocks for secure and
          frictionless mobile and internet commerce.{" "}
        </p>
        <p className="aws-abt">
          {" "}
          Our proprietary, functionally programmed platforms allow you to
          execute quickly and scale globally.
        </p>
        <div className="btn-group">
          <button style={{ width: "140px" }} className="top-btn">
            Schedule Demo
          </button>
        </div>
        <div className="mainaws">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="mainaws-inner row"
          >
            <div
              data-aos="fade-up"
              className="content c1 col-lg-4 col-md-4 col-sm-6"
            >
              <div className="icon-div">
                <i style={{ color: "#8D39FA" }} class="bx bxs-check-shield"></i>
              </div>
              <h2 style={{ color: "#8D39FA" }} className="icon-head">
                Safe
              </h2>
              <p className="icon-des">
                2-Factor Authentication (2FA) made automagical.
              </p>
            </div>
            <div
              style={{
                width: "400px",
                height: "200px",
                clipPath: "circle(42.5% at 69% 75%)",
                backgroundColor: "#f4f6fa",
                position: "absolute",
                right: "-100px",
                transform: "rotate(-90deg)",
                zIndex: "-10",
              }}
            ></div>
            <div
              data-aos="fade-up"
              className="content c2 col-lg-4 col-md-4 col-sm-6"
            >
              <div
                style={{ backgroundColor: "rgba(233,59,129,0.3)" }}
                className="icon-div"
              >
                <i
                  style={{ color: "#E93B81" }}
                  class="bx bxs-credit-card-alt"
                ></i>
              </div>
              <h2 style={{ color: "#E93B81" }} className="icon-head">
                Checkout
              </h2>
              <p className="icon-des">
                Mobile & desktop checkout layer. 100% customizable.
              </p>
            </div>
          </div>
          <div
            style={{
              width: "400px",
              height: "200px",
              clipPath: "circle(42.5% at 69% 75%)",
              backgroundColor: "#f4f6fa",
              position: "absolute",
              left: "-100px",
              zIndex: "-10",
              transform: "rotate(90deg)",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="mainaws-inner row"
          >
            <div
              data-aos="fade-up"
              className="content c3 col-lg-4 col-md-4 col-sm-6"
            >
              <div
                style={{ backgroundColor: "rgba(24,90,219,0.3)" }}
                className="icon-div"
              >
                <i
                  style={{ color: "#185ADB", fontSize: "30px" }}
                  class="fas fa-eye"
                ></i>
              </div>
              <h2 style={{ color: "#185ADB" }} className="icon-head">
                Iris
              </h2>
              <p className="icon-des">
                Monitor, analyze and experiment across your payment funnels.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="content c4 col-lg-4 col-md-4 col-sm-6"
            >
              <div
                style={{ backgroundColor: "rgba(57,166,163,0.3)" }}
                className="icon-div"
              >
                <img
                  style={{ width: "35px", objectFit: "contain" }}
                  src={bhim}
                  alt=""
                />
              </div>
              <h2 style={{ color: "#39A6A3" }} className="icon-head">
                UPI in a box
              </h2>
              <p className="icon-des">
                A suite of turn-key UPI based solutions.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="mainaws-inner row "
          >
            <div data-aos="fade-up" className="content c5">
              <div
                style={{ backgroundColor: "rgba(80,203,147,0.3)" }}
                className="icon-div"
              >
                <i style={{ color: "#50CB93" }} class="bx bx-code-block"></i>
              </div>
              <h2 style={{ color: "#50CB93" }} className="icon-head">
                Hyper
              </h2>
              <p className="icon-des">
                Develop micro-apps quickly and update them dynamically.
              </p>
            </div>
          </div>
        </div>
        <div className="btn-group">
          <button className="top-btn view">
            <i class="bx bx-plus"></i> View all Products
          </button>
        </div>
      </div>
    );
  }
}

export default Awsstack;
