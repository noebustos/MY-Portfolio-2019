const header = document.querySelector('#header');
const navLink = document.querySelector("header nav a")
const hamburgerIcon = document.querySelector(".fa-bars");
const outIcon = document.querySelector(".fa-times");

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

hamburgerIcon.addEventListener("click", function(){
  hamburgerIcon.classList.toggle("active");
  // outIcon.classList.toggle("active");
  console.log(hamburgerIcon);
  console.log(this);
})
