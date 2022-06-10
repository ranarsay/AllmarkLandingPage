import React from "react";
import "./About.css";
import aboutImg from "./img/woman_macbook.webp";

function About() {
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="Feedback">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="right col__2">
            <h1 className="about__heading">Bookmark in one click</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Organize your bookmarks however you like.
              </p>
              <p className="about__text p__color">
                Would you like to give feedback to us? Install and look at our
                user guide!
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">User Guide</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Install</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-circle white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
