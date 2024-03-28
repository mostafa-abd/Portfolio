// type js
var typed = new Typed(".type", {
  strings: ["Instructor.", "Web Developer.", "Wordpress developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


let main = document.getElementById("main"),
  infoTop = document.getElementsByClassName("info-top")[0],
  infoImg = document.querySelector(".info-top>img"),
  contentLeftName = document.querySelector(".info-top>div:nth-child(2)"),
  contentLeftSpe = document.querySelector(".info-top>div:last-child"),
  social = document.querySelector(".social"),
  hire = document.querySelector(".hire"),
  navIcon = document.querySelectorAll(".nav-icon>i");

  // active nav

for (let i = 0; i < navIcon.length; i++) {
  navIcon[i].addEventListener("click", () => {
    for (let L = 0; L < navIcon.length; L++) {
      navIcon[L].classList.remove("active");
    }
    navIcon[i].classList.add("active");
  });
}
//about animation

if (navIcon[1].classList.contains("active")) {
  main.classList.add("main-left-slide");
  infoTop.classList.add("left-slide");
  infoImg.classList.add("img-left-slide");
  contentLeftName.classList.add("f-s");
  contentLeftSpe.classList.add("d-n");
  social.classList.add("social-left");
  hire.classList.add("d-n");
}

