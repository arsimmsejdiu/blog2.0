import React from "react";
import Play from "../Images/play.svg";
import Hand from "../Images/hand.webp";

const Banner = () => {
  return (
    <section className="banner" id="banner">
      <div id="bannerBgAddition" className="banner-addition-bg"></div>
      <div id="bannerBg" className="banner-bg"></div>
      <div className="container">
        <div className="row">
          <div className="banner-inner" id="bannerInner">
            <div className="content">
              <div className="content-inner">
                <h1>
                  <div className="line">
                    <span>Helping clients with</span>
                  </div>
                  <div className="line">
                    <span>their device problems</span>
                  </div>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  sunt doloremque repellendus pariatur ad. Necessitatibus
                  beatae, alias assumenda.
                </p>
                <div className="btn-row">
                  <a href="/">Explore Articles</a>
                </div>
                <div className="play-video">
                  <div className="play-video cover"></div>
                  <span>
                    <img src={Play} alt="play icon" />
                    Watch Video
                  </span>
                </div>
              </div>
            </div>
            <div className="image">
              <div className="image-inner">
                <img src={Hand} alt="Hand" />
                <div className="feature-banner" id="featureBanner">
                Write to us 
                </div>
                <div className="feature-banner green" id="featureBannerGreen">
                 All answers here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
