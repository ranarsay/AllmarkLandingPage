import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="download component__space" id="Download">
      <div className="heading">
        <h4 className="heading">Download the Extension</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src="https://img.icons8.com/fluency/130/undefined/chrome.png" alt="" />
              </div>
              <div className="service__meta"></div>
              <h1 className="service__text">Chrome</h1>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src="./../images/firefox_logo.png" alt=""/>
              </div>
              <div className="service__meta"></div>
              <h1 className="service__text">Firefox</h1>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src="https://img.icons8.com/fluency/130/undefined/opera.png" alt="" />
              </div>
              <div className="service__meta"></div>
              <h1 className="service__text">Opera</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
