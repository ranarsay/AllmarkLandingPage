import React from "react";
import "./Project.css";
import Sanem from "./img/SanemYaman.jpeg";
import Hilal from "./img/HilalAnarsay.jpg";
import Project3 from "./img/portfolio-1.jpg";
import Project4 from "./img/portfolio-2.jpg";
import {Link} from "reactstrap";

function Project() {

  return (
    <div className="project component__space" id="OurTeam">
      <div className="heading">
        <h1 className="heading">Our Team</h1>
        <p className="heading p__color">You can send a mail to contact us.</p>
        <br></br>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__image__box">
                  <img src={Sanem} alt="0" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Sanem Yaman</h4>
                <a href="mailto:snmymn1606@gmail.com" className="project__btn">
                    Send Mail
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__image__box">
                  <img src={Hilal} alt="0" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Hilal Rana Anarsay</h4>
                <a href="mailto:ranarsay@gmail.com" className="project__btn">
                  Send Mail
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__image__box">
                  <img src={Project3} alt="0" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Mert Can Bilgiç</h4>
                <a href="mailto:mertcbilgic@gmail.com" className="project__btn">
                  Send Mail
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__image__box">
                  <img src={Project4} alt="0" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Hakan Ayaz</h4>
                <a href="" className="project__btn">
                  Send Mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
