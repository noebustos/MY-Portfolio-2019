window.onscroll = function() {
  var header = document.querySelector('#header');
  
  if (window.pageYOffset > window.innerHeight){
    console.log("what.........")
    header.className = 'scroll'
  }  
  else {
    header.className = ''
  }
}