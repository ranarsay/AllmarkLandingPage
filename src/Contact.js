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
                <img src="https://img.icons8.com/fluency/48/undefined/chrome.png" alt="" />
              </div>
              <div className="service__meta"></div>
              <h1 className="service__text">Chrome</h1>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/undefined/external-firefox-a-free-and-open-source-web-browser-developed-by-the-mozilla-foundation-logo-color-tal-revivo.png" alt=""/>
              </div>
              <div className="service__meta"></div>
              <h1 className="service__text">Firefox</h1>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src="https://img.icons8.com/fluency/48/undefined/opera.png" alt="" />
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
