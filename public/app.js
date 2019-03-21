window.onscroll = function() {
  var header = document.querySelector('#header');
  if (this.scrollY <= 10){
    header.className = ''
  }  else {
    header.className = 'scroll'
  }
}

console.log("js file working")