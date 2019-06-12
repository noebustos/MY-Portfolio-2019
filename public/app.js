const header = document.querySelector('#header');
const navLink = document.querySelector("header nav a")
const hamburgerIcon = document.querySelector(".hamburger-icon");
const outIcon = document.querySelector(" .out-icon");
const mobileMenuIcons = document.querySelector(".mobile-menu-icons");
const headerContainer = document.querySelector("header .container");


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
//contact section scroll size: 4799 a little more



console.log('this is my window width size: ' + window.innerWidth);

//scroll events for header
window.onscroll = () => {
  //if screen is on mobile view.
  if(window.innerWidth <= 479 ){
    console.log("MAX window width screen is <= 479px")

    if (this.scrollY <=175) {
      header.classList.remove('scroll');
    } else{
      header.classList.add('scroll');
      console.log("scroll is active")
      console.log(header.className.split(' '));
    }
  } 
  //if screen is NOT on mobile view.
  else{
    if (this.scrollY <= 350) {
      header.className = '';
      console.log("scroll is active and   mobile menu is on none")
    }  
  
    else{
      header.className = 'scroll';
    }
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

