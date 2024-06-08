document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // gsap.to("#svg__wrapper1", {
  //   duration: 0.8,
  // backgroundColor: "#fafafa",
  //   ease: "expo.inOut",
  //   scrollTrigger: {
  //     trigger: "#svg__wrapper1",
  //     start: "top 60%",
  //     end: "bottom 40%",
  //     toggleActions: "play play play reverse",
  //   },
  // });

  gsap.from("#computersvg", {
    duration: 0.8,
    opacity: 0.3,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#svg__wrapper1",
      start: "top 60%",
      end: "bottom 40%",
      toggleActions: "play play play reverse",
    },
  });
  gsap.to("#progressbar1", {
    duration: 0.8,
    scaleY: "1",
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#svg__wrapper1",
      start: "top 60%",
      end: "bottom 40%",
      toggleActions: "play play play reverse",
    },
  });

  gsap.from("#cloudsvg", {
    duration: 0.8,
    opacity: 0.3,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#svg__wrapper2",
      start: "top 60%",
      end: "bottom 40%",
      toggleActions: "play play play reverse",
    },
  });

  gsap.to("#progressbar2", {
    duration: 0.8,
    scaleY: "1",
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#svg__wrapper2",
      start: "top 60%",
      end: "bottom 40%",
      toggleActions: "play play play reverse",
    },
  });
  gsap.from("#chipsvg", {
    duration: 0.8,
    opacity: 0.3,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#svg__wrapper3",
      start: "top 60%",
      end: "bottom 40%",
      toggleActions: "play play play reverse",
    },
  });

  gsap.to("#progressbar3", {
    duration: 0.8,
    scaleY: "1",
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#svg__wrapper3",
      start: "top 60%",
      end: "bottom 40%",
      toggleActions: "play play play reverse",
    },
  });
  gsap.from("#serversvg", {
    duration: 0.8,
    opacity: 0.3,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: "#svg__wrapper4",
      start: "top 60%",
      end: "bottom 40%",
      toggleActions: "play play play reverse",
    },
  });

  gsap.to(".info__demo__wrapper", {
    scrollTrigger: {
      trigger: ".info__demo__wrapper",
      pin: ".info__demo__wrapper canvas",
      start: "top 10%",
      end: "bottom 70%",
      toggleActions: "play play play reverse",
      markers: true,
    },
  });

  gsap.to("body", {
    backgroundColor: "#141414",
    scrollTrigger: {
      trigger: ".info__section",
      start: "-10% 80%",
      end: "-10% 60%",
      scrub: true,
    },
  });

  // gsap.to(".footer__cta__wrapper", {
  //   borderBottomRightRadius: "5px",
  //   borderBottomLeftRadius: "5px",
  //   scrollTrigger: {
  //     trigger: ".footer__section",
  //     start: "20%",
  //     scrub: true,
  //     end: "40%",
  //     markers: true,
  //   },
  // });

  // adjustFooterOverlap();

  // ScrollTrigger.addEventListener("revert", adjustFooterOverlap);

  // ScrollTrigger.create({
  //   trigger: bento,
  //   start: () => "top " + (window.innerHeight - getOverlap()),
  //   end: () => "+=" + getOverlap(),
  //   pin: true,
  // });

  //:333 I HATE CODING!!!!!
});
