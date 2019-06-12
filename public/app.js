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




// window.onscroll = function() {
  
//   if (window.pageYOffset > window.innerHeight){
//     header.className = 'scroll'
//   }  
//   else {
//     header.className = ''
//   }
// }

var winSize = window.scrollY
console.log("scroll size: " + winSize);
//about me sec is about 731
//skills section scroll size: 1924
//projects section scroll size:  2573
//contact section scroll size: 4799 



console.log('this is my window width size: ' + window.innerWidth);

//scroll events for header
window.onscroll = () => {
  //if screen is on mobile view.
  if(window.innerWidth <= 479 ){
    if (this.scrollY <= 175) {
      header.classList.remove('scroll');
    } else{
      header.classList.add('scroll');
      // console.log(header.className.split(' '));
    }
  } 
  //if screen is NOT on mobile view.
  else{
    if (this.scrollY <= 350) {
      header.className = '';
    }  
  
    else{
      header.className = 'scroll';
    }
  }

  //active nav link functionality.
  //home section
  if(window.scrollY >= '0' && window.scrollY < '731'){
    console.log("home section on view")
    homeNav.classList.add('active');  aboutNav.classList.remove('active');
    skillsNav.classList.remove('active'); 
    projectsNav.classList.remove('active');
    contactNav.classList.remove('active'); 
  }
  //about section
  else if(window.scrollY >= '731' && window.scrollY < '1924'){
    console.log("about section on view")
    aboutNav.classList.add('active');
    homeNav.classList.remove('active'); 
    skillsNav.classList.remove('active'); 
    projectsNav.classList.remove('active');
    contactNav.classList.remove('active'); 
  }
  //skills section
  else if(window.scrollY >= '1924' && window.scrollY < '2561'){
    console.log("skills section on view")
    skillsNav.classList.add('active'); 
    projectsNav.classList.remove('active');  
    aboutNav.classList.remove('active');
    homeNav.classList.remove('active'); 
    contactNav.classList.remove('active'); 
  }
  //projects section
  else if(window.scrollY >= '2561' && window.scrollY < '4799'){
    console.log("projects section on view")
    projectsNav.classList.add('active');  aboutNav.classList.remove('active');
    homeNav.classList.remove('active'); 
    skillsNav.classList.remove('active'); 
    contactNav.classList.remove('active'); 
  }
  //contact section
  else if(window.scrollY >= '4799 ' && window.scrollY < '5310'){
    console.log("contact section on view")
    contactNav.classList.add('active'); 
    projectsNav.classList.remove('active');  aboutNav.classList.remove('active');
    homeNav.classList.remove('active'); 
    skillsNav.classList.remove('active'); 
  }
};




// click event for mobible menu btns
mobileMenuIcons.addEventListener("click", function(){
  console.log("clicked mobile menu");
  console.log(hamburgerIcon);
  console.log(outIcon);
  if(header.classList.contains("header-close")){
    console.log("hamburger icon clicked and display header is now opened")
    header.classList.remove("header-close");
    header.classList.add("header-open");
  } else if(header.classList.contains("header-open")){
    console.log("out icon clicked and display header is now closed")
    header.classList.remove("header-open");
    header.classList.add("header-close");
  }
})

