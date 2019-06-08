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



//we want the hamburger menu to only be displayed when the user scrolls down the page. righ now its showing the white bg,with the icon, during scroll action.
//also it would be good to look at other sites to see how they implement the mobile icon on their site. right now im thinking to have it on the top right at all times with a white padding behind it or maybe just some  boxshadow behind it. something to show separation. bc with the icon alone it blends into the site's content too much. and we want this icon to standout bc its a main navigation element.
 
//we want to add a blur bg to the mobile menue icon so that it hass a place to sit on the page.


console.log('this is my window width size: ' + window.innerWidth);

//scroll events for header
window.onscroll = () => {
  //we want to add an if statement to check when ever we scroll up/down, for our menu to change on mobile view.
  if(window.innerWidth <= 479 ){
    console.log("look mama i made it")

    if (this.scrollY <= 200) {
      // header.className = '';
      console.log("scroll is active and   mobile menu is on none")
    }  
  
    else{
      header.className = 'scroll';
    }
//scroll is misbehaving. scroll and active classess change when scrolling. so we can only get one at a time.


  } else{
    if (this.scrollY <= 350) {
      header.className = '';
      console.log("scroll is active and   mobile menu is on none")
    }  
  
    else{
      header.className = 'scroll';
    }
  }
};

console.log(hamburgerIcon);
console.log(outIcon);


//click event for mobible menu btns
mobileMenuIcons.addEventListener("click", function(){

})




// hamburgerIcon.addEventListener("click", function(){
//   this.classList.toggle("active");
//   outIcon.classList.toggle("active");
//   console.log(hamburgerIcon);
//   console.log(this);
// })

// outIcon.addEventListener("click", function(){
//   this.classList.toggle("active");
//   hamburgerIcon.classList.toggle("active");
//   console.log(outIcon);
//   console.log(this);
// })
