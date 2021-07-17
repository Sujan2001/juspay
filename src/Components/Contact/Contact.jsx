import React, { Component } from "react";
import "./Contact.css";
import TextField from "@material-ui/core/TextField";
export class Contact extends Component {
  render() {
    return (
      <div style={{ padding: "50px 5px", backgroundColor: "#f4f6fa" }}>
        <div>
          <h2 className="con-left">
            DON'T SEE THE SOLUTION YOU'RE LOOKING FOR?
          </h2>
          <h5 className="con-subleft">
            Get in touch and chances are we’d already have something in the
            works.
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              margin: "20px 0px",
            }}
          >
            <TextField
              id="outlined-textarea"
              label="Enter your company mailid"
              placeholder="company@gamil.com"
              multiline
              variant="outlined"
            />
            <div className="send">
              <i class="send-icon bx bx-right-top-arrow-circle"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
