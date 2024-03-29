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
    borderImage = document.getElementsByClassName("border")[0],
    content = document.getElementsByClassName("content")[0],
    sections = document.querySelectorAll(".content>section"),
    navIcon = document.querySelectorAll(".nav-icon>a>i");

// active nav
for (let i = 0; i < navIcon.length; i++) {
  navIcon[i].addEventListener("click", () => {
    for (let L = 0; L < navIcon.length; L++) {
      navIcon[L].classList.remove("active");
    }
    navIcon[i].classList.add("active");
  });
}

// connect sections to nav icons
content.addEventListener("scroll", () => {
  let start = "";
  sections.forEach((section) => {
    if (
      content.scrollTop >= section.offsetTop - 260 &&
      content.scrollTop < section.offsetTop + content.offsetHeight - 260
    ) {
      start = section.getAttribute("id");

      for (let L = 0; L < navIcon.length; L++) {
        navIcon[L].classList.remove("active");
      }
      switch (start) {
        case "who":
          navIcon[0].classList.add("active");
          title.textContent = "who am i"
          break;
        case "about":
          navIcon[1].classList.add("active");
          title.textContent = "about me"
          break;
          case "services":
            navIcon[2].classList.add("active");
            title.textContent = "My Specializations"
            break;
            case "skills":
            navIcon[3].classList.add("active");
            title.textContent = "My Skills"   
            break;      
            case "projects":
              navIcon[4].classList.add("active");
              title.textContent = "projects"   
              break;        
      }
    }
  });
});

// about animation
function about() {
  if (navIcon[1].classList.contains("active")) {
    main.classList.add("main-left-slide");
    infoTop.classList.add("left-slide");
    infoImg.classList.add("img-left-slide");
    contentLeftName.classList.add("f-s");
    contentLeftSpe.classList.add("d-n");
    social.classList.add("social-left");
    hire.classList.add("d-n");
    borderImage.classList.remove("d-n");
    title.textContent = "About Me";
  } else {
    main.classList.remove("main-left-slide");
    infoTop.classList.remove("left-slide");
    infoImg.classList.remove("img-left-slide");
    contentLeftName.classList.remove("f-s");
    contentLeftSpe.classList.remove("d-n");
    social.classList.remove("social-left");
    hire.classList.remove("d-n");
    borderImage.classList.add("d-n");
  }
}
content.addEventListener("scroll", about);

// skills animation
let skillIcons = document.querySelectorAll(".icon")

for (let i = 0; i < skillIcons.length; i++) {
  setTimeout(() => {
    skillIcons[i].style.opacity = "1"
  },i * 100);
}

// project hover
let demo =  document.getElementsByClassName("demo"),
imgProject =document.getElementsByClassName("pr-img");

for (let i = 0; i < demo.length; i++) {
  demo[i].addEventListener("mouseover" , ()=>{
    imgProject[i].classList.add("scale")
  })
  demo[i].addEventListener("mouseout", function() {
    imgProject[i].classList.remove("scale");
  });
}



// project animation

// if (title.textContent === "who am i"){
// console.log("asf");
// }


// let mainSection = document.getElementsByClassName("main-section")[0];
// mainSection.style.cssText ="animation-name: projects;"
// setTimeout(() => {
//   mainSection.style.cssText ="animation-name: anim;"
// }, 1000);