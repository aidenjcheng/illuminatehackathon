var btn = document.querySelector(".header__faq__btn");
var xIcon = document.querySelector(".header__x");
var faqElement = document.querySelector(".faq__section");

const header = document.querySelector(".header__content");
const toggleClass = "header__section__active";
const targetScrollDistanceVH = 100;
const logo = document.querySelector(".logosvgpath");
const toggleClassLogo = "logosvgpath-active";
const texts = document.querySelectorAll(".header__text");
const toggleClassText = "header__text-active";

btn.addEventListener("click", function () {
  var style = window.getComputedStyle(faqElement);
  if (style.opacity === "0") {
    faqElement.classList.add("faq__section-active");
    document
      .querySelector(".header__shade")
      .classList.add("faq__section-active");
    faqElement.style.display = "block";
  } else {
    faqElement.classList.remove("faq__section-active");
    document
      .querySelector(".header__shade")
      .classList.remove("faq__section-active");
    faqElement.style.display = "none";
  }
});

function isFaqVisible() {
  var style = window.getComputedStyle(faqElement);
  return style.opacity;
}

document.querySelector(".header__shade").addEventListener("click", function () {
  if (isFaqVisible() === "1") {
    faqElement.classList.remove("faq__section-active");
    document
      .querySelector(".header__shade")
      .classList.remove("faq__section-active");
  } else {
  }
});

xIcon.addEventListener("click", function () {
  if (isFaqVisible() === "1") {
    faqElement.classList.remove("faq__section-active");
    document
      .querySelector(".header__shade")
      .classList.remove("faq__section-active");
  } else {
  }
});
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const thresholdInPixels = window.innerHeight * (targetScrollDistanceVH / 100);

  if (currentScroll >= thresholdInPixels) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});
gsap.to(".header__section", {
  duration: 0.3,
  ease: "expo.inOut",
  backgroundColor: "#141414",
  scrollTrigger: {
    trigger: ".info__section",
    start: "top 60%",
    toggleActions: "play play play reverse",
    markers: true,
  },
});
