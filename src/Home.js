import React, { useState } from "react";
import "./Home.css";

function Home() {
  //fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  //toggle menu
  const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src="" alt=""></img>
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#Feedback">
                <li className="nav__items mx__15">Feedbak</li>
              </a>
              <a href="#Features">
                <li className="nav__items mx__15">Features</li>
              </a>
              <a href="#OurTeam">
                <li className="nav__items mx__15">Our Team</li>
              </a>
              <a href="#FAQ">
                <li className="nav__items mx__15">F.A.Q</li>
              </a>
            </ul>
          </div>
          {/* toggle menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#about">Features</a>
                </li>
                <li className="sideNavbar">
                  <a href="#services">Feedback</a>
                </li>
                <li className="sideNavbar">
                  <a href="#portfolio">Our Team</a>
                </li>
                <li className="sideNavbar">
                  <a href="#contact">Download</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">AllMark is the bookmark</h1>
              <h1 className="home__text pz__10">manager you needed.</h1>
              <h2 className="home__text pz__10">
                A clean and simple interface to organize your favorite websites.
              </h2>
              <h2 className="home__text pz__10">
                And it syncs with all your browsers for free.
              </h2>

              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">
                    Download the Desktop App
                  </button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Go to Web App!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
