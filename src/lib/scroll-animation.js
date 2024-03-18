import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: -8.3,
    y: -3.5,
    z: 3.19,
    scrollTrigger: {
      trigger: ".jumbotron-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  });

  tl.to(target, {
    x: 0.0,
    y: -0.95,
    z: 1.7,
    scrollTrigger: {
      trigger: ".jumbotron-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  });
};
