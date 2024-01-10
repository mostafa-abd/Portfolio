// menu bar
let bar = document.getElementById("bar"),
  menu = document.getElementById("menu-screen"),
  blure = document.getElementById("blure")
  x = document.getElementById("x");

bar.addEventListener("click", () => {
  blure.style.display = "inline"
  menu.style.cssText = "visibility: visible;";
});

x.addEventListener("click", () => {
  blure.style.display = "none"
  menu.style.cssText = "display:none;";
});

// actve nav links and section
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  const fromTop = window.scrollY;
  navLinks.forEach((links) => {
    const section = document.querySelector(links.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      links.classList.add("active");
    } else {
      links.classList.remove("active");
    }
  });
});

// type js
var typed = new Typed(".type", {
  strings: ["Instructor.", "Front-End Dev.", "Back-End Dev."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

