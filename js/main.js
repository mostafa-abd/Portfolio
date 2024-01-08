const navLinks = document.querySelectorAll('nav a');
window.addEventListener("scroll", () => {
  const fromTop = window.scrollY;
  navLinks.forEach((links) => {
    const section = document.querySelector(links.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
        links.classList.add('active');
    } else {
        links.classList.remove('active');
    }
  });
});

var typed = new Typed('.type', {
    strings: ["Instructor.", "Front-End Dev." , "Back-End Dev." ],
    typeSpeed: 100,
    backSpeed :100,
    backDelay:1000,
    loop:true
  });
  