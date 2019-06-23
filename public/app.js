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

var navLinks = [homeNav, aboutNav, skillsNav, projectsNav, contactNav];


var winSize = window.scrollY
console.log("scroll length size: " + winSize);
//this has to be done on all device views. mobile,tablet,laptop, and desktop.
//about me sec:  821
//skills section scroll size:  1743
//projects section scroll size: 2385
//contact section scroll size: 3591, 3739

function activeNavLink (linkClass) {
  //acitive link gets active class. all others dont
  for (i = 0; i < navLinks.length; i++) {
    if (navLinks[i].classList.contains(linkClass)){
      navLinks[i].classList.add('active'); 
    } else{
      navLinks[i].classList.remove('active');
    }
  }
}

function scrollActive(scrollLenth) {
  if (window.scrollY <= scrollLenth) {
    header.classList.remove('scroll');
  } 
  else if (window.scrollY > scrollLenth){
    header.classList.add('scroll');
  }
}

console.log('this is my window width size: ' + window.innerWidth);


//active link functionality needs to be onscroll and also when the page isn't scrolling
  //Screen on mobile view.
  if(window.innerWidth <= 479 ){
    scrollActive(175);

    //active nav link functionality.
    //home section
    if(window.scrollY >= '0' && window.scrollY < '731'){
      console.log("home section on view")
      activeNavLink ('home-nav');
    }
    //about section
    else if(window.scrollY >= '731' && window.scrollY < '1924'){
      console.log("about section on view")
      activeNavLink ('about-nav');
    }
    //skills section
    else if(window.scrollY >= '1924' && window.scrollY < '2561'){
      console.log("skills section on view")
      activeNavLink ('skills-nav');
    }
    //projects section
    else if(window.scrollY >= '2561' && window.scrollY < '4799'){
      console.log("projects section on view")
      activeNavLink ('projects-nav');
    }
    //contact section
    else if(window.scrollY >= '4799 ' && window.scrollY < '5310'){
      console.log("contact section on view")
      activeNavLink ('contact-nav');
    }
  }


  //Screen on tablet view.
  else if(window.innerWidth >= 480 && window.innerWidth <= 790){
    scrollActive(175);

    //active nav link functionality.
    //home section
    if(window.scrollY >= '0' && window.scrollY < '821'){
      console.log("home section on view")
      activeNavLink ('home-nav');
    }
    //about section
    else if(window.scrollY >= '821' && window.scrollY < '2047'){
      console.log("about section on view")
      activeNavLink ('about-nav');

    }
    //skills section
    else if(window.scrollY >= '2047' && window.scrollY < '2784'){
      activeNavLink ('skills-nav');
    }
    //projects section
    else if(window.scrollY >= '2784' && window.scrollY < '4373'){
      console.log("projects section on view")
      activeNavLink ('projects-nav'); 
    }
    //contact section
    else if(window.scrollY >= '4373 ' && window.scrollY < '5400'){
      console.log("contact section on view")
      activeNavLink ('contact-nav'); 
    }
  }

  //Screen on tablet view.
  else if(window.innerWidth >= 791 && window.innerWidth <= 839){
    scrollActive(175);

    //active nav link functionality.
    //home section
    if(window.scrollY >= '0' && window.scrollY < '821'){
      console.log("home section on view")
      activeNavLink ('home-nav'); 
    }
    //about section
    else if(window.scrollY >= '821' && window.scrollY < '1775'){
      console.log("about section on view")
      activeNavLink ('about-nav');
 
    }
    //skills section
    else if(window.scrollY >= '1775' && window.scrollY < '2411'){
      console.log("skills section on view")
      activeNavLink ('skills-nav'); 
    }
    //projects section
    else if(window.scrollY >= '2411' && window.scrollY < '3753'){
      console.log("projects section on view")
      activeNavLink ('projects-nav');
    }
    //contact section
    else if(window.scrollY >= '3753 ' && window.scrollY < '3900'){
      console.log("contact section on view")
      activeNavLink ('contact-nav'); 
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

   
//scroll events for header
window.onscroll = () => {
  //Screen on mobile view.
  if(window.innerWidth <= 479 ){
    scrollActive(175);

    //active nav link functionality.
    //home section
    if(window.scrollY >= '0' && window.scrollY < '731'){
      console.log("home section on view")
      activeNavLink ('home-nav');
    }
    //about section
    else if(window.scrollY >= '731' && window.scrollY < '1924'){
      console.log("about section on view")
      activeNavLink ('about-nav');
    }
    //skills section
    else if(window.scrollY >= '1924' && window.scrollY < '2561'){
      console.log("skills section on view")
      activeNavLink ('skills-nav');
    }
    //projects section
    else if(window.scrollY >= '2561' && window.scrollY < '4799'){
      console.log("projects section on view")
      activeNavLink ('projects-nav');
    }
    //contact section
    else if(window.scrollY >= '4799 ' && window.scrollY < '5310'){
      console.log("contact section on view")
      activeNavLink ('contact-nav');
    }
  }


  //Screen on tablet view.
  else if(window.innerWidth >= 480 && window.innerWidth <= 790){
    scrollActive(175);

    //active nav link functionality.
    //home section
    if(window.scrollY >= '0' && window.scrollY < '821'){
      console.log("home section on view")
      activeNavLink ('home-nav');
    }
    //about section
    else if(window.scrollY >= '821' && window.scrollY < '2047'){
      console.log("about section on view")
      activeNavLink ('about-nav');

    }
    //skills section
    else if(window.scrollY >= '2047' && window.scrollY < '2784'){
      activeNavLink ('skills-nav');
    }
    //projects section
    else if(window.scrollY >= '2784' && window.scrollY < '4373'){
      console.log("projects section on view")
      activeNavLink ('projects-nav'); 
    }
    //contact section
    else if(window.scrollY >= '4373 ' && window.scrollY < '5400'){
      console.log("contact section on view")
      activeNavLink ('contact-nav'); 
    }
  }

  //Screen on tablet view.
  else if(window.innerWidth >= 791 && window.innerWidth <= 839){
    scrollActive(175);

    //active nav link functionality.
    //home section
    if(window.scrollY >= '0' && window.scrollY < '821'){
      console.log("home section on view")
      activeNavLink ('home-nav'); 
    }
    //about section
    else if(window.scrollY >= '821' && window.scrollY < '1775'){
      console.log("about section on view")
      activeNavLink ('about-nav');
 
    }
    //skills section
    else if(window.scrollY >= '1775' && window.scrollY < '2411'){
      console.log("skills section on view")
      activeNavLink ('skills-nav'); 
    }
    //projects section
    else if(window.scrollY >= '2411' && window.scrollY < '3753'){
      console.log("projects section on view")
      activeNavLink ('projects-nav');
    }
    //contact section
    else if(window.scrollY >= '3753 ' && window.scrollY < '3900'){
      console.log("contact section on view")
      activeNavLink ('contact-nav'); 
    }
  }

  //Screen on tablet view.
  else if(window.innerWidth >= 840 && window.innerWidth <= 900){
    scrollActive(175);

    //active nav link functionality.
    //home section
    if(window.scrollY >= '0' && window.scrollY < '821'){
      console.log("home section on view")
      activeNavLink ('home-nav'); 
    }
    //about section
    else if(window.scrollY >= '821' && window.scrollY < '1779'){
      console.log("about section on view")
      activeNavLink ('about-nav');
 
    }
    //skills section
    else if(window.scrollY >= '1779' && window.scrollY < '2415'){
      console.log("skills section on view")
      activeNavLink ('skills-nav'); 
    }
    //projects section
    else if(window.scrollY >= '2415' && window.scrollY < '3744'){
      console.log("projects section on view")
      activeNavLink ('projects-nav');
    }
    //contact section
    else if(window.scrollY >= '3744' && window.scrollY < '4000'){
      console.log("contact section on view")
      activeNavLink ('contact-nav'); 
    }
  }
  //Screen on laptop view.
  else if(window.innerWidth >= 901 && window.innerWidth <= 949){
    scrollActive(175);

    //active nav link functionality.
    //home section
    if(window.scrollY >= '0' && window.scrollY < '821'){
      console.log("home section on view")
      activeNavLink ('home-nav'); 
    }
    //about section
    else if(window.scrollY >= '821' && window.scrollY < '1743'){
      console.log("about section on view")
      activeNavLink ('about-nav');
 
    }
    //skills section
    else if(window.scrollY >= '1743' && window.scrollY < '2379'){
      console.log("skills section on view")
      activeNavLink ('skills-nav'); 
    }
    //projects section
    else if(window.scrollY >= '2379' && window.scrollY < '3591'){
      console.log("projects section on view")
      activeNavLink ('projects-nav');
    }
    //contact section
    else if(window.scrollY >= '3591' && window.scrollY < '4000'){
      console.log("contact section on view")
      activeNavLink ('contact-nav'); 
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
} 

// click event for mobible menu btns
mobileMenuIcons.addEventListener("click", function(){
  console.log("clicked mobile menu");
  console.log(hamburgerIcon);
  console.log(outIcon);
  if(header.classList.contains("header-close")){
    console.log("hamburger icon clicked and display header is now opened")
    header.classList.remove("header-close");
    header.classList.add("header-open");
  } 
  else if(header.classList.contains("header-open")){
    console.log("out icon clicked and display header is now closed")
    header.classList.remove("header-open");
    header.classList.add("header-close");
  }
})

