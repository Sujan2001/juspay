import React, { Component } from "react";
import "./Reason.css";
export class Reason extends Component {
  render() {
    return (
      <div>
        <div className="reason-main">
          <h3 className="heading">
            How <span style={{ color: "#020BE9" }}>Juspay</span> can help your{" "}
            <br /> business ?
          </h3>
          <div style={{ margin: "0px" }} className="reason-head row">
            <div
              data-aos="zoom-in-up"
              className="reason col-lg-3 col-md-3 col-sm-6"
            >
              <div
                className="icon-div"
                style={{ backgroundColor: "rgba(141,57,250,0.3)" }}
              >
                <i style={{ color: "#8D39FA" }} class="bx bxs-wallet"></i>
              </div>
              <h6 className="sub-head">No Hidden Layers</h6>
            </div>
            <div
              data-aos="zoom-in-up"
              className="reason col-lg-3 col-md-3 col-sm-6"
            >
              <div
                className="icon-div"
                style={{ backgroundColor: "rgba(255,20,147,0.3)" }}
              >
                <i style={{ color: "#FF1493" }} class="bx bx-lock-open-alt"></i>
              </div>
              <h3 className="sub-head">Highly secured</h3>
            </div>
            <div
              data-aos="zoom-in-up"
              className="reason col-lg-3 col-md-3 col-sm-6"
            >
              <div
                className="icon-div"
                style={{ backgroundColor: "rgba(250,208,44,0.3)" }}
              >
                <i style={{ color: "#FAD02C" }} class="bx bx-support"></i>
              </div>
              <h6 className="sub-head">24/7 Support</h6>
            </div>
          </div>
          {/* <div className="img-reason">
<img style={{width:"50%",border:"25px solid #DBFC53",borderRadius:"15px",objectFit:"contain",boxShadow:"0 3px 20px rgba(0, 0, 0, 0.2)"}} src="https://files.readme.io/8c11e6f-Screenshot_2019-06-02_at_10.50.13_AM.png" alt="" />
</div> */}
        </div>
      </div>
    );
  }
}

export default Reason;
