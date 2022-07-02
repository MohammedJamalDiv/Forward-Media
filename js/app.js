/* --------------- Grab elements from DOM --------------- */
const Header = document.querySelector("header");
let body = document.querySelector("body");
const FirstSkill = document.querySelector(".skills:first-child");
const Counters = document.querySelectorAll(".counter span");
const ProgressBars = document.querySelectorAll(".sk-process svg circle ");
const CounterServiceTop = document.querySelector(".milestone");
const CountersService = document.querySelectorAll(".ml h2 span ");
console.log(CountersService);
console.log(CounterServiceTop);
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
  ServiceCounter();
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
  console.log("I was Called");
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
const ServiceCounter = function () {
  if (!GetTop(CounterServiceTop)) return;
  CountersService.forEach((Number, i) => {
    const ReachNumber = +Number.dataset.target;
    setTimeout(() => {
      UpdateNumber(Number, ReachNumber);
    }, 2000);
  });
};

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */
const Btn = document.querySelector(".ToggleBtn");
console.log(Btn);
Btn.addEventListener("click", (e) => {
  console.log(e.target);
  body.classList.toggle("dark");
});
/* --------------- Open & Close Navbar Menu --------------- */
