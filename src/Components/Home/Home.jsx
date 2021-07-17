/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Loader from "../Loader/Loader";
import TopNavbar from "../Navbar/Navbar";
import "./Home.css";
import main from "../../Images/main.png";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
// import Partner from '../Partners/Partner';
import Reason from "../Reason/Reason";
import Devicecount from "../devicecount/Devicecount";
import Partner from "../Partners/Partner";
import Timelin from "../Timeline/Timeline";
import Slider from "../Slider/Slider";
import Awsstack from "../Awsstack/Awsstack";
import Contact from "../Contact/Contact";
import Footer from "../footer/Footer";

export class Home extends Component {
  state = {
    loader: false,
  };
  componentDidMount() {
    console.log(this.state.l);
    AOS.init({
      duration: 500,
    });
    setTimeout(() => {
      this.setState({
        loader: false,
      });
    }, 5000);
  }
  render() {
    return (
      <div>
        <TopNavbar />
        {/* <div
          onClick={() => {
            console.log("clicked");
          }}
          class="scroll-up-btn"
        >
          <i class="fas fa-angle-up"></i>
        </div> */}
        <div></div>
        {this.state.loader ? (
          <Loader />
        ) : (
          <div className="home-main">
            <div className="bubble"></div>
            <div className="home-top">
              <div className="top-left">
                <h6 className="pre-head">
                  <i
                    style={{ marginRight: "5px" }}
                    class="far fa-snowflake"
                  ></i>
                  Jump start your growth
                </h6>
                <h1 data-aos="fade-right" className="head">
                  We boost the{" "}
                  <span style={{ color: "#020BE9" }}>payment </span>growth for
                  company to fortune
                </h1>
                <div className="sub">
                  <Typed
                    strings={[
                      "Do you want to access payment easily ^1500",
                      "Do you want to get paid ^1500",
                    ]}
                    typeSpeed={80}
                    backSpeed={30}
                    loop
                  >
                    <h1
                      style={{ marginLeft: "5px" }}
                      className="top-division-main-text1"
                    ></h1>
                  </Typed>
                </div>

                <div className="btn-top">
                  <button className="top-btn">Get Started</button>
                </div>
              </div>
              <div data-aos="fade-left" className="top-right">
                <img className="ii" src={main} alt="main-image" />
              </div>
            </div>
            <Reason />
            <Devicecount />
            <Partner />
            <Awsstack />
            <div style={{ backgroundColor: "#fafafa" }}>
              <Timelin />
            </div>
            <Slider />
            <Contact />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
