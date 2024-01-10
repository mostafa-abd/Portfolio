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


// loading
window.addEventListener("load" , ()=>{
  const loader = document.querySelector(".loader");
  
  setTimeout(() => {
    loader.style.display ="none"
  }, 3000);
})

// scroll animation

// script.js
function isElementNearViewport(el, offset = -100) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top - offset <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
  );
}

function handleScroll() {
  document.querySelectorAll('.animation-target:not(.animation-active)').forEach((el) => {
      if (isElementNearViewport(el)) {
          setTimeout(() => el.classList.add('animation-active'), el.getAttribute('data-delay'));
      }
  });

  if (document.querySelectorAll('.animation-target:not(.animation-active)').length === 0) {
      window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

