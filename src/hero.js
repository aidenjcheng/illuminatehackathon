const text = new SplitType(".new", { types: "words, chars" });

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  gsap.to(text.chars, {
    color: "black",
    stagger: 8,
    ease: "linear",
    scrollTrigger: {
      trigger: ".new__wrapper",
      scrub: 2,
      start: "20% 100%",
      end: "80%",
      pin: ".new__wrapper",
    },
  });

  gsap.from(".hero", {
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut",
    stagger: 0.1,
  });
});
