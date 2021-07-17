import React, { Component } from "react";
import "./Slider.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import O from "../../Images/quotes.png";
export default class Slider extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      750: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  render() {
    return (
      <div className="teams">
        <div class="max-width">
          <h2 class="title">
            Loved by <span style={{ color: "#020BE9" }}>industry</span> leaders
          </h2>
          <OwlCarousel
            className="carousel"
            margin={20}
            loop
            autoplay
            autoplayTimeout={2000}
            autoplayHoverPause
            items={4}
            responsive={this.state.responsive}
          >
            <div class="card">
              <div class="box">
                <img
                  className="img"
                  data-aos="fade-down"
                  style={{ objectFit: "contain", padding: "10px" }}
                  src="https://pbs.twimg.com/profile_images/1071329889163202560/ihI1Hcmq_400x400.jpg"
                  alt=""
                />
                <p style={{ color: "#21201e" }}>
                  <img
                    style={{ width: "30px", objectFit: "contain" }}
                    src={O}
                    alt=""
                  />
                  It indeed was an awesome journey. All credit to the relentless
                  champs at @juspay who worked day night on this project.
                </p>
                <p style={{ color: "#21201e" }}>-By Nikhil Kumar</p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <img
                  className="img"
                  data-aos="fade-down"
                  style={{ objectFit: "contain", padding: "10px" }}
                  src="https://pbs.twimg.com/profile_images/1071329889163202560/ihI1Hcmq_400x400.jpg"
                  alt=""
                />
                <p style={{ color: "#21201e" }}>
                  <img
                    style={{ width: "30px", objectFit: "contain" }}
                    src={O}
                    alt=""
                  />
                  It indeed was an awesome journey. All credit to the relentless
                  champs at @juspay who worked day night on this project.
                </p>
                <p style={{ color: "#21201e" }}>-By Nikhil Kumar</p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <img
                  className="img"
                  data-aos="fade-down"
                  style={{ objectFit: "contain", padding: "10px" }}
                  src="https://pbs.twimg.com/profile_images/1071329889163202560/ihI1Hcmq_400x400.jpg"
                  alt=""
                />
                <p style={{ color: "#21201e" }}>
                  <img
                    style={{ width: "30px", objectFit: "contain" }}
                    src={O}
                    alt=""
                  />
                  It indeed was an awesome journey. All credit to the relentless
                  champs at @juspay who worked day night on this project.
                </p>
                <p style={{ color: "#21201e" }}>-By Nikhil Kumar</p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <img
                  className="img"
                  data-aos="fade-down"
                  style={{ objectFit: "contain", padding: "10px" }}
                  src="https://pbs.twimg.com/profile_images/1071329889163202560/ihI1Hcmq_400x400.jpg"
                  alt=""
                />
                <p style={{ color: "#21201e" }}>
                  <img
                    style={{ width: "30px", objectFit: "contain" }}
                    src={O}
                    alt=""
                  />
                  It indeed was an awesome journey. All credit to the relentless
                  champs at @juspay who worked day night on this project.
                </p>
                <p style={{ color: "#21201e" }}>-By Nikhil Kumar</p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <img
                  className="img"
                  data-aos="fade-down"
                  style={{ objectFit: "contain", padding: "10px" }}
                  src="https://pbs.twimg.com/profile_images/1071329889163202560/ihI1Hcmq_400x400.jpg"
                  alt=""
                />
                <p style={{ color: "#21201e" }}>
                  <img
                    style={{ width: "30px", objectFit: "contain" }}
                    src={O}
                    alt=""
                  />
                  It indeed was an awesome journey. All credit to the relentless
                  champs at @juspay who worked day night on this project.
                </p>
                <p style={{ color: "#21201e" }}>-By Nikhil Kumar</p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <img
                  className="img"
                  data-aos="fade-down"
                  style={{ objectFit: "contain", padding: "10px" }}
                  src="https://pbs.twimg.com/profile_images/1071329889163202560/ihI1Hcmq_400x400.jpg"
                  alt=""
                />

                <p style={{ color: "#21201e" }}>
                  <im3
                    style={{ width: "30px", objectFit: "contain" }}
                    src={O}
                    alt=""
                  />
                  It indeed was an awesome journey. All credit to the relentless
                  champs at @juspay who worked day night on this project.
                </p>
                <p style={{ color: "#21201e" }}>-By Nikhil Kumar</p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <img
                  className="img"
                  data-aos="fade-down"
                  style={{ objectFit: "contain", padding: "10px" }}
                  src="https://pbs.twimg.com/profile_images/1071329889163202560/ihI1Hcmq_400x400.jpg"
                  alt=""
                />
                <p style={{ color: "#21201e" }}>
                  <img
                    style={{ width: "30px", objectFit: "contain" }}
                    src={O}
                    alt=""
                  />
                  It indeed was an awesome journey. All credit to the relentless
                  champs at @juspay who worked day night on this project.
                </p>
                <p style={{ color: "#21201e" }}>-By Nikhil Kumar</p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
