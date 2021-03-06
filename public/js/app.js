const header = document.querySelector('#header');
const navLink = document.querySelector("header nav a")
const hamburgerIcon = document.querySelector(".hamburger-icon");
const outIcon = document.querySelector(" .out-icon");
const mobileMenuIcons = document.querySelector(".mobile-menu-icons");
const headerContainer = document.querySelector("header .container");

const homeNav = document.querySelector('.home-nav');
const aboutNav = document.querySelector('.about-nav');
const skillsNav = document.querySelector('.skills-nav');
const projectsNav = document.querySelector('.projects-nav');
const contactNav = document.querySelector('.contact-nav');
let logoImg= document.querySelector('.logo-link-img');

// Scroll actions definitions
function scrollActive(scrollLenth) {
  if (window.scrollY <= scrollLenth && header.classList.contains('project-header') == false) {
    header.classList.remove('scroll');
    logoImg.innerHTML = '<img src="../img/jnbLogoWhite.svg" alt="main logo image">'
  }

  else if (window.scrollY <= scrollLenth && header.classList.contains('project-header')) {
    header.classList.remove('scroll');
    logoImg.innerHTML = '<img src="../img/jnbLogoOrange.svg" alt="main logo image">'
  }

  else if (window.scrollY > scrollLenth) {
    header.classList.add('scroll');
    logoImg.innerHTML = '<img src="../img/jnbLogoOrange.svg" alt="main logo image">';
  }
}

//scroll events for header
window.onscroll = () => {
  //Screen on laptop view.
  if (window.innerWidth >= 300 && window.innerWidth <= 949 && header.classList.contains('project-header') === false) {
    scrollActive(175);
  }

  else if (window.innerWidth >= 300 && header.classList.contains('project-header')) {
    scrollActive(50);
  }
  //if screen is NOT on mobile view.
  else {
    scrollActive(350);
  }
}


// click event for mobible menu btns
mobileMenuIcons.addEventListener("click", function () {
  console.log("clicked mobile menu");
  console.log(hamburgerIcon);
  console.log(outIcon);

  if (header.classList.contains("header-close")) {
    console.log("hamburger icon clicked and display header is now opened")
    header.classList.remove("header-close");
    header.classList.add("header-open");
  }

  else if (header.classList.contains("header-open")) {
    console.log("out icon clicked and display header is now closed")
    header.classList.remove("header-open");
    header.classList.add("header-close");
  }
})

