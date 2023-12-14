// locomotive js - smooth scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// gsap to animate
gsap.from(".nlink", {
  stagger: 0.2,
  y: 10,
  opacity: 0,
  duration: 1,
  ease: Power2,
});
Shery.textAnimate("#heading h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 2,
  duration: 4,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  ease: Expo,
  duration: 1,
});

Shery.imageEffect("#imgntext img", {
  style: 3, //Select Style
//   debug: true, // Debug Panel
  config: {"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12.98,"range":[0,100]},"uFrequencyZ":{"value":13.74,"range":[0,100]},"geoVertex":{"range":[1,64],"value":5.33},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  // preset: "./presets/wigglewobble.json",
});
Shery.imageEffect(".imgeff img", {
  style: 3, //Select Style
//   debug: true, // Debug Panel
  config: {"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12.98,"range":[0,100]},"uFrequencyZ":{"value":13.74,"range":[0,100]},"geoVertex":{"range":[1,64],"value":5.33},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  // preset: "./presets/wigglewobble.json",
});

gsap.from("#imgntext img",{
    y:"70",
    opacity:0,
    duration:2,
    ease: Expo
})

Shery.imageEffect("#bimg ",{
    style:4,
    // debug:true,
    gooey:true,
    config:{"uColor":{"value":false},"uSpeed":{"value":0.46,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1159828062182355},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.92,"range":[1,15]},"durationOut":{"value":0.62,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.31,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.4,"range":[0,2]},"noise_scale":{"value":6.87,"range":[0,100]}},
})


document.querySelector("#ftext button")
.addEventListener("mouseover",function () {
    gsap.to("#future video",{
        opacity:1,
        duration:1,
        ease: Power4
    })
})
document.querySelector("#ftext button")
.addEventListener("mouseleave",function () {
    gsap.to("#future video",{
        opacity:0,
        duration:1,
        ease: Power4
    })
        
})

//shery js animate image accordingly
