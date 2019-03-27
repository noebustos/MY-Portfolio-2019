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

window.onscroll = () => {
  if (this.scrollY <= 350) header.className = ''; else header.className = 'scroll';
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









var john = {
  // billValues: [124, 48, 268, 180, 42],
  // //add a method to calc the tip.
  // //this should include a loop to iterate over all the paid bills and do the tip calcs
  // tipBill: function(){
  //   for(var i = 0; i < this.billValues.length -1 ; i++){
             
  //   }
  // },
}