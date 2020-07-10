gsap.registerPlugin(Draggable, ScrollToPlugin, ScrollTrigger);


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
    start: "bottom bottom",
    markers: true,
    scrub: true,
    pin: ".header",
    pinSpacing: false,
    end: "+=2000",
    pinReparent: true,  
    scrub: true,
    // onUpdate: self => console.log("progress:", self.progress)
  },
  duration: 100,
});


tl.addLabel("start")
  .to(".rocket_IMG", {x: 3 , y: 1 , duration: 50})
  .to(".rocket_IMG", {x: -4 , y: -2, duration: 50})
  .to(".rocket_IMG", {x: 4 , y: 4, duration: 50})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 50})
  .to(".rocket_IMG", {x: 4 , y: -1, duration: 50})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 50})
  .to(".rocket_IMG", {x: 4 , y: -1, duration: 50})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 50})
  .to(".rocket_IMG", {x: 3 , y: 1 , duration: 50})
  .to(".rocket_IMG", {x: -4 , y: -2, duration: 50})
  .to(".rocket_IMG", {x: 2 , y: 1, duration: 50})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 50})
  .to(".rocket_IMG", {x: 4 , y: -1, duration: 50})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 50})
  .to(".rocket_IMG", {x: 4 , y: -1, duration: 50})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 50})
  .to(".rocket_IMG", {x: 3 , y: 1 , duration: 50})
  .to(".rocket_IMG", {x: -4 , y: -2, duration: 50})
  .to(".rocket_IMG", {x: 2 , y: 1, duration: 50})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 50})
  .to(".rocket_IMG", {x: 4 , y: -1, duration: 50})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 50})
  .to(".rocket_IMG", {x: 4 , y: -1, duration: 50})
  .to(".rocket_IMG", {x: -3 , y: 1, duration: 50})
  .to(".rocket_IMG_fire", {opacity: 1})
  .to(".rocket_IMG", {opacity: 0})
  .to(".rocket_IMG_fire", {y: -10, duration: 200})
  .to(".start_dust", {opacity: 1, x: -10, scrub: 2})
  .to(".rocket_IMG_fire", {y: -140, duration: 200})
  .to(".start_dust", {opacity: 0})
  .to(".rocket_IMG_fire", {y: -300, duration: 200})
  .to(".rocket_IMG_fire_stars", {y: -300, duration: 150})
  .to(".earth_IMG", {opacity: 0, y: 400 , duration: 150})
  .to(".rocket_IMG_fire_stars", {opacity: 1})
  .to(".rocket_IMG_fire", {opacity: 0})
  .to(".rocket_IMG_fire_stars", {rotate: 45, duration: 100})
  .to(".rocket_IMG_fire_stars", {rotate: 45, duration: 100})
  .to(".rocket_IMG_fire_stars", {x: 600 , opacity: 0, duration: 400})
  .fromTo(".header__mainTitle", {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: 400})
  .fromTo(".header__secondTitle", {x: -50, opacity: 0}, {x: 0 , opacity: 1, duration: 400})
  .fromTo(".header__title__horizontalLine", {x: -50, opacity: 0}, {x: 0 , opacity: 1, duration: 400})

  

  // function scene1() {
  //   tl.to(".rocket_IMG", {x: 3 , y: 1 , duration: 3000})
  //   .to(".rocket_IMG", {x: -4 , y: -2, duration: 3000})
  //   .to(".rocket_IMG", {x: 4 , y: 4, duration: 3000})
  //   .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  //   .to(".rocket_IMG", {x: 4 , y: -1, duration: 3000})
  //   .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  //   .to(".rocket_IMG", {x: 4 , y: -1, duration: 3000})
  //   .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  //   .to(".rocket_IMG", {x: 3 , y: 1 , duration: 3000})
  //   .to(".rocket_IMG", {x: -4 , y: -2, duration: 3000})
  //   .to(".rocket_IMG", {x: 2 , y: 1, duration: 3000})
  //   .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  //   .to(".rocket_IMG", {x: 4 , y: -1, duration: 3000})
  //   .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  //   .to(".rocket_IMG", {x: 4 , y: -1, duration: 3000})
  //   .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  //   .to(".rocket_IMG", {x: 3 , y: 1 , duration: 3000})
  //   .to(".rocket_IMG", {x: -4 , y: -2, duration: 3000})
  //   .to(".rocket_IMG", {x: 2 , y: 1, duration: 3000})
  //   .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  //   .to(".rocket_IMG", {x: 4 , y: -1, duration: 3000})
  //   .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  //   .to(".rocket_IMG", {x: 4 , y: -1, duration: 3000})
  //   .to(".rocket_IMG", {x: -3 , y: 1, duration: 3000})
  //   return tl;
  // }
  
  // function scene2() {
  //   tl.to(".rocket_IMG_fire", {opacity: 1})
  //   .to(".rocket_IMG", {opacity: 0})
  //   .to(".rocket_IMG_fire", {y: -300, duration: 15000})
  //   .to(".rocket_IMG_fire_stars", {y: -300, duration: 15000})
  //   return tl;
  // }

  // function scene3() {
  //   tl.to(".earth_IMG", {opacity: 0, y: 400 , duration: 15000})
  //   .to(".rocket_IMG_fire_stars", {opacity: 1})
  //   .to(".rocket_IMG_fire", {opacity: 0})
  //   return tl;
  // }

  // function scene4() {
  //   tl.to(".rocket_IMG_fire_stars", {rotate: 45, duration: 10000})
  //   .to(".rocket_IMG_fire_stars", {rotate: 45, duration: 10000})
  //   .to(".rocket_IMG_fire_stars", {x: 600 , opacity: 0, duration: 40000})
  //   return tl;
  // }
  
  // function scene5() {
  //   tl.fromTo(".header__mainTitle", {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: 40000})
  //   .fromTo(".header__secondTitle", {x: -50, opacity: 0}, {x: 0 , opacity: 1, duration: 40000})
  //   .fromTo(".header__title__horizontalLine", {x: -50, opacity: 0}, {x: 0 , opacity: 1, duration: 40000})
  //   return tl;
  // }

  // let master = gsap.timeline()
  //   .add(scene1())
  //   .add(scene2()) 
  //   .add(scene3()) 
  //   .add(scene4()) 
  //   .add(scene5()) 