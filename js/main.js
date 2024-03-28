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
  title = document.getElementsByClassName("title")[0],
  navIcon = document.querySelectorAll(".nav-icon>a>i");

//about animation && active nav
for (let i = 0; i < navIcon.length; i++) {
  navIcon[i].addEventListener("click", () => {
    for (let L = 0; L < navIcon.length; L++) {
      navIcon[L].classList.remove("active");
    }
    navIcon[i].classList.add("active");

    if (navIcon[1].classList.contains("active")) {
        main.classList.add("main-left-slide");
        infoTop.classList.add("left-slide");
        infoImg.classList.add("img-left-slide");
        contentLeftName.classList.add("f-s");
        contentLeftSpe.classList.add("d-n");
        social.classList.add("social-left");
        hire.classList.add("d-n");
        title.textContent = "About Me"
    }else{
      main.classList.remove("main-left-slide");
      infoTop.classList.remove("left-slide");
      infoImg.classList.remove("img-left-slide");
      contentLeftName.classList.remove("f-s");
      contentLeftSpe.classList.remove("d-n");
      social.classList.remove("social-left");
      hire.classList.remove("d-n");
    }
  });
}

navIcon[0].addEventListener("click" , ()=>{
  title.textContent = "who am i"
})






