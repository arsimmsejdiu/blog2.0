import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import gsap from "gsap";

const bannerTL = gsap.timeline();

const heroAnimation = (completeAnimation) => {
  bannerTL
    .from(["#bannerAddition", "#banner"], {
      duration: 1.2,
      width: 0,
      skewX: 4,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    })
    .from(".header", {
      delay: -0.2,
      y: 16,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
    })
    .from(".line span", {
      delay: -0.4,
      y: 80,
      duration: 0.8,
      ease: "power3.out",
      stagger: {
        amount: 0.2,
      },
    })
    .from([".content-inner p", ".content-inner .btn-row"], {
      delay: -0.6,
      y: -40,
      duration: 0.8,
      opacity: 0,
      ease: "power3.out",
      stagger: {
        amount: 0.2,
      },
    })
    .to([".play-video span", ".play-video .cover"], {
      delay: -0.6,
      opacity: 1,
      duration: 0,
    })
    .to(".play-video .cover", {
      delay: -0.6,
      height: 0,
      duration: 1,
      ease: "power3.out",
    });

  gsap.from(".image-inner img", {
    delay: 2.2,
    x: -100,
    skewX: 2,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.from(["#featureBanner", "#featureBannerGreen"], {
    delay: 2.4,
    x: -60,
    skewX: 6,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  });
};

const Hero = () => {
  const [setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    heroAnimation(completeAnimation);
  });
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Hero;
