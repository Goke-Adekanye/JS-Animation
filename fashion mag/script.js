new hoverEffect({
  parent: document.querySelector(".distortion"),
  intensity: 0.2,
  image1: "./img/01.png",
  image2: "./img/02.png",
  displacementImage: "./img/diss.png",
  imagesRatio: 380 / 300,
});

var tl = gsap.timeline({ defaults: { duration: 1 } });

//NAVBAR
tl.from(".logo", { opacity: 0, x: -20, ease: Expo.easeInOut }, "+=1.2")
  .from(
    ".menu-links ul li",
    { opacity: 0, x: -20, ease: Power4.easeInOut, stagger: 0.08 },
    "-=1"
  )
  .from(".search", { opacity: 0, x: -20, ease: Expo.easeInOut }, "-=1.2")
  .from(".cart", { opacity: 0, x: -20, ease: Expo.easeInOut }, "-=1.4")
  .to(".border-bottom", { width: "100%", ease: Expo.easeInOut }, "-=1.2")

  //FIRST SECTION
  //text
  .from(".subtitle", { opacity: 0, x: -20, ease: Expo.easeInOut }, "+=0.5")
  .to(".title", { width: "100%", ease: Expo.easeInOut }, "-=2.5")
  .from(".desc", { opacity: 0, x: -20, ease: Expo.easeInOut }, "-=2")
  .from(".readmore", { opacity: 0, x: -20, ease: Expo.easeInOut }, "-=2")

  //img
  .from(
    ".distortion",
    {
      duration: 1.5,
      opacity: 0,
      y: 30,
      ease: Expo.easeInOut,
    },
    "-=2.6"
  )
  .to(
    ".flip",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%",
      ease: Expo.easeInOut,
      duration: 1.5,
    },
    "-=2.6"
  );

//PAGE TRANSITION
gsap.to(".first", {
  duration: 1.5,
  delay: 0.2,
  left: "-100%",
  ease: Expo.easeInOut,
});

gsap.to(".second", {
  duration: 1.5,
  delay: 0.4,
  left: "-100%",
  ease: Expo.easeInOut,
});

gsap.to(".third", {
  duration: 1.5,
  delay: 0.6,
  left: "-100%",
  ease: Expo.easeInOut,
});
