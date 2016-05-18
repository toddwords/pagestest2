var counter = 0;

document.getElementsByTagName("h6")[0].addEventListener('click', function(){
  counter++;
  document.getElementsByTagName("H6")[0].innerHTML = counter.toString()
})
