import gsap from "gsap";

export const scrollAnimation = (camera, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(camera.position, {
    x: -5.85,
    y: 1.31,
    z: 11.14,
    scrollTrigger: {
      trigger: ".jumbotron-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  });

  tl.to(camera.target, {
    x: 0.315,
    y: 0.0,
    z: 0.0,
    scrollTrigger: {
      trigger: ".jumbotron-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  });

  tl.to(camera.rotation, {
    y: Math.PI * 2,
    scrollTrigger: {
      trigger: ".jumbotron-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  });

  tl.to(position, {
    x: -5.85,
    y: 1.31,
    z: 11.14,
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
    x: 0.315,
    y: 0.0,
    z: 0.0,
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
