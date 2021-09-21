var rule = CSSRulePlugin.getRule("span:after");

// gsap.from(".anim1", {
//   opacity: 0,
//   duration: 1,
//   y: -50,
//   stagger: 0.6,
// });
// gsap.from("img", { opacity: 0, duration: 1, delay: 1.4, y: 30 });
// gsap.from("aside", {
//   opacity: 0,
//   duration: 1,
//   delay: 1.1,
//   backgroundPosition: "200px 0px",
// });
// gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 1 });

// SHOW TIMELINE
var tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(".anim1", { y: -50, stagger: 0.6, opacity: 0 })
  .to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, "-=2.2")
  .from("aside", { backgroundPosition: "200px 0px", opacity: 0 }, "-=1.5")
  .from("img", { y: 30, opacity: 0 }, "-=.5");

//CLICK REVERSE
document.getElementById("cta").addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});
