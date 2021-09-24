new hoverEffect({
  parent: document.querySelector(".distortion"),
  intensity: 0.2,
  image1: "./img/01.png",
  image2: "./img/02.png",
  displacementImage: "./img/diss.png",
  imagesRatio: 380 / 300,
});

TweenMax.from(".logo", 1, {
  delay: 1.2,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".menu-links ul li",
  1,
  {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Power4.easeInOut,
  },
  0.08
);

TweenMax.from(".search", 1, {
  delay: 1.6,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.from(".cart", 1, {
  delay: 1.8,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.to(".border-bottom", 1, {
  delay: 1.4,
  width: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".subtitle", 1, {
  delay: 2.8,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.to(".title", 1, {
  delay: 2.2,
  width: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".desc", 1, {
  delay: 2.8,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.from(".readmore", 1, {
  delay: 2.8,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.to(".slider", 1, {
  delay: 3,
  opacity: 1,
  ease: Expo.easeInOut,
});

TweenMax.from(".distortion", 1.5, {
  delay: 2.2,
  opacity: 0,
  y: "30",
  ease: Expo.easeInOut,
});

TweenMax.to(".flip", 1.5, {
  delay: 2.2,
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".first", 1.5, {
  delay: 0.2,
  left: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".second", 1.5, {
  delay: 0.4,
  left: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".third", 1.5, {
  delay: 0.6,
  left: "-100%",
  ease: Expo.easeInOut,
});
