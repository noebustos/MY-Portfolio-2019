const header = document.querySelector('#header');
const navLink = document.querySelector("header nav a")
const hamburgerIcon = document.querySelector(".hamburger-icon");
const outIcon = document.querySelector(" .out-icon");
const mobileMenuIcons = document.querySelector(".mobile-menu-icons");
const headerContainer = document.querySelector("header .container");

console.log(headerContainer);

// window.onscroll = function() {
  
//   if (window.pageYOffset > window.innerHeight){
//     header.className = 'scroll'
//   }  
//   else {
//     header.className = ''
//   }
// }

console.log(mobileMenuIcons.style)

window.onscroll = () => {
  if (this.scrollY <= 350) {
    header.className = '';
    console.log("scroll is active and   mobile menu is on none")
  }  

  // else if (this.scrollY <= 350 && mobileMenuIcons.style.display == "block"){
  //   header.classList.add("active");
  //   header.classList.remove("scroll");
  //   console.log("scroll is active and   mobile menu is on display")
  // }

  else{
    header.className = 'scroll';
  }


  // if (headerContainer.classname == 'unactive'){
  //   header.classList.toggle("active");
  //   header.classList.toggle("scroll");
  // }
};

console.log(hamburgerIcon);
console.log(outIcon);

mobileMenuIcons.addEventListener("click", function(){
  hamburgerIcon.classList.toggle("unactive");
  outIcon.classList.toggle("unactive");
  headerContainer.classList.toggle("unactive");
  header.classList.toggle("active");
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
