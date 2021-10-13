import React from "react";
import TypedDiv from "./Typed";
import Particle from "../data/Particle";

const Banner = () => {
  return (
    <section className="banner" id="banner">
      <div id="bannerBgAddition" className="banner-addition-bg"></div>
      <div id="bannerBg" className="banner-bg"></div>
      <div className="container">
      <Particle className="particle"/>
        <div className="row">
          <div className="banner-inner" id="bannerInner">
            <div className="content">
              <div className="content-inner">
                <h1 className="line">
                  <TypedDiv />
                </h1>
                <p>
                  As a senior front-end engineer with years of experience I
                  create amazing websites and web apps to make the internet a
                  better place. Get in touch to discuss how we can work
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
