import React, { Component } from "react";
import "./timeline.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
// import $ from 'jquery';
import Typist from "react-typist";

import Login from "../../Images/login.png";
import Dash from "../../Images/Dash.jpeg";
export class Timelin extends Component {
  state = {
    time: true,
  };
  componentDidMount() {
    this.timeline = 0;
    // AOS.init({
    //   duration: 500,
    // });

    setInterval(() => {
      this.setState({
        time: false,
      });
      this.setState({
        time: true,
      });
    }, 60000);
  }

  render() {
    return (
      <div
        id="timeline-divison"
        className="timeline-divison"
        style={{ margin: "10px", marginTop: "0px" }}
      >
        <h1 className="timeline-head">
          Achieve{" "}
          <span data-aos="fade-up" style={{ color: "#020BE9" }}>
            payment gateway
          </span>{" "}
          every time
        </h1>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                style={{ backgroundColor: "#020BE9", color: "white" }}
                id="1"
              >
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "-2px",
                    width: " 100%",
                  }}
                >
                  1
                </p>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                style={{ backgroundColor: "#020BE9", color: "white" }}
                id="2"
              >
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "-2px",
                    width: " 100%",
                    backgroundColor: "#020BE9",
                    color: "white",
                  }}
                >
                  2
                </p>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                style={{ backgroundColor: "#020BE9", color: "white" }}
                id="3"
              >
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "-2px",
                    width: " 100%",
                    backgroundColor: "#020BE9",
                    color: "white",
                  }}
                >
                  3
                </p>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
        </Timeline>
        <div className="time-com">
          <div data-aos="fade-right" className="com-1">
            <img
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              className="t-img"
              src={Login}
              alt=""
            />
          </div>
          <div style={{ flex: "0.1" }}></div>
          <div className="com-2">
            <h1 className="com2-head">Create an account using Sign-up</h1>
            <h5 className="com2-subhead">
              If opportunity doesn't knock , build a door
            </h5>

            <div style={{ marginTop: "25px" }}>
              <h5 className="com2-second-sub1">
                <span style={{ color: "#020BE9" }}>Build payment.</span>A suite
                of customizable , end-to-end solutions to take care of all your
                payment needs.
              </h5>
            </div>
          </div>
        </div>

        <div className="time-com mod">
          <div data-aos="fade-right" className="com-1">
            <div className="jjj">
              <div className="TypistExample-content">
                <Typist
                  className="TypistExample-message"
                  cursor={{ hideWhenDone: true }}
                >
                  <span className="ty">
                    dthAppFlow ::{" "}
                    <span style={{ color: "#0E49B5" }}>
                      User {"->"} Flow Unit
                    </span>{" "}
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span className="ty">dthAppFlow user</span>
                  <br />
                  <span style={{ marginLeft: "46px" }} className="ty">
                    <span style={{ color: "#492F10" }}> = </span> showUI $
                    <span style={{ color: "#0E49B5" }}>Info.Welcome</span> user
                  </span>
                  <Typist.Delay ms={1250} />
                  <br />
                  <span style={{ marginLeft: "29px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "3px", color: "#492F10" }}>
                      {">> "}={" "}
                    </span>{" "}
                    fetch
                    <span style={{ color: "#0E49B5" }}> Api.DTHOperators </span>
                  </span>
                  <br />
                  <Typist.Delay ms={500} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    showUI
                    <span style={{ color: "#0E49B5" }}> List.DTHOperator</span>
                  </span>
                  <Typist.Backspace count={2} delay={1000} />
                  <Typist.Delay ms={750} />
                  <span style={{ color: "#0E49B5" }} className="ty">
                    or
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    untilSuccessful $ showUI
                    <span style={{ color: "#0E49B5" }}> Form.CustomerId</span>
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    fetch
                    <span style={{ color: "#0E49B5" }}> CustomerName</span>
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    fetch
                    <span style={{ color: "#0E49B5" }}> Api.LastBill</span>
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    showUI
                    <span style={{ color: "#0E49B5" }}> Info.BillDetails</span>
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    captureUpiPinFlow
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    commit
                    <span style={{ color: "#0E49B5" }}>
                      {" "}
                      Api.UpiTransaction
                    </span>
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    showUI $
                    <span style={{ color: "#0E49B5" }}>
                      {" "}
                      CrossSell.PaymentOptions <br /> [ManualDeduct]
                    </span>
                  </span>
                  <br />
                  <Typist.Backspace count={14} delay={1000} />
                  <Typist.Delay ms={750} />
                  <span className="ty" style={{ color: "#0E49B5" }}>
                    [AutoDeduct]
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    autoDeductFlow
                    <span style={{ color: "#492F10" }}>{"<|>"}</span>
                    <span> reminderFlow</span>
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    showUI
                    <span style={{ color: "#0E49B5" }}> Info.ThankYou</span>
                  </span>
                  {""}
                </Typist>
              </div>
            </div>
          </div>
          <div style={{ flex: "0.1" }}></div>
          <div className="com-2">
            <h1 className="com2-head">
              <span style={{}}>FOR DEVELOPERS</span>.BY DEVELOPERS.
            </h1>
            <h5 className="com2-subhead">
              Make it easy for relevant customers to create payment gateway
              easier.
            </h5>
            <div style={{ marginTop: "25px" }}>
              <h5 className="com2-second-sub1">
                <span style={{ color: "#020BE9" }}> We believe `Code`</span>
                can solve payments for the next billion. So we obsess over
                eliminating complexities, providing elegant abstractions that
                scale reliably.
              </h5>
            </div>
          </div>
        </div>

        <div className="time-com mod1">
          <div style={{ flex: "0.4" }} className="com-2">
            <h1 className="com2-head">
              <span style={{}}>FOR DEVELOPERS</span>.BY DEVELOPERS.
            </h1>
            <h5 className="com2-subhead">
              Make it easy for relevant customers to create payment gateway
              easier.
            </h5>
            <div style={{ marginTop: "25px" }}>
              <h5 className="com2-second-sub1">
                <span style={{ color: "#020BE9" }}> We believe `Code`</span>
                can solve payments for the next billion. So we obsess over
                eliminating complexities, providing elegant abstractions that
                scale reliably.
              </h5>
            </div>
          </div>
          <div style={{ flex: "0.1" }}></div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            data-aos="fade-left"
            className="com-1"
          >
            <div
              style={{
                width: "90%",
                height: "435px",
                overflow: "scroll",
                backgroundColor: "white",
                padding: "30px",
                boxShadow: "inset 0 0 10px",
              }}
            >
              <div className="TypistExample-content">
                <Typist
                  className="TypistExample-message"
                  cursor={{ hideWhenDone: true }}
                >
                  <span className="ty">
                    dthAppFlow ::{" "}
                    <span style={{ color: "#0E49B5" }}>
                      User {"->"} Flow Unit
                    </span>{" "}
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span className="ty">dthAppFlow user</span>
                  <br />
                  <span style={{ marginLeft: "46px" }} className="ty">
                    <span style={{ color: "#492F10" }}> = </span> showUI $
                    <span style={{ color: "#0E49B5" }}>Info.Welcome</span> user
                  </span>
                  <Typist.Delay ms={1250} />
                  <br />
                  <span style={{ marginLeft: "29px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "3px", color: "#492F10" }}>
                      {">> "}={" "}
                    </span>{" "}
                    fetch
                    <span style={{ color: "#0E49B5" }}> Api.DTHOperators </span>
                  </span>
                  <br />
                  <Typist.Delay ms={500} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    showUI
                    <span style={{ color: "#0E49B5" }}> List.DTHOperator</span>
                  </span>
                  <Typist.Backspace count={2} delay={1000} />
                  <Typist.Delay ms={750} />
                  <span style={{ color: "#0E49B5" }} className="ty">
                    or
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    untilSuccessful $ showUI
                    <span style={{ color: "#0E49B5" }}> Form.CustomerId</span>
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    fetch
                    <span style={{ color: "#0E49B5" }}> CustomerName</span>
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    fetch
                    <span style={{ color: "#0E49B5" }}> Api.LastBill</span>
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    showUI
                    <span style={{ color: "#0E49B5" }}> Info.BillDetails</span>
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    captureUpiPinFlow
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    commit
                    <span style={{ color: "#0E49B5" }}>
                      {" "}
                      Api.UpiTransaction
                    </span>
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    showUI $
                    <span style={{ color: "#0E49B5" }}>
                      {" "}
                      CrossSell.PaymentOptions <br /> [ManualDeduct]
                    </span>
                  </span>
                  <br />
                  <Typist.Backspace count={14} delay={1000} />
                  <Typist.Delay ms={750} />
                  <span className="ty" style={{ color: "#0E49B5" }}>
                    [AutoDeduct]
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    autoDeductFlow
                    <span style={{ color: "#492F10" }}>{"<|>"}</span>
                    <span> reminderFlow</span>
                  </span>
                  <br />
                  <Typist.Delay ms={1250} />
                  <span style={{ marginLeft: "32px" }} className="ty">
                    {" "}
                    <span style={{ marginLeft: "0px", color: "#492F10" }}>
                      {" "}
                      {">>"}={" "}
                    </span>{" "}
                    showUI
                    <span style={{ color: "#0E49B5" }}> Info.ThankYou</span>
                  </span>
                  {""}
                </Typist>
              </div>
            </div>
          </div>
        </div>

        <div className="time-com">
          <div data-aos="fade-right" className="com-1">
            <img
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              className="t-img"
              src={Dash}
              alt=""
            />
          </div>
          <div style={{ flex: "0.1" }}></div>
          <div className="com-2">
            <h1 className="com2-head">Get into Dashboard</h1>
            <h5 className="com2-subhead">
              An immersive interface to manage all your payment ops. Real time
              visibility across your payment funnels.
            </h5>
            <div>
              <h5 className="com2-second-sub1">
                <span style={{ color: "#020BE9" }}>Save time.</span>Collect,
                screen, and filter payments more efficiently than ever.
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timelin;
