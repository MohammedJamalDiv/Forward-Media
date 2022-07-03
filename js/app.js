/* --------------- Grab elements from DOM --------------- */
const Header = document.querySelector("header");
let body = document.querySelector("body");
const FirstSkill = document.querySelector(".skills:first-child");
const Counters = document.querySelectorAll(".counter span");
const zoomIcon = document.querySelectorAll(".zoom-icon");
const Overlay = document.querySelector(".model-overlay");
const SliderWrap = document.querySelectorAll(".slider-wrap");
const ProgressBars = document.querySelectorAll(".sk-process svg circle ");
const CounterServiceTop = document.querySelector(".milestone");
const CountersService = document.querySelectorAll(".ml h2 span ");
const protfolio = document.querySelector(".protfolio");
const images = document.querySelectorAll(".images img");
const BtnPrev = document.querySelector(".prev-btn");
const BtnNext = document.querySelector(".next-btn");
console.log(images);
/* --------------- Sticky Navbar --------------- */
function StickNavBar() {
  Header.classList.toggle("scrolled", window.pageYOffset > 0);
}
StickNavBar();
window.addEventListener("scroll", StickNavBar);

/* --------------- Reveal Animation --------------- */
let sr = ScrollReveal({
  duration: 1500,
  distance: "60px",
});
sr.reveal(".showCase-images", { origin: "top", delay: 600 });
sr.reveal(".showCaseInfo", { delay: 700 });
sr.reveal(".about-grid", { delay: 300 });
sr.reveal(".about-info", { delay: 400 });
sr.reveal(".triangle", { delay: 400, rolate: 30 });

/* --------------- Skills Progress Bar Animation --------------- */
window.addEventListener("scroll", () => {
  if (!UpdateNumberCalling) SkillSCounter();
  if (!ServiceCounterPlay) ServiceCounter();
});
const GetTop = (el) => {
  let topPosistion = el.getBoundingClientRect().top;
  let ElementHeight = el.offsetHeight;
  if (window.innerHeight >= topPosistion + ElementHeight) {
    return true;
  } else {
    return false;
  }
};
const UpdateNumber = function (Number, Target) {
  let CurrentNumber = +Number.innerText;
  if (CurrentNumber < Target) {
    Number.innerText = CurrentNumber + 1;
    setTimeout(() => {
      UpdateNumber(Number, Target);
    }, 12);
  }
};
let UpdateNumberCalling = false;
const SkillSCounter = () => {
  if (!GetTop(FirstSkill)) return;
  UpdateNumberCalling = true;

  Counters.forEach((Counter, i) => {
    let counter = +Counter.dataset.target;
    let Stroke = 427 - 427 * (counter / 100);

    ProgressBars[i].style.setProperty("--target", Stroke);
    setTimeout(() => {
      UpdateNumber(Counter, counter);
    }, 400);
  });
  ProgressBars.forEach(
    (p) => (p.style.animation = "process 2s ease-in-out forwards")
  );
};
/* --------------- Services Counter Animation --------------- */
let ServiceCounterPlay = false;
const ServiceCounter = function () {
  if (!GetTop(CounterServiceTop)) return;
  ServiceCounterPlay = true;
  CountersService.forEach((Number, i) => {
    const ReachNumber = +Number.dataset.target;
    setTimeout(() => {
      UpdateNumber(Number, ReachNumber);
    }, 2000);
  });
};

/* --------------- Portfolio Filter Animation --------------- */
let mixer = mixitup(".protfolio-gallery");

/* --------------- Modal Pop Up Animation Animation --------------- */
let Currentindex = 0;
zoomIcon.forEach((icon, index) => {
  icon.addEventListener("click", (e) => {
    protfolio.classList.add("open");
    Currentindex = index;
    changeImage(Currentindex);
  });
});

BtnNext.addEventListener("click", (e) => {
  console.log(e.target);
  if (Currentindex === 0) {
    Currentindex = 5;
  } else {
    Currentindex--;
  }
  changeImage(Currentindex);
});
BtnPrev.addEventListener("click", (e) => {
  console.log(e.target);
  if (Currentindex === images.length) {
    Currentindex = 0;
  } else {
    Currentindex++;
  }
  changeImage(Currentindex);
});
function changeImage(Currentindex) {
  console.log(Currentindex);
  images.forEach((img, index) => {
    img.classList.remove("showImage");
    images[Currentindex].classList.add("showImage");
  });
}
Overlay.addEventListener("click", (e) => {
  console.log("Overlay clicked");
  protfolio.classList.remove("open");
});

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 500,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */

/* --------------- DarkMode --------------- */
const Btn = document.querySelector(".ToggleBtn");
const Container = document.getElementById("svg");
const AnimationItem = bodymovin.loadAnimation({
  container: Container, // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://assets7.lottiefiles.com/private_files/lf30_xb4znow9.json", // the path to the animation json
});
console.log(Btn);
Btn.addEventListener("click", (e) => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark"))
    AnimationItem.playSegments([40, 100], true);
  if (!body.classList.contains("dark"))
    AnimationItem.playSegments([80, 0], true);
});
