// build scene
// var scene = new ScrollMagic.Scene({
//     triggerElement: "#trigger1"
// })
// .setTween("#rocket", 0.6, {scale: 2.5}) // trigger a TweenMax.to tween
// .addIndicators({name: "1 (duration: 1)"}) // add indicators (requires plugin)
// .addTo(controller);


// gsap.to(".rocket_IMG", {
//   scrollTrigger: ".rocket_IMG", // start the animation when ".box" enters the viewport (once)
//   y: 700
// });

// gsap.from(".rocket_IMG", {
//     scrollTrigger: {
//       trigger: ".header",
//       scrub: true,
//       pin: true,
//       start: " top",
//       end: "+=100%"
//     },
//     scaleX: 0, 
//     transformOrigin: "left center", 
//     ease: "none"
//   });


// window.onload = setTimeout(() => {
//   rocketAnimate()
// }, 2000);

// var rocket = document.getElementsByClassName("rocket_IMG")

// function rocketAnimate() {
//   TweenLite.to(rocket, 1, {bottom: "400px", 
//     scrollTrigger: {
//       trigger: ".rocket_IMG"
//   }
// },);
// }



gsap.registerPlugin(Draggable, ScrollToPlugin, ScrollTrigger);

// gsap.to(".rocket_IMG", {
//   y: -800,
//   ease: "expo.in",
//   scrollTrigger: {
//     trigger: ".header",
//     start: "bottom bottom",
//     markers: true,
//     scrub: true,
//     pin: ".header",
//     pinSpacing: false,
//     end: "+=100%",
//     pinReparent: true,
//   }
// });

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
    start: "bottom bottom",
    markers: true,
    scrub: true,
    pin: ".header",
    pinSpacing: false,
    end: "+=100%",
    pinReparent: true,
  }
});

tl.addLabel("start")
  .to(".rocket_IMG", {x: 3 , y: 1})
  .to(".rocket_IMG", {x: -3 , y: -1})
  .to(".rocket_IMG", {x: 3 , y: 1})
  .to(".rocket_IMG", {x: -3 , y: 1})
  .to(".rocket_IMG", {x: 3 , y: -1})
  .to(".rocket_IMG", {x: -3 , y: 1})
  .to(".rocket_IMG", {x: 3 , y: -1})
  .to(".rocket_IMG", {x: -3 , y: 1})
  .to(".rocket_IMG", {y: -200})
  .to(".earth_IMG", {opacity: 0, y: 400})
  .to(".rocket_IMG", {rotate: 45})
  .to(".rocket_IMG", {rotate: 45})
  .to(".rocket_IMG", {src: svg/rocket(company_colors).svg})
  .to(".rocket_IMG", {x: 300 , opacity: 0})