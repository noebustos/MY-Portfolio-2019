const header = document.querySelector('#header');
const navLink = document.querySelector("header nav a")
const hamburgerIcon = document.querySelector(".hamburger-icon");
const outIcon = document.querySelector(" .out-icon");
const mobileMenuIcons = document.querySelector(" .mobile-menu-icons");

// window.onscroll = function() {
  
//   if (window.pageYOffset > window.innerHeight){
//     header.className = 'scroll'
//   }  
//   else {
//     header.className = ''
//   }
// }

window.onscroll = () => {
  if (this.scrollY <= 350) header.className = ''; else header.className = 'scroll';
};

console.log(hamburgerIcon);
console.log(outIcon);

mobileMenuIcons.addEventListener("click", function(){
  hamburgerIcon.classList.toggle("unactive");
  outIcon.classList.toggle("unactive");
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
