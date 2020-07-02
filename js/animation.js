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
    // onUpdate: self => console.log("progress:", self.progress)
  }
});



tl.addLabel("start")
  .to(".rocket_IMG", {x: 3 , y: 1 , duration: 3000})
  .to(".rocket_IMG", {x: -4 , y: -2, duration: 3000})
  .to(".rocket_IMG", {x: 4 , y: 4, duration: 3000})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  .to(".rocket_IMG", {x: 4 , y: -1, duration: 3000})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  .to(".rocket_IMG", {x: 4 , y: -1, duration: 3000})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  .to(".rocket_IMG", {x: 3 , y: 1 , duration: 3000})
  .to(".rocket_IMG", {x: -4 , y: -2, duration: 3000})
  .to(".rocket_IMG", {x: 2 , y: 1, duration: 3000})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  .to(".rocket_IMG", {x: 4 , y: -1, duration: 3000})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  .to(".rocket_IMG", {x: 4 , y: -1, duration: 3000})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  .to(".rocket_IMG", {x: 3 , y: 1 , duration: 3000})
  .to(".rocket_IMG", {x: -4 , y: -2, duration: 3000})
  .to(".rocket_IMG", {x: 2 , y: 1, duration: 3000})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  .to(".rocket_IMG", {x: 4 , y: -1, duration: 3000})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  .to(".rocket_IMG", {x: 4 , y: -1, duration: 3000})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  .to(".rocket_IMG_fire", {opacity: 1})
  .to(".rocket_IMG", {opacity: 0})
  .to(".rocket_IMG_fire", {y: -300, duration: 15000})
  .to(".rocket_IMG_fire_stars", {y: -300, duration: 15000})
  .to(".earth_IMG", {opacity: 0, y: 400 , duration: 15000})
  .to(".rocket_IMG_fire_stars", {opacity: 1})
  .to(".rocket_IMG_fire", {opacity: 0})
  .to(".rocket_IMG_fire_stars", {rotate: 45, duration: 10000})
  .to(".rocket_IMG_fire_stars", {rotate: 45, duration: 10000})
  .to(".rocket_IMG_fire_stars", {x: 600 , opacity: 0, duration: 40000})
  .fromTo(".header__mainTitle", {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: 40000})
  .fromTo(".header__secondTitle", {x: -50, opacity: 0}, {x: 0 , opacity: 1, duration: 40000})
  .fromTo(".header__title__horizontalLine", {x: -50, opacity: 0}, {x: 0 , opacity: 1, duration: 40000})

  // .from(".header__mainTitle", {x: -600})
  // .from(".header__secondTitle", {x: -600})
  // .from(".header__title__horizontalLine", {x: -600})


//   var latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop();
// $(window).on("scroll", function () {
//     latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop();
// });
// $(window).on("mousewheel DOMMouseScroll", function(event) {
//     var scrollTo,
//           scrollDistance  = 20,
//           delta;
//     if (event.type == 'mousewheel') {
//           delta = event.originalEvent.wheelDelta / 120;
//     } else if (event.type == 'DOMMouseScroll') {
//           delta = - event.originalEvent.detail / 2;
//     }
//     scrollTo = latestKnownScrollY - delta * scrollDistance;
//     if (scrollTo) {
//         event.preventDefault(); 
//         event.stopPropagation(); 
//         $('body,html').stop().animate( { 
//             scrollTop : scrollTo
//          } , 700);
//      }  
// } );
