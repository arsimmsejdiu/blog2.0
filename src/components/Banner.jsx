import React from "react";
//<<<<<<< HEAD
//import Play from "../Images/play.svg";
//import Hand from "../Images/article.svg";
//=======
//import Hand from "../Images/article.svg";
//>>>>>>> 342923d7a9e40f48f172f2182f9794e8cb833565

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
                  As a senior front-end engineer with years of experience I
                  create amazing websites and web apps to make the internet a
                  better place. Get in touch to discuss how we can work
                  together.
                </p>
                {/* <div className="btn-row">
                  <a href="/blogs">Explore Articles</a>
                </div>
                <div className="play-video">
                  <div className="play-video cover"></div>
                  <span>
                    Explore More
                  </span>
                </div> */}
              </div>
            </div>
            {/* <div className="image">
              <div className="image-inner">
                <img src={Hand} alt="Hand" />
                <div className="feature-banner not-found" id="featureBanner">
                  Write to me
                </div>
                <div className="feature-banner green not-found" id="featureBannerGreen">
                  All answers here
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
