const header = document.querySelector('#header');
const navLink = document.querySelector("header nav a")


window.onscroll = function() {
  
  if (window.pageYOffset > window.innerHeight){
    header.className = 'scroll'
  }  
  else {
    header.className = ''
  }
}

// 