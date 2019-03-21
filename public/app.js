window.onscroll = function() {
  var header = document.querySelector('#header');
  // if (this.scrollY <= 10){
  //   header.className = ''
  // }  else {
  //   header.className = 'scroll'
  // }


  if (window.pageYOffset > window.innerHeight){
    console.log("what.........")
    header.className = 'scroll'
  }  
  else {
    header.className = ''
  }
  // if (window.pageYOffset < window.innerHeight) {
  //   console.log("what no way.........")
  //   header.classList.toggle = 'no-scroll'
  // } 
}

console.log("js file working")


