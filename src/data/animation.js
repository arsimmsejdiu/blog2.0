import gsap from "gsap";

const header = document.querySelector("#header");

//banner
const banner = document.querySelector("#bannerBg");
const bannerAddition = document.querySelector("#bannerBgAddition");

//content
const h1Line = document.querySelectorAll(".line span");
const contentP = document.querySelector(".content-inner p");
const contentButton = document.querySelector(".content-inner .btn-row");
const playVideo = document.querySelector(".play-video span");
const playVideoCover = document.querySelector(".play-video .cover");

//image
const handImg = document.querySelector(".image-inner img");
const featureBanner = document.querySelector("#featureBanner");
const featureBannerGreen = document.querySelector("#featureBannerGreen");

const bannerTL = gsap.timeline();

bannerTL
  .from([bannerAddition, banner], {
    duration: 1.2,
    width: 0,
    skewX: 4,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2
    }
  })
  .from(header, {
    delay: -0.2,
    y: 16,
    opacity: 0,
    duration: 0.8,
    ease: "power3.inOut"
  })
  .from(h1Line, {
    delay: -0.4,
    y: 80,
    duration: 0.8,
    ease: "power3.out",
    stagger: {
      amount: 0.2
    }
  })
  .from([contentP, contentButton], {
    delay: -0.6,
    y: -40,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.2
    }
  })
  .to([playVideo, playVideoCover], {
    delay: -0.6,
    opacity: 1,
    duration: 0
  })
  .to(playVideoCover, {
    delay: -0.6,
    height: 0,
    duration: 1,
    ease: "power3.out"
  });

gsap.from(handImg, {
  delay: 2.2,
  x: -100,
  skewX: 2,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out"
});

gsap.from([featureBanner, featureBannerGreen], {
  delay: 2.4,
  x: -60,
  skewX: 6,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out",
  stagger: {
    amount: 0.2
  }
});