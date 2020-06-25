// build scene
// var scene = new ScrollMagic.Scene({
//     triggerElement: "#trigger1"
// })
// .setTween("#rocket", 0.6, {scale: 2.5}) // trigger a TweenMax.to tween
// .addIndicators({name: "1 (duration: 1)"}) // add indicators (requires plugin)
// .addTo(controller);
gsap.registerPlugin(ScrollTrigger);

gsap.from(".rocket_IMG", {
    scrollTrigger: {
      trigger: ".header",
      scrub: true,
      pin: true,
      start: " top",
      end: "+=100%"
    },
    scaleX: 0, 
    transformOrigin: "left center", 
    ease: "none"
  });
