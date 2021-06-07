import React from "react";
import Play from "../Images/play-button.svg";
import Hand from "../Images/hand.webp";

const Banner = () => {
  return (
    <section>
      <div className="banner-addition bg"></div>
      <div className="banner-bg"></div>
      <div className="container">
        <div className="row">
          <div className="banner-inner" id="bannerInner">
            <div className="content">
              <div className="content-inner">
                <h1>
                  <div className="line">
                    <span>Helping Clients on their problems</span>
                  </div>
                  <div className="line">
                    <span>with the devices</span>
                  </div>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam excepturi, qui quo numquam reprehenderit laboriosam
                  voluptatibus minus! Ratione, molestias culpa. Quod vero vitae
                  at vel repudiandae magnam optio qui fugiat.
                </p>
                <div className="btn-row">
                  <a href="/">Explore Articles</a>
                </div>
                <div className="play-video">
                  <div className="play-video cover"></div>
                  <span>
                    <img src={Play} alt={Play} />
                    Watch video
                  </span>
                </div>
              </div>
              <div className="image">
                <div className="image-inner">
                  <img src={Hand} alt={Hand} />
                  <div className="feature-banner" id="featureBanner">
                    Lorem ipsum
                  </div>
                  <div className="feature-banner green" id="featureBannerGreen">
                    Lorem ipsum dolores
                  </div>
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
